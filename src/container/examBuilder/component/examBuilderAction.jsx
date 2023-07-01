import React from 'react'
import { Form } from 'react-bootstrap'
import ExamCard from '../../../components/examBuilder/card/card'

export default function ExamBuilderAction({ actionHandleChange }) {
  return (
    <ExamCard showHeader={true} header='Action' headerBgColor='light'>
      <Form.Group controlId='formGridParent'>
        <Form.Label>Actions</Form.Label>
        <Form.Control as='select' name='action' onChange={actionHandleChange}>
          <option value=''>Select...</option>
          <option value='mAll'>Mark All</option>
          <option value='uAll'>UnMark All</option>
          <option value='mPQ'>Mark The On Page's Questiones </option>
          <option value='uPQ'>UnMark The On Page's Questiones</option>
        </Form.Control>
      </Form.Group>
    </ExamCard>
  )
}
