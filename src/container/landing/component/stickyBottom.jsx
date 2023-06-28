import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import {
  FaBookOpen,
  FaHome,
  FaQuestionCircle,
  FaStackOverflow,
  FaTh,
  FaTimesCircle,
  FaWhatsapp
} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { StickyBottomContext } from '../../routePages'

const phoneNumber = 8801521500642
const greetings = 'Hello, MediOnExam'

export default function StickyBottom() {
  const IsAuthenticated = useSelector((state) => state.auth.token !== null)
  const { stickyState, setStickyState } = useContext(StickyBottomContext)
  const location = useLocation()

  const bootomNavItems = [
    {
      title: 'Home',
      icon: <FaHome className='mr-1' size={'1.6rem'} />,
      link: '/'
    },
    {
      title: IsAuthenticated ? 'Dashboard' : 'Courses',
      icon: IsAuthenticated ? (
        <FaTh className='mr-1' size={'1.6rem'} />
      ) : (
        <FaStackOverflow className='mr-1' size={'1.6rem'} />
      ),
      link: IsAuthenticated ? '/dashboard' : '/courses'
    },
    {
      title: 'Exams',
      icon: <FaBookOpen className='mr-1' size={'1.6rem'} />,
      link: '/exams'
    },
    {
      title: 'Help',
      icon: <FaQuestionCircle className='mr-1' size={'1.6rem'} />,
      link: '/help'
    }
  ]

  return (
    <div
      className={'bg-dark text-white'}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 20,
        width: '100%'
      }}
    >
      {stickyState && !IsAuthenticated && (
        <div>
          <div className='text-center pt-2'>
            <span className='mb-2 mr-2'>You are not logged in. Please</span>
            <Link to='/login'>
              <Button variant='outline-warning'>Login</Button>
            </Link>
            <div>
              <FaTimesCircle
                onClick={() => {
                  setStickyState(!stickyState)
                }}
                color='red'
                size={'1.4rem'}
                className='shadow'
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <hr />
        </div>
      )}

      <div className='hideInMd'>
        <div className='py-2 d-flex flex-wrap justify-content-around align-items-center'>
          {bootomNavItems.map((item, ind) => (
            <Link
              key={item + ind}
              to={item.link}
              className={`text-white ${
                location.pathname === item.link && 'activeLink'
              }`}
            >
              <div
                className={
                  'mr-2 d-flex justify-content-center align-items-center'
                }
              >
                {item.icon}
                {/* <span className='' style={{ fontSize: '1.2rem' }}>
                  {item.title}
                </span> */}
              </div>
            </Link>
          ))}

          <div
            className={'mr-2 d-flex justify-content-center align-items-center'}
          >
            <a
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${greetings}`}
              target='_blank'
              rel='noreferrer'
              className='text-white d-flex justify-content-center align-items-center'
              style={{
                backgroundColor: '#25d366',
                width: '30px',
                height: '30px',
                borderRadius: '30px',
                boxShadow: '2px 2px 3px #999'
              }}
            >
              <FaWhatsapp size={'1.4rem'} />
            </a>
            {/* <span className='' style={{ fontSize: '1.3rem' }}>
            Whatsapp
          </span> */}
          </div>
        </div>
      </div>
    </div>
  )
}
