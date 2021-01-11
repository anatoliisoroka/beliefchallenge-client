import React, { useState, useEffect } from 'react';
// import search from 'assets/images/search.png'
import HeaderDropDown from './HeaderDropDown'
import { connect } from 'react-redux';
import Link from 'next/link'
import getObject from 'common/jwt-services'
import Router from 'next/router'
import { withRouter } from 'next/router'
import { getPostLikes } from 'redux/action/generalAction'
// import axiosinstance from 'common/config.axios'

const header = (props) => {
    let [dropDown, setDropdown] = useState(false)
    let [authData, setAuthUser] = useState('')
    let [isLoggedIn, setIsLoggedIn] = useState('')
    let [profilePic, setProfilePics] = useState('')
    let [searchText, setSearchText] = useState('')

    useEffect(() => {
        let result = getObject.getObject('authUser');
        if (props.router.query.search) {
            setSearchText((searchText = props.router.query.search))
        }
        if (result) {
            let authData = JSON.parse(result)
            setIsLoggedIn((isLoggedIn = authData.token ? true : false))
            setAuthUser((authData = authData))
            setProfilePics((profilePic = authData.profilePic))
        }
        // const user_likes = genericfunctions._fetchWithOutParams("/likepost").then(res => {
        //     console.log(res)
        // })

        // let params = {
        //     url: '/likepost'
        // }

        // props.getPostLikes(params).then(res => {
        // })

        // let cookieData = getObject.getObject('authUser')
        // if (cookieData) {
        //     let parsed = JSON.parse(getObject.getObject('authUser'))
        //     axiosinstance.defaults.headers.common['Authorization'] = parsed.token;
        // }
    }, [])

    function textChangeHandle(e, key) {
        setSearchText(([key] = e.target.value))
    }

    function searchHandle() {
        if (searchText.length > 0) {
            Router.push({
                pathname: '/home', query: { page: 1, search: searchText },
            })
        }
    }

    function handleOpenDropDown() {
        setDropdown(dropDown = !dropDown)
    }
    return (
        <header className="header-main">
            <div className="container position-relative py-15">
                <div className="row m-0 justify-content-between">
                    <div className="search-btn flex-fill bd-highlight ">
                        <input type='search' className='input-text-search' placeholder='Search here!' value={searchText} onChange={e => textChangeHandle(e, "searchText")} onKeyUp={e => e.keyCode == 13 ? searchHandle() : null} />
                    </div>
                    <div className="flex-fill bd-highlight text-white font-weight-bold text-right align-self-center">
                        {isLoggedIn ?
                            <><p className='cursor-pointer d-flex align-items-center mb-0 justify-content-end text-capitalize' onClick={handleOpenDropDown}> <Link href='/about-us'><a className='about-us text-white float-left mr-3'>About Us</a></Link>|<span className="d-none d-sm-block ml-3">{authData.fullName}</span> <img src={`${profilePic}`} alt='profilelogo' height="30px" width='30px' className="ml-10" /> </p></>
                            :
                            <>  <Link href='/about-us'><a className='about-us hidden-xs text-white mr-3'>About us</a></Link><span className="hidden-xs">|</span><Link href='/signup'><a className='about-us text-white ml-3 mr-3'>Join</a></Link>|
                                <Link href='/login'><a className=' text-white float-right ml-3'>Login</a></Link> </>}
                        <div className='text-left'>{dropDown && <HeaderDropDown handleOpenDropDown={handleOpenDropDown} />}</div>
                    </div>
                </div>
            </div>
        </header >
    )
}
function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPostLikes: data => dispatch(getPostLikes(data))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header));