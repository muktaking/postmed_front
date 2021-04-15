import React, { lazy, Suspense } from 'react'
import Button from 'react-bootstrap/Button'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
//import NavbarHome from "../../../components/navbar/navbarHome";

const NavbarHome = lazy(() => import('../../../components/navbar/navbarHome'))
//import "./home.scss";

const Home = (props) => {
  return (
    <div id='home'>
      <Suspense fallback={<div />}>
        <NavbarHome isLanding={true} />
      </Suspense>

      {/* Landing */}
      <div className='landing'>
        <div className='home-wrap'>
          <div className='home-inner'></div>
        </div>
      </div>
      <div className='caption text-center'>
        <h1 style={{ fontSize: '3rem' }}>
          {process.env.REACT_APP_NAME + ''} <br />
          <FormattedMessage
            id='site.title'
            defaultMessage='Welcome to The Best Online Exam  Platform'
          />
        </h1>
        <h3 style={{ fontSize: '1.8rem' }}>
          <FormattedMessage
            id='site.subtitle'
            defaultMessage='With the suffix of staying ahead'
          />
        </h3>
        <Link to='/exams'>
          <Button variant='outline-light' size='lg' className='btn-lg'>
            <FormattedMessage id='btn.exams' defaultMessage='Exams' />
          </Button>
        </Link>
      </div>

      {/* End of Landing */}
    </div>
  )
}

export default Home
