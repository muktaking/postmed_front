import axios from 'axios'
import React, { lazy, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
//import StuDashCourseComponent from '../../components/dashboard/stuDashCourseComponent'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { resetExamResultLoader } from '../../store/exams'
import { getUserLoader } from '../../store/user'
//import FreshUserDash from './component/freshUserDash'
const StuDashCourseComponent = lazy(() =>
  import('../../components/dashboard/stuDashCourseComponent')
)
const FreshUserDash = lazy(() => import('./component/freshUserDash'))

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
      <MetaInfo {...RoutesConfig.Dashboard.metaInfo} />
      {loading ? (
        <CircleLoader />
      ) : userDashExamInfo.length > 0 ? (
        <StuDashCourseComponent userDashExamInfo={userDashExamInfo} />
      ) : (
        <FreshUserDash />
      )}
    </div>
  )
}

export default Dashboard
