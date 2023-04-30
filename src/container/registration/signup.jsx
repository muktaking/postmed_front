//import React from "react";
import axios from 'axios'
import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import '../../assets/scss/section/registration.scss'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import Facebook from '../../components/facebook/facebook'
import Google from '../../components/google/google'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { authEnd, authFail, authReset, authStart } from '../../store/auth'
import Topbar from '../../components/topbar/topbar'
import SidebarMini from '../../components/sidebar/sidebarMini'

const formValid = ({ formErrors, ...rest }) => {
  let valid = true
  Object.values(formErrors).forEach((v) => {
    v.length > 0 && (valid = false)
  })

  Object.values(rest).forEach((v) => {
    v === null && (valid = false)
  })
  return valid
}

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.passwordRef = React.createRef()
    this.state = {
      firstName: null,
      lastName: null,
      userName: null,
      password: null,
      repeatPassword: null,
      gender: 'male',
      formErrors: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        repeatPassword: '',
        checked: ''
      }
    }
  }

  componentDidMount() {
    this.props.onAuthReset()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    let formErrors = this.state.formErrors

    this.props.onAuthReset()

    switch (name) {
      case 'firstName':
        formErrors.firstName = validator.isLength(value, { min: 3, max: 15 })
          ? ''
          : 'First Name should be minimum 3 or maximum 20 characters'
        break
      case 'lastName':
        formErrors.lastName = validator.isLength(value, { min: 3, max: 15 })
          ? ''
          : 'Last Name should be minimum 3 or maximum 20 characters'
        break
      case 'userName':
        formErrors.userName =
          validator.isLength(value, { min: 3, max: 15 }) &&
          validator.isAlphanumeric(value)
            ? ''
            : 'Username should be alpha neumaric with minimum 3 or maximum 20 characters'
        break
      case 'email':
        formErrors.email = validator.isEmail(value)
          ? ''
          : 'Email address is not valid'
        break
      case 'password':
        formErrors.password = validator.matches(
          value,
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/
        )
          ? //(?=.*[!@#\$%\^&\*])
            ''
          : 'Password should be minimum 6 characters and contain atleast one capital and lowercase alpha, neumeric value'
        break
      case 'repeatPassword':
        formErrors.repeatPassword = validator.equals(
          value,
          this.passwordRef.current.value
        )
          ? ''
          : 'Password and RepeatPassword should be same'
        break
      //case "gender":
      // formErrors.password = validator.isIn(value,["male","female"])
      //   ? ""
      //   : "Password should be minimum 8 characters and contain one alpha,neumeric and special value";
      // break;
      case 'checked':
        formErrors.checked = e.target.checked ? '' : 'Check Me is not selected'
        break

      default:
        break
    }

    this.setState({
      formErrors: formErrors,
      [name]: value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      repeatPassword,
      gender,
      formErrors
    } = this.state
    // this.setState({ loading: true })

    if (
      formValid({
        firstName,
        lastName,
        userName,
        email,
        password,
        repeatPassword,
        gender,
        formErrors
      })
    ) {
      this.props.onAuthStart()
      axios
        .post(process.env.REACT_APP_SITE_URL + '/auth/registration', {
          firstName,
          lastName,
          userName,
          email,
          password,
          repeatPassword,
          gender
        })
        .then((res) => {
          this.props.onAuthEnd()
          if (res.status === 201) {
            // <Route exact path="/">
            return this.props.history.push({ pathname: '/login' })
            // </Route>;
          }
        })

        .catch((error) => {
          console.log(error)
          if (error.response) {
            // if server has response
            error = error.response.data
            if (error.statusCode === 409) {
              // user duplication error, so redirecting to login page
              this.props.onAuthFail(
                error.message + ' Redirecting to login page.....'
              )
              setTimeout(() => {
                this.props.history.push({ pathname: '/login' })
              }, 3000)
            } else if (error.statusCode === 400) {
              // specific server validation error
              let message = ''
              error.message.forEach((v) => {
                message += `${v.value} is not valid in [ ${
                  v.property
                } ] field due to " ${Object.values(v.constraints).toString()} "`
              })
              this.props.onAuthFail(message)
            } else {
              // for any other server error response
              this.props.onAuthFail(e.data.message)
            }
          } else {
            // if server has no any response
            this.props.onAuthFail(
              'Server may be down. Please try sometime later'
            )
          }
        })
    } else {
      this.props.onAuthFail('Please fill form correctly.')
    }
  }

  render() {
    const { formErrors } = this.state
    return (
      <>
        <Topbar pageName='Signup' />
        <SidebarMini />
        <div className='registration'>
          <MetaInfo {...RoutesConfig.Signup.metaInfo} />
          {this.props.auth.loading && <CircleLoader />}
          {/* Landing */}
          <div className='landing'>
            {/* <div className="home-wrap"> */}
            <div className='home-inner'></div>
            {/* </div> */}
          </div>
          <div className='caption text-center'>
            <h1>Signup Form</h1>
            <div className='heading-underline'></div>
            <p className='mt-3'>Easily Signup with your Facebook or Google</p>
            <Row>
              <Col lg='6'>
                <Facebook />
              </Col>
              <Col lg='6'>
                <Google />
              </Col>
            </Row>
            <p className='mt-3'>Or, Create One</p>
            <Form onSubmit={this.submitHandler} novalidate>
              <div className='text-white mb-2 bg-danger'>
                {/* {this.state.errorMessage} */}
                {this.props.auth.error && this.props.auth.error}
              </div>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridFirstName'>
                  <Form.Label>First Name: </Form.Label>
                  <Form.Control
                    name='firstName'
                    type='text'
                    placeholder='Type firstname'
                    onChange={this.handleChange}
                    className={formErrors.firstName.length > 0 && 'is-invalid'}
                  />
                  {formErrors.firstName.length > 0 && (
                    <span className='errorMessage'>{formErrors.firstName}</span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId='formGridLastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name='lastName'
                    type='text'
                    placeholder='Type lastname'
                    onChange={this.handleChange}
                    className={formErrors.lastName.length > 0 && 'is-invalid'}
                  />
                  {formErrors.lastName.length > 0 && (
                    <span className='errorMessage'>{formErrors.lastName}</span>
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridUserName'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name='userName'
                    type='text'
                    placeholder='Type username'
                    onChange={this.handleChange}
                    className={formErrors.userName.length > 0 && 'is-invalid'}
                  />
                  {formErrors.userName.length > 0 && (
                    <span className='errorMessage'>{formErrors.userName}</span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name='email'
                    type='email'
                    placeholder='Type email'
                    onChange={this.handleChange}
                    className={formErrors.email.length > 0 && 'is-invalid'}
                  />
                  {formErrors.email.length > 0 && (
                    <span className='errorMessage'>{formErrors.email}</span>
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={this.passwordRef}
                    name='password'
                    type='password'
                    placeholder='Type password'
                    onChange={this.handleChange}
                    className={formErrors.password.length > 0 && 'is-invalid'}
                  />
                  <Form.Text className=''>e.g. 123abcDEF</Form.Text>
                  {formErrors.password.length > 0 && (
                    <span className='errorMessage'>{formErrors.password}</span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId='formGridRepeatPassword'>
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control
                    name='repeatPassword'
                    type='password'
                    placeholder='Type password again'
                    onChange={this.handleChange}
                    className={
                      formErrors.repeatPassword.length > 0 && 'is-invalid'
                    }
                  />
                  {formErrors.repeatPassword.length > 0 && (
                    <span className='errorMessage'>
                      {formErrors.repeatPassword}
                    </span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridState'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    name='gender'
                    as='select'
                    onChange={this.handleChange}
                  >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group id='formGridCheckbox'>
                <Form.Check
                  name='checked'
                  type='checkbox'
                  label={
                    <>
                      <span>By checking the box, You will agree our</span>{' '}
                      <Link to='/terms'>'terms and conditions.'</Link>
                    </>
                  }
                  //checked={true}
                  onChange={this.handleChange}
                  defaultChecked
                  className={formErrors.checked.length > 0 && 'is-invalid'}
                />
                {formErrors.checked.length > 0 && (
                  <span className='errorMessage'>{formErrors.checked}</span>
                )}
              </Form.Group>

              <Button type='submit' className='btn-submit'>
                Submit
              </Button>
            </Form>
            <div className='mt-3'>
              <p>
                Already have an account?
                <Link to='/login' className='btn btn-primary ml-2'>
                  Log In
                </Link>
              </p>
            </div>
          </div>
          {/* End of Landing */}
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthStart: () => dispatch(authStart()),
    onAuthEnd: () => dispatch(authEnd()),
    onAuthFail: (errorMsg) => dispatch(authFail(errorMsg)),
    onAuthReset: (errorMsg) => dispatch(authReset(errorMsg))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
