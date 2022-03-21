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

  return (
    <div className='bg-dark py-2 top-navbar mb-3 w-100'>
      <Row className='align-items-center'>
        <Col md={4} style={{ paddingLeft: '3rem' }}>
          <h4 className='text-light text-uppercase mb-0'>
            <FormattedMessage
              id={props.pageName}
              defaultMessage={props.pageName}
            />
          </h4>
        </Col>

        <Col md={8} className='hideInSm pr-5'>
          <Nav className='' style={{ fontSize: '1.2rem' }}>
            <Nav.Item className=''>
              <NavLink to={{ pathname: '/' }} className='nav-link'>
                <FormattedMessage id='btn.home' defaultMessage='Home' />
              </NavLink>
            </Nav.Item>
            <Nav.Item className=''>
              <NavLink to={{ pathname: '/courses' }} className='nav-link'>
                <FormattedMessage id='btn.courses' defaultMessage='Courses' />
              </NavLink>
            </Nav.Item>
            <Nav.Item className=''>
              <NavLink to={{ pathname: '/exams' }} className='nav-link'>
                <FormattedMessage id='btn.exams' defaultMessage='Exams' />
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to={{ pathname: '/notification' }}
                className={'nav-link'}
              >
                <FaBell className='' />
                <NotiBadge />
                {/* {freshNoti.length > 0 && (
                  <Badge
                    variant='danger'
                    style={{ position: 'absolute', fontSize: '.6rem' }}
                  >
                    {freshNoti.length}
                  </Badge>
                )} */}
              </NavLink>
            </Nav.Item>

            {isLoggedIn ? (
              <Nav.Item className=''>
                <NavLink
                  // href={"/" + value}
                  to={{ pathname: '/logout' }}
                  className='nav-link'
                >
                  <FaSignOutAlt />
                </NavLink>
              </Nav.Item>
            ) : (
              <>
                <Nav.Item className=''>
                  <NavLink to={{ pathname: '/signup' }} className='nav-link'>
                    <FormattedMessage id='btn.signup' defaultMessage='Signup' />
                  </NavLink>
                </Nav.Item>
                <Nav.Item className=''>
                  <NavLink to={{ pathname: '/login' }} className='nav-link'>
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
