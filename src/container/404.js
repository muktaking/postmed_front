import React, { Component } from 'react'
import '../assets/scss/section/registration.scss'
import NavbarHome from '../components/navbar/navbarHome'

class NotFound extends Component {
  render() {
    return (
      <div className='registration'>
        {/* {authRedirect} */}
        <NavbarHome isLanding={false} />
        {/* Landing */}
        <div className='landing'>
          <div className='home-wrap'>
            <div className='home-inner'></div>
          </div>
        </div>
        <div className='caption text-center' style={{ top: '15%' }}>
          {/* <Spinner animation="border" role="status"></Spinner> */}
          <h1>404-Page</h1>
          <p className='lead'>
            {this.props.location.state
              ? this.props.location.state.message
              : 'Your Desired Content -> Not Found'}
          </p>
        </div>
        {/* End of Landing */}
      </div>
    )
  }
}

export default NotFound
