import axios from 'axios';
import React, { Component } from "react";
import { injectIntl } from 'react-intl';
import GallaryCard from '../../../components/exams/gallary/gallaryCard';
//import "./exam.scss";


class Exam extends Component{

  constructor(props){
    super();
    this.state = {
      exams: []
    }
  }
  componentDidMount(){
    axios.get(process.env.REACT_APP_SITE_URL + '/exams/featured')
    .then(res=>{
      if(res.status == 200) this.setState({exams: res.data});
    })
    .catch(e=>{
      console.log(e)
    })
  }

  render() {
    return (<div id="exam" className="mb-5 offset">
      <GallaryCard title={this.props.intl.formatMessage({id:'db.fe', defaultMessage: "Our Featured Exams"})} exams={this.state.exams} landing={true}/>
    </div>)
  }
};

export default injectIntl(Exam);
