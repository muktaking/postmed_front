import axios from 'axios'
//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import {
  Button,
  Image,
  Modal,
  OverlayTrigger,
  Toast,
  Tooltip
} from 'react-bootstrap'
import { GrUpdate } from 'react-icons/gr'
import AddACourse from './addACourse'

const RenderTooltip = React.forwardRef(
  ({ id, setMsg, updater, ...props }, ref) => (
    <Tooltip ref={ref} id='button-tooltip' {...props}>
      <p>Are you sure to delete this Course.</p>
      <Button
        variant='danger'
        onClick={() => {
          axios
            .delete(process.env.REACT_APP_SITE_URL + '/courses/' + id)
            .then((res) => {
              //console.log(res)
              setMsg(res.data.message)
              updater()
            })
            .catch((e) => {
              //console.log(e)
              setMsg(e.message)
            })
        }}
      >
        Yes
      </Button>
    </Tooltip>
  )
)

export default function ShowCourses({ msg, setMsg, showRaw }) {
  const [courses, setCourses] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editCourseValue, setEditCourseValue] = useState([])

  const modalClose = () => {
    setShowModal(false)
  }

  const handleUpdate = () => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/raw')
      .then((res) => {
        setCourses(res.data)
      })
      .catch()
  }

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/raw')
      .then((res) => {
        setCourses(res.data)
      })
      .catch()
  }, [showRaw])
  return (
    <div className='container'>
      <Modal show={showModal} onHide={modalClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>
            {editCourseValue[7] ? 'Duplicate The Course' : 'Edit The Course'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddACourse
            defaultValue={editCourseValue}
            updater={handleUpdate}
            modalClose={modalClose}
            msg={msg}
            setMsg={setMsg}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-body'>
              {showRaw && (
                <>
                  <h4 className='card-title'>Courses</h4>
                  <Button variant='light' onClick={handleUpdate}>
                    <GrUpdate size={'1.3rem'} />
                  </Button>
                </>
              )}
              <div
                id='content'
                style={{ maxHeight: '350px', overflowY: 'scroll' }}
              >
                <ul className='timeline'>
                  {courses.map((course, ind) => (
                    <li
                      key={course.id}
                      className='event mb-3'
                      data-date={moment(course.startDate).format(
                        'YYYY-MMM-DD, h:mm a'
                      )}
                    >
                      {course.imageUrl && (
                        <Image
                          src={
                            process.env.REACT_APP_SITE_URL +
                            '/' +
                            course.imageUrl
                          }
                          thumbnail
                          width={100}
                          height={100}
                        />
                      )}
                      <p className='mt-2'>{course.title}</p>
                      <p className='text-danger'>{course.description}</p>
                      <p className='text-primary'>Price: {course.price}</p>
                      <p className='text-secondary'>
                        Course ends:{' '}
                        {moment(course.endDate).format('YYYY-MMM-DD, h:mm a')}
                      </p>
                      {showRaw && (
                        <>
                          <Button
                            variant='warning'
                            onClick={() => {
                              setShowModal(true)
                              setEditCourseValue([
                                course.id,
                                course.title,
                                course.description,
                                course.price,
                                course.imageUrl,
                                new Date(course.startDate),
                                new Date(course.endDate),
                                false //duplicate boolean
                              ])
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant='primary'
                            className='ml-2'
                            onClick={() => {
                              setShowModal(true)
                              setEditCourseValue([
                                course.id,
                                course.title,
                                course.description,
                                course.price,
                                course.imageUrl,
                                new Date(course.startDate),
                                new Date(course.endDate),
                                true //duplicate boolean
                              ])
                            }}
                          >
                            Duplicate
                          </Button>
                          <OverlayTrigger
                            trigger='click'
                            placement='right'
                            overlay={
                              <RenderTooltip
                                setMsg={setMsg}
                                id={course.id}
                                updater={handleUpdate}
                              />
                            }
                          >
                            <Button variant='danger' className='ml-2'>
                              Delete
                            </Button>
                          </OverlayTrigger>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
