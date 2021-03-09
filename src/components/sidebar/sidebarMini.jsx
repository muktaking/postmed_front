import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import {
  FaBookOpen, FaCog, FaHome,


  FaPen, FaQuestion,




  FaTools, FaUser
} from "react-icons/fa";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserLoader } from "../../store/user";
import { canActivate, rolePermitted } from "../../utils/canActivate";


class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  classes = {
    sideNav: ["flex-column", "mt-2"].join(" "),
    sideNavLink: ["text-white", "p-1", "mb-2"].join(" "),
    fa: ["text-light", "fa-lg", "mr-3"].join(" "),
  };

  faIcons = [];
  menuName = [];
  navLinks = [];
  // state = {
  //   userName: [null]
  // };
  componentDidMount() {
    this.props.onGetUserLoader();
  }
  render() {

    this.faIcons = [
      <FaHome size="1.6em" className="mr-2" />,
      <FaPen size="1.6em" className="mr-2" />,
      <FaUser size="1.6em" className="mr-2" />,
      <FaUser size="1.6em" className="mr-2" />,
    ]
    this.menuName = [
      "Home",
      "Exams",
      "Signup",
      "Login",
    ];
    this.navLinks = [
      "/",
      "/exams",
      "/signup",
      "/login"
    ];
  
    if (canActivate(rolePermitted.student, this.props.token)) {
      this.faIcons = [
        <FaHome size="1.6em" className="mr-2" />,
        <FaBookOpen size="1.6em" className="mr-2" />,
        <FaUser size="1.6em" className="mr-2" />,
        <FaTools size="1.6em" className="mr-2" />,
      ];
      this.menuName = ["Dashboard", "Exams", "Profile", "Settings"];
      this.navLinks = ["/dashboard", "/exams", "/profile", "/settings"];
    }

    if (canActivate(rolePermitted.mentor, this.props.token)) {
      this.faIcons = [
        <FaHome size="1.6em" className="mr-2" />,
        <FaQuestion size="1.6em" className="mr-2" />,
        <FaPen size="1.6em" className="mr-2" />,
        <FaUser size="1.6em" className="mr-2" />,
        <FaTools size="1.6em" className="mr-2" />,
      ];
      this.menuName = [
        "Dashboard",
        "Question",
        "Exam Paper",
        "Profile",
        "Settings",
      ];
      this.navLinks = [
        "/dashboard",
        "/question",
        "/exampaper",
        "/profile",
        "/settings",
      ];
    }
    if (canActivate(rolePermitted.admin, this.props.token)) {
      this.faIcons = [
        <FaHome size="1.6em" className="mr-2" />,
        <FaCog size="1.6em" className="mr-2" />,
        <FaQuestion size="1.6em" className="mr-2" />,
        <FaPen size="1.6em" className="mr-2" />,
        <FaUser size="1.6em" className="mr-2" />,
        <FaTools size="1.6em" className="mr-2" />,
      ];
      this.menuName = [
        "Dashboard",
        "Category",
        "Question",
        "Exam Builder",
        "Profile",
        "Settings",
      ];
      this.navLinks = [
        "/dashboard",
        "/category",
        "/question",
        "/exambuilder",
        "/profile",
        "/settings",
      ];
    }

    return (
      <div style={styles}>
        
        <Nav className={this.classes.sideNav}>
          
          {this.faIcons.map((value, index) => (
            <Nav.Item key={index}>
              <NavLink
                exact to={this.navLinks[index]}
                className={
                  "nav-link " + this.classes.sideNavLink + " sidebar-link"
                }
                activeClassName="current"
              >
                {value}

                {this.menuName[index]}
              </NavLink>
            </Nav.Item>
          ))}
          <div className="hideInMd">
            {/* <SearchForm
              formControl={classes.formControl}
              searchBtn={classes.searchBtn}
            /> */}
            {this.props.token ?  <Nav.Item
              className="ml-md-auto"
            >
              <NavLink
                // href={"/" + value}
                to={{ pathname: "/logout" }}
                className="nav-link"
              >
                <FontAwesomeIcon
                  icon="sign-out-alt"
                  size="lg"
                  className="text-danger"
                />
              </NavLink>
            </Nav.Item> :
            <>
            </>
            }
          </div>
        </Nav>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserLoader: () => dispatch(getUserLoader()),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

//export default Sidebar;

const classes = {
  formControl: "search-input",
  searchBtn: "search-button",
};

const styles = {
  fontSize: "14px",
};
