//import moment from 'moment'
import * as moment from 'dayjs'
import React from 'react'
import { BsFileText } from 'react-icons/bs'

import StartExamBtn from './startExamBtn'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

export default function ExamByCat({ exam, courseId = null }) {
  return (
    <div
      className='mb-2 ml-2 pt-3 px-2 border border-secondary' // bg-secondary text-white
      style={{ width: '350px' }}
    >
      <div>
        <h4 className=''>
          {/* <BsLayersFill size='1.5rem' /> */}
          <span className=''>{exam.title}</span>
        </h4>
      </div>
      <div className='mt-1'>
        <p className=''>
          <BsFileText size='1.5rem' className='m-1' />
          <span className='ml-2'>{exam.description}</span>
        </p>
        <hr />
        <StartExamBtn exam={exam} courseId={courseId} />
        <hr />
        <p className='text-center text-muted'>
          Start: {moment(exam.startDate).fromNow()}
        </p>
      </div>
    </div>
  )
}
