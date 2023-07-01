import React from 'react'
import { Form } from 'react-bootstrap'
import FilterQuestionsBySearch from './filterQuestionsBySearch'
import ExamCard from './card/card'

const Filter = ({
  handleChange,
  handleSwitch,
  categories,
  categoryParamId,
  qTypeState,
  handleSearch,
  searchRegxErrorMsg
}) => {
  return (
    <ExamCard header='Filter' showHeader={true}>
      <Form.Group controlId='formGridParent'>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as='select'
          name='categoryId'
          onChange={handleChange}
          value={categoryParamId}
        >
          <option value='top'>Top...</option>
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
      <FilterQuestionsBySearch handleSearch={handleSearch} />
      <p className='text-danger'>{searchRegxErrorMsg}</p>
    </ExamCard>
  )
}

export default Filter
