import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'

export default function StemTwo({
  values,
  stems,
  errors,
  handleChange,
  stemInc,
  stemDec
}) {
  console.log(values)

  return (
    <div>
      {stems.map((stem, index) => (
        <Row className='pr-3 pl-2 mt-1'>
          <Col lg={5}>
            <Form.Group controlId='formGroupQuestionStem'>
              <InputGroup className='mb-2'>
                <InputGroup.Prepend>
                  <InputGroup.Text>{index}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type='text'
                  placeholder='stem...'
                  name={'qStem' + index}
                  value={values['qStem' + index]}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col lg={2}>
            <Form.Group as={Col} controlId='formGroupQuestionStemAnswer'>
              {values.qType === 'matrix' ? (
                <>
                  <Form.Check
                    inline
                    type='radio'
                    label='True'
                    name={'aStem' + index}
                    id='formHorizontalRadios1'
                    value={1}
                    checked={values['aStem' + index] === '1'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type='radio'
                    label='False'
                    name={'aStem' + index}
                    id='formHorizontalRadios2'
                    value={0}
                    checked={values['aStem' + index] === '0'}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <Form.Check
                  type='radio'
                  name={'aStemSba'}
                  id='formHorizontalRadios1'
                  value={index}
                  checked={values['aStemSba'] === index.toString()}
                  onChange={handleChange}
                />
              )}
            </Form.Group>
          </Col>
          <Col lg={5}>
            <Form.Group as={Col} controlId='formGroupQuestionStemFeedBack'>
              <Form.Control
                type='text'
                placeholder='FeedBack'
                name={'fbStem' + index}
                value={values['fbStem' + index]}
                // value={Question ? Question.title : null}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
      ))}
      <div className='mt-2 mb-5'>
        <Button className='mr-3' onClick={stemInc}>
          Plus
        </Button>

        <Button
          onClick={(values) => {
            stemDec(values)
          }}
        >
          Minus
        </Button>
      </div>
    </div>
  )
}
