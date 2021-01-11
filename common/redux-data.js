
import React, { useEffect } from 'react'
import cookie from 'js-cookie'
import getObject from 'common/jwt-services'
import { connect } from 'react-redux';
import { reduxdata } from 'redux/action/authAction.js'

function RestoreReduxData(props) {
    useEffect(() => {
        if (!props.auth.token) {
            let authData = getObject.getObject('authUser')
            if (authData) {
                props.reduxdata(JSON.parse(authData))
            }
        }

    }, [])
    return (
        <>
        </>
    )

}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        reduxdata: data => dispatch(reduxdata(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RestoreReduxData);