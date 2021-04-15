import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import '../../assets/scss/section/registration.scss'
import NavbarHome from '../../components/navbar/navbarHome'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { auth } from '../../store/auth'
import ResetInit from './resetInit'

const isValid = (formErrors) => {
  let valid = true
  Object.values(formErrors).forEach((v) => {
    v.length > 0 && (valid = false)
  })
  return valid
}

class Home extends Component {
  state = {
    username: null,
    password: null,
    showReset: false,
    formErrors: {
      username: '',
      password: ''
    },
    errorMessage: null
  }

  submitHandler = (e) => {
    e.preventDefault()
    const { username, password, formErrors } = this.state

    this.setState({ errorMessage: null })

    if (isValid(formErrors)) {
      this.props.onAuth(username, password)
    } else {
      this.setState({
        errorMessage:
          'Login Failed. Server may be down. please try sometime later'
      })
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    let formErrors = this.state.formErrors

    this.setState({ errorMessage: null })

    switch (name) {
      case 'username':
        formErrors.username =
          !validator.isEmpty(value) && validator.isEmail(value)
            ? ''
            : 'Email should not be empty && must be valid'
        break
      case 'password':
        formErrors.password = !validator.isEmpty(value)
          ? ''
          : 'Password should not be empty'
        break
      default:
        break
    }
    this.setState({
      formErrors: formErrors,
      [name]: value
    })
  }

  resetClose = () => {
    this.setState({ showReset: false })
  }
  resetShow = () => {
    this.setState({ showReset: true })
  }

  componentDidMount() {}
  render() {
    const { formErrors } = this.state

    // let authRedirect;
    // if (this.props.isAuthenticated) {
    //   console.log(this.props.isAuthenticated);
    //   authRedirect = <Redirect to="/dashboard" />;
    // }
    return (
      <div className='registration'>
        <ResetInit show={this.state.showReset} handleClose={this.resetClose} />
        <MetaInfo {...RoutesConfig.Login.metaInfo} />
        {/* {authRedirect} */}
        <NavbarHome isLanding={false} />
        {/* Landing */}
        <div className='landing'>
          {/* <div className="home-wrap"> */}
          <div className='home-inner'></div>
          {/* </div> */}
        </div>
        <div className='caption text-center' style={{ top: '15%' }}>
          {/* <Spinner animation="border" role="status"></Spinner> */}
          <h1>Login Form</h1>
          {this.props.auth.loading && (
            <Spinner
              animation='border'
              role='status'
              variant='light'
              className='mr-2'
            ></Spinner>
          )}
          <div className='heading-underline'></div>
          <Form className='mb-4' onSubmit={this.submitHandler} noValidate>
            <div className='text-white mb-2 bg-danger'>
              {this.props.auth.error && this.props.auth.error}
            </div>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='username' // do not be confused; due to passportjs use only "username" for password verification though it is actually the user email
                onChange={this.handleChange}
                className={formErrors.username.length > 0 && 'is-invalid'}
              />
              {formErrors.username.length > 0 && (
                <span className='errorMessage'>{formErrors.username}</span>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                onChange={this.handleChange}
                className={formErrors.password.length > 0 && 'is-invalid'}
              />
              {formErrors.password.length > 0 && (
                <span className='errorMessage'>{formErrors.password}</span>
              )}
            </Form.Group>
            <Button type='submit' className='btn-submit'>
              Submit
            </Button>
          </Form>
          <Row></Row>
          <Row>
            <Col md={6}>
              <p className='lead'>Forget Your Password</p>
              {/* <Button variant="danger">
                Reset Your Password
              </Button> */}
              <Button variant='danger' onClick={this.resetShow}>
                Reset
              </Button>
            </Col>
            <Col md={6}>
              <p className='lead'>I am not a member yet!</p>
              <Link to='/signup' className='btn btn-secondary'>
                Sign up
              </Link>
            </Col>
          </Row>
        </div>
        {/* End of Landing */}
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) => dispatch(auth(username, password))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    api: state.api,
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
