import React, { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa'

import Styles from './scrollToTop.module.scss'

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={Styles.topToBtm}>
      {showTopBtn && (
        <FaAngleUp
          className={Styles.iconPosition + ' ' + Styles.iconStyle}
          onClick={goToTop}
        />
      )}
    </div>
  )
}
