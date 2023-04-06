import React from 'react'
import Styles from './horizontalLoader.module.scss'

export default function HorizontalLoader() {
  return (
    <div class={Styles.content}>
      <div class={Styles.loading}>
        <p>loading</p>
        <span></span>
      </div>
    </div>
  )
}
