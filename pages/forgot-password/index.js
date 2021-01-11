import React, { Component } from "react";
import Head from 'next/head'
import Link from 'next/link'

import ForgotPassowrdCom from 'components/forgotpassowrd'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
class ForgotPassword extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Belief Challenge - Forgot Password</title>
                    <meta title='Belief Challenge - Forgot Password' />
                </Head>
                {/* <Header /> */}
                <div className=" d-flex align-items-center signup-main">
                    <div className="mb-60 form-content">
                        <p className='wlc-note text-light text-center m-0 pt-30'>Welcome to</p>

                        <Link href="/">
                            <h1 className='text-center text-white m-0 cursor-pointer'>Belief Challenge</h1>
                        </Link>
                        <h5 className='text-light mb-0 mt-80'>Forgot Password</h5>
                        <div className='main-chnagepassword-wrap'>
                            <ForgotPassowrdCom />
                        </div>
                    </div>
                </div>

                {/* <Footer /> */}

            </>

        )
    }
}
export default ForgotPassword