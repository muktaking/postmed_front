import React, { Component } from "react";
import { Alert, Card, ListGroup } from "react-bootstrap";
import { FaMinusCircle } from 'react-icons/fa';
import { connect } from "react-redux";
import SubNavBar from "../../components/navbar/subNavBar";
import QuestionResultStem from "../../components/result/stem";

const QType = {
  SingleBestAnswer: "sba",
  Matrix: "matrix",
}

class Result extends Component {
  state = {};
  render() {
    const {
      examResult,
      totalMark,
      totalScore,
      totalPenaltyMark,
      totalScorePercentage,
      timeTakenToComplete,
      error,
    } = this.props.exams;
    return (
      <div>
        {error && (
          <>
          <Alert variant={"danger"} className="m-5 text-center">
            {error}
          </Alert>
          <SubNavBar />
          </>

        )}
        {examResult && (
          <div>
            <Card className="mt-3">
              <Card.Header as="h5" className="text-center">
                Result
              </Card.Header>
              <Card.Body className="d-flex justify-content-center">
                <div style={{width:"250px"}} className="mr-2 mb-1">
                  <p className="bg-warning text-center text-light mb-1 p-3" style={{fontSize: "1.5rem"}}>{totalScore.toFixed(2)} out of{" "} {totalMark.toFixed(2)}</p>
                  <p className="bg-warning text-center text-light p-1" style={{fontSize: "1rem"}}>Score</p>
                </div>
                <div style={{width:"250px"}} className="mr-2 mb-1">
                  <p className="bg-info text-center text-light mb-1 p-3" style={{fontSize: "1.5rem"}}>{timeTakenToComplete} Mins</p>
                  <p className="bg-info text-center text-light p-1" style={{fontSize: "1rem"}}>Time</p>
                </div>
                <div style={{width:"250px"}} className="mr-2 mb-1">
                  <p className="bg-primary text-center text-light mb-1 p-3" style={{fontSize: "1.5rem"}}>{totalScorePercentage.toFixed(2)} %</p>
                  <p className="bg-primary text-center text-light p-1" style={{fontSize: "1rem"}}>Percentage</p>
                </div>
                
              </Card.Body>
            </Card>

            <Card className="mt-3">
              <Card.Header as="h5" className="text-center">
                Detail
              </Card.Header>
              <Card.Body>
                {examResult.map((item, index) => (
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      {item.result.stemResult[0] === QType.Matrix && item.result.stemResult.length === 1 
                      && <FaMinusCircle className="mr-2" style={{color: '#777'}} size='1.4rem' />}
                      {item.result.stemResult[0] === QType.SingleBestAnswer && item.result.stemResult.length === 2 
                      && <FaMinusCircle lassName="mr-2" style={{color: '#777'}} size='1.4rem' />}
                      {index + 1 + ". " + item.qText}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <ListGroup variant="flush" className="pl-3">
                        {item.stems.map((stem, ind) => {
                          if (item.result.stemResult[0] === QType.SingleBestAnswer)
                            return (
                              <>
                                <ListGroup.Item>
                                  <QuestionResultStem index={ind} qType={item.result.stemResult[0]} answer={[item.result.stemResult[1], item.result.stemResult[2]]} qStem={`${ind + 1}. ${stem.qStem}`} />
                                </ListGroup.Item>
                                <ListGroup.Item className="ml-3">
                                  {stem.fbStem && "Explanation is : " + stem.fbStem}
                                </ListGroup.Item>
                              </>
                            );
                          else
                            return (
                              <>
                                <ListGroup.Item>
                                  <QuestionResultStem index={ind} qType={item.result.stemResult[0]} answer= {item.result.stemResult[(ind+1)]} qStem={`${ind + 1}. ${stem.qStem}`} />
                                </ListGroup.Item>

                                <ListGroup.Item
                                  // className={
                                  //   (item.result.stemResult[ind] === true
                                  //     ? "bg-success"
                                  //     : "bg-danger") + " text-light ml-3"
                                  // }
                                >
                                  This Statement is:{" "}
                                  {stem.aStem === "1" ? "True" : "False"}
                                  <br />
                                  {stem.fbStem && "Explanation is : " + stem.fbStem}
                                </ListGroup.Item>
                                
                              </>
                            );
                        })}
                      </ListGroup>
                    </ListGroup.Item>
                    <ListGroup.Item className="ml-3">
                      {item.generalFeedbacks && "Explanation is : " + item.generalFeedbacks}
                    </ListGroup.Item>
                  </ListGroup>
                ))}
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};
const mapStateToProps = (state) => {
  return {
    exams: state.exams,
    //   auth: state.auth,
    //   category: state.category,
    //   api: state.api,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
