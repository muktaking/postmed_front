import React from 'react'
import { FaTh, FaBookOpen, FaUserGraduate, FaChartBar } from 'react-icons/fa'
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
  },
  {
    title: 'Profile',
    icon: <FaUserGraduate className='mr-1' size={'1rem'} />,
    link: '/profile'
  }
]

export default function EnrolledMaterials() {
  return (
    <div className='mt-3'>
      <h4 className='text-center border-bottom '>Enrolled Materials</h4>
      <div className='p-1 d-flex flex-wrap justify-content-center'>
        {enrolledNavItems.map((item) => (
          <Link to={item.link} className='text-white'>
            <div className='mr-2 mb-2 d-flex justify-content-center align-items-center border-right pr-2'>
              {item.icon}
              <span className='' style={{ fontSize: '1.3rem' }}>
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
