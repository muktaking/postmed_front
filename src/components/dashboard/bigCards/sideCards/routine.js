import React from 'react'
import { useIntl } from 'react-intl'
import ShowRoutine from '../../../routine/showRoutine'
import BigCard from '../bigCard/bigCard'

export default function RoutineSideCard({ id }) {
  const intl = useIntl()
  return (
    <BigCard
      header={intl.formatMessage({
        id: 'db.routine',
        defaultMessage: 'Routine'
      })}
      headerColor={'warning'}
      showDatePicker={false}
    >
      <ShowRoutine id={id} />
    </BigCard>
  )
}
