import axios from 'axios'
import React, { Component } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import validator from 'validator'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { createCategory, fetchCategory } from '../../store/category'
import errorHandler from '../../utils/errorHandler'
import setAuthorizationToken from '../../utils/setAuthorizationToken'
import CategoryForm from './categoryForm'

const formValid = ({ formErrors, rest }) => {
  //to check if form fields are null or contain error
  let valid = true
  let error = ''
  Object.values(formErrors).forEach((v) => {
    v.length > 0 && (valid = false) && (error = v)
    v.length > 0 && (error = v)
  })

  Object.values(rest).forEach((v) => {
    v === null && (valid = false)
  })
  return { valid, error } // valid: is it valid ; error: what is the error message
}

class Category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false, // controlls spinner state
      //isEditCategory: false,
      id: null, // need to pass id in edit or delete category section
      name: null, // used in editCategory component to display the category name in heading
      slug: null,
      parentId: 'Top',
      description: null,
      order: null,
      image: null, // required in create, optional in edit and no need delete section
      response: null, // to display response message
      responseClass: 'success', // depends on response type
      showEditCategoryComponent: false, // show or hide editCategory component
      formErrors: {
        // for storing form feilds error on handle change
        name: '',
        parentId: '',
        description: '',
        order: '',
        image: ''
      }
    }
    this.selectOptionValueRef = React.createRef()
  }
  resetState = () => {
    this.setState({
      id: null,
      name: null,
      slug: null,
      parentId: 'Top',
      description: null,
      order: null,
      image: null,
      isEditCategory: false
    })
  }
  popover = (
    category // function to deliver popover
  ) => (
    <Popover id='popover-basic'>
      <Popover.Title as='h3' className='bg-warning text-white'>
        Warning Message
      </Popover.Title>
      <Popover.Content>
        Are you sure You want to delete category.
        <Button
          variant='danger ml-3'
          onClick={() => {
            this.deleteCategory(category)
          }}
        >
          Yes
        </Button>
      </Popover.Content>
    </Popover>
  )

  hideResponse = () => {
    // hide the response message
    this.setState({ response: null })
  }

  submitHandler = (e) => {
    e.preventDefault()

    const { formErrors, name, order, description, image } = this.state

    const parentId =
      this.state.parentId || this.selectOptionValueRef.current.value

    const rest = { name, parentId, order, description, image }

    const { valid, error } = formValid({ rest, formErrors })

    if (valid) {
      //this.resetState();
      const data = new FormData()
      Object.keys(rest).forEach((key) => {
        rest[key] && data.append(key, rest[key])
      })
      setAuthorizationToken(this.props.auth.token)
      this.setState({ loading: true })

      axios
        .request({
          baseURL: process.env.REACT_APP_SITE_URL,
          url: '/categories',
          method: 'post',
          data
        })
        .then((res) => {
          this.setState({
            loading: false,
            response: 'Successfully created Category',
            responseClass: 'success'
          })
          this.props.onFetchCategoryLoader() // update the category upon creating or updating of category
          setTimeout(this.hideResponse, 2000) // after 2s respones message will disaper
        })
        .catch((e) => {
          const response = errorHandler(e)
          this.setState({ loading: false, response, responseClass: 'danger' })
          setTimeout(this.hideResponse, 2000)
        })
    } else {
      this.setState({
        response:
          'Please fill form corectly' +
          (error ? ' __ ' + error.toUpperCase() + ' __' : ''),
        responseClass: 'danger'
      })
      setTimeout(this.hideResponse, 2000)
    }
  }

  editCategorysubmitHandler = (e) => {
    e.preventDefault()

    const { formErrors, id, name, order, description, image, slug } = this.state
    const parentId =
      this.state.parentId || this.selectOptionValueRef.current.value

    const rest = image
      ? { id, name, slug, parentId, order, description, image }
      : { id, name, slug, parentId, order, description }

    const { valid, error } = formValid({ rest, formErrors })

    if (valid) {
      this.resetState()
      const data = new FormData()
      Object.keys(rest).forEach((key) => {
        rest[key] && data.append(key, rest[key])
      })

      setAuthorizationToken(this.props.auth.token)
      this.setState({ loading: true })

      axios
        .request({
          baseURL: process.env.REACT_APP_SITE_URL,
          url: '/categories',
          method: 'patch',
          data
        })
        .then((res) => {
          this.setState({
            loading: false,
            response: 'Successfully Updated Category',
            responseClass: 'success'
          })
          this.props.onFetchCategoryLoader() // update the category upon creating or updating of category
          setTimeout(this.hideResponse, 2000) // after 2s respones message will disaper
        })
        .catch((e) => {
          const response = errorHandler(e)
          this.setState({ loading: false, response, responseClass: 'danger' })
          setTimeout(this.hideResponse, 2000)
        })
      this.resetState()
    } else {
      this.setState({
        response:
          'Please fill form corectly' +
          (error ? ' __ ' + error.toUpperCase() + ' __' : ''),
        responseClass: 'danger'
      })
      setTimeout(this.hideResponse, 2000)
    }
  }

  handleChange = (e) => {
    const { name, value, files } = e.target
    let formErrors = this.state.formErrors

    switch (name) {
      case 'name':
        formErrors.name =
          validator.isLength(value, { min: 1, max: 25 }) &&
          !validator.contains(value, '_') &&
          !validator.contains(value, '/')
            ? ''
            : "Category Name should not be emty, more than 25 charecter and contain '_,/'"
        break
      case 'description':
        formErrors.description = validator.isLength(value, {
          min: 30,
          max: 300
        })
          ? ''
          : 'Description should be minimum 30 or maximum 300 characters'
        break
      case 'parentId':
        formErrors.parentId =
          value === 'Top' ||
          validator.isInt(value) ||
          validator.isMongoId(value)
            ? ''
            : 'ParentId is not valid'
        break
      case 'order':
        formErrors.order = validator.isNumeric(value)
          ? ''
          : 'Order should be only number'
        break
      case 'image':
        formErrors.image = !validator.isEmpty(value)
          ? ''
          : 'Choose a valid image'
        break
      default:
        break
    }

    this.setState({
      formErrors: formErrors,
      [name]: files ? files[0] : value
    })
  }

  deleteCategory(category) {
    setAuthorizationToken(this.props.auth.token)
    this.setState({ loading: true })

    axios
      .delete(process.env.REACT_APP_SITE_URL + '/categories', {
        data: { id: category.id }
      })
      .then((res) => {
        this.setState({
          loading: false,
          response: category.name + ' deleted successfully',
          responseClass: 'success'
        })
        this.props.onFetchCategoryLoader()
        setTimeout(this.hideResponse, 2000)
      })
      .catch((e) => {
        const response = errorHandler(e)
        this.setState({
          loading: false,
          response,
          responseClass: 'danger'
        })
        setTimeout(this.hideResponse, 2000)
      })
  }

  componentDidMount() {
    this.props.onFetchCategoryLoader()
  }

  render() {
    const { categories } = this.props.category
    return (
      <>
        <MetaInfo {...RoutesConfig.Category.metaInfo} />
        {this.state.loading && (
          <Spinner
            animation='border'
            role='status'
            variant='dark'
            className='content-center'
          ></Spinner>
        )}

        {this.state.response && (
          <Alert
            variant={this.state.responseClass}
            className='text-center content-center'
          >
            {this.state.response}
          </Alert>
        )}

        <CategoryForm
          submitHandler={this.submitHandler}
          handleChange={this.handleChange}
          formErrors={this.state.formErrors}
          categories={categories}
          category={{
            name: this.state.name,
            parentId: this.state.parentId,
            order: this.state.order,
            description: this.state.description
          }}
        />

        <div className='mt-3'>
          <Accordion>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              <h3>Edit Category</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <div className='mt-2 p-2'>
                {categories.map((e) => {
                  return (
                    <Alert variant='primary'>
                      {e.slug}
                      <Button
                        className='ml-2'
                        onClick={() => {
                          this.setState({
                            id: e.id,
                            slug: e.slug,
                            name: e.name,
                            parentId: e.parentId,
                            order: e.order,
                            description: e.description,
                            showEditCategoryComponent: e.slug
                          })
                        }}
                      >
                        Edit
                      </Button>
                      <OverlayTrigger
                        trigger={['click']}
                        placement='right'
                        rootClose
                        overlay={this.popover(e)}
                      >
                        <Button
                          className='ml-2'
                          variant='danger'
                          disabled={this.state.showEditCategoryComponent}
                        >
                          Delete
                        </Button>
                      </OverlayTrigger>
                      <div>
                        {this.state.showEditCategoryComponent === e.slug && (
                          <CategoryForm
                            submitHandler={this.editCategorysubmitHandler}
                            handleChange={this.handleChange}
                            loading={this.state.loading}
                            formErrors={this.state.formErrors}
                            categories={categories}
                            name={e.name}
                            //slug={e.slug}
                            selectOptionValueRef={this.selectOptionValueRef}
                            category={{
                              name: this.state.name,
                              parentId: this.state.parentId,
                              order: this.state.order,
                              description: this.state.description
                            }}
                            showEditCategoryAccordionStateHandler={() => {
                              this.setState({
                                showEditCategoryComponent: false
                              })
                            }}
                          />
                        )}
                      </div>
                    </Alert>
                  )
                })}
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategoryLoader: () => dispatch(fetchCategory()),
    onCreateCategoryloader: (data) => dispatch(createCategory(data))
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    category: state.category
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
