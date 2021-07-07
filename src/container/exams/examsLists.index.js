import React, { useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FaFlickr, FaListAlt } from 'react-icons/fa'
import LatestExam from './component/latest'
import ExamLists from './examLists'
import ExamListsByCat from './examListsByCat'

const whatToshowFirst =
  process.env.REACT_APP_APP_TYPE === 'public' ? [2, 1] : [1, 2]
const tooltip =
  whatToshowFirst[0] === 1
    ? ['Browse By Exam Type', 'Browse By Exam Categories']
    : ['Browse By Exam Categories', 'Browse By Exam Type']

function DefaultView({ handler, id }) {
  return (
    <>
      <LatestExam />
      <div className='text-center'>
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip>{tooltip[0]}</Tooltip>}
        >
          <FaListAlt
            size='2.2rem'
            style={{ marginLeft: '10px' }}
            className={id === 2 && 'bg-danger text-white p-2'}
            onClick={() => {
              handler(whatToshowFirst[0])
            }}
          />
        </OverlayTrigger>
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip>{tooltip[1]}</Tooltip>}
        >
          <FaFlickr
            size='2.2rem'
            style={{ marginLeft: '10px' }}
            className={id === 1 && 'bg-danger text-white p-2'}
            onClick={() => {
              handler(whatToshowFirst[1])
            }}
          />
        </OverlayTrigger>

        <hr className='w-50' />
      </div>
    </>
  )
}

export default function ExamsListsIndex() {
  const [id, setId] = useState(whatToshowFirst[0])
  const viewHandler = (id) => {
    setId(id)
  }
  switch (id) {
    case 1:
      return (
        <>
          <DefaultView handler={viewHandler} id={id} /> <ExamLists />{' '}
        </>
      )
    case 2:
      return (
        <>
          <DefaultView handler={viewHandler} id={id} /> <ExamListsByCat />{' '}
        </>
      )

    default:
      return (
        <>
          <DefaultView handler={viewHandler} id={id} /> <ExamLists />{' '}
        </>
      )
  }
}
