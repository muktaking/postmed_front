import React from 'react'
import { useIntl } from 'react-intl'
import MiniBlock from './miniBlock'

const TotalExam = ({ value, footerValue }) => {
  const intl = useIntl()

  return (
    <MiniBlock
      heading={intl.formatMessage({
        id: 'db.et',
        defaultMessage: 'Exam Taken'
      })}
      value={value}
      faIcon={'file-import'}
      footerHeading={intl.formatMessage({
        id: 'db.te',
        defaultMessage: 'Total Exams'
      })}
      footerValue={footerValue}
      color={'info'}
      faFooterIcon={'file-alt'}
    />
  )
}

export default TotalExam
