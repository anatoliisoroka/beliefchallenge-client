import React, { Component } from 'react'
import Link from 'next/link'
import FBbutton from 'components/socialauthenticationbutton/fblogin'
import GoogleLogin from 'components/socialauthenticationbutton/googlelogin'
import { connect } from 'react-redux';
import { login } from 'redux/action/authAction.js'
import Router, { withRouter } from 'next/router'
import { errorHandle } from 'common/error-message'
import Loader from 'components/loading'
import Logo from 'components/common/Logo'
import { getPostLikes } from 'redux/action/generalAction'


/**
 * created by zain ahmed 
 * created date: 24/12/2019
 * login class component
 */
class LoginCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailSent: this.props.router.query.passwordResetSent ? +this.props.router.query.passwordResetSent : undefined,
            // error: false,
            errorMessage: '',
            loading: false
        }
    }

    componentDidMount() {
        const pClass = this;
        document.querySelector('.container').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                pClass.userLogin();
            }
        });
    }

    /**
     * @param {*email(string), password(string) url(string) socialLogin(boolen)} params ,
     * function for userlogin
     */
    userLogin = () => {
        let { email, password } = this.state
        this.setState({ loading: true })

        if (email.trim().length > 0 && password.trim().length > 0) {
            let params = {
                userData: {
                    email: email,
                    password: password,
                },
                url: '/auth/login',
                socialLogin: false
            }
            this.props.login(params).then(res => {
                if (!res.data.response.status) {
                    let errorMessage = errorHandle(res.data.statusCode)
                    this.setState({ errorMessage: errorMessage.message })
                } else {
                    let params = {
                        url: '/likepost'
                    }
                    this.props.getPostLikes(params)

                    this.setState({ errorMessage: '' })
                }
                this.setState({ loading: false })

            })
        }
        else {
            this.setState({ errorMessage: 'please fill all the fields', loading: false })
        }


    }

    closeError = () => {
        this.setState({ errorMessage: "", error: false })

    }

    textChangeHandle = (e, key) => {
        this.setState({ [key]: e.target.value })
    }


    render() {

        let { email, password, emailSent, error, errorMessage, loading } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mx-auto">
                        <Logo />
                        <h5 className='text-light mb-0'>Login</h5>

                        {emailSent && <div className="alert alert-success text-center mt-30" role="alert">
                            <strong>Success!</strong> Please check your email for the new password
                        </div>}
                        {/* {error && <div className="alert alert-danger text-center" role="alert">
                            <strong>  <p className='text-right cursor-pointer' onClick={this.closeError}>X</p></strong>
                            <strong>404</strong> {errorMessage}
                        </div>} */}
                        <div className='text-box mt-30'>
                            <div className="form-group align-middle">
                                <label className="text-light w-100">Email Address</label>
                                <input type="email" value={email} onChange={e => this.textChangeHandle(e, "email")} placeholder="john@gmail.com" className="input-text text-white w-100" aria-describedby="email" />
                            </div>
                        </div>

                        <div className='text-box mt-30'>
                            <div className="form-group align-middle">
                                <div className='password-field'>
                                    <input type="password" value={password} onChange={e => this.textChangeHandle(e, "password")} placeholder="Password" className="input-text text-white w-100" aria-describedby="password" />
                                </div>
                            </div>
                        </div>
                        <p className='text-red'> {errorMessage} </p>
                        <div className='text-center'>{loading && <Loader />}</div>
                        <div className=' remember-me text-box mt-30 mb-5'>
                            {/* <div className=' d-flex justify-content-start float-left'>
                                <small className="d-flex form-text text-muted "><input type="checkbox" className="mt-5 mr-20" />Remember Me</small>
                            </div> */}
                            <Link href="/forgot-password">
                                <a className='d-flex justify-content-end float-right'><small className="d-flex form-text text-muted justify-content-end">Forget Password?</small></a>
                            </Link>

                        </div>
                        <div className='registration-btn mt-30'>
                            <button type="button" className="btn btn-primary btn-md btn-block text-light" onClick={this.userLogin}>Login</button>
                        </div>
                        <p className='auth-next-pfont-weight-light text-center text-light mt-10'>or</p>
                        <div className='facebooklogin-btn mt-20'>
                            <GoogleLogin />

                        </div>
                        <div className='facebooklogin-btn mt-30'>
                            <FBbutton />

                        </div>
                        <div className='text-box mt-30'>
                            <div className="form-group ml-20 mr-20 align-middle text-center">
                                <small className="form-text text-light">Don't have an account? <span className='text-danger'><Link href='/signup'><a className='text-danger'>click here</a></Link></span></small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        hasPrevUrlBool: state.general.hasPrevUrl,
    };
}
// export default LoginCom;
const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(login(data)),
        getPostLikes: data => dispatch(getPostLikes(data))

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginCom));