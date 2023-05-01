import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router'
import styles from './domHistory.module.scss'

//const exLink = /(\/exams\/\d+_\d+)/g
//const exLink = /(\/exams\/\d+_\d+)|(\/dashboard)/g

export default function DomHistory() {
  const [counter, setCounter] = useState(0)
  const history = useHistory()
  // const pathname = history.location.pathname
  const handleLeft = () => {
    setCounter(counter + 1)
    history.goBack()
  }
  return (
    //pathname.search(exLink) === -1 && (
    <div className='my-2'>
      <FaArrowLeft
        onClick={handleLeft}
        className={`${styles.arrow} link-hover`}
      />
    </div>
    // )
  )
}
