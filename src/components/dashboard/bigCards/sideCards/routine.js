import React from 'react'
import { useIntl } from 'react-intl'
import ShowRoutine from '../../../routine/showRoutine'
import BigCard from '../bigCard/bigCard'

export default function RoutineSideCard() {
  const intl = useIntl()
  return (
    <BigCard
      header={intl.formatMessage({
        id: 'db.ra',
        defaultMessage: 'Routine'
      })}
      headerColor={'warning'}
      showDatePicker={false}
    >
      <ShowRoutine />
    </BigCard>
  )
}
