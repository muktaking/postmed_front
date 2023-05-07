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
      intl.formatMessage({ id: 'feature.cb', defaultMessage: 'Low Cost' }),
      intl.formatMessage({
        id: 'feature.gf',
        defaultMessage: 'Exam Ninja'
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
          'Prepare yourself for the exam at the lowest cost, ever without compromising quality.'
      }),
      intl.formatMessage({
        id: 'feature.ac.details',
        defaultMessage:
          'Become exam ninja master by practising exam as much as your wish from neverending exam bank.'
      }),
      intl.formatMessage({
        id: 'feature.an.details',
        defaultMessage:
          'You can give exam at anytime from anywhere. Home, sweet home!! '
      })
    ],
    faIcons: ['dollarSign', 'userNinja', 'mapMarkedAlt'],
    color: ['green', '#23272B', 'tomato']
  }
  return (
    <div id='feature' className='offset'>
      <Jumbotron className='hideInSm'>
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
                color={features.color[index]}
              />
            ))}
          </Row>
        </div>
      </Jumbotron>
      <Jumbotron className='hideInMd'>
        <CarouselComponent items={features} />
      </Jumbotron>
    </div>
  )
}

export default Feature
