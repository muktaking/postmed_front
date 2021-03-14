import React, { useState } from 'react';
import { Badge, Button, Col, Modal, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import ExamCard from "./examCard";


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


export default function listCard({title,exams,landing}) {
  const authToken = useSelector((state) => state.auth.token ? true : false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
      <Modal show={show} onHide={handleClose} size={"xl"}>
        <Modal.Header closeButton>
          <Modal.Title>More <Badge variant="warning">{title.toUpperCase()}</Badge> Exams</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <Row className="mt-3 ml-3">
            <Col className="d-flex justify-content-center flex-wrap">
                { exams.slice(2).map((exam) => ( 
                    <ExamCard 
                      examId = {exam.id} 
                      imgSrc = {process.env.REACT_APP_SITE_URL+"/"+ exam.categoryType[0].imageUrl}
                      title = {exam.title}
                      categoryType = {exam.categoryType}
                      description = {exam.description}
                      createdAt = {exam.createdAt}
                      free = {!authToken && exam.categoryType.filter(cat=> cat.name === 'Free').length > 0 }
                    />                
                ))}
                
            </Col>
          </Row>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="mb-2 border position-relative" style={{marginTop: "100px"}}>
        <h3 className="text-center bg-warning text-light px-2 py-1" style={{position: "absolute", top:"-30px",left:"50px" }}>{title.toUpperCase() + " "} { (!landing && <Badge variant="light" className="ml-2"> {exams.length}</Badge> )} </h3>
        <div className="mt-4">
          <div className="d-flex justify-content-around flex-wrap">
              { exams.length < 1 && <p className="lead text-danger"> No {title} Exams is created </p>}
              { exams.map((exam,i) => ( i < 3 ?
                  <ExamCard 
                    examId = {exam.id} 
                    imgSrc = {process.env.REACT_APP_SITE_URL+"/"+ exam.categoryType[getRndInteger(0,exam.categoryType.length)].imageUrl}
                    title = {exam.title}
                    categoryType = {exam.categoryType}
                    description = {exam.description}
                    createdAt = {exam.createdAt}
                    free = {!authToken && exam.categoryType.filter(cat=> cat.name === 'Free').length > 0 }
                  />
                  : ""
              
              ))}
              
          </div>
          {!landing && <div className="my-2 d-flex justify-content-center">
            {exams.length > 2 ? <Button style={{height:"50px", width: "150px"}} onClick={()=>{
              handleShow()
            }}>More...</Button> : ""}
          </div>}
        </div>
        </div>
        </>
    )
}
