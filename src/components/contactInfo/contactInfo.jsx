import React from 'react'
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaTwitterSquare
} from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { ContactConfig } from '../../config/contact.config'

export default function ContactInfo(props) {
  return (
    <div className={props.className}>
      <h4>
        <FormattedMessage id='btn.contact' defaultMessage='Contact Info' />
      </h4>
      <p>
        <FaPhoneSquareAlt size='1.4rem' className='mr-2' />
        <span>{ContactConfig.mobile}</span>
        <br />
        <FaEnvelope size='1.4rem' className='mr-2' />
        <span>{ContactConfig.email}</span>
        <br />
        <FaMapMarkerAlt size='1.4rem' className='mr-2' />
        <span>{ContactConfig.location}</span>
      </p>
      <a
        href={ContactConfig.socials.facebook}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaFacebookSquare size='2.6rem' />
      </a>
      <a
        href={ContactConfig.socials.twitter}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaTwitterSquare size='2.6rem' />
      </a>
      <a
        href={ContactConfig.socials.instagram}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaInstagramSquare size='2.6rem' />
      </a>
    </div>
  )
}
