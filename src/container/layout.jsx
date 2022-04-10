import React, { lazy, Suspense } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { slide as Menu } from 'react-burger-menu'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import '../assets/scss/section/dashboard.scss'
import DomHistory from '../components/domHistory/domHistory'
import Sidebar from '../components/sidebar/sidebar'
import SidebarMini from '../components/sidebar/sidebarMini'
import Topbar from '../components/topbar/topbar'
import { canActivate, rolePermitted } from '../utils/canActivate'
//import Profile from './profile/profile'

const Profile = lazy(() => import('./profile/profile'))

//import Category from "./category/category";
const Category = lazy(() => import('./category/category'))
//import Settings from './settings/settings';
//importing routing parts
//import Dashboard from "./dashboard/dashboard";
const Dashboard = lazy(() => import('./dashboard/'))

const CourseLists = lazy(() => import('./courses/'))

const CourseBuilder = lazy(() => import('./courseBuilder/'))

const RoutineBuilder = lazy(() => import('./routine'))
//import ExamBuilder from "./examBuilder/examBuilder";
const ExamBuilder = lazy(() => import('./examBuilder/examBuilder'))

const ExamEdit = lazy(() => import('./examBuilder/editExam'))

//import ExamLists from "./exams/examLists";
const ExamLists = lazy(() => import('./exams/examLists'))
//import ExamLists from "./exams/examLists";
//const ExamListsByCat = lazy(()=> import('./exams/examListsByCat'));
const ExamListsByCat = lazy(() => import('./exams/examListsByCat'))

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
const Terms = lazy(() => import('./terms/terms'))
const NotificationBuilder = lazy(() =>
  import('./notificationBuilder/notificationBuilder')
)
const Notification = lazy(() => import('./notification/notification'))

const InnerContent = (props) => {
  const pageName = props.match.url.split('/', 2)[1]
  return (
    <>
      <Menu styles={styles}>
        <SidebarMini />
      </Menu>
      <Container fluid='true'>
        <Row className='no-gutters'>
          <Col xl={2} lg={3} md={4} className='sidebar'>
            <Sidebar />
          </Col>

          <Col xl={10} lg={9} md={8} sm={12}>
            <div>
              <Topbar pageName={pageName} />

              <div className='px-1 ml-md-4' style={{ marginTop: '70px' }}>
                <Suspense
                  fallback={
                    <div className='text-center' style={{ marginTop: '45vh' }}>
                      Loading...
                    </div>
                  }
                >
                  <DomHistory />
                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/courses' exact component={CourseLists} />
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
                        ? ExamListsByCat
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

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    right: '28px',
    top: '10px'
    // @media (min-width: 767.98px) {
    //   display: none;
    // }
  },
  bmBurgerBars: {
    background: '#67aaaa'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
