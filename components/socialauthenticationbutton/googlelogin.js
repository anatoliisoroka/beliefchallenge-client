
import React from 'react'
import { GoogleLogin } from 'react-google-login';
import genericfunctions from 'utilfunction/util-api-service'
import { login } from 'redux/action/authAction.js'
import { connect } from 'react-redux';
import { getPostLikes } from 'redux/action/generalAction'




function Googlelogin(props) {

    function responseGoogle(response) {
        // console.log(response);

        if (response && response.profileObj) {
            let responseData = {
                accessToken: response.accessToken,
                name: response.profileObj.givenName,
                email: response.profileObj.email,
                profilePic: response.profileObj.imageUrl,
                platform: "google",
                socialReferenceId: response.profileObj.googleId
            }
            loginUser(responseData)
        }

    }
    function loginUser(responseData_) {
        let params = {
            userData: responseData_,
            url: '/loginSocial',
            socialLogin: true
        }
        props.login(params).then(res => {
            console.log(res)
            if(res.data.response.status){
                let params = {
                    url: '/likepost'
                }
                props.getPostLikes(params)
            }
        })
    }

    return (
        <GoogleLogin

            clientId="328528170244-j0lgkl2o8eiqp28bm9r9gm396lhk18mu.apps.googleusercontent.com"
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
                <>
                    <button onClick={renderProps.onClick} type="button" className="btn btn-light btn-md btn-block text-light">
                        <p className='fb-p'> <img className='mr-2' src="https://img.icons8.com/color/48/000000/google-logo.png" height='18px' width='18px' />Login with Google</p></button>
                </>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    )
}
const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(login(data)),
        getPostLikes: data => dispatch(getPostLikes(data))

    };
};

export default connect(null, mapDispatchToProps)(Googlelogin);