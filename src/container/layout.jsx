import React, { lazy, Suspense } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'

// import '../assets/scss/section/dashboard.scss'
import CircleLoader from '../components/customSpinner/circleLoader/circleLoader'
import DomHistory from '../components/domHistory/domHistory'
import Sidebar from '../components/sidebar/sidebar'
import SidebarMini from '../components/sidebar/sidebarMini'
import Topbar from '../components/topbar/topbar'
import { canActivate, rolePermitted } from '../utils/canActivate'
import ScrollToTop from '../components/customScroller/scrollToTop'
import ExamListsByCatGuest from './exams/examListByCourse.guest'
import StickyBottom from './landing/landing4/stickyBottom'
//import Profile from './profile/profile'

const Profile = lazy(() => import('./profile/profile'))

//import Category from "./category/category";
const Category = lazy(() => import('./category/category'))
//import Settings from './settings/settings';
//importing routing parts
//import Dashboard from "./dashboard/dashboard";
const Dashboard = lazy(() => import('./dashboard/'))

const CourseLists = lazy(() => import('./courses/'))
const CourseDetails = lazy(() => import('./courses/courseDetails'))

const CourseBuilder = lazy(() => import('./courseBuilder/'))

const RoutineBuilder = lazy(() => import('./routine'))
//import ExamBuilder from "./examBuilder/examBuilder";
const ExamBuilder = lazy(() => import('./examBuilder/examBuilder'))

const ExamEdit = lazy(() => import('./examBuilder/editExam'))

//import ExamLists from "./exams/examLists";
const ExamLists = lazy(() => import('./exams/examLists'))

const ExamListsByCourse = lazy(() => import('./exams/examListByCourse'))

const ExamListsByCatShower = lazy(() => import('./exams/examListsByCatShower'))

const ExamListsByCourseShower = lazy(() =>
  import('./exams/examListsByCourseShower')
)

//import ExamTaker from "./exams/examTaker";
const ExamTaker = lazy(() => import('./exams/examTaker'))
//import QuestionBuilder from './questionBuilder/';
const QuestionBuilder = lazy(() => import('./questionBuilder/'))
//import Rank from "./result/rank";
const Rank = lazy(() => import('./result/rank'))
//import Result from "./result/result";
const Result = lazy(() => import('./result/result'))
const Settings = lazy(() => import('./settings/settings'))
const Print = lazy(() => import('./print/print'))
const Reports = lazy(() => import('./reports/reports'))
const ShowQuestions = lazy(() => import('./reports/actions/showQuestions'))
const Help = lazy(() => import('./help/help'))
const Payment = lazy(() => import('./payment/payment'))
const Terms = lazy(() => import('./terms/terms'))
const NotificationBuilder = lazy(() =>
  import('./notificationBuilder/notificationBuilder')
)
const Notification = lazy(() => import('./notification/notification'))

//defining regex to exclude exam url for DomHistory, StickyBottom
const exLink = /(\/exams\/(free\/)?\d+(_\d+)?)/g

const InnerContent = (props) => {
  const pageName = props.match.url.split('/', 2)[1]
  const history = useHistory()
  const pathname = history.location.pathname

  return (
    <>
      <SidebarMini />

      <Container fluid='true'>
        <Row className='no-gutters'>
          <Col xl={2} lg={3} md={4} className='sidebar'>
            <Sidebar />
          </Col>

          <Col xl={10} lg={9} md={8} sm={12}>
            <div className='mb-5'>
              <Topbar pageName={pageName} />

              <div className='px-1 ml-md-4' style={{ marginTop: '70px' }}>
                <Suspense
                  fallback={
                    <CircleLoader />
                    // <div className='text-center' style={{ marginTop: '45vh' }}>
                    //   Loading...
                    // </div>
                  }
                >
                  {pathname.search(exLink) === -1 && (
                    <>
                      <DomHistory />
                      <StickyBottom />
                    </>
                  )}

                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/courses' exact component={CourseLists} />
                  <Route path='/courses/:id' exact component={CourseDetails} />
                  <Route
                    path='/coursebuilder'
                    exact
                    component={CourseBuilder}
                  />
                  <Route path='/profile' exact component={Profile} />
                  <Route path='/category' exact component={Category} />
                  <Route path='/routine' exact component={RoutineBuilder} />
                  <Route path='/question' exact component={QuestionBuilder} />
                  <Route path='/exambuilder' exact component={ExamBuilder} />
                  <Route path='/examedit' exact component={ExamEdit} />
                  <Route
                    path='/exams/:id'
                    exact
                    render={(props) => <ExamTaker free={false} {...props} />}
                  />
                  <Route
                    path='/exams'
                    exact
                    component={
                      props.isAuthenticated &&
                      canActivate(rolePermitted.student, props.token)
                        ? ExamListsByCourse
                        : process.env.REACT_APP_APP_TYPE === 'public'
                        ? ExamListsByCatGuest
                        : ExamLists
                    }
                  />
                  <Route
                    path='/exams/courses/:id'
                    exact
                    component={ExamListsByCourseShower}
                  />
                  <Route
                    path='/exams/category/:id'
                    exact
                    component={ExamListsByCatShower}
                  />
                  <Route
                    path='/exams/free/:id'
                    exact
                    render={(props) => <ExamTaker free={true} {...props} />}
                  />
                  <Route path='/result' exact component={Result} />
                  <Route path='/result/rank/:id' exact component={Rank} />
                  <Route path='/reports' exact component={Reports} />
                  <Route
                    path='/reports/actions'
                    exact
                    component={ShowQuestions}
                  />
                  <Route path='/settings' exact component={Settings} />
                  <Route path='/help' exact component={Help} />
                  <Route path='/payment' exact component={Payment} />
                  <Route
                    path='/notificationbuilder'
                    exact
                    component={NotificationBuilder}
                  />
                  <Route path='/notification' exact component={Notification} />
                  <Route path='/print' exact component={Print} />
                  <Route path='/terms' exact component={Terms} />
                </Suspense>
              </div>
              <ScrollToTop />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(InnerContent)
