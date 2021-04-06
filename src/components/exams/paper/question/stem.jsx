import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
const questionStemView = ({
  id,
  qType,
  stem,
  index,
  handleChange,
  defaultChecked
}) => {

  //const dispatch = useDispatch();
  const disableQuestions = useSelector(state => state.exams.disableQuestions);

  // const disableQuestionsAddLoader = (name)=>{
  //   dispatch({type: disableQuestionsAdd.type, payload: name})

  return (
    <Row className="px-md-4 px-xs-2">
      <Col xs="9">{index + ". " + stem}</Col>
        <Form.Group  as={Col} controlId="formGroupQuestionStemAnswer">
          {qType === "matrix" ? (
            <>
            <Form.Check type="radio">
              <Form.Check.Input
                //inline
                disabled = {disableQuestions && disableQuestions.includes(id + "_" + index)}
                type="radio"
                //label="True"
                name={id + "_" + index}
                id="formHorizontalRadios1"
                value={1}
                defaultChecked={defaultChecked === "1"}
                onChange={handleChange}
                // onClick={(e)=>{
                //   disableQuestionsAddLoader(id + "_" + index);
                // }}
                className="mb-0"
              />
              <Form.Check.Label>True</Form.Check.Label>
            </Form.Check>  
            <Form.Check type="radio">
              <Form.Check.Input
                //inline
                disabled = {disableQuestions && disableQuestions.includes(id + "_" + index)}
                type="radio"
                //label="False"
                name={id + "_" + index}
                id="formHorizontalRadios2"
                value={0}
                defaultChecked={defaultChecked === "0"}
                onChange={handleChange}
                // onClick={(e)=>{                  
                //   disableQuestionsAddLoader(id + "_" + index);
                // }}
                className="mb-0"
              />
              <Form.Check.Label>False</Form.Check.Label>
            </Form.Check>  
            </>
          ) : (
            <Form.Check>
              <Form.Check.Input
                disabled = {disableQuestions && disableQuestions.includes(id.toString())}
                type="radio"
                name={id}
                id="formHorizontalRadios1"
                value={index}
                defaultChecked={defaultChecked == index}
                onChange={handleChange}
                className="mb-0" 
              />
            </Form.Check>
          )}
        </Form.Group>
    </Row>
  );
};

export default questionStemView;
