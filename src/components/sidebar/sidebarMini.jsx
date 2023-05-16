import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import {
  FaBell,
  FaBookOpen,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
  FaStackOverflow,
  FaEdit,
  FaHome,
  FaTh,
  FaPen,
  FaQuestionCircle,
  FaQuora,
  FaSignOutAlt,
  FaTools,
  FaUserGraduate
} from 'react-icons/fa'
import { slide as Menu } from 'react-burger-menu'
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
    if (this.props.token !== null) {
      this.props.onGetUserLoader()
      this.props.onUserExamStatLoader()
    }
  }
  render() {
    this.faIcons = [
      <FaHome size='1.6em' className='mr-2' />,
      <FaStackOverflow size='1.6em' className='mr-2' />,
      <FaPen size='1.6em' className='mr-2' />,
      <FaUserGraduate size='1.6em' className='mr-2' />,
      <FaUserGraduate size='1.6em' className='mr-2' />,
      <FaQuestionCircle size='1.6em' className='mr-2' />
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
        <FaTh size='1.6rem' className='mr-2' />,
        <FaStackOverflow size='1.6em' className='mr-2' />,
        <FaBookOpen size='1.6em' className='mr-2' />,
        <FaChartBar size='1.6em' className='mr-2' />,
        <span className='mr-2'>
          <FaBell size='1.6em' />
          <NotiBadge />
        </span>,
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
        'Notification',
        'Profile',
        'Help',
        'Settings'
      ]
      this.menuIntlId = [
        'btn.home',
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
        '/',
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
        <FaTh size='1.6rem' className='mr-2' />,
        <FaQuora size='1.6em' className='mr-2' />,
        <FaPen size='1.6em' className='mr-2' />,
        <FaUserGraduate size='1.6em' className='mr-2' />,
        <FaQuestionCircle size='1.6em' className='mr-2' />,
        <FaTools size='1.6em' className='mr-2' />
      ]
      this.menuName = [
        'Home',
        'Dashboard',
        'Question',
        'Exam Builder',
        'Profile',
        'Settings'
      ]
      this.menuIntlId = []
      this.navLinks = [
        '/',
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
        <FaTh size='1.6rem' className='mr-2' />,
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
        <FaTh size='1.6rem' className='mr-2' />,
        <FaHome size='1.6em' className='mr-2' />,
        <FaCog size='1.6em' className='mr-2' />,
        <FaStackOverflow size='1.6em' className='mr-2' />,
        <FaCalendarAlt size='1.6em' className='mr-2' />,
        <FaQuora size='1.6em' className='mr-2' />,
        <FaEdit size='1.6em' className='mr-2' />,
        <FaCog size='1.6em' className='mr-2' />,
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
        'Exam Edit',
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
        '/examedit',
        '/profile',
        '/help',
        '/settings'
      ]
    }

    return (
      <Menu styles={styles.menu}>
        <div style={styles.container}>
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
                    <FaSignOutAlt className='text-danger' size='1.6rem' />
                  </NavLink>
                </Nav.Item>
              ) : (
                <></>
              )}
            </div>
          </Nav>
        </div>
      </Menu>
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

var styles = {
  menu: {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '25px',
      right: '20px',
      top: '18px'
      // @media (min-width: 767.98px) {
      //   display: none;
      // }
    },
    bmBurgerBars: {
      background: '#FFC107'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  },
  container: {
    fontSize: '14px'
  }
}
