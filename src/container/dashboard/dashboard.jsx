import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import StuDashCourseComponent from '../../components/dashboard/stuDashCourseComponent'
import MetaInfo from '../../components/seo/metainfo'
import Spinner from '../../components/shared/spinner/spinner'
import { RoutesConfig } from '../../config/routes.config'
import { resetExamResultLoader } from '../../store/exams'
import { getUserLoader } from '../../store/user'

const Dashboard = (props) => {
  const [loading, setLoading] = useState(false)
  const [userDashExamInfo, setUserDashExamInfo] = useState([])
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
          setUserDashExamInfo(response.data)
        }
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
  }, [dispatch])

  return (
    <div className=''>
      {loading && <Spinner />}
      <MetaInfo {...RoutesConfig.Dashboard.metaInfo} />
      <StuDashCourseComponent userDashExamInfo={userDashExamInfo} />

      {/* <MiniCards />
      <hr className='my-3' />
      <BigCards /> */}
    </div>
  )
}

export default Dashboard
