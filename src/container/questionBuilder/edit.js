import axios from 'axios'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Form, Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import { resetResponseLoader } from '../../store/question'
import MiniQues from './component/miniques'
import StepOne from './component/stepOne'
import StepThree from './component/stepThree'
import StepTwo from './component/stepTwo'
import { stem, submitHandler, validator } from './component/utils'

const resStyle = {
  position: 'fixed',
  right: '20px',
  zIndex: '10000'
}

export default function Index({ viewHandler, id }) {
  const [stemNum, setStemNum] = useState(5)
  const [stems, setStems] = useState(stem(5))
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.question.loading)
  const res = useSelector((state) => state.question.response)

  const [data, setData] = useState({
    id: null,
    title: '',
    category: '',
    qType: 'matrix',
    qText: '',
    stems: [...stems],
    generalFeedback: '',
    tags: ''
  })

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/questions/' + id)
      .then((response) => {
        let question = {
          id: response.data.id,
          title: response.data.title,
          category: response.data.categoryId,
          qType: response.data.qType,
          qText: response.data.qText,
          stems: response.data.stems,
          generalFeedback: response.data.generalFeedback,
          tags: response.data.tags
        }
        response.data.stems.forEach((stem, index) => {
          question = {
            ...question,
            ['qStem' + index]: stem.qStem,
            ['aStem' + index]:
              question.qType === 'matrix' && stem.aStem.toString(),
            ['fbStem' + index]: stem.fbStem,
            aStemSba: null
          }
        })
        if (response.data.qType === 'sba')
          question.aStemSba = (response.data.stems[0].aStem - 1).toString()
        setData(question)
      })
      .catch((e) => console.log(e))
  }, [id])

  const setRes = () => {
    dispatch(resetResponseLoader())
  }

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

  return (
    <div>
      {loading && <CircleLoader />}
      {
        <Toast show={res} onClose={setRes} style={resStyle}>
          <Toast.Header>
            <strong className='mr-auto'>Question Edited Response</strong>
          </Toast.Header>
          <Toast.Body>
            {res && 'id' in res ? (
              <MiniQues question={res} viewHandler={viewHandler} />
            ) : (
              'Error occured'
            )}
          </Toast.Body>
        </Toast>
      }

      <h3>Edit Question</h3>

      <Formik
        enableReinitialize
        initialValues={data}
        validate={validator()}
        onSubmit={submitHandler(stemNum, dispatch, true)}
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
