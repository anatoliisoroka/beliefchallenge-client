import React, { Component } from "react";
import Head from 'next/head'
import Logo from 'components/common/Logo';
import Post from 'components/admin/posts'
import User from 'components/admin/users'
import Category from 'components/admin/categories'

class AdminHome extends Component {
    constructor() {
        super()
        this.state = {
            post: false,
            category: true,
            user: false,
        }
    }

    handleSideBar = (key) => {
        console.log(key)
        if (key == 'post') {
            this.setState({ post: true, category: false, user: false })
        }
        if (key == 'category') {
            this.setState({ post: false, category: true, user: false })
        }
        if (key == 'user') {
            this.setState({ post: false, category: false, user: true })
        }
    }

    render() {
        let { post, category, user } = this.state
        return (
            <>
                <div className='container'>
                    <Head>
                        <title>Belief Challenge - Admin Panel</title>
                        <meta title='Belief Challenge - Admin Panel' />
                    </Head>
                    <Logo />
                    <h2 className='text-white text-center'>Admin Panel</h2>
                    <div className='row'>
                        <div className='col-sm-12 col-md-3'>
                            <ul>
                                <li onClick={() => this.handleSideBar('category')} className={` ${!category && 'text-muted'} cursor-pointer d-block font-weight-bold text-capitalize pt-5 pb-5 pl-20 pr-30 mt-20  mb-20 ml-20 mr-20 text-white`} >
                                    Categories
                                </li>
                                <li onClick={() => this.handleSideBar('user')} className={` ${!user && 'text-muted'}  cursor-pointer d-block font-weight-bold text-capitalize pt-5 pb-5 pl-20 pr-30 mt-20  mb-20 ml-20 mr-20 text-white`} >
                                    Users
                                    {/* <ul className='pl-10'>
                                        <li className='cursor-pointer d-block font-weight-bold text-capitalize pt-5 text-muted text-white'>
                                            Admin
                                        </li>
                                        <li className='cursor-pointer d-block font-weight-bold text-capitalize pt-5 text-muted text-white'> 
                                            User
                                        </li>
                                    </ul> */}
                                </li>
                                <li onClick={() => this.handleSideBar('post')} className={` ${!post && 'text-muted'}  cursor-pointer d-block font-weight-bold text-capitalize pt-5 pb-5 pl-20 pr-30 mt-20  mb-20 ml-20 mr-20 text-white`} >
                                    Posts
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-9 col-12'>
                            {category ? <Category /> : user ? <User /> : <Post />}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AdminHome;