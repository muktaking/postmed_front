import React from 'react'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router'
import RoutineTable from '../../components/routine/routineTable'

export default function Print({ ...props }) {
  let location = useLocation()

  return (
    <div className='pt-3'>
      <Button>Print this</Button>
      <Button className='ml-2'>Save as Pdf</Button>
      {location.state && location.state.fromRoutine && (
        <RoutineTable
          routine={location.state.routine}
          title={location.state.title}
        />
      )}
    </div>
  )
}
