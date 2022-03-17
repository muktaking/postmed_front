import axios from 'axios'
import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import { injectIntl } from 'react-intl'
import GallaryCard from '../../../components/exams/gallary/gallaryCard'
//import "./exam.scss";

class Exam extends Component {
  constructor(props) {
    super()
    this.state = {
      loading: true,
      exams: []
    }
  }
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/exams/featured')
      .then((res) => {
        if (res.status === 200)
          this.setState({ exams: res.data, loading: false })
      })
      .catch((e) => {
        this.setState({ loading: false })
        console.log(e)
      })
  }

  render() {
    return (
      <div id='exam' className='mb-5 offset'>
        {this.state.loading ? (
          <div className='text-center'>
            <span>Please wait. Featured exams are loading </span>
            <Spinner
              as='span'
              animation='grow'
              role='status'
              aria-hidden='true'
              variant='dark'
              size='md'
            />
          </div>
        ) : (
          <GallaryCard
            title={this.props.intl.formatMessage({
              id: 'db.fe',
              defaultMessage: 'Our Featured Exams'
            })}
            exams={this.state.exams}
            landing={true}
          />
        )}
      </div>
    )
  }
}

export default injectIntl(Exam)
