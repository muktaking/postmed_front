import React, { useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Redirect } from 'react-router'

export default function CourseSearch({ search }) {
  const [redirect, setRedirect] = useState(false)
  const searchRef = useRef()
  return (
    <div style={styles.main}>
      {redirect && (
        <Redirect to={'/courses?search=' + searchRef.current.value} />
      )}
      <div className='input-group shadow '>
        <input
          type='text'
          name='search'
          ref={searchRef}
          className='form-control'
          placeholder='Find a new course...'
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              setRedirect(true)
            }
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

/* Styles for wrapping the search box */

const styles = {
  main: {
    width: '80%',
    margin: '0px auto'
  }
}
