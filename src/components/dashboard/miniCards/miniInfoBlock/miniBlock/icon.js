import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
//import { icon } from "@fortawesome/fontawesome-svg-core";

const icon = ({ icon, size, classes }) => (
  <FontAwesomeIcon icon={icon} size={size} className={classes} />
)
export default icon
