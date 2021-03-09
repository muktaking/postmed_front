import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "react-datepicker/dist/react-datepicker.css";
import ExamFeaturedCard from "./mainContentCards/examsFeaturedCard";
import ReportCard from "./mainContentCards/reportCard";
import RecentActivityCard from "./sideCards/recentActivityCard";


const BigCards = (props) => {
  return (
    <>
      <Row>
        <Col xl={8} lg={12}>
          <ReportCard />
          <hr />
          <ExamFeaturedCard />
          <hr />
        </Col>
        <Col xl={4}>
          <RecentActivityCard />
          <hr />
        </Col>
      </Row>
    </>
  );
};

export default BigCards;
