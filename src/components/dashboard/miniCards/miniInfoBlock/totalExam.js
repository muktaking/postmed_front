import React from 'react'
import { useIntl } from 'react-intl'
import MiniBlock from './miniBlock'

const TotalExam = ({ value, footerValue }) => {
  const intl = useIntl()

  return (
    <MiniBlock
      heading={intl.formatMessage({
        id: 'db.te',
        defaultMessage: 'Total Exams'
      })}
      value={value}
      faIcon={'file-alt'}
      footerHeading={intl.formatMessage({
        id: 'db.et',
        defaultMessage: 'Exam Taken'
      })}
      footerValue={footerValue}
      color={'info'}
      faFooterIcon={'file-import'}
    />
  )
}

export default TotalExam
