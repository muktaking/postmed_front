import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import {
  FaBell,
  FaBookOpen,
  FaCalendarAlt,
  FaChartLine,
  FaCog,
  FaDiceD20,
  FaEdit,
  FaHome,
  FaPen,
  FaQuestion,
  FaQuora,
  FaSignOutAlt,
  FaTools,
  FaUser
} from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NotiBadge from '../../container/notification/notiBadge'
import { userExamStatLoader } from '../../store/dashboard'
import { getUserLoader } from '../../store/user'
import { canActivate, rolePermitted } from '../../utils/canActivate'
import Profile from '../user/profile'

class Sidebar extends Component {
  classes = {
    sideNav: ['flex-column', 'mt-2'].join(' '),
    sideNavLink: ['text-white', 'p-1', 'mb-2'].join(' '),
    fa: ['text-light', 'fa-lg', 'mr-3'].join(' ')
  }

  faIcons = []
  menuName = []
  navLinks = []
  menuIntlId = []
  // state = {
  //   userName: [null]
  // };
  componentDidMount() {
    this.props.onGetUserLoader()
    this.props.onUserExamStatLoader()
  }
  render() {
    this.faIcons = [
      <FaHome size='1.6em' className='mr-2' />,
      <FaDiceD20 size='1.6em' className='mr-2' />,
      <FaPen size='1.6em' className='mr-2' />,
      <FaUser size='1.6em' className='mr-2' />,
      <FaUser size='1.6em' className='mr-2' />,
      <FaQuestion size='1.6em' className='mr-2' />
    ]
    this.menuName = ['Home', 'Courses', 'Exams', 'Signup', 'Login', 'Help']
    this.menuIntlId = [
      'btn.home',
      'btn.courses',
      'btn.exams',
      'btn.signup',
      'btn.login',
      'btn.help'
    ]

    this.navLinks = ['/', '/courses', '/exams', '/signup', '/login', '/help']

    if (canActivate(rolePermitted.student, this.props.token)) {
      this.faIcons = [
        <FaHome size='1.6em' className='mr-2' />,
        <FaDiceD20 size='1.6em' className='mr-2' />,
        <FaBookOpen size='1.6em' className='mr-2' />,
        <FaChartLine size='1.6em' className='mr-2' />,
        <span className='mr-2'>
          <FaBell size='1.6em' />
          <NotiBadge />
        </span>,
        <FaUser size='1.6em' className='mr-2' />,
        <FaQuestion size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
        'Dashboard',
        'Courses',
        'Exams',
        'Reports',
        'Notification',
        'Profile',
        'Help',
        'Settings'
      ]
      this.menuIntlId = [
        'btn.db',
        'btn.courses',
        'btn.exams',
        'btn.reports',
        'btn.noti',
        'profile',
        'btn.help',
        'settings'
      ]
      this.navLinks = [
        '/dashboard',
        '/courses',
        '/exams',
        '/reports',
        '/notification',
        '/profile',
        '/help',
        '/settings'
      ]
    }

    if (canActivate(rolePermitted.mentor, this.props.token)) {
      this.faIcons = [
        <FaHome size='1.6em' className='mr-2' />,
        <FaQuora size='1.6em' className='mr-2' />,
        <FaPen size='1.6em' className='mr-2' />,
        <FaUser size='1.6em' className='mr-2' />,
        <FaQuestion size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
        'Dashboard',
        'Question',
        'Exam Builder',
        'Profile',
        'Settings'
      ]
      this.menuIntlId = []
      this.navLinks = [
        '/dashboard',
        '/question',
        '/exambuilder',
        '/profile',
        '/settings'
      ]
    }

    if (canActivate(rolePermitted.moderator, this.props.token)) {
      this.faIcons = [
        <FaHome size='1.6em' className='mr-2' />,
        <FaCog size='1.6em' className='mr-2' />,
        <FaCalendarAlt size='1.6em' className='mr-2' />,
        <FaQuora size='1.6em' className='mr-2' />,
        <FaEdit size='1.6em' className='mr-2' />,
        <FaUser size='1.6em' className='mr-2' />,
        <FaQuestion size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
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
        <FaCog size='1.6em' className='mr-2' />,
        <FaDiceD20 size='1.6em' className='mr-2' />,
        <FaCalendarAlt size='1.6em' className='mr-2' />,
        <FaQuora size='1.6em' className='mr-2' />,
        <FaEdit size='1.6em' className='mr-2' />,
        <FaCog size='1.6em' className='mr-2' />,
        <FaUser size='1.6em' className='mr-2' />,
        <FaQuestion size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
        'Dashboard',
        'Category Builder',
        'Course Builder',
        'Routine Builder',
        'Question Builder',
        'Exam Builder',
        'Exam Edit',
        'Profile',
        'Help',
        'Settings'
      ]
      this.menuIntlId = []
      this.navLinks = [
        '/dashboard',
        '/category',
        'coursebuilder',
        '/routine',
        '/question',
        '/exambuilder',
        '/examedit',
        '/profile',
        '/help',
        '/settings'
      ]
    }

    return (
      <div style={styles}>
        <Profile />

        <Nav className={this.classes.sideNav}>
          {this.faIcons.map((value, index) => (
            <Nav.Item key={index}>
              <NavLink
                exact
                to={this.navLinks[index]}
                className={
                  'nav-link ' + this.classes.sideNavLink + ' sidebar-link'
                }
                activeClassName='current'
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
          <div className='hideInMd'>
            {/* <SearchForm
              formControl={classes.formControl}
              searchBtn={classes.searchBtn}
            /> */}
            {this.props.token ? (
              <Nav.Item className='ml-md-auto'>
                <NavLink
                  // href={"/" + value}
                  to={{ pathname: '/logout' }}
                  className='nav-link'
                >
                  <FaSignOutAlt className='text-danger' />
                </NavLink>
              </Nav.Item>
            ) : (
              <></>
            )}
          </div>
        </Nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserLoader: () => dispatch(getUserLoader()),
    onUserExamStatLoader: () => dispatch(userExamStatLoader)
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

//export default Sidebar;

// const classes = {
//   formControl: 'search-input',
//   searchBtn: 'search-button'
// }

const styles = {
  fontSize: '14px'
}
