import React, { lazy, Suspense } from 'react'
// import '../../assets/scss/style.scss'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import FeatureWhyChoseUs from './feature/featureWhyChoseUs'
// import Home from './home/home'
//import Contact from "./contact/contact";
import Hero from './landing4/hero'
import ScrollToTop from '../../components/customScroller/scrollToTop'
import SidebarMini from '../../components/sidebar/sidebarMini'
import Topbar from '../../components/topbar/topbar'
import PropularPrograms from './component/propularPrograms'
import FindCourseByCategories from './component/findCourseByCategories'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import StickyBottom from './component/stickyBottom'
const Contact = lazy(() => import('./contact/contact'))
const SignupSection = lazy(() => import('./signupSection/signupSection'))
const Feature = lazy(() => import('./feature/feature'))

const landing = (props) => {
  return (
    <>
      <div className={'landing-upper'}>
        <MetaInfo {...RoutesConfig.Home.metaInfo} />
        <SidebarMini />
        <Topbar pageName='Home' />
        <section style={{ backgroundColor: '#FFF8D6' }}>
          <Hero />
          <div className='d-flex justify-content-center mt-3'>
            <Link to='/exams/category/Free-1'>
              <Button variant='dark' size='lg' className='shadow rounded'>
                Try Demo Exam
              </Button>
            </Link>
          </div>
          <FindCourseByCategories />
        </section>

        <Suspense fallback={<div />}>
          <section>
            <PropularPrograms />
            {/* <CourseCarousel /> */}

            <Feature />
            <SignupSection />
            <FeatureWhyChoseUs />
          </section>
          <Contact />
        </Suspense>
        <StickyBottom />
        <ScrollToTop />
      </div>
    </>
  )
}

export default landing
