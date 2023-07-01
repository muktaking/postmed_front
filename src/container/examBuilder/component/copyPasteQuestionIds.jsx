import React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'

export default function CopyPasteQuestionIds({
  massQIdsHandler,
  addToQuestionCartHandler,
  questionCart
}) {
  function questionCartConvertToString() {
    return Array.from(questionCart)
      .map((qId) => qId)
      .join(',')
  }
  return (
    <div>
      <div className='my-3'>
        <Form>
          <Form.Group controlId='massQIds'>
            <Form.Label>
              Enter Question's Ids (Comma seperated Values)
            </Form.Label>
            <Form.Control
              type='text'
              name=' massQIds'
              placeholder='12,3,25,103,...'
              onChange={massQIdsHandler}
            />
          </Form.Group>
        </Form>
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <Button
          onClick={addToQuestionCartHandler}
          className='mr-5 mb-2 mb-sm-0'
        >
          Add Comma Seperated Questions to Cart
        </Button>
      </div>
      <div className='my-3'>
        <Alert className='d-flex justify-content-between' variant='success'>
          <span className='mr-3 overflow-auto'>
            {Array.from(questionCart)
              .map((qId) => qId)
              .join(',')}
          </span>
          <Button
            variant='primary'
            onClick={() => {
              navigator.clipboard.writeText(questionCartConvertToString())
            }}
          >
            Copy
          </Button>
        </Alert>
      </div>
    </div>
  )
}
