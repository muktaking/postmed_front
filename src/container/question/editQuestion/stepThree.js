import React from 'react';
import { Form } from "react-bootstrap";

export default function StepThree({values, errors, handleChange}) {
    return (
        <div>
          <Form.Group controlId="formGroupQuestionTitle">
            <Form.Label>General Feedback</Form.Label>
            <Form.Control
              type="text"
              placeholder="feedback"
              name="generalFeedback"
              value={values.generalFeedback}
              onChange={handleChange}
            />
                <span className="errorMessage">{errors.generalFeedback}</span>
          </Form.Group>

          <Form.Group controlId="formGroupQuestionQText">
            <Form.Label>Question Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="tag, tags"
              name="tags"
              value={values.tags}
              onChange={handleChange}
            />
            
              <span className="errorMessage">{errors.tags}</span>
            
          </Form.Group>
        </div>
    )
}
