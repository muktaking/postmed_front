import React, { lazy, Suspense } from 'react'
import NavbarHome from '../../components/navbar/navbarHome'
// import '../../assets/scss/style.scss'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import FeatureWhyChoseUs from './feature/featureWhyChoseUs'
// import Home from './home/home'
//import Contact from "./contact/contact";
import Hero from './landing2/hero'
const Contact = lazy(() => import('./contact/contact'))
const Exam = lazy(() => import('./exam/exam'))
const Feature = lazy(() => import('./feature/feature'))
const Courses = lazy(() => import('../courses/'))

const landing = (props) => {
  return (
    <div className={'__landing__upper'}>
      <MetaInfo {...RoutesConfig.Home.metaInfo} />
      {/* <Home /> */}
      <Suspense fallback={<div />}>
        <NavbarHome isLanding={true} />
      </Suspense>
      <Hero />
      <Suspense fallback={<div />}>
        <FeatureWhyChoseUs />
        <div className='my-5'>
          <Courses landing={true} />
        </div>
        <Feature />
        <Exam />
        <Contact />
      </Suspense>
    </div>
  )
}

export default landing
