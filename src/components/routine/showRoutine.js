import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Tab, Tabs, Toast } from 'react-bootstrap'
import { GrUpdate } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import AddASyllabus from './addASyllabus'
import SingleRoutineCard from './singleRoutineCard'

export function getStatus(start, end) {
  const date = new Date()
  const startDate = new Date(start)
  const endDate = new Date(end)

  if (
    startDate.getTime() <= date.getTime() &&
    endDate.getTime() >= date.getTime()
  ) {
    return 'Ongoing'
  }

  if (endDate.getTime() <= date.getTime()) {
    return 'Past'
  }

  return 'Upcoming'
}

export default function ShowRoutine({ showRaw, id, title }) {
  const [routine, setRoutine] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState(null)
  const [editSyllabusVale, setEditSyllabusValue] = useState([])
  const [courses, setCourses] = useState([])

  const modalClose = () => {
    setShowModal(false)
  }

  const handleUpdate = () => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/routine/raw')
      .then((res) => {
        setRoutine(res.data)
      })
      .catch()
  }

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/')
      .then((res) => {
        setCourses(res.data)
      })
      .catch((e) => console.log(e))

    axios
      .get(
        process.env.REACT_APP_SITE_URL +
          '/routine' +
          (showRaw ? '/raw' : '/course/' + id)
      )
      .then((res) => {
        setRoutine(res.data)
      })
      .catch()
  }, [showRaw])

  return (
    <div className='container'>
      <Modal show={showModal} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit The Syllabus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddASyllabus defaultValue={editSyllabusVale} />
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
                  <Toast
                    show={msg}
                    onClose={() => {
                      setMsg(null)
                    }}
                    style={{ position: 'absolute', right: '10px', top: '10px' }}
                  >
                    <Toast.Header>
                      <strong className='mr-auto'>Message</strong>
                    </Toast.Header>
                    <Toast.Body>{msg}</Toast.Body>
                  </Toast>
                  <h4 className='card-title'>Raw Routine</h4>
                  <Button variant='light' onClick={handleUpdate}>
                    <GrUpdate size={'1.3rem'} />
                  </Button>
                </>
              )}
              <div
                id='content'
                style={{ maxHeight: '350px', overflowY: 'scroll' }}
              >
                {' '}
                {showRaw ? (
                  <Tabs defaultActiveKey='0' id='uncontrolled-tab-example'>
                    {courses.map((course, ind) => (
                      <Tab eventKey={ind} title={course.title}>
                        {
                          <ul className='timeline mt-3'>
                            {routine
                              .filter(
                                (syllabus) => syllabus.courseId === course.id
                              )
                              .map((syllabus) => (
                                <SingleRoutineCard
                                  syllabus={syllabus}
                                  showRaw={showRaw}
                                  getStatus={getStatus}
                                  setShowModal={setShowModal}
                                  setEditSyllabusValue={setEditSyllabusValue}
                                  setMsg={setMsg}
                                />
                              ))}
                          </ul>
                        }
                      </Tab>
                    ))}
                  </Tabs>
                ) : (
                  <div>
                    <ul className='timeline'>
                      {routine.map((syllabus) => (
                        <SingleRoutineCard
                          key={syllabus.id}
                          syllabus={syllabus}
                          showRaw={showRaw}
                          getStatus={getStatus}
                          setShowModal={setShowModal}
                          setEditSyllabusValue={setEditSyllabusValue}
                          setMsg={setMsg}
                        />
                      ))}
                    </ul>
                    <Link
                      to={{
                        pathname: '/print',
                        state: { fromRoutine: true, routine, title }
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '-15px',
                        right: '50px'
                      }}
                    >
                      <Button>Details</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
