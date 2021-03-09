import React from "react";
import {
    ListGroup
} from "react-bootstrap";
import Stem from "./stem";



const QuestionForm = ({ question, handleChange, defaultChecked }) => {
  return (
    <ListGroup as="ul" className="mt-3">
      <ListGroup.Item as="li" active>
        {question.qText}
      </ListGroup.Item>

      {question.stems.map((stem, index) => (
        <ListGroup.Item as="li" key={index}>
          <Stem
            qType={question.qType}
            stem={stem}
            index={index + 1}
            id={question.id}
            handleChange={handleChange}
            defaultChecked={defaultChecked ? defaultChecked[index] : null}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default QuestionForm;
