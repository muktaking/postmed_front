import React from 'react'
import { Button } from 'react-bootstrap'
import { FaHome, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const phoneNumber = 8801521500642
const greetings = 'Hello, MediOnExam'

const bootomNavItems = [
  { title: 'Home', icon: <FaHome className='mr-1' size={'1rem'} />, link: '/' },
  {
    title: 'Help',
    icon: <FaQuestionCircle className='mr-1' size={'1rem'} />,
    link: '/help'
  }
]

export default function StickyBottom() {
  const IsAuthenticated = useSelector((state) => state.auth.token !== null)
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
      {!IsAuthenticated && (
        <>
          <div className='text-center pt-2'>
            You are not logged in. Please{' '}
            <Link to='/login'>
              <Button variant='outline-warning'>Login</Button>
            </Link>
          </div>
          <hr />
        </>
      )}

      <div className='p-1 d-flex flex-wrap justify-content-around align-items-center'>
        {bootomNavItems.map((item, ind) => (
          <Link to={item.link} className='text-white'>
            <div
              className={
                'mr-2 mb-2 d-flex justify-content-center align-items-center'
              }
            >
              {item.icon}
              <span className='' style={{ fontSize: '1.3rem' }}>
                {item.title}
              </span>
            </div>
          </Link>
        ))}
        <div
          className={
            'mr-2 mb-2 d-flex justify-content-center align-items-center pr-2'
          }
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
              borderRadius: '05px',
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
  )
}
