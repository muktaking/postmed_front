import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const subNavBar = (props) => {
  const pages = props.isAuthenticated
    ? ['dashboard', 'courses', 'exams', 'logout', 'help']
    : ['courses', 'exams', 'signup', 'login', 'help']

  return (
    <Nav className='bg-light'>
      <Nav.Item as='li' className='mr-3'>
        <NavLink to={{ pathname: '/' }} className='nav-link link-hover'>
          {'Home'.toUpperCase()}
        </NavLink>
      </Nav.Item>
      {pages.map((value) => (
        <Nav.Item key={value} as='li' className='mr-3'>
          <NavLink
            // href={"/" + value}
            to={{ pathname: '/' + value }}
            className='nav-link link-hover'
          >
            {value.toUpperCase()}
          </NavLink>
        </Nav.Item>
      ))}
      <Nav.Item as='li' className='mr-3'>
        <NavLink to='/#contact' className='nav-link link-hover'>
          {'Contact'.toUpperCase()}
        </NavLink>
      </Nav.Item>
    </Nav>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(subNavBar)
