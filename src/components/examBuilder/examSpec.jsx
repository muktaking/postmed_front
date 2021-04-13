import { Formik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//import { useFormik } from "formik";
import validator from "validator";
import { onLoadingLoader, postExamProfile } from "../../store/examPaper";
import ExamCard from "./card/card";

const centeredStyle = {
  // styling to display server response in middle of screen
  position: "fixed",
  top: "50%",
  left: "50%",
  /* bring your own prefixes */
  transform: "translate(-50%, -50%)",
  zIndex: "1000",
};

const ExamSpec = ({ categories, selectedQuestionIds }) => {
  const [hideMsg, setHideMsg] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.examPaper.loading);
  const successMsg = useSelector((state) => state.examPaper.success);
  const errorMsg = useSelector((state) => state.examPaper.error);

  return (
    <>
    {loading  && <Spinner
        animation="border"
        role="status"
        variant="dark"
        className="content-center"
    ></Spinner>}
    <Formik
      initialValues={{
        title: "",
        type: "0",
        categoryType: [],
        singleQuestionMark: "1",
        questionStemLength: "5",
        penaltyMark: "0",
        timeLimit: "40",
      }}
      validate={validate}
      onSubmit={onSubmitHandler(selectedQuestionIds, dispatch, setHideMsg)}
    >
      {({ errors, handleChange, handleSubmit }) => (
        <ExamCard header="Exam Specification" showHeader={true}>
          {hideMsg && successMsg && (
            <Alert //
              variant={"success"}
              className="text-center"
              style={centeredStyle}
              onClose={() => setHideMsg(false)}
              dismissible
            >
              {successMsg.title +
                " --->  " +
                successMsg.description +
                " --->  " +
                successMsg.questions.length +
                " questions"}
            </Alert>
          )}
          {hideMsg && errorMsg && (
            <Alert //
              variant={"success"}
              className="text-center"
              style={centeredStyle}
              onClose={() => setHideMsg(false)}
              dismissible
            >
              {JSON.stringify(errorMsg)}
            </Alert>
          )}
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
            {errors.title ? (
              <div className="alert alert-danger">{errors.title}</div>
            ) : null}
            <Form.Group controlId="type">
              <Form.Label>Exam Type</Form.Label>
              <Form.Control as="select" name="type" onChange={handleChange}>
                <option value="0">Assignment</option>
                <option value="1">Weekly</option>
                <option value="2">Monthly</option>
                <option value="3">Assesment</option>
                <option value="4">Term</option>
                <option value="5">Test</option>
                <option value="6">Final</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="categoryType">
              <Form.Label>Category Type</Form.Label>
              <Form.Control
                as="select"
                multiple
                name="categoryType"
                onChange={handleChange}
                //value={categories[0] && categories[0].id}
                // eslint-disable-next-line react/jsx-no-comment-textnodes
              >
                // eslint-disable-next-line react/prop-types //
                eslint-disable-next-line react/prop-types
                {categories.map((value) => {
                  //console.log(categories[0].id);
                  let categorySlug = value.slug.replace(/_/g, " / ");
                  if(value.name !== 'Uncategorized') return <option value={value.id}>{categorySlug}</option>;
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="description"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
            {errors.description ? (
              <div className="alert alert-danger">{errors.description}</div>
            ) : null}
            <Form.Group controlId="singleQuestionMark">
              <Form.Label>Single Question Mark</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                name="singleQuestionMark"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">** It is value for the question, not for the single stem.</Form.Text>
            </Form.Group>
            {errors.singleQuestionMark ? (
              <div className="alert alert-danger">
                {errors.singleQuestionMark}
              </div>
            ) : null}
            <Form.Group controlId="questionStemLength">
              <Form.Label>Question Stem Length</Form.Label>
              <Form.Control
                type="text"
                placeholder="5"
                name="questionStemLength"
                onChange={handleChange}
              />
            </Form.Group>
            {errors.questionStemLength ? (
              <div className="alert alert-danger">{errors.questionStemLength}</div>
            ) : null}
            <Form.Group controlId="penaltyMark">
              <Form.Label>Penalty Mark</Form.Label>
              <Form.Control
                type="text"
                placeholder="0"
                name="penaltyMark"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">** It is value for single stem, not for the question.</Form.Text>
            </Form.Group>
            {errors.penaltyMark ? (
              <div className="alert alert-danger">{errors.penaltyMark}</div>
            ) : null}
            <Form.Group controlId="timeLimit">
              <Form.Label>Time Limit(Minutes)</Form.Label>
              <Form.Control
                type="text"
                placeholder="40"
                name="timeLimit"
                onChange={handleChange}
              />
              
            </Form.Group>
            {errors.timeLimit ? (
              <div className="alert alert-danger">{errors.timeLimit}</div>
            ) : null}
          </Form>
          <Button onClick={handleSubmit}>Submit</Button>
        </ExamCard>
      )}
    </Formik>
    </>
  );
};

export default ExamSpec;

function onSubmitHandler(selectedQuestionIds, dispatch, setHideMsg) {
  return (values) => {
    if (selectedQuestionIds.length > 0) {
      dispatch(onLoadingLoader());
      setHideMsg(true);
      dispatch(postExamProfile(values, selectedQuestionIds));
    } else {
      alert("Their is no selected Question");
    }
  };
}

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (!validator.isLength(values.title, { min: 5, max: 50 })) {
    errors.title = "Title should be between 5-50 characters";
  }
  if (!values.description) {
    errors.description = "Required";
  } else if (!validator.isLength(values.description, { min: 15, max: 255 })) {
    errors.description = "Description should be between 15-255 characters";
  }
  if (!values.singleQuestionMark) {
    errors.singleQuestionMark = "Required";
  } else if (!validator.isInt(values.singleQuestionMark)) {
    errors.singleQuestionMark = "Single Question Mark should be Integer value";
  }
  if (!values.questionStemLength) {
    errors.questionStemLength = "Required";
  } else if (!validator.isNumeric(values.questionStemLength)) {
    errors.questionStemLength = "Question stem length should be Numeric value";
  }
  if (!values.penaltyMark) {
    errors.penaltyMark = "Required";
  } else if (!validator.isNumeric(values.penaltyMark)) {
    errors.penaltyMark = "penalty Mark should be Numeric value";
  }
  if (!values.timeLimit) {
    errors.timeLimit = "Required";
  } else if (!validator.isInt(values.timeLimit)) {
    errors.timeLimit = "Timelimit Mark should be Interger Value";
  }
  return errors;
};
