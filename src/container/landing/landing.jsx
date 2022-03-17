import React, { lazy, Suspense } from 'react'
// import '../../assets/scss/style.scss'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
// import Exam from './exam/exam';
// import Feature from './feature/feature';
import Home from './home/home'
//import Contact from "./contact/contact";
const Contact = lazy(() => import('./contact/contact'))
const Exam = lazy(() => import('./exam/exam'))
const Feature = lazy(() => import('./feature/feature'))
const Courses = lazy(() => import('../courses/'))

const landing = (props) => {
  return (
    <div className={'__landing__upper'}>
      <MetaInfo {...RoutesConfig.Home.metaInfo} />
      <Home />
      <Suspense fallback={<div />}>
        <Courses landing={true} />
        <Exam />
        <Feature />
        <Contact />
      </Suspense>
    </div>
  )
}

export default landing
