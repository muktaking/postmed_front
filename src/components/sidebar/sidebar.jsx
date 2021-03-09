import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
    sideNav: ["flex-column", "mt-4"].join(" "),
    sideNavLink: ["text-white", "p-3", "mb-2"].join(" "),
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
    const { userName, email, id, avatar } = this.props.user;
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
        "Exam Builder",
        "Profile",
        "Settings",
      ];
      this.navLinks = [
        "/dashboard",
        "/question",
        "/exambuilder",
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
      <div className="px-4">
        <Navbar.Brand
          className="text-white d-block mx-auto text-center py-3 mb-4 bottom-border"
        >
          <NavLink to="/" className="text-white">E-Exam</NavLink>
        </Navbar.Brand>
        <h3 className="text-white">Good Day</h3>
        <div className="bottom-border pb-3">
          {/* <Image
            src={avatar}
            roundedCircle={true}
            style={{ width: "50px" }}
            className="mr-3"
          /> */}
          <a href="#" className="text-white" style={{fontSize:"1.2rem"}}>
            {userName}
          </a>
        </div>
        <Nav className={this.classes.sideNav}>
          {this.faIcons.map((value, index) => (
            <Nav.Item key={index}>
              <NavLink
                to={this.navLinks[index]}
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
