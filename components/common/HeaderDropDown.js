import React, { Component } from 'react';
import commentarrow from 'assets/images/commentarrow.png'
import password from 'assets/images/password.png'
import logout from 'assets/images/logout.png'
import mypost from 'assets/images/mypost.png'
import profileicon from 'assets/images/profileicon.png'
import home from 'assets/images/home.png'
import Link from 'next/link'
import { connect } from 'react-redux';
import { logoutFN } from 'redux/action/authAction.js'

class HeaderDropDown extends Component {
    constructor() {
        super()
        this.state = {
            socialLogin: false
        }
    }
    logoutHandle = () => {
        let params = {
            userId: this.props.auth.authUser.userId,
            url: '/auth/logout'
        }
        this.props.logoutFN(params)
    }
    render() {
        return (
            <>
                <div className=' p-2 bd-highlight header-drop-down'>
                    <img src={commentarrow} alt="commentarrow" className='dropdown-img float-right' />
                    <ul onClick={this.props.handleOpenDropDown}>
                        <Link href='/'>
                            <li className='text-bold'>
                                <p className='m-0 ml-5 p-5 text-dark text-sm'><img src={home} alt='home' className='mr-5' />Home</p>
                            </li>
                        </Link>
                        <Link href='/profile'>
                            <li className='text-bold'>
                                <p className='m-0 ml-5 p-5 text-dark text-sm'><img src={profileicon} alt='profileicon' className='mr-5' />Profile</p>
                            </li>
                        </Link>
                        <Link href={{ pathname: "/my-post", query: { page: 1 } }}>
                            <li className='text-bold'>
                                <p className='m-0 ml-5 p-5 text-dark text-sm'> <img src={mypost} alt='mypost' className='mr-5' />My Posts</p>
                            </li>
                        </Link>
                        {!this.props.auth.authUser.socialLogin &&
                            <Link href='/change-password'>
                                <li className='text-bold'>
                                    <p className='m-0 ml-5 p-5 text-dark text-sm'><img src={password} alt='password' className='mr-5' />Password</p>
                                </li>
                            </Link>}
                        {/* {this.props.auth.authUser.role == "admin" &&
                            <Link href={{ pathname: "/admin-home"}}>
                                <li className='text-bold'>
                                    <p className='m-0 ml-5 p-5 text-dark text-sm'> <img src={mypost} alt='admin-home' className='mr-5' />Admin Home</p>
                                </li>
                            </Link>
                        } */}
                        <li className='text-bold' onClick={this.logoutHandle}>
                            <p className='m-0 ml-5 p-5 text-dark text-sm' ><img src={logout} alt='logout' className='mr-5' />Logout</p>
                        </li>

                    </ul>
                </div>
                <div className="overlay" onClick={this.props.handleOpenDropDown}></div>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logoutFN: data => dispatch(logoutFN(data))
    };
};
function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropDown);