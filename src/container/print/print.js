import React from 'react'
import { useLocation } from 'react-router'
import RoutineTable from '../../components/routine/routineTable'
import { Button } from 'react-bootstrap'
import { FaPrint } from 'react-icons/fa'

export default function Print({ ...props }) {
  let location = useLocation()

  return (
    <div className='pt-3'>
      <p className='d-print-none'>
        <Button>Print this</Button>
        <span
          className='bg-dark p-3 rounded-circle'
          onClick={() => {
            window.print()
          }}
        >
          <FaPrint size='1.6rem' color='white' />
        </span>
      </p>
      <div className='d-print-block'>
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
