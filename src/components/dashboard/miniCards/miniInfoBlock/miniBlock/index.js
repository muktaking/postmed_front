import React from 'react'
import Card from 'react-bootstrap/Card'
import { Table } from 'react-bootstrap'
import Icon from './icon'
import { Link } from 'react-router-dom'

const miniBlock = ({
  heading,
  color,
  value,
  id,
  courseId,
  faIcon,
  footerHeading,
  footerValue,
  faFooterIcon,
  isCourseExpired
}) => {
  return (
    <Card className='card-common mt-2 mx-auto'>
      <div className='d-flex justify-content-center mt-3'>
        <span className={'text-white p-2 rounded-circle mx-auto bg-' + color}>
          <Icon icon={faIcon} size={'2rem'} />
        </span>
      </div>
      <Card.Body>
        <Table bordered>
          <tbody>
            <tr>
              <td>{heading}</td>
              <td>
                {courseId ? (
                  isCourseExpired ? (
                    value
                  ) : (
                    <Link to={'exams/' + id + '_' + courseId}>{value}</Link>
                  )
                ) : (
                  value
                )}
              </td>
            </tr>
            <tr>
              <td>{footerHeading}</td>
              <td>{footerValue}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default miniBlock
