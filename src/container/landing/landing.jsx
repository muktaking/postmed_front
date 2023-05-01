import React, { lazy, Suspense } from 'react'
// import '../../assets/scss/style.scss'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import FeatureWhyChoseUs from './feature/featureWhyChoseUs'
// import Home from './home/home'
//import Contact from "./contact/contact";
import Hero from './landing4/hero'
import ScrollToTop from '../../components/customScroller/scrollToTop'
import StickyBottom from './landing4/stickyBottom'
import SidebarMini from '../../components/sidebar/sidebarMini'
import Topbar from '../../components/topbar/topbar'
const Contact = lazy(() => import('./contact/contact'))
const SignupSection = lazy(() => import('./signupSection/signupSection'))
const Feature = lazy(() => import('./feature/feature'))

const landing = (props) => {
  return (
    <>
      {/* <Suspense fallback={<div />}> */}
      {/* <NavbarHome isLanding={true} /> */}
      <SidebarMini />
      <Topbar pageName='Home' />
      {/* </Suspense> */}
      <div className={'__landing__upper'}>
        <MetaInfo {...RoutesConfig.Home.metaInfo} />
        {/* <Home /> */}

        <Hero />
        <Suspense fallback={<div />}>
          <Feature />
          <SignupSection />
          <FeatureWhyChoseUs />
          <Contact />
        </Suspense>
        <StickyBottom />
        <ScrollToTop />
      </div>
    </>
  )
}

export default landing
