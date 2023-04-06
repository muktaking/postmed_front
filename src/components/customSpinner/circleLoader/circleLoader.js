import React from 'react'
import Styles from './circleLoader.module.scss'

export default function CircleLoader() {
  return (
    <div className={Styles.content}>
      <span className={Styles.loader}></span>
    </div>
  )
}
