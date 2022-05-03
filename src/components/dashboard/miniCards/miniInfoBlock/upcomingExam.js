import React from 'react'
import { useIntl } from 'react-intl'
import MiniBlock from './miniBlock'

const UpcomingExam = ({ value, footerValue, id, courseId }) => {
  const intl = useIntl()
  if (value) {
    return (
      <MiniBlock
        heading={intl.formatMessage({
          id: 'db.le',
          defaultMessage: 'Latest Exam'
        })}
        //
        value={value}
        //
        id={id}
        courseId={courseId}
        faIcon={'file'}
        footerHeading={intl.formatMessage({
          id: 'db.so',
          defaultMessage: 'Start'
        })}
        footerValue={footerValue}
        color={'success'}
        faFooterIcon={'clock'}
      />
    )
  }
  return (
    <MiniBlock
      heading={intl.formatMessage({
        id: 'db.le',
        defaultMessage: 'Latest Exam'
      })}
      //
      value={'No Latest Exam Created !!!'}
      //
      // id={id}
      // courseId={courseId}
      faIcon={'file'}
      footerHeading={intl.formatMessage({
        id: 'db.so',
        defaultMessage: 'Start On'
      })}
      // footerValue={footerValue}
      color={'success'}
      faFooterIcon={'clock'}
    />
  )
}

export default UpcomingExam
