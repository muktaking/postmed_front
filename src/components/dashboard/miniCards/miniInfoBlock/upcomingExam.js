import React from 'react'
import { useIntl } from 'react-intl'
import MiniBlock from './miniBlock'

const UpcomingExam = ({ value, footerValue, id, courseId }) => {
  const intl = useIntl()
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
        defaultMessage: 'Start On'
      })}
      footerValue={footerValue}
      color={'success'}
      faFooterIcon={'clock'}
    />
  )
}

export default UpcomingExam
