import React, { lazy, Suspense } from 'react'
import '../../assets/scss/style.scss'
// import Exam from './exam/exam';
// import Feature from './feature/feature';
import Home from './home/home'
//import Contact from "./contact/contact";
const Contact = lazy(() => import('./contact/contact'))
const Exam = lazy(() => import('./exam/exam'))
const Feature = lazy(() => import('./feature/feature'))

const landing = (props) => {
  return (
    <div className={'__landing__upper'}>
      <Home />
      <Suspense fallback={<div />}>
        <Exam />
        <Feature />
        <Contact />
      </Suspense>
    </div>
  )
}

export default landing
