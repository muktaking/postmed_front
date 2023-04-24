import React from 'react'
import {
  FaBalanceScale,
  FaClock,
  FaFile,
  FaFileAlt,
  FaFileImport,
  FaMedal,
  FaPoll,
  FaUsers
} from 'react-icons/fa'

const Icon = ({ icon, size, classes }) => {
  switch (icon) {
    case 'file-alt':
      return <FaFileAlt size={size} className={classes} />
    case 'file-import':
      return <FaFileImport size={size} className={classes} />

    case 'medal':
      return <FaMedal size={size} className={classes} />

    case 'users':
      return <FaUsers size={size} className={classes} />

    case 'poll':
      return <FaPoll size={size} className={classes} />

    case 'balance-scale':
      return <FaBalanceScale size={size} className={classes} />

    case 'file':
      return <FaFile size={size} className={classes} />

    case 'clock':
      return <FaClock size={size} className={classes} />

    default:
      return <FaFile size={size} className={classes} />
  }
}
export default Icon
