import React, { useEffect, useState } from 'react'
import { Badge, Spinner } from 'react-bootstrap'
import { BsFillDashCircleFill, BsPlusCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategory } from '../../store/category'

const contentCenter = {
  //styling to display server response in middle of screen
  position: 'fixed',
  top: '45vh',
  left: '50%',
  zIndex: '10000000000'
}

export default function ExamListsByCat() {
  const dispatch = useDispatch()
  const catHierarchy = useSelector((state) => state.category.catHierarchy)

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  return (
    <div className='mt-5'>
      {catHierarchy.length < 1 && (
        <Spinner
          animation='grow'
          role='status'
          variant='dark'
          style={contentCenter}
        ></Spinner>
      )}
      <h2 className='text-center'>Exam Categories</h2>
      <div>{catExtractor(catHierarchy)}</div>
    </div>
  )
}

function catExtractor(catHierarchy) {
  return catHierarchy.map((cat) => {
    let child = null
    if (cat.child) {
      child = catExtractor(cat.child)
    }
    return <CatCard key={cat.id} cat={cat} child={child} />
  })
}

function CatCard({ cat, child, ...props }) {
  const [show, setShow] = useState(false)

  return (
    <div
      className='cat-card mt-1 ml-3 border-top-0 border-warning'
      props={{ ...props }}
    >
      {/* <Image width={80}  src={process.env.REACT_APP_SITE_URL + "/" + cat.imageUrl} thumbnail /> */}
      <div
        className='p-3 bg-warning text-white parent'
        style={{ fontSize: '1.2rem' }}
      >
        <Badge variant='light' className='p-2'>
          <Link to={'/exams/category/' + cat.name + '-' + cat.id}>
            {cat.name}
          </Link>
        </Badge>
        {child &&
          (show ? (
            <BsFillDashCircleFill
              size={'1.5rem'}
              onClick={() => {
                setShow(!show)
              }}
            />
          ) : (
            <BsPlusCircleFill
              size={'1.5rem'}
              onClick={() => {
                setShow(!show)
              }}
            />
          ))}
      </div>
      <div>{show && child}</div>
    </div>
  )
}
