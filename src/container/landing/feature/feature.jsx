import React from "react";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import { FormattedMessage, useIntl } from 'react-intl';
import MiniBlock from "../miniBlock/miniBlock";


//import "./feature.scss";

const feature = props => {
  const intl = useIntl();
  const features = {
    heading: [intl.formatMessage({id: 'feature.cb', defaultMessage: 'Cloud Based'}),
    intl.formatMessage({id: 'feature.an', defaultMessage: 'Anywhere At Anytime'}), 
    intl.formatMessage({id: 'feature.ac', defaultMessage: 'Accurecy'}),
    ],
    para: [
      intl.formatMessage({id: 'feature.cb.details', defaultMessage: 'All System is based on cloud. Test the digitalization in exam management system'}),
      intl.formatMessage({id: 'feature.an.details', defaultMessage: 'You can give exam at anytime from anywhere. Home, sweet home!! '}),
      intl.formatMessage({id: 'feature.ac.details', defaultMessage: 'We try hard to make all questions and answers 100% accuret'}),
    ],
    faIcons: ["cloud", "hourglass", "thumbs-up"]
  };
  return (
    <div id="feature" className="offset">
      <Jumbotron>
        <div className="narrow text-center">
          <Col xs={12}>
            <h3 className="heading">
              <FormattedMessage id="features" defaultMessage="Features" />
            </h3>
            <div className="heading-underline"></div>
          </Col>
          <Row className="">
            {features.faIcons.map((value, index) => (
              <MiniBlock
                key={index}
                icon={value}
                heading={features.heading[index]}
                para={features.para[index]}
              />
            ))}
          </Row>
        </div>
      </Jumbotron>
    </div>
  );
};

export default feature;
