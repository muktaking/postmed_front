import React from 'react'
import Styles from './multiSquareLoader.module.scss'

export default function MultiSquareLoader() {
  return (
    <div className={Styles.content}>
      <span className={Styles.loader}></span>
    </div>
  )
}
