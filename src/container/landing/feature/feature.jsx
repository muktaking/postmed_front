import React from 'react'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import { FormattedMessage, useIntl } from 'react-intl'
import MiniBlock from '../miniBlock/miniBlock'
import CarouselComponent from './carouselComponent'

//import "./feature.scss";

const Feature = (props) => {
  const intl = useIntl()
  const features = {
    heading: [
      intl.formatMessage({ id: 'feature.cb', defaultMessage: 'Cloud Based' }),
      intl.formatMessage({
        id: 'feature.gf',
        defaultMessage: 'No More Google Form'
      }),
      intl.formatMessage({
        id: 'feature.an',
        defaultMessage: 'Anywhere At Anytime'
      })
    ],
    para: [
      intl.formatMessage({
        id: 'feature.cb.details',
        defaultMessage:
          'All System is based on cloud. Test the digitalization in exam management system'
      }),
      intl.formatMessage({
        id: 'feature.ac.details',
        defaultMessage:
          'Stop using google form based online exam. Get customized web application for exam'
      }),
      intl.formatMessage({
        id: 'feature.an.details',
        defaultMessage:
          'You can give exam at anytime from anywhere. Home, sweet home!! '
      })
    ],
    faIcons: ['cloud', 'stop', 'hourglass']
  }
  return (
    <div id='feature' className='offset'>
      <Jumbotron className='feature-lg'>
        <div className='narrow text-center'>
          <Col xs={12}>
            <h3 className='heading'>
              <FormattedMessage id='features' defaultMessage='Features' />
            </h3>
            <div className='heading-underline'></div>
          </Col>
          <Row className=''>
            {features.faIcons.map((value, index) => (
              <MiniBlock
                key={value + index}
                icon={value}
                heading={features.heading[index]}
                para={features.para[index]}
              />
            ))}
          </Row>
        </div>
      </Jumbotron>
      <Jumbotron className='feature-md'>
        <CarouselComponent items={features} />
      </Jumbotron>
    </div>
  )
}

export default Feature
