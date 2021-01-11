import React, { Component } from "react";
import passwordeye from 'assets/images/passwordeye.png'
import { connect } from 'react-redux';
import { forgotpassword } from 'redux/action/generalAction'
import Router from 'next/router'

class ForgotPassswordCom extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            error: ''
        }
    }

    textHandle = (e, key) => {
        this.setState({ [key]: e.target.value })
    }

    submitForgotPwdHandle = () => {
        let { email } = this.state;
        if (email.trim().length > 0) {
            let params = {
                userData: {
                    email,
                },
                url: '/password/reset',
            }
            this.props.forgotpassword(params).then(res => {
                if (res.data.statusCode == 200) {
                    this.setState({
                        email: "",
                    })
                    Router.push('/login?passwordResetSent=1')
                }
                else {
                    this.setState({ error: 'Wrong email addres or something went wrong' })
                }
            })
        } else {
            this.setState({ error: 'Email address is required' })
            setTimeout(() => {
                this.setState({ error: '' })
                // sthis
            }, 10000)
        }

    }

    render() {
        let { email, error } = this.state;
        return (
            <>
                <div className='pb-30'>

                    <div className="d-flex flex-column bd-highlight mb-3">
                        <div className=" chnagepassword-input-box bd-highlight w-100">
                            {error && <div className="alert alert-danger text-center mt-30" role="alert">
                                <strong>Error</strong> {error}
                            </div>}

                            <div className='text-box mt-30'>
                                <div className="form-group align-middle">
                                    <label className="text-light w-100">Email Address</label>
                                    <input type="email" value={email} onChange={e => this.textHandle(e, "email")} placeholder="john@gmail.com" className="input-text text-white w-100" required />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-30 registration-btn '>
                        <button type="button" className="btn btn-primary btn-md btn-block text-light" onClick={this.submitForgotPwdHandle}>Send Email</button>
                    </div>

                </div>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        forgotpassword: data => dispatch(forgotpassword(data))
    };
};
function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassswordCom);