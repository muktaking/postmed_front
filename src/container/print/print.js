import React from 'react'
import { useLocation } from 'react-router'
import RoutineTable from '../../components/routine/routineTable'

export default function Print({ ...props }) {
  let location = useLocation()

  return (
    <div className='pt-3'>
      <div>
        {location.state && location.state.fromRoutine && (
          <RoutineTable
            routine={location.state.routine}
            title={location.state.title}
          />
        )}
      </div>
    </div>
  )
}
