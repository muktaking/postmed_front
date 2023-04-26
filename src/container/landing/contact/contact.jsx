import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { ContactConfig } from '../../../config/contact.config'
import ContactInfo from '../../../components/contactInfo/contactInfo'

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
            <ContactInfo />
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
            <Link to='/payment' className='link-hover'>
              Payment
            </Link>
            <br />
            <Link to='/help' className='link-hover'>
              Helps
            </Link>
            <br />
            <Link to='/terms' className='link-hover'>
              Terms & Conditions
            </Link>
            <br />
            <Link to='/sitemap.xml' className='link-hover'>
              Sitemap
            </Link>
          </Col>
        </Row>
        <Row className=''>
          <Col md={4}></Col>
          <Col md={4} className='text-center'>
            &copy; E-Exam Theme Inspired By Nano theme
          </Col>
        </Row>
      </footer>
    </div>
  )
}

export default contact
