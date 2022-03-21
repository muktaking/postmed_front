import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaTwitterSquare
} from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import { ContactConfig } from '../../../config/contact.config'

const scrollToTop = () => {
  scroll.scrollToTop(160)
}

const styles = {
  cursor: 'pointer'
}

const contact = (props) => {
  return (
    <div id='contact' className='offset'>
      <footer>
        <Row className=''>
          <Col className='text-center' md={4}>
            <h4>About Us</h4>
            <p className=''>{ContactConfig.about}</p>
          </Col>
          <Col md={4} className='text-center'>
            <h4>
              <FormattedMessage
                id='btn.contact'
                defaultMessage='Contact Info'
              />
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
          </Col>
          <Col className='text-center' md={4}>
            <h4>Useful Links</h4>
            <Link to='/courses' className='link-hover'>
              Courses
            </Link>
            <br />
            <Link to='/exams' className='link-hover'>
              Exams
            </Link>
            <br />
            <Link to='/help' className='link-hover'>
              Helps
            </Link>
            <br />
            <Link to='/terms' className='link-hover'>
              Terms & Conditions
            </Link>
          </Col>
        </Row>
        <Row className=''>
          <Col md={4}></Col>
          <Col md={4} className='text-center'>
            &copy; E-Exam Theme Inspired By Nano theme
          </Col>
          <Col md={4}>
            <p
              className='text-right pr-3 link-hover'
              style={styles}
              onClick={scrollToTop}
            >
              Back to Top{' '}
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  )
}

export default contact
