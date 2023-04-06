import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import * as moment from 'dayjs'
import { useParams } from 'react-router'
import { Badge, Button, Card, Modal, Spinner, Toast } from 'react-bootstrap'
import { FaCalendarAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import MetaInfo from '../../components/seo/metainfo'
import SocialShare from '../../components/socialShare/socialShare'
import { RoutesConfig } from '../../config/routes.config'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

const styles = {
  position: 'fixed',
  top: '70px',
  right: '10px',
  zIndex: 100
}

export default function CourseDetails() {
  const [course, setCourse] = useState(null)
  const [res, setRes] = useState(null)
  let { id } = useParams()
  const isAuthenticated = useSelector((state) => state.auth.token !== null)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/' + id)
      .then((res) => {
        setCourse(res.data)
        console.log(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

  const handleClose = () => {
    setRes(null)
  }

  return (
    <>
      <Toast show={res} onClose={handleClose} style={styles}>
        <Toast.Header className='bg-warning text-white'>
          <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
          <strong className='me-auto'>Server Response</strong>
        </Toast.Header>
        <Toast.Body>{res}</Toast.Body>
      </Toast>
      <div className='d-flex justify-content-around flex-wrap'>
        {course && (
          <Card className='my-3 pt-3' style={{ minWidth: '350px' }}>
            <LazyLoadComponent>
              <Card.Img
                variant='top'
                src={
                  course.imageUrl
                    ? `${process.env.REACT_APP_SITE_URL}/${course.imageUrl}`
                    : `${process.env.REACT_APP_SITE_URL}/images/courses/index.png`
                }
                className='mx-auto'
                style={{ width: '350px' }}
              />
            </LazyLoadComponent>
            <Card.Body>
              <Card.Title
                className='text-center'
                style={{ fontSize: '1.4rem', fontWeight: '900' }}
              >
                {course.title}
              </Card.Title>

              <Card.Text>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {course.description}
                </ReactMarkdown>
              </Card.Text>
              <Card.Text className='d-flex justify-content-between'>
                <div>
                  <FaMoneyCheckAlt size='1.5rem' />{' '}
                  <span className='bg-info text-white px-3 py-1'>
                    {course.price ? course.price + ' Taka' : 'Free'}
                  </span>
                </div>
                <div>
                  <FaCalendarAlt size='1.5rem' />{' '}
                  <span className='bg-secondary text-white px-3 py-1'>
                    {moment
                      .duration(moment(course.endDate).diff(course.startDate))
                      .humanize()}
                  </span>
                </div>
              </Card.Text>
              {isAuthenticated && (
                <Card.Text className='text-center mt-2'>
                  <Link to={'/exams/courses/' + course.id}>
                    <Button variant='primary'>Go to Exams</Button>
                  </Link>
                </Card.Text>
              )}
              <hr />
              <div className='d-flex justify-content-center align-items-center'>
                {isAuthenticated ? (
                  <Button
                    variant='primary'
                    //size='lg'
                    //className='px-5'
                    style={{ width: '300px', height: '55px', fontSize: '18px' }}
                    onClick={() => {
                      //setAuthorizationToken(token);
                      axios({
                        baseURL: process.env.REACT_APP_SITE_URL,
                        url: '/courses/enroll/' + course.id,
                        method: 'patch'
                      })
                        .then((response) => {
                          setRes(response.data.message)
                        })
                        .catch((error) => {
                          setRes(
                            'Sorry. Enrollment to this course is not possible due to server error. Please contact with admin.'
                          )
                        })
                    }}
                  >
                    Enroll
                  </Button>
                ) : (
                  <Link to={'/login'}>
                    <Badge variant='warning' className='p-2'>
                      Please Login to Enroll.
                    </Badge>
                  </Link>
                )}
              </div>
              <hr />
              <Card.Text className='text-muted text-center'>
                <span>Start: {moment(course.startDate).fromNow()}</span>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <SocialShare
                title={course.title}
                description={course.description}
                url=''
              />
            </Card.Footer>
          </Card>
        )}
      </div>
    </>
  )
}
