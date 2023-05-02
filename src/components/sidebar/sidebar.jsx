import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {
  FaBell,
  FaBookOpen,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
  FaStackOverflow,
  FaEdit,
  FaHome,
  FaQuestionCircle,
  FaQuora,
  FaTools,
  FaUserGraduate,
  FaTh
} from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { canActivate, rolePermitted } from '../../utils/canActivate'
import Profile from '../user/profile'

class Sidebar extends Component {
  classes = {
    sideNav: ['flex-column', 'mt-4'].join(' '),
    sideNavLink: ['text-white', 'p-3', 'mb-2'].join(' '),
    fa: ['text-light', 'fa-lg', 'mr-3'].join(' ')
  }

  faIcons = []
  menuName = []
  navLinks = []
  menuIntlId = []

  render() {
    if (canActivate(rolePermitted.student, this.props.token)) {
      this.faIcons = [
        <FaHome size='1.6em' className='mr-2' />,
        <FaTh size='1.6em' className='mr-2' />,
        <FaStackOverflow size='1.6em' className='mr-2' />,
        <FaBookOpen size='1.6em' className='mr-2' />,
        <FaChartBar size='1.6em' className='mr-2' />,
        <FaUserGraduate size='1.6em' className='mr-2' />,
        <FaQuestionCircle size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
        'Home',
        'Dashboard',
        'Courses',
        'Exams',
        'Reports',
        'Profile',
        'Help',
        'Settings'
      ]
      this.menuIntlId = [
        'db.home',
        'btn.db',
        'btn.courses',
        'btn.exams',
        'btn.reports',
        'profile',
        'btn.help',
        'settings'
      ]
      this.navLinks = [
        '/',
        '/dashboard',
        '/courses',
        '/exams',
        '/reports',
        '/profile',
        '/help',
        '/settings'
      ]
    }

    if (canActivate(rolePermitted.mentor, this.props.token)) {
      this.faIcons = [
        <FaHome size='1.6em' className='mr-2' />,
        <FaTh size='1.6em' className='mr-2' />,
        <FaQuora size='1.6em' className='mr-2' />,
        <FaUserGraduate size='1.6em' className='mr-2' />,
        <FaQuestionCircle size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
        'Home',
        'Dashboard',
        'Question Builder',
        'Profile',
        'Help',
        'Settings'
      ]
      this.menuIntlId = []
      this.navLinks = [
        '/',
        '/dashboard',
        '/question',
        '/profile',
        '/help',
        '/settings'
      ]
    }

    if (canActivate(rolePermitted.moderator, this.props.token)) {
      this.faIcons = [
        <FaHome size='1.6em' className='mr-2' />,
        <FaTh size='1.6em' className='mr-2' />,
        <FaCog size='1.6em' className='mr-2' />,
        <FaCalendarAlt size='1.6em' className='mr-2' />,
        <FaQuora size='1.6em' className='mr-2' />,
        <FaEdit size='1.6em' className='mr-2' />,
        <FaUserGraduate size='1.6em' className='mr-2' />,
        <FaQuestionCircle size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
        'Home',
        'Dashboard',
        'Category Builder',
        'Routine Builder',
        'Question Builder',
        'Exam Builder',
        'Profile',
        'Help',
        'Settings'
      ]
      this.menuIntlId = []
      this.navLinks = [
        '/',
        '/dashboard',
        '/category',
        '/routine',
        '/question',
        '/exambuilder',
        '/profile',
        '/help',
        '/settings'
      ]
    }

    if (canActivate(rolePermitted.coordinator, this.props.token)) {
      this.faIcons = [
        <FaHome size='1.6em' className='mr-2' />,
        <FaTh size='1.6em' className='mr-2' />,
        <FaCog size='1.6em' className='mr-2' />,
        <FaStackOverflow size='1.6em' className='mr-2' />,
        <FaCalendarAlt size='1.6em' className='mr-2' />,
        <FaQuora size='1.6em' className='mr-2' />,
        <FaEdit size='1.6em' className='mr-2' />,
        //<FaCog size='1.6em' className='mr-2' />,
        <FaBell size='1.6em' className='mr-2' />,
        <FaUserGraduate size='1.6em' className='mr-2' />,
        <FaQuestionCircle size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
        'Home',
        'Dashboard',
        'Category Builder',
        'Course Builder',
        'Routine Builder',
        'Question Builder',
        'Exam Builder',
        //'Exam Edit',
        'Notification Builder',
        'Profile',
        'Help',
        'Settings'
      ]
      this.menuIntlId = []
      this.navLinks = [
        '/',
        '/dashboard',
        '/category',
        'coursebuilder',
        '/routine',
        '/question',
        '/exambuilder',
        //'/examedit',
        '/notificationbuilder',
        '/profile',
        '/help',
        '/settings'
      ]
    }

    return (
      <div className='px-4'>
        <NavLink exact to='/' className='text-white'>
          <Navbar.Brand className='text-white d-block mx-auto text-center py-3 mb-4 bottom-border'>
            {process.env.REACT_APP_NAME}
          </Navbar.Brand>
        </NavLink>
        <h3 className='text-white text-center mb-2'>
          <FormattedMessage id='goodDay' defaultMessage='Good Day' />
        </h3>
        <Profile />
        <Nav className={this.classes.sideNav}>
          {this.faIcons.map((value, index) => (
            <Nav.Item key={index}>
              <NavLink
                to={this.navLinks[index]}
                className={
                  'nav-link ' + this.classes.sideNavLink + ' sidebar-link'
                }
                activeClassName='current'
                isActive={(match) => {
                  // matches exact and matching pathways
                  if (match) {
                    // excluded the home pathway
                    if (match.url === '') {
                      return false
                    }
                    return true
                  }
                }}
              >
                {value}
                {this.menuIntlId.length > 1 ? (
                  <FormattedMessage
                    id={this.menuIntlId[index]}
                    defaultMessage={this.menuName[index]}
                  />
                ) : (
                  this.menuName[index]
                )}
              </NavLink>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Sidebar)

//export default Sidebar;

// const classes = {
//   formControl: 'search-input',
//   searchBtn: 'search-button'
// }
