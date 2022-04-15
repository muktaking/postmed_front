import axios from 'axios'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Form, Spinner, Toast } from 'react-bootstrap'
import MultiStep from 'react-multistep'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../store/category'
import { createQuestionLoader } from '../../store/question'
import StepThree from '././editQuestion/stepThree'
import StepTwo from '././editQuestion/stepTwo'
import StepOne from './editQuestion/stepOne'

const btnStyle = {
  backgroundColor: '#44c767',
  borderRadius: '28px',
  border: '1px solid #18ab29',
  display: 'inline-block',
  cursor: 'pointer',
  color: '#ffffff',
  fontFamily: ' Arial',
  fontSize: '17px',
  padding: '8px 31px',
  marginRight: '20px',
  textDecoration: 'none',
  textShadow: '0px 1px 0px #2f6627'
}

const stem = (initialStems) => {
  if (typeof initialStems === 'number') {
    const arr = []
    for (let i = 0; i < initialStems; i++) {
      arr.push({
        qStem: '',
        aStem: '',
        fbStem: ''
      })
    }
    return arr
  }
  return initialStems
}

export default function Index({ initialValues }) {
  const [stemNum, setStemNum] = useState(5)
  const [stems, setStems] = useState(stem(5))
  const [showA, setShowA] = useState(true)
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)
  const loading = useSelector((state) => state.question.loading)
  const res = useSelector((state) => state.question.response)
  const [data, setData] = useState({})
  useEffect(() => {
    dispatch(fetchCategory())

    axios
      .get(process.env.REACT_APP_SITE_URL + '/questions/73')
      .then((response) => {
        let question = {
          title: response.data.title,
          category: response.data.categoryId,
          qType: response.data.qType,
          qText: response.data.qText,
          generalFeedback: response.data.generalFeedback,
          tags: response.data.tags
        }
        response.data.stems.forEach((stem, index) => {
          question = {
            ...question,
            ['qStem' + index]: stem.qStem,
            ['aStem' + index]: stem.aStem.toString(),
            ['fbStem' + index]: stem.fbStem,
            aStemSba: stem.aStem.toString()
          }
        })
        setData(question)
      })
      .catch((e) => console.log(e))
  }, [dispatch])

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
  const toggleShowA = () => setShowA(!showA)

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
      {res && (
        <Toast
          show={showA}
          onClose={toggleShowA}
          style={{ position: 'fixed', right: '20px' }}
        >
          <Toast.Header>
            <strong className='mr-auto'>Response</strong>
          </Toast.Header>
          <Toast.Body>
            {'result' in res ? (
              <p>
                {res.result.title} , {res.result.qType}
              </p>
            ) : (
              res
            )}
          </Toast.Body>
        </Toast>
      )}

      <h3>Create Question</h3>

      <Formik
        enableReinitialize
        initialValues={data}
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
            <MultiStep
              showNavigation={true}
              steps={[
                {
                  name: 'StepOne',
                  component: (
                    <StepOne
                      categories={categories}
                      values={values}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  )
                },
                {
                  name: 'StepTwo',
                  component: (
                    <StepTwo
                      stems={stems}
                      values={values}
                      errors={errors}
                      handleChange={handleChange}
                      stemInc={stemsInc}
                      stemDec={stemDec}
                    />
                  )
                },
                {
                  name: 'StepThree',
                  component: (
                    <StepThree
                      values={values}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  )
                }
              ]}
              prevStyle={btnStyle}
              nextStyle={btnStyle}
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

function submitHandler(stemNum, dispatch) {
  return (values, { setSubmitting }) => {
    let error = ''

    if (values.stems.length > 0 && values['qStem0']) {
      values.stems.forEach((stem, index) => {
        if (
          index > 0 &&
          !values['qStem' + (index - 1)] &&
          values['qStem' + index]
        ) {
          error += ` Stem's No.${index - 1} qStem can not be empty`
        } else if (
          values.qType === 'matrix' &&
          (values['aStem' + index] || values['fbStem' + index]) &&
          !values['qStem' + index]
        ) {
          error += ` Stem's No.${index} qStem can not be empty`
        } else if (
          values.qType === 'matrix' &&
          values['qStem' + index] &&
          !values['aStem' + index]
        ) {
          error += ` Stem's No.${index} qStem or aStem can not be empty`
        } else if (
          values.qType === 'sba' &&
          values['fbStem' + index] &&
          !values['qStem' + index]
        ) {
          error += ` Stem's No.${index} qStem can not be empty`
        } else if (
          values.qType === 'sba' &&
          !values['qStem' + values['aStemSba']]
        ) {
          error += ` Stem's No.${values['aStemSba']} qStem or aStem can not be empty`
        }
        if (error === '') {
          stem['qStem'] = values['qStem' + index]
          stem['aStem'] =
            values.qType === 'matrix'
              ? values['aStem' + index]
              : values['aStemSba'] + 1
          stem['fbStem'] = values['fbStem' + index]
          // delete values['qStem' + index];
          // delete values['aStem' + index];
          // delete values['fbStem' + index];
          // delete values['aStemSba'];
        }
      })
    } else {
      error += 'Stems can not be emty'
      values.stems = [...stem(stemNum)]
    }

    if (error === '') {
      values.stems = values.stems.filter((stem) => stem.qStem)
      dispatch(
        createQuestionLoader({
          title: values.title,
          category: values.category,
          qType: values.qType,
          qText: values.qText,
          stem: values.stems,
          generalFeedback: values.generalFeedback,
          tags: [values.tags]
        })
      )
      setSubmitting(true)
    } else {
      alert(JSON.stringify(error, null, 2))
      setSubmitting(false)
    }
  }
}

function validator() {
  return (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    } else if (!values.category) {
      errors.category = 'Required'
    } else if (!values.qText) {
      errors.qText = 'Required'
    }

    return errors
  }
}
