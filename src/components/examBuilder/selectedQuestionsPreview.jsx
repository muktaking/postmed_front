import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { FaTimes } from 'react-icons/fa';
import ExamCard from "./card/card";

const SelectedQuestionsPreview = ({selectedQuestions, selectedQuestionsHandler}) => {
  return (
    <ExamCard header="Selected Questions Preview" showHeader={false}>
      {
        <ListGroup className="my-2">
          {selectedQuestions.map((question, index) => (
            <ListGroup.Item key={index} variant={"success"}>
              {`${index + 1}. ${question.title} --> ${question.qText}`}
              <Badge variant="danger ml-2" onClick={()=>{
                selectedQuestionsHandler(question.id)
                }}
                style={{cursor: 'pointer'}}
              
              ><FaTimes /></Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      }
    </ExamCard>
  );
};

export default SelectedQuestionsPreview;
