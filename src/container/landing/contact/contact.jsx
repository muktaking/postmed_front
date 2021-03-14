import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from 'react-intl';

//import "./contact.scss";

const contact = props => {
  const socials = [
    ["fab", "facebook-square"],
    ["fab", "twitter-square"],
    ["fab", "instagram"]
  ];
  return (
    <div id="contact" className="offset">
      <footer>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <p className="lead">
              <FormattedMessage 
              id="footer.msg"
              defaultMessage="We are highly trained team to manage the exam system for you"
              />
            </p>
            <strong>
              <FormattedMessage
              id="btn.contact"
              defaultMessage="Contact Info"
              />
              </strong>
            <p>
              +8801641622541 <br />
              admin@eexam.com{" "}
            </p>
            {socials.map(value => (
              <a key={value} href="#" target="_blank" rel="noopener noreferrer">
                {/* <FontAwesomeIcon icon={["fab", "apple"]} /> */}
                <FontAwesomeIcon icon={value} />
              </a>
            ))}
          </Col>
          <hr className="socket" />
          &copy; E-Exam Theme Inspired By Nano theme
        </Row>
      </footer>
    </div>
  );
};

export default contact;
