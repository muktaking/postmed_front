import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useIntl } from "react-intl";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//import Scrollspy from "react-scrollspy";
import { Link as LinkScroll } from "react-scroll";
import ScrollToTop from 'react-scroll-up';

//import Spinner from "react-bootstrap/Spinner";
//import "./navbarLanding.css";

const navbarHome = (props) => {
  const intl = useIntl()
  const itemsName = [intl.formatMessage({id: 'btn.home', defaultMessage: "home"}),intl.formatMessage({id: 'btn.contact', defaultMessage: "contact"})];
  const pagesName = props.isAuthenticated
    ? [intl.formatMessage({id:'btn.db',defaultMessage: "dashboard"}), 
    intl.formatMessage({id: 'btn.exams', defaultMessage: "exams"}),
    intl.formatMessage({id: 'btn.logout', defaultMessage: "logout"})]
    : [
      intl.formatMessage({id: 'btn.exams', defaultMessage: "exams"}),
      intl.formatMessage({id: 'btn.signup', defaultMessage: "signup"}), 
      intl.formatMessage({id: 'btn.login', defaultMessage: "login"})];
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
        {process.env.REACT_APP_NAME}
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
          {items.map((value, index) => (
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
                  {itemsName[index]}
                </LinkScroll>
              ) : (
                <HashLink
                  to={"/#" + value}
                  className="nav-link"
                  activeClassName="active"
                >
                  {itemsName[index]}
                </HashLink>
              )}
            </Nav.Item>
          ))}
          {pages.map((value,index) => (
            <Nav.Item key={value} as="li" className="mr-3">
              <NavLink
                // href={"/" + value}
                to={{ pathname: "/" + value }}
                className="nav-link"
              >
                {pagesName[index]}
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
