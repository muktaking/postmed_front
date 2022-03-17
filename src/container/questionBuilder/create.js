import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Form, Spinner, Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { resetResponseLoader } from '../../store/question'
import MiniQues from './component/miniques'
import StepOne from './component/stepOne'
import StepThree from './component/stepThree'
import StepTwo from './component/stepTwo'
import { stem, submitHandler, validator } from './component/utils'

export default function Index({ viewHandler }) {
  const [stemNum, setStemNum] = useState(5)
  const [stems, setStems] = useState(stem(5))
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.question.loading)
  const res = useSelector((state) => state.question.response)

  const stemsInc = () => {
    setStems(stem(stemNum + 1))
    setStemNum(stemNum + 1)
  }
  const stemDec = (values) => {
    delete values['qStem' + (stemNum - 1)]
    delete values['aStem' + (stemNum - 1)]
    delete values['fbStem' + (stemNum - 1)]
    setStems(stem(stemNum - 1))
    setStemNum(stemNum - 1)
  }

  const setRes = () => {
    dispatch(resetResponseLoader())
  }

  return (
    <div>
      {loading && (
        <Spinner
          animation='grow'
          role='status'
          variant='dark'
          className='content-center'
        ></Spinner>
      )}
      <Toast
        show={res}
        onClose={setRes}
        style={{ position: 'fixed', right: '20px' }}
      >
        <Toast.Header>
          <strong className='mr-auto'>
            {res && 'result' in res
              ? 'Question Created Successfully'
              : 'Error Message'}
          </strong>
        </Toast.Header>
        <Toast.Body>
          {res && 'result' in res ? (
            <MiniQues question={res.result} viewHandler={viewHandler} />
          ) : (
            res
          )}
        </Toast.Body>
      </Toast>

      <h3>Create Question</h3>

      <Formik
        initialValues={{
          title: '',
          category: '',
          qType: 'matrix',
          qText: '',
          stems: [...stems],
          generalFeedback: '',
          tags: ''
        }}
        validate={validator()}
        onSubmit={submitHandler(stemNum, dispatch)}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <StepOne
              values={values}
              qText={values.qText}
              errors={errors}
              handleChange={handleChange}
            />
            <StepTwo
              stems={stems}
              values={values}
              errors={errors}
              handleChange={handleChange}
              stemInc={stemsInc}
              stemDec={stemDec}
            />
            <StepThree
              values={values}
              errors={errors}
              handleChange={handleChange}
            />
            <Button type='submit' className='mt-3 btn-submit'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
