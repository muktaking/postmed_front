import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { resetResponseLoader } from '../../store/question'
import CreateQuestion from './create'
import EditQuestion from './edit'
import SelectQuestions from './selectQuestions'
import Upload from './upload'
import { useQuery } from '../../utils/queryRouter'
import { Link } from 'react-router-dom'

const DefaultView = ({ viewHandler, disable }) => {
  return (
    <div className='my-3'>
      <MetaInfo {...RoutesConfig.Question.metaInfo} />

      <Link to='/question?action=create'>
        <Button
          variant='primary'
          size='bg'
          className='mr-3 mt-3'
          disabled={disable === 'create'}
        >
          Create Question
        </Button>
      </Link>
      <Link to='/question?action=upload'>
        <Button
          variant='primary'
          size='bg'
          className='mr-3 mt-3'
          disabled={disable === 'upload'}
        >
          Upload An Excel File
        </Button>
      </Link>
      <Link to='/question?action=select'>
        <Button
          variant='primary'
          size='bg'
          className='mt-3'
          disabled={disable === 'select'}
        >
          Select Questions For Edit
        </Button>
      </Link>
    </div>
  )
}

export default function QuestionBuilder() {
  const [view, setView] = useState()
  const dispatch = useDispatch()

  const query = useQuery()
  const questionId = query.get('questionId')
  const action = query.get('action')

  const viewHandler = (view) => {
    dispatch(resetResponseLoader())
    setView(view)
  }

  useEffect(() => {
    if (action === 'edit') {
      setView('edit')
    } else if (action === 'upload') {
      setView('upload')
    } else if (action === 'select') {
      setView('select')
    } else {
      setView('create')
    }
  }, [action])

  switch (view) {
    case 'create':
      return (
        <>
          {' '}
          <DefaultView viewHandler={viewHandler} disable='create' />{' '}
          <CreateQuestion viewHandler={viewHandler} />{' '}
        </>
      )
    case 'upload':
      return (
        <>
          {' '}
          <DefaultView viewHandler={viewHandler} disable='upload' />{' '}
          <Upload viewHandler={viewHandler} />{' '}
        </>
      )
    case 'select':
      return (
        <>
          {' '}
          <DefaultView viewHandler={viewHandler} disable='select' />{' '}
          <SelectQuestions viewHandler={viewHandler} />{' '}
        </>
      )

    case 'edit':
      return (
        <>
          {' '}
          <DefaultView viewHandler={viewHandler} />{' '}
          <EditQuestion viewHandler={viewHandler} id={questionId} />{' '}
        </>
      )

    default:
      return <DefaultView viewHandler={viewHandler} />
  }
}
