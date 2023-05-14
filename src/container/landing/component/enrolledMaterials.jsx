import React from 'react'
import { FaTh, FaBookOpen, FaChartBar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const enrolledNavItems = [
  {
    title: 'Dashboard',
    icon: <FaTh className='mr-1' size={'1rem'} />,
    link: '/dashboard'
  },
  {
    title: 'Exams',
    icon: <FaBookOpen className='mr-1' size={'1rem'} />,
    link: '/exams'
  },
  {
    title: 'Reports',
    icon: <FaChartBar className='mr-1' size={'1rem'} />,
    link: '/reports'
  }
]

export default function EnrolledMaterials() {
  return (
    <div className='text-dark bg-light hideInMd'>
      <div className='py-2 d-flex flex-wrap justify-content-center'>
        {enrolledNavItems.map((item, ind) => (
          <Link to={item.link} className='text-dark'>
            <div
              className={
                'mr-2 d-flex justify-content-center align-items-center ' +
                (ind !== 2 ? 'border-right pr-2' : '')
              }
            >
              {item.icon}
              <span className='' style={{ fontSize: '1.1rem' }}>
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
