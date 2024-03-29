import React from 'react'
import { faculty } from '../../../utils/faculty'
import {
  FaFlask,
  FaCapsules,
  FaSyringe,
  FaFemale,
  FaBaby
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function facultyToIcon(num) {
  switch (num) {
    case 1:
      return <FaFlask />
    case 2:
      return <FaCapsules />
    case 3:
      return <FaSyringe />
    case 4:
      return <FaFemale />
    case 5:
      return <FaBaby />
    default:
      return <FaCapsules />
  }
}

export default function FindCourseByCategories() {
  return (
    <div className='mt-4 py-2'>
      <p className='lead text-center' style={{ fontWeight: 600 }}>
        Find Courses By Subjects
      </p>
      {/* <h3 className='heading text-center'>Find Courses By Subjects</h3>
      <div className='heading-underline'></div> */}
      <div className='d-flex text-dark mt-3 flex-wrap justify-content-center'>
        {Object.keys(faculty)
          .slice(1)
          .map((key, ind) => (
            <Link
              key={key + ind}
              to={'/courses?faculty=' + (ind + 1)}
              className='text-dark find-course-categories-link'
            >
              <div className='shadow bg-light px-3 py-2 mr-2 mb-2 d-flex justify-content-center align-items-center rounded-pill'>
                <span className='mr-2'>{facultyToIcon(ind + 1)}</span>
                <span>{key.toUpperCase()}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
