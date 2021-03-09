import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//import Scrollspy from "react-scrollspy";
import { Link as LinkScroll } from "react-scroll";
import ScrollToTop from 'react-scroll-up';

//import Spinner from "react-bootstrap/Spinner";
//import "./navbarLanding.css";

const navbarHome = (props) => {
  const items = ["home", "contact"];
  const pages = props.isAuthenticated
    ? ["dashboard","exams" ,"logout"]
    : ["exams","signup", "login"];

  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="md">
      {/* {props.auth.loading && (
        <Spinner
          animation="border"
          role="status"
          variant="light"
          className="mr-2"
        ></Spinner>
      )} */}
      <Link to="/" className="navbar-brand">
        Exam Point
      </Link>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav className="ml-auto">
          {/* <Scrollspy
          items={items}
          currentClassName={"active"}
          className="navbar-nav ml-auto"
          offset={-80}
        > */}
          {items.map((value) => (
            <Nav.Item key={value} as="li" className="mr-3">
              {props.isLanding ? (
                <LinkScroll
                  activeClass="active"
                  to={value}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  // //onSetActive={this.handleSetActive}
                  href={"/"}
                  className="nav-link"
                  //to={{ pathname: "/" }}
                >
                  {value}
                </LinkScroll>
              ) : (
                <HashLink
                  to={"/#" + value}
                  className="nav-link"
                  activeClassName="active"
                >
                  {value}
                </HashLink>
              )}
            </Nav.Item>
          ))}
          {pages.map((value) => (
            <Nav.Item key={value} as="li" className="mr-3">
              <NavLink
                // href={"/" + value}
                to={{ pathname: "/" + value }}
                className="nav-link"
              >
                {value}
              </NavLink>
            </Nav.Item>
          ))}
          {/* </Scrollspy> */}
        </Nav>
      </Navbar.Collapse>
      {props.isLanding ? (
        <ScrollToTop showUnder={160}>
          <FontAwesomeIcon icon={"arrow-up"} size="3x" transform="shrink-4" />
        </ScrollToTop>
      ) : null}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(navbarHome);
