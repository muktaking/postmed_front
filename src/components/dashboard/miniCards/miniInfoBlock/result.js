import React from 'react'
import { useIntl } from 'react-intl'
import MiniBlock from './miniBlock'

const Result = ({ value, footerValue }) => {
  const intl = useIntl()
  return (
    <MiniBlock
      heading={intl.formatMessage({
        id: 'db.os',
        defaultMessage: 'Overall Score'
      })}
      //
      value={value}
      //
      faIcon={'poll'}
      footerHeading={intl.formatMessage({
        id: 'db.of',
        defaultMessage: 'Out of'
      })}
      footerValue={footerValue}
      color={'dark'}
      faFooterIcon={'balance-scale'}
    />
  )
}

export default Result
