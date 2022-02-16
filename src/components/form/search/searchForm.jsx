import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const searchForm = (props) => {
  return (
    <Form inline>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Search...'
          className={props.formControl}
        />
        <Button
          variant='light'
          type='search
        '
          className={props.searchBtn}
        ></Button>
      </Form.Group>
    </Form>
  )
}

export default searchForm
