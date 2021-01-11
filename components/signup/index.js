import React, { Component } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FBbutton from 'components/socialauthenticationbutton/fblogin'
import GoogleLogin from 'components/socialauthenticationbutton/googlelogin'
import { connect } from 'react-redux';
import { signup } from 'redux/action/authAction.js'
import Link from 'next/link';
import { errorHandle } from 'common/error-message'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Loader from 'components/loading'
import Logo from 'components/common/Logo'

library.add(faEye);
class SingupCom extends Component {
    constructor() {
        super()
        this.state = {
            error: false,
            errorMessage: '',
            userData: {
                fullName: '',
                email: '',
                password: '',
                loading: false
            }
        }
    }

    componentDidMount() {
        const pClass = this;
        document.querySelector('.container').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                pClass.userRegister();
            }
        });
    }

    textChangeHandle = (e, key) => {
        this.setState({
            userData: {
                ...this.state.userData,
                [key]: e.target.value
            }
        })
    }

    closeError = () => {
        this.setState({ errorMessage: "", error: false })
    }

    userRegister = () => {
        let { userData, errorMessage, error, emailFormat } = this.state
        if (userData.fullName.trim().length <= 0 || userData.email.trim().length <= 0) {
            this.setState({ errorMessage: 'Please fill all the fields' })
        }
        else {
            let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            // let email_ = userData.email
            // email_.match(emailFormat)
            if (!userData.email.trim().match(emailFormat)) {
                this.setState({ errorMessage: "Email format invalid " })
            }
            else {
                if (userData.password.trim().length <= 8) {
                    this.setState({ errorMessage: 'Password must be more then 8 characters and alpha numeric' })
                }
                else {
                    let params = {
                        userData,
                        url: '/auth/signup',
                        socialLogin: false
                    }
                    this.props.signup(params).then(res => {
                        if (!res.data.response.status) {
                            let errorMessage = errorHandle(res.data.statusCode)
                            this.setState({ errorMessage: errorMessage.message })
                        }
                        else {
                            this.setState({ errorMessage: "", loading: true })
                        }
                    })
                }
            }
        }
    }

    render() {
        let { fullName, email, password } = this.state.userData
        let { error, errorMessage, loading } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mx-auto">
                        <Logo />
                        {/* {error && <div className="alert alert-danger text-center" role="alert">
                            <strong><p className='text-right cursor-pointer' onClick={this.closeError}>X</p></strong>
                            <strong>404</strong> {errorMessage}
                        </div>} */}
                        <h5 className='text-light mb-0'>Signup</h5>
                        <div className='text-box mt-30'>
                            <div className="form-group">
                                <label className="text-light  w-100">User Name</label>
                                <input type="string" placeholder="john" value={fullName} onChange={e => this.textChangeHandle(e, "fullName")} className="input-text text-white w-100" aria-describedby="username" />
                            </div>
                        </div>
                        <div className='text-box mt-30'>
                            <div className="form-group">
                                <label className="text-light w-100">Email</label>
                                <input type="email" placeholder="john@gmail.com" value={email} onChange={e => this.textChangeHandle(e, "email")} className="input-text text-white w-100" aria-describedby="email" />
                            </div>
                        </div>
                        <div className='text-box mt-30'>
                            <div className="form-group">
                                <label className="text-light  w-100">Password</label>
                                <div className='password-field'>
                                    <input type="password" placeholder="**************" value={password} onChange={e => this.textChangeHandle(e, "password")} className="input-text text-white w-100" aria-describedby="password" />
                                    <p className='text-muted'>Password must be more then 8 characters and alpha numeric</p>
                                    {/* <FontAwesomeIcon icon='eye' className='password-ico text-light float-right' /> */}
                                </div>

                            </div>
                        </div>
                        <div className='text-box form-check mt-30'>
                            <div className="form-groupmiddle text-left">
                                <label id="emailHelp" className="form-text text-muted cursor-pointer"><input type="checkbox" className="form-check-input" /><small>   by checking this I agree to the <a className="text-danger" href="/terms-of-use" target="_blank">terms of use</a></small></label>
                            </div>
                        </div>
                        <p className='text-red'>{errorMessage}</p>
                        <div className='registration-btn mt-30'>
                            <button type="button" onClick={this.userRegister} className="btn btn-primary btn-md btn-block text-light">Get Started</button>
                        </div>
                        <div className='text-center'> {loading && <Loader />}</div>
                        <p className='auth-next-p font-weight-light text-center text-light mt-10'>or</p>
                        <div className='facebooklogin-btn mt-20'>
                            <GoogleLogin />
                        </div>
                        <div className='facebooklogin-btn mt-30'>
                            <FBbutton />
                        </div>
                        <div className='text-box mt-30'>
                            <div className="form-group ml-20 mr-20 align-middle text-center">
                                <small className="form-text text-light">Already have an account? <Link href='/login'><span className='text-danger'>click here</span></Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signup: data => dispatch(signup(data))
    };
};

export default connect(null, mapDispatchToProps)(SingupCom);