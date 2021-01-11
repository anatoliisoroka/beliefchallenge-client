import React, { Component } from 'react';
import profiledit from 'assets/images/editprofile.png'
import genericfunctions from 'utilfunction/util-api-service'
import { connect } from 'react-redux';
import getObject from 'common/jwt-services'
import { updateprofile } from 'redux/action/generalAction'
import Loader from 'components/loading'

import Router from 'next/router';

class ProfileComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userEmail: '',
            fullName: '',
            email: '',
            authData: undefined,
            disabled: true,
            profilePic_: '',
            profilePic: '',
            loading: true,
            error: undefined,
            success: undefined,
            errorMessage: '',
            tempProfilePic: "",

            fullNameFormat: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            emailFormat: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    }

    componentDidMount() {
        let authData = getObject.getObject('authUser') ? JSON.parse(getObject.getObject('authUser')) : undefined

        if (!authData)
            Router.push('/login')
        else {
            const fullName = authData ? authData.fullName : '';
            this.setState({
                authData: authData,
                fullName,
                //  disabled: authData.socialLogin ? true : false 
            })
            this.fetchprofile(authData, authData.profilePic)
        }
    }

    textHandle = (e, key) => {
        this.setState({ [key]: e.target.value })
    }

    fetchprofile = (authData, pic) => {

        let queryparams = {
            params: {
                userId: authData.userId,
                socialLogin: authData.socialLogin
            }
        }

        genericfunctions._fetchWithParams(`/user/profile`, queryparams).then(res => {
            if (res.data.response.status) {
                this.setState({
                    userName: `${res.data.response.data.fullName}`,
                    fullName: `${res.data.response.data.fullName}`,
                    email: res.data.response.data.email,
                    profilePic_: pic,
                    loading: false
                })
            } else {
                Router.push('/home')
            }
        }).catch(err => {
            this.setState({ loading: false })

        })
    }

    updateProfileHandle = () => {
        let { fullName, email, authData, profilePic, profilePic_, fullNameFormat, emailFormat } = this.state
        this.setState({ loading: true })

        if (fullName.length <= 0 || email.length <= 0) {
            // console.log("please fill all the fields")
            this.setState({ errorMessage: "please fill all the fields", loading: false })
        } else {
            if (!fullName.trim().match(fullNameFormat)) {
                this.setState({ errorMessage: "Name Format Not match", loading: false })
                // console.log("Name Format Not match")
            } else {
                // if (!email.trim().match(emailFormat)) {
                //     console.log("Email Format Not match")
                // } else {
                this.setState({ errorMessage: '' })
                let params = {
                    userData: {
                        fullName,
                        email,
                        profilePic: profilePic ? profilePic : profilePic_,
                        token: this.props.auth.authUser.token,
                        userId: this.props.auth.authUser.userId,
                        socialLogin: this.props.auth.authUser.socialLogin,
                        // ...this.props.auth.authUser,
                        // socialLogin: this.props.auth.authUser.socialLogin
                    },
                    url: '/user/update',
                }
                this.props.updateprofile(params).then(res => {
                    if (res.data.response.status) {
                        this.setState({ errorMessage: '', success: true })
                        setTimeout(() => {
                            this.setState({ success: false })
                        }, 3000)
                    }
                    this.setState({ loading: false, userName: this.state.fullName })
                }).catch(err => {
                    this.setState({ error: true, loading: false })
                    setTimeout(() => {
                        this.setState({ error: false })
                    }, 3000)
                })
                // }
            }
        }
    }

    chooseFileHandle = (e) => {
        // let tempProfilePic = this.getBase64Image(e.target.files[0])
        if (!e.target.files[0]) return;
        this.getBase64Image(e.target.files[0])
        this.setState({ profilePic: e.target.files[0] })
    }

    getBase64Image = async (file) => {
        let b64 = await this.toBase64(file)
        this.setState({ tempProfilePic: b64 })
    }

    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    render() {
        let { loading, errorMessage, authData, fullName, tempProfilePic, error, success } = this.state

        return (
            <>
                {authData && <div className='bg-white p-30 col-lg-6 col-md-8 col-12 mx-auto'>

                    <form >
                        <div className='update-profile-picture text-center d-flex justify-content-center'>
                            <label >
                                <img src={`${tempProfilePic ? tempProfilePic : this.state.profilePic_ ? this.state.profilePic_ : authData.profilePic}`} alt='profilelogo' className='h-100 rounded-circle profile-width' />
                                {/* <img src={authData.profilePic} alt='profilelogo' className='h-100 rounded-circle profile-width' /> */}
                                <input type='file' id="img" accept="image/*" onChange={e => this.chooseFileHandle(e)} className="sr-only" />
                                <img src={profiledit} alt='profilelogo' className='profile-edit img-fluid' />
                                {/* {tempProfilePic && <img src={tempProfilePic} />} */}
                            </label>
                        </div>
                        <div className='profile-name'>
                            <h3 className='font-weight-bold text-center text-capitalize'>{this.state.userName}</h3>
                            {loading && <div className='text-center w-100'><Loader /></div>}
                            {error && <div className="alert alert-danger text-center mt-30" role="alert">
                                <strong>Error!</strong> Something went wrong
                            </div>}
                            {success && <div className="alert alert-success text-center mt-30" role="alert">
                                <strong>Success!</strong> Profile has been updated successfully
                            </div>}
                        </div>
                        <div className='profile-edit-form mx-auto'>
                            <div className="">
                                <div className="profile-input-box bd-highlight">
                                    <div className='text-box mt-20'>
                                        <div className="form-group">
                                            <label className="text-secondary w-100">User Name</label>
                                            <input
                                                type="string"
                                                onChange={e => this.textHandle(e, 'fullName')}
                                                value={fullName}
                                                placeholder="john"
                                                className="input-text border-light w-100"
                                                aria-describedby="string"
                                            />
                                            <p className='text-red'>{errorMessage}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-input-box bd-highlight">
                                    <div className='text-box mt-20'>
                                        <div className="form-group">
                                            <label className="text-secondary w-100">Email Address</label>
                                            <input disabled={this.state.disabled} type="email" onChange={e => this.textHandle(e, 'email')} value={this.state.email ? this.state.email : authData.email} placeholder="john@gmail.com" className="input-text border-light  w-100" aria-describedby="email" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='btn-wrap mt-20'>
                                <button type="button" className="profile-edit-btn btn btn-danger d-inline-block" onClick={this.updateProfileHandle}>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
                }
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        updateprofile: data => dispatch(updateprofile(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileComp);