import React, { useRef } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

export default function FilterQuestionsBySearch({ handleSearch }) {
  const qTypeSearchRef = useRef()
  return (
    <div className='mt-4'>
      <p>Search</p>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='qTypeSearch'>qType Search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder='hypokalemia'
          aria-label='qTypeSearch'
          aria-describedby='qTypeSearch'
          ref={qTypeSearchRef}
        />
      </InputGroup>
      <Button
        onClick={() => {
          handleSearch(qTypeSearchRef.current.value)
        }}
      >
        Submit
      </Button>
    </div>
  )
}
