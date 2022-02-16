import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
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
          <Col sm={4}></Col>
          <Col sm={4} className='text-center'>
            <p className='lead'>
              <FormattedMessage
                id='footer.msg'
                defaultMessage='We are highly trained team to manage the exam system.'
              />
            </p>
            <strong>
              <FormattedMessage
                id='btn.contact'
                defaultMessage='Contact Info'
              />
            </strong>
            <p>
              {ContactConfig.mobile}
              <br />
              {ContactConfig.email}
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
          <Col sm={4}></Col>
          <hr className='socket' />

          <Col sm={4}></Col>
          <Col sm={4} className='text-center'>
            &copy; E-Exam Theme Inspired By Nano theme
          </Col>
          <Col sm={4}>
            <p className='text-right pr-3' style={styles} onClick={scrollToTop}>
              Back to Top{' '}
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  )
}

export default contact
