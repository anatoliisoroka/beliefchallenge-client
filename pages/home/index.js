import React, { Component } from 'react'
import DefaultLayout from 'components/Layouts/Default'
import { connect } from 'react-redux';
import { initStore } from '../../redux';

class Home extends Component {

    render() {
        return (
            <>
                <DefaultLayout count={this.props.count} fetchPost={this.props.fetchPost} />
            </>
        )
    }
}

export default connect(initStore)(Home)