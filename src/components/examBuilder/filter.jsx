import React from 'react'
import { Form } from 'react-bootstrap'
import ExamCard from './card/card'

const filter = ({ handleChange, handleSwitch, categories, qTypeState }) => {
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
      <Form.Check
        name='sbaOnly'
        type='switch'
        id='sba-only-switch'
        label='Only SBA'
        onChange={handleSwitch}
        disabled={qTypeState === 'matrix'}
      />
      <Form.Check
        name='matrixOnly'
        type='switch'
        id='matrix-only-switch'
        label='Only Matrix'
        onChange={handleSwitch}
        disabled={qTypeState === 'sba'}
      />
    </ExamCard>
  )
}

export default filter
