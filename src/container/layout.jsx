import React, { lazy, Suspense } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { slide as Menu } from "react-burger-menu";
import { Route } from "react-router-dom";
import "../assets/scss/section/dashboard.scss";
import Sidebar from "../components/sidebar/sidebar";
import SidebarMini from "../components/sidebar/sidebarMini";
import Topbar from "../components/topbar/topbar";
import Profile from "./profile/profile";


//const Profile = lazy(()=> import('./profile/profile'));

//import Category from "./category/category";
const Category = lazy(()=> import('./category/category'));
//import Settings from './settings/settings';
//importing routing parts
//import Dashboard from "./dashboard/dashboard";
const Dashboard = lazy(()=> import('./dashboard/'));
//import ExamBuilder from "./examBuilder/examBuilder";
const ExamBuilder = lazy(()=> import('./examBuilder/examBuilder'));
//import ExamLists from "./exams/examLists";
const ExamLists = lazy(()=> import('./exams/examLists'));
//import ExamTaker from "./exams/examTaker";
const ExamTaker = lazy(()=> import('./exams/examTaker'));
//import QuestionBuilder from './questionBuilder/';
const QuestionBuilder = lazy(()=> import('./questionBuilder/'));
//import Rank from "./result/rank";
const Rank = lazy(()=> import('./result/rank'));
//import Result from "./result/result";
const Result = lazy(()=> import('./result/result'));
const Settings = lazy(()=> import('./settings/settings'));

const InnerContent = (props) => {
  const pageName = props.match.url.split("/", 2)[1];
  return (
    <>
      <Menu styles={styles}>
        <SidebarMini />
      </Menu>
      <Container fluid="true">
        <Row className="no-gutters">
          <Col xl={2} lg={3} md={4} className="sidebar">
            <Sidebar />
          </Col>

          <Col xl={10} lg={9} md={8} sm={12} >
            <div>
              <Topbar pageName={pageName} />
              <div className="px-1 ml-md-4" style={{marginTop: '70px'}}>
                  <Suspense fallback={<div className="text-center" style={{marginTop: '45vh'}}>Loading...</div>}
                   >
                      <Route path="/dashboard" exact component={Dashboard} />
                      <Route path="/profile" exact component={Profile} />
                      <Route path="/category" exact component={Category} />
                      <Route path="/question" exact component={QuestionBuilder} />
                      <Route path="/exambuilder" exact component={ExamBuilder} />
                      <Route path="/examedit" exact component={ExamLists} />
                      <Route path="/exams/:id" exact render={(props)=><ExamTaker free={false} {...props}/>} />
                      <Route path="/exams" exact component={ExamLists} />
                      <Route path="/exams/free/:id" exact render={(props)=><ExamTaker free={true} {...props}/>} />
                      <Route path="/result" exact component={Result} />
                      <Route path="/result/rank/:id" exact component={Rank} />
                      <Route path="/settings" exact component={Settings} />
                  </Suspense>                  
              </div>  
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InnerContent;

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "25px",
    right: "28px",
    top: "10px",
    // @media (min-width: 767.98px) {
    //   display: none;
    // }
  },
  bmBurgerBars: {
    background: "#67aaaa",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
