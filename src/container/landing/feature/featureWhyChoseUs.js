import React from 'react'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import { FormattedMessage, useIntl } from 'react-intl'
import MiniBlock from '../miniBlock/miniBlock'

//import "./feature.scss";

const FeatureWhyChoseUs = (props) => {
  const intl = useIntl()
  const features = {
    heading: [
      intl.formatMessage({ id: 'feature.ep', defaultMessage: 'Exam Reports' }),
      intl.formatMessage({
        id: 'feature.lth',
        defaultMessage: 'Learning & Testing Hub'
      }),
      intl.formatMessage({ id: 'feature.ac', defaultMessage: 'Accurecy' })
    ],
    para: [
      intl.formatMessage({
        id: 'feature.ep.details',
        defaultMessage:
          'Advance exam analytical reports to find out the gap and on which topic to workout'
      }),
      intl.formatMessage({
        id: 'feature.lth.details',
        defaultMessage:
          'Learn at the time of exam with better explanation. Join our Facebook group for more learning resources '
      }),
      intl.formatMessage({
        id: 'feature.ac.details',
        defaultMessage:
          'Our academic team tries hard to make all questions and answers almost 100% accurate'
      })
    ],
    faIcons: ['bar', 'hubspot', 'thumbs-up'],
    color: ['tomato', '#23272B', 'green']
  }
  return (
    <div id='feature' className='offset'>
      <Jumbotron>
        <div className='narrow text-center'>
          <Col xs={12}>
            <h3 className='heading'>
              <FormattedMessage
                id='featureWhychoseUs'
                defaultMessage='What will you get'
              />
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
    </div>
  )
}

export default FeatureWhyChoseUs
