import React from "react";
import "../../assets/scss/style.scss";
import Contact from "./contact/contact";
import Exam from './exam/exam';
import Feature from './feature/feature';
import Home from "./home/home";



const landing = props => {
  return (
    <div className={"__landing__upper"}>
      <Home />
      <Exam />
      <Feature />
      {/*<Demo />
      <Clients /> */}
      <Contact /> 
    </div>
  );
};

export default landing;
