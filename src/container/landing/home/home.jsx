import React, { lazy, Suspense } from 'react'
import Button from 'react-bootstrap/Button'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

const NavbarHome = lazy(() => import('../../../components/navbar/navbarHome'))
const Promotional = lazy(() => import('../promotional'))

const Home = (props) => {
  return (
    <div id='home'>
      <Suspense fallback={<div />}>
        <div
          id='fixedTop'
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
            zIndex: '1000'
          }}
        >
          <Promotional />
          <NavbarHome isLanding={true} />
        </div>
      </Suspense>
      {/* Landing */}
      <div className='landing'>
        <div className='home-wrap'>
          <div className={'home-inner'}></div>
        </div>
      </div>

      <div className='caption text-center'>
        <h1>
          {process.env.REACT_APP_NAME + ''} <br />
          <FormattedMessage
            id='site.title'
            defaultMessage='The Best Online Exam  Platform For Fcps or Residency Exam'
          />
        </h1>
        <h3>
          <FormattedMessage
            id='site.subtitle'
            defaultMessage='Find Your Lacking & Make You Strong For Post-Graduate Exam'
          />
        </h3>
        <Link to='/exams'>
          <Button variant='outline-light' size='lg' className='btn-lg'>
            <FormattedMessage id='btn.exams' defaultMessage='Go to Exams' />
          </Button>
        </Link>
      </div>

      {/* End of Landing */}
    </div>
  )
}

export default Home
