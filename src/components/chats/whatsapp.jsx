import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    backgroundColor: '#25d366',
    width: '50px',
    height: '50px',
    borderRadius: '50px',
    boxShadow: '2px 2px 3px #999',
    zIndex: 100
  },

  icon: {
    fontSize: '38px',
    color: '#FFF'
  }
}

export default function Whatsapp({
  phoneNumber = 8801521500642,
  greetings = 'Hello, MediOnExam'
}) {
  return (
    <div
      style={styles.container}
      className='d-flex justify-content-center align-items-center'
    >
      <a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${greetings}`}
        target='_blank'
        rel='noreferrer'
      >
        <FaWhatsapp style={styles.icon} />
      </a>
    </div>
  )
}
