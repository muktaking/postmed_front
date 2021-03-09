import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const TopNavBar = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.token);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Button className="mr-2">Toggle</Button>
      <Navbar.Brand href="#home">{props.pageName}</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav> */}
      {/* <SearchForm
        formControl={classes.formControl}
        searchBtn={classes.searchBtn}
      /> */}
      {isLoggedIn && <Nav.Item className="ml-md-auto">
        <NavLink to={{ pathname: "/logout" }} className="nav-link">
          <FontAwesomeIcon
            icon="sign-out-alt"
            size="lg"
            className="text-danger"
          />
        </NavLink>
      </Nav.Item>}
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default TopNavBar;

const classes = {
  formControl: "search-input",
  searchBtn: "search-button",
};

// var styles = {
//   bmBurgerButton: {
//     position: "fixed",
//     width: "36px",
//     height: "30px",
//     left: "36px",
//     top: "36px",
//   },
//   bmBurgerBars: {
//     background: "#373a47",
//   },
//   bmBurgerBarsHover: {
//     background: "#a90000",
//   },
//   bmCrossButton: {
//     height: "24px",
//     width: "24px",
//   },
//   bmCross: {
//     background: "#bdc3c7",
//   },
//   bmMenuWrap: {
//     position: "fixed",
//     height: "100%",
//   },
//   bmMenu: {
//     background: "#373a47",
//     padding: "2.5em 1.5em 0",
//     fontSize: "1.15em",
//   },
//   bmMorphShape: {
//     fill: "#373a47",
//   },
//   bmItemList: {
//     color: "#b8b7ad",
//     padding: "0.8em",
//   },
//   bmItem: {
//     display: "inline-block",
//   },
//   bmOverlay: {
//     background: "rgba(0, 0, 0, 0.3)",
//   },
// };
