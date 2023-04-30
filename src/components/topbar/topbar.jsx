import React from 'react'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import { FaBell, FaSignOutAlt } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NotiBadge from '../../container/notification/notiBadge'

const Topbar = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user)

  return (
    <div className='bg-dark py-2 top-navbar mb-3 w-100'>
      <Row className='align-items-center'>
        <Col md={4} style={{ paddingLeft: '3rem' }}>
          <div className='d-flex'>
            <h4 className='text-light text-uppercase mb-0 mr-2'>
              <FormattedMessage
                id={props.pageName}
                defaultMessage={props.pageName}
              />
            </h4>
            <p className='text-white'>
              <span className='ml-2 text-warning'>
                {user.id && `User ID. ${user.id}`}
              </span>
            </p>
          </div>
        </Col>

        <Col md={8} className='hideInSm pr-5'>
          <Nav style={{ fontSize: '1.2rem' }}>
            <Nav.Item className=''>
              <NavLink
                exact
                to={{ pathname: '/' }}
                activeClassName='activeLink'
                className='nav-link'
              >
                <FormattedMessage id='btn.home' defaultMessage='Home' />
              </NavLink>
            </Nav.Item>
            <Nav.Item className=''>
              <NavLink
                exact
                to={{ pathname: '/courses' }}
                activeClassName='activeLink'
                className='nav-link'
              >
                <FormattedMessage id='btn.courses' defaultMessage='Courses' />
              </NavLink>
            </Nav.Item>
            <Nav.Item className=''>
              <NavLink
                to={{ pathname: '/exams' }}
                activeClassName='activeLink'
                className='nav-link'
              >
                <FormattedMessage id='btn.exams' defaultMessage='Exams' />
              </NavLink>
            </Nav.Item>
            <Nav.Item className=''>
              <NavLink
                to={{ pathname: '/help' }}
                activeClassName='activeLink'
                className='nav-link'
              >
                <FormattedMessage id='btn.help' defaultMessage='Help' />
              </NavLink>
            </Nav.Item>

            {isLoggedIn ? (
              <>
                <Nav.Item>
                  <NavLink
                    exact
                    to={{ pathname: '/notification' }}
                    activeClassName='activeLink'
                    className={'nav-link'}
                  >
                    <FaBell className='' />
                    <NotiBadge />
                  </NavLink>
                </Nav.Item>
                <Nav.Item className=''>
                  <NavLink
                    // href={"/" + value}
                    to={{ pathname: '/logout' }}
                    className='nav-link'
                  >
                    <FaSignOutAlt />
                  </NavLink>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item className=''>
                  <NavLink
                    to={{ pathname: '/signup' }}
                    activeClassName='activeLink'
                    className='nav-link'
                  >
                    <FormattedMessage id='btn.signup' defaultMessage='Signup' />
                  </NavLink>
                </Nav.Item>
                <Nav.Item className=''>
                  <NavLink
                    to={{ pathname: '/login' }}
                    activeClassName='activeLink'
                    className='nav-link'
                  >
                    <FormattedMessage id='btn.login' defaultMessage='Login' />
                  </NavLink>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Col>
      </Row>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onlogoutLoader: () => dispatch(logoutLoader()),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

//export default connect(null, n)(withRouter(topbar));
export default Topbar
