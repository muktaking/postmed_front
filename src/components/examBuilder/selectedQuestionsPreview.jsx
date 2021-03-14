import React, { useState } from "react";
import { Badge, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { selectedQuestionsLoader } from "../../store/examPaper";
import ExamCard from "./card/card";

const SelectedQuestionsPreview = ({}) => {
  const dispatch = useDispatch();
  const [finalSelectedQuestions, setFinalSelectedQuestions] = useState(useSelector((state) => state.examPaper.questions));
  const [finalSelectedQuestionIds, setFinalSelectedQuestionIds] = useState(useSelector((state) => state.examPaper.ids));
  return (
    <ExamCard header="Selected Questions Preview" showHeader={false}>
      {
        <ListGroup className="my-2">
          {finalSelectedQuestions.map((question, index) => (
            <ListGroup.Item key={index} variant={"success"}>
              {`${index + 1}. ${question.title} --> ${question.qText}`}
              <Badge variant="danger ml-2" onClick={()=>{
                setFinalSelectedQuestions(finalSelectedQuestions.filter(v=> v.title !== question.title));
                setFinalSelectedQuestionIds(finalSelectedQuestionIds.filter((v,i)=> i !== index));
              }}><FaTimes /></Badge>
            </ListGroup.Item>
          ))}
          <ListGroupItem>
              <Button onClick={()=>{
                dispatch(selectedQuestionsLoader(finalSelectedQuestions, finalSelectedQuestionIds))
              }}>Submit</Button>
          </ListGroupItem>
        </ListGroup>
      }
    </ExamCard>
  );
};

export default SelectedQuestionsPreview;
