import React, { lazy, Suspense } from 'react'
import NavbarHome from '../../components/navbar/navbarHome'
// import '../../assets/scss/style.scss'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import FeatureWhyChoseUs from './feature/featureWhyChoseUs'
// import Home from './home/home'
//import Contact from "./contact/contact";
import Hero from './landing3/hero'
import ScrollToTop from '../../components/customScroller/scrollToTop'
import CourseCarousel from './landing3/courseCarousel'
import Whatsapp from '../../components/chats/whatsapp'
const Contact = lazy(() => import('./contact/contact'))
const SignupSection = lazy(() => import('./signupSection/signupSection'))
const Feature = lazy(() => import('./feature/feature'))

const landing = (props) => {
  return (
    <div className={'__landing__upper'}>
      <Whatsapp />
      <MetaInfo {...RoutesConfig.Home.metaInfo} />
      {/* <Home /> */}
      <Suspense fallback={<div />}>
        <NavbarHome isLanding={true} />
      </Suspense>
      <Hero />
      <Feature />
      <Suspense fallback={<div />}>
        <CourseCarousel />
        <FeatureWhyChoseUs />

        <SignupSection />
        <Contact />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}

export default landing
