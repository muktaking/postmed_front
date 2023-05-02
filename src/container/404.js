import React, { Component } from 'react'
import '../assets/scss/section/registration.scss'
import SubNavBar from '../components/navbar/subNavBar'
import SidebarMini from '../components/sidebar/sidebarMini'
import Topbar from '../components/topbar/topbar'
import { Image } from 'react-bootstrap'

class NotFound extends Component {
  render() {
    return (
      <>
        <SidebarMini />
        <Topbar pageName='Not Found' />
        <div className='registration'>
          <div className='landing'>
            <div className='home-wrap'>
              <div className='home-inner'></div>
            </div>
          </div>
          <div className='caption text-center'>
            <p className='lead text-danger'>
              {this.props.location.state
                ? this.props.location.state.message
                : 'Opps! Sorry.'}
            </p>
            <Image
              src='/assets/image/404.jpg'
              alt='404_No_Data_Found'
              fluid
              style={{ height: 350 }}
              className='mb-4'
            />

            <SubNavBar />
          </div>
        </div>
      </>
    )
  }
}

export default NotFound
