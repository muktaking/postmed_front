import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const topbar = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.token);
  const classes = {
    formControl: "search-input",
    searchBtn: "search-button",
  };

  return (
    <div className="bg-dark py-2 top-navbar mb-3 w-100">
      <Row className="align-items-center">
        <Col md={4} style={{ paddingLeft: "3rem" }}>
          <h4 className="text-light text-uppercase mb-0">{props.pageName}</h4>
        </Col>
        
        <Col md={8} className="hideInSm pr-5">
          <Nav className="" style={{'fontSize': '1.2rem'}}>
            <Nav.Item className="">
                <NavLink
                  to={{ pathname: "/" }}
                  className="nav-link"
                >
                  Home
                </NavLink>
            </Nav.Item>
            <Nav.Item
                className="">
                <NavLink
                  to={{ pathname: "/exams" }}
                  className="nav-link"
                >
                  Exams
                </NavLink>
            </Nav.Item>
           
            {isLoggedIn ? <Nav.Item
              className=""
            >
              <NavLink
                // href={"/" + value}
                to={{ pathname: "/logout" }}
                className="nav-link"
              >
                <FontAwesomeIcon
                  icon="sign-out-alt"
                  size="lg"
                  className=''
                />
              </NavLink>
            </Nav.Item>
            :
            <>
            <Nav.Item
                className="">
                <NavLink
                  to={{ pathname: "/signup" }}
                  className="nav-link"
                >
                  Signup
                </NavLink>
            </Nav.Item>
            <Nav.Item
                className="">
                <NavLink
                  to={{ pathname: "/login" }}
                  className="nav-link"
                >
                  Login
                </NavLink>
            </Nav.Item>
            </>
            }
          </Nav>
        </Col>
      </Row>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onlogoutLoader: () => dispatch(logoutLoader()),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

//export default connect(null, n)(withRouter(topbar));
export default topbar;
