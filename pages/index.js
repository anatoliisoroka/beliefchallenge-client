import React, { Component } from 'react'
// import axios from 'axios'
// import https from 'https';
// import API_URL from '../common/config'
// import apiCall from '../utilfunction/util-api-service'
// import { Provider } from "react-redux";
// import actions from '../redux/action/categoryAction';
// const Cookies = require('js-cookie')
import Home from './home'
import 'assets/scss/main.scss'
import { connect } from "react-redux";
import { initStore } from '../redux'

class Index extends Component {
  render() {
    let { loaded } = this.props
    return (
      <>
        <Home postData={this.props.postData} count={this.props.count} fetchPost={this.props.fetchPost} />
      </>
    )
  }
}



export default connect(initStore)(Index)
