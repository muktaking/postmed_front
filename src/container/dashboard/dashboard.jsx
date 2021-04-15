import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import BigCards from '../../components/dashboard/bigCards/bigCards'
import MiniCards from '../../components/dashboard/miniCards/miniCards'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { dashboardStudent } from '../../store/dashboard'
import { resetExamResultLoader } from '../../store/exams'
import { getUserLoader } from '../../store/user'

const contentCenter = {
  //styling to display server response in middle of screen
  position: 'fixed',
  top: '45vh',
  left: '50%',
  zIndex: '10000000000'
}

const Dashboard = (props) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetExamResultLoader())
    dispatch(getUserLoader())
    setLoading(true)
    axios
      .get(process.env.REACT_APP_SITE_URL + '/dashboard')
      .then((response) => {
        setLoading(false)
        if (response.status === 200) {
          dispatch({ type: dashboardStudent.type, payload: response.data })
        }
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
  }, [dispatch])

  return (
    <div className=''>
      {loading && (
        <Spinner
          animation='grow'
          role='status'
          variant='dark'
          style={contentCenter}
        ></Spinner>
      )}
      <MetaInfo {...RoutesConfig.Dashboard.metaInfo} />

      <MiniCards />
      <hr className='my-3' />
      <BigCards />
    </div>
  )
}

export default Dashboard
