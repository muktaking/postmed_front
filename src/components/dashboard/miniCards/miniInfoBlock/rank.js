import React from 'react'
import { useIntl } from 'react-intl'
import MiniBlock from './miniBlock'

const Rank = ({ value, footerValue }) => {
  const intl = useIntl()
  return (
    <MiniBlock
      heading={intl.formatMessage({ id: 'db.er', defaultMessage: 'Your Rank' })}
      //
      value={value}
      //
      faIcon={'medal'}
      footerHeading={intl.formatMessage({
        id: 'db.ts',
        defaultMessage: 'Total Student'
      })}
      footerValue={footerValue}
      color={'warning'}
      faFooterIcon={'users'}
    />
  )
}

export default Rank
