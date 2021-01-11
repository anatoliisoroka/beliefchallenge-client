import React, { Component } from "react";
import passwordeye from 'assets/images/passwordeye.png'
import { connect } from 'react-redux';
import { changepassword } from 'redux/action/generalAction'
import Router from 'next/router'

class ChangePassswordCom extends Component {
    constructor() {
        super()
        this.state = {
            oldPassword: '',
            newPassword: '',
            conformPassword: '',
            showPasswordFlag: false,
            errorMessage: ''
        }
    }

    textHandle = (e, key) => {
        this.setState({ [key]: e.target.value })
    }

    showPassworHandle = () => {
        let { showPasswordFlag } = this.state;
        this.setState({ showPasswordFlag: showPasswordFlag ? false : true })
    }

    submitChnagePwdHandle = () => {
        let { oldPassword, newPassword, conformPassword } = this.state;
        let authData = this.props.auth.authUser
        if (oldPassword.trim().length <= 0 || newPassword.trim().length <= 0 || conformPassword.trim().length <= 0) {
            this.setState({ errorMessage: 'please fill all the fields' })
        } else {
            if (newPassword.trim() != conformPassword.trim()) {
            } else {
                let params = {
                    userData: {
                        ...authData,
                        oldPassword,
                        newPassword,
                        conformPassword,
                    },
                    url: '/password/update',
                }
                this.props.changepassword(params).then(res => {
                    if (res.data.response.status) {
                        this.setState({
                            oldPassword: "",
                            newPassword: "",
                            conformPassword: "",
                            errorMessage: ''
                        })
                        Router.replace('/home')
                    } else {
                        this.setState({errorMessage:res.data.response.message})
                    }

                })

            }
        }

    }

    render() {
        let { oldPassword, newPassword, conformPassword, showPasswordFlag, errorMessage } = this.state;
        return (
            <>
                <div className='change-passowrd bg-white pb-30'>
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <h5 className="mt-40 text-center">Forgot Password</h5>

                        <div className=" chnagepassword-input-box  p-2 bd-highlight  w-75">
                            <div className='text-box mt-30'>
                                <div className="form-group ml-20 mr-20 align-middle">
                                    <label className="text-secondary w-100">Current Password</label>
                                    <input type={showPasswordFlag ? 'string' : 'password'} placeholder="**********" value={oldPassword} onChange={e => this.textHandle(e, 'oldPassword')} className="input-text border-light " aria-describedby="password" />
                                    <img src={passwordeye} alt='passwordeye' className=' float-right' onClick={this.showPassworHandle} />
                                </div>
                            </div>
                        </div>
                        <div className=" chnagepassword-input-box  p-2 bd-highlight  w-75">
                            <div className='text-box mt-30 text-primary'>
                                <div className="form-group ml-20 mr-20 align-middle">
                                    <label className="text-secondary w-100">New Password</label>
                                    <input type={showPasswordFlag ? 'string' : 'password'} placeholder="***********" value={newPassword} onChange={e => this.textHandle(e, 'newPassword')} className="input-text border-light " aria-describedby="password" />
                                    <img src={passwordeye} alt='passwordeye' className=' float-right' onClick={this.showPassworHandle} />
                                </div>
                            </div>
                        </div>
                        <div className="chnagepassword-input-box p-2 bd-highlight w-75">
                            <div className='text-box mt-30 text-primary'>
                                <div className="form-group ml-20 mr-20 align-middle">
                                    <label className="text-secondary w-100">Comfirm Password</label>
                                    <input type={showPasswordFlag ? 'string' : 'password'} placeholder="***********" value={conformPassword} onChange={e => this.textHandle(e, 'conformPassword')} className="input-text border-light " aria-describedby="password" />
                                    <img src={passwordeye} alt='passwordeye' className=' float-right' onClick={this.showPassworHandle} />
                                </div>
                            </div>
                            <p className='text-red'>{errorMessage}</p>
                        </div>
                    </div>
                    <div className='d-flex p-20 justify-content-center'>
                        <button type="button" className="profile-edit-btn btn btn-danger w-50" onClick={this.submitChnagePwdHandle}>Save</button>
                    </div>

                </div>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changepassword: data => dispatch(changepassword(data))
    };
};
function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassswordCom);