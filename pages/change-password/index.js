import React, { Component } from "react";
import Head from 'next/head'
import Link from 'next/link'

import ChangePassswordCom from 'components/changepassowrd'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
class ChangePassword extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Belief Challenge - Change Password</title>
                    <meta title='Belief Challenge - Change Password' />
                </Head>
                <Header />
                <div className="mb-60">
                    <Link href="/">
                        <h1 className='text-center text-white pt-30 m-0 cursor-pointer'>Belief Challenge</h1>
                    </Link>
                    <p className='text-center text-white p-0 m-0 font-weight-bold'>Question Everything.</p>
                </div>
                <div className='main-chnagepassword-wrap mt-50 mb-50'>
                    <ChangePassswordCom />
                </div>
                <Footer />

            </>

        )
    }
}
export default ChangePassword