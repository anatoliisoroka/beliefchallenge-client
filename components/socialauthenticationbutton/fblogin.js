
import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { connect } from 'react-redux';
import { login } from 'redux/action/authAction.js'




function Fblogin(props) {

    function responseFacebook(response) {
        loginUser(response)
    }
    function loginUser(responseData) {

        if (responseData.name) {
            let params = {
                userData: { ...responseData, profilePic: responseData.picture.data.url, platform: "facebook", socialReferenceId: responseData.userID },
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
    }
    return (
        <FacebookLogin
            appId="437713897174477"
            fields="name,email,picture"
            callback={responseFacebook}
            render={renderProps => (
                <>
                    <button onClick={renderProps.onClick} type="button" className="btn btn-light btn-md btn-block text-light">
                        <p className='fb-p'> <FontAwesomeIcon icon={faFacebookF} className='mt-5 mr-2 fb-ico float-left' />Login with Facebook</p></button>
                </>
            )}
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(login(data))
    };
};

export default connect(null, mapDispatchToProps)(Fblogin);