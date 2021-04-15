import React from 'react'
import { Badge, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteQuestionLoader } from '../../../store/question'

export const PopoverWrapper = React.forwardRef(
  ({ questionId, ...props }, ref) => {
    const dispatch = useDispatch()
    return (
      <Popover id='popover-basic' {...props} ref={ref}>
        <Popover.Title as='h3'>
          Are You sure to delete this question
        </Popover.Title>
        <Popover.Content>
          <Button
            variant='danger'
            size='sm'
            className='mx-2'
            onClick={() => {
              dispatch(deleteQuestionLoader(questionId))
            }}
          >
            Yes
          </Button>
        </Popover.Content>
      </Popover>
    )
  }
)

export default function Miniques({ question, viewHandler }) {
  return (
    <div>
      <p style={{ fontSize: '1.1rem' }}>
        {question.qText + ' -->  '}
        <Badge variant='secondary'>{question.qType + ' '}</Badge>
        <Button
          variant='primary'
          size='sm'
          className='mx-2'
          disabled={!viewHandler}
          onClick={() => {
            viewHandler('edit', question.id)
          }}
        >
          {' '}
          Edit{' '}
        </Button>

        <OverlayTrigger
          trigger='click'
          placement='bottom'
          overlay={<PopoverWrapper questionId={question.id} />}
        >
          <Button variant='danger' size='sm' className='mr-2'>
            Delete
          </Button>
        </OverlayTrigger>
      </p>
    </div>
  )
}
