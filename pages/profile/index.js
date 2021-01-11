import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';

import ProfileComp from 'components/profile'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import Logo from 'components/common/Logo';
class Profile extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Belief Challenge - Profile</title>
                    <meta title='Belief Challenge - Profile' />
                </Head>
                <div className='main-profile-wrap bg-dark '>
                    <Header />
                    <div className="px-15">
                        <Logo />
                        <div className='container mb-30'>
                            <ProfileComp />
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }
}
export default Profile