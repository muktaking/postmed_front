import React, { useRef, useState } from 'react'
import { FaSearch, FaTemperatureHigh } from 'react-icons/fa'
import { Redirect } from 'react-router'
import Styles from './courseSearch.module.scss'

export default function CourseSearch({ search }) {
  const [redirect, setRedirect] = useState(false)
  const searchRef = useRef()
  return (
    <div className={Styles.container}>
      {redirect && (
        <Redirect to={'/courses?search=' + searchRef.current.value} />
      )}
      <div className=' input-group shadow '>
        <input
          type='text'
          name='search'
          ref={searchRef}
          className={Styles.searchBox + ' form-control'}
          placeholder='Find a new course...'
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              setRedirect(FaTemperatureHigh)
            } else setRedirect(false)
          }}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-secondary'
            type='button'
            onClick={() => {
              setRedirect(true)
            }}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  )
}
