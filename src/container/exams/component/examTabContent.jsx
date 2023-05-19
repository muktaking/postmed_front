import React, { useState } from 'react'
import Pagination from 'react-js-pagination'
import * as moment from 'dayjs'
import { paginate } from '../../../utils/paginate'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ExamTabContent({ courses }) {
  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = 6
  const paginatedCourses = paginate(courses, currentPage, pageSize)

  return (
    <div className='mt-3'>
      <div className='d-flex justify-content-around flex-wrap'>
        {paginatedCourses.map((course) => (
          <Card className='mb-3 bg-dark text-white' style={{ width: '350px' }}>
            <Card.Body>
              <Card.Title
                className='text-center'
                style={{ fontSize: '1.4rem', fontWeight: '900' }}
              >
                {course.title}
              </Card.Title>
              <Card.Text className='text-center mt-2'>
                {moment().isAfter(course.endDate) ? (
                  <Badge variant='danger' className='p-2'>
                    This Course is ended
                  </Badge>
                ) : (
                  <Link to={'/exams/courses/' + course.id}>
                    <Button variant='primary'>Go to Exams</Button>
                  </Link>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={pageSize}
          totalItemsCount={courses && courses.length}
          pageRangeDisplayed={2}
          onChange={(page) => {
            setCurrentPage(page)
          }}
          itemClass='page-item'
          linkClass='page-link'
          prevPageText='Previous'
          nextPageText='Next'
        />
      </div>
    </div>
  )
}
