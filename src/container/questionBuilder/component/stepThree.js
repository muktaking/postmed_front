import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import remarkGfm from 'remark-gfm'

export default function StepThree({ values, errors, handleChange }) {
  const [edValue, setEdValue] = useState(values.qText)

  function handleEditorChange({ html, text }) {
    values.generalFeedback = text
    setEdValue(text)
  }

  return (
    <div>
      {/* <Form.Group controlId='formGroupQuestionTitle'>
        <Form.Label>General Feedback</Form.Label>
        <Form.Control
          type='text'
          placeholder='feedback'
          name='generalFeedback'
          value={values.generalFeedback}
          onChange={handleChange}
        />
        <span className='errorMessage'>{errors.generalFeedback}</span>
      </Form.Group> */}

      <div className='mb-2'>
        <p>General Feedback</p>
        <MdEditor
          name='qText'
          style={{ height: '200px' }}
          value={values.generalFeedback}
          renderHTML={(text) => (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
          )}
          onChange={handleEditorChange}
        />
        <span className='errorMessage'>{errors.generalFeedback}</span>
      </div>

      <Form.Group controlId='formGroupQuestionQText'>
        <Form.Label>Question Tags</Form.Label>
        <Form.Control
          type='text'
          placeholder='tag, tags'
          name='tags'
          value={values.tags}
          onChange={handleChange}
        />

        <span className='errorMessage'>{errors.tags}</span>
      </Form.Group>
    </div>
  )
}
