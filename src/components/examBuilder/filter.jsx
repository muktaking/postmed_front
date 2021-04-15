import React from 'react'
import { Form } from 'react-bootstrap'
import ExamCard from './card/card'

const filter = ({ handleChange, categories }) => {
  return (
    <ExamCard header='Filter' showHeader={true}>
      <Form.Group controlId='formGridParent'>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as='select'
          defaultValue='top'
          name='categoryId'
          onChange={handleChange}
        >
          <option disabled value='top'>
            Top...
          </option>
          {categories.map((value) => {
            let categorySlug = value.slug.replace(/_/g, ' / ')
            return <option value={value.id}>{categorySlug}</option>
          })}
        </Form.Control>
      </Form.Group>
    </ExamCard>
  )
}

export default filter
