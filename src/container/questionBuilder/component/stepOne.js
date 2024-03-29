import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import { useDispatch, useSelector } from 'react-redux'
import remarkGfm from 'remark-gfm'
import { fetchCategory } from '../../../store/category'

export default function StepOne({ values, errors, handleChange }) {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)
  const [edValue, setEdValue] = useState(values.qText)

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  function handleEditorChange({ html, text }) {
    values.qText = text
    setEdValue(text)
  }

  return (
    <div>
      <Form.Group controlId='formGroupQuestionTitle'>
        <Form.Label>Question Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Question Title'
          name='title'
          value={values.title}
          onChange={handleChange}
        />
        <span className='errorMessage'>{errors.title}</span>
      </Form.Group>
      <Form.Group controlId='formGridCategory'>
        <Form.Label>Question Category</Form.Label>
        <Form.Control
          as='select'
          name='category'
          value={values.category}
          onChange={handleChange}
        >
          <option>Select...</option>
          {categories.map((value, index) => {
            let CategorySlug = value.slug.replace(/_/g, ' / ')
            if (
              value.name !== 'Free' &&
              value.name !== 'Featured' &&
              value.name !== 'Uncategorized'
            )
              return (
                <option key={index} value={value.id}>
                  {CategorySlug}
                </option>
              )
          })}
        </Form.Control>

        <span className='errorMessage'>{errors.category}</span>
      </Form.Group>
      <Form.Group controlId='formGridQType'>
        <Form.Label>Question Category</Form.Label>
        <Form.Control
          as='select'
          name='qType'
          value={values.qType}
          onChange={handleChange}
          // ref={selectOptionValueRef}
        >
          <option value='matrix'>Matrix</option>
          <option value='sba'>SBA</option>
        </Form.Control>

        <span className='errorMessage'>{errors.category}</span>
      </Form.Group>

      <Form.Group className='d-none' controlId='formGroupQuestionQText'>
        <Form.Label>
          <span className='mr-3'>Question Text</span>
        </Form.Label>
        <Form.Control
          type='text'
          placeholder='Question text'
          name='qText'
          value={values.qText}
          onChange={handleChange}
        />

        <span className='errorMessage'>{errors.qText}</span>
      </Form.Group>
      <div className='mb-2'>
        <p>Question text</p>
        <MdEditor
          name='qText'
          style={{ height: '200px' }}
          value={values.qText}
          renderHTML={(text) => (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
          )}
          onChange={handleEditorChange}
        />
        <span className='errorMessage'>{errors.qText}</span>
      </div>
    </div>
  )
}
