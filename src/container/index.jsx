import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { slide as Menu } from 'react-burger-menu'
import { Route } from 'react-router-dom'
import '../assets/scss/section/dashboard.scss'
import IconBar from '../components/sidebar/iconBar'
import Sidebar from '../components/sidebar/sidebar'
import Topbar from '../components/topbar/topbar'
import Category from './category/category'
//importing routing parts
import Dashboard from './dashboard/dashboard'
import ExamPaper from './examPaper/examPaper'
import ExamLists from './exams/examLists'
import ExamTaker from './exams/examTaker'
import Question from './question/question'
import Result from './result/result'

const innerContent = (props) => {
  const pageName = props.match.url.split('/', 2)[1]
  return (
    <>
      <IconBar
        styles={{
          position: 'fixed',
          width: '30px',
          height: '25px',
          left: '10px',
          top: '150px',
          zIndex: '1000'
        }}
      />
      <Menu styles={styles}>
        <Sidebar />
      </Menu>

      <Container fluid='true' className='dashboard py-0 d-flex'>
        <div style={{ width: '60px' }}></div>
        <div style={{ flexGrow: '1' }}>
          <Row>
            <Col>
              <Row>
                <Topbar pageName={pageName} />
              </Row>
              {
                <>
                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/category' exact component={Category} />
                  <Route path='/question' exact component={Question} />
                  <Route path='/exampaper' exact component={ExamPaper} />
                  <Route path='/exams/:id' exact component={ExamTaker} />
                  <Route path='/exams' exact component={ExamLists} />
                  <Route path='/result' exact component={Result} />
                </>
              }
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default innerContent

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    left: '10px',
    top: '10px'
  },
  bmBurgerBars: {
    background: '#A01EEB'
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
