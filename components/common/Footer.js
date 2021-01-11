import React, { Component } from 'react'
import genericfunctions from 'utilfunction/util-api-service'
import Link from 'next/link'

class Footer extends Component {
    state = {
        visitorcount: 0,
    };
    async componentDidMount() {
        genericfunctions._postRequest("/visitorcount")

        const visitorcount = await genericfunctions._fetchWithOutParams("/visitorcount")
        if (visitorcount)
            this.setState({ visitorcount: visitorcount.data.response.data })
    }

    render() {
        return (
            <div className='footer w-100'>
                <h2 className='m-0 mb-30 text-center text-white text-bold'>Join Belief Challenge Today!</h2>
                <p className='m-0 text-center text-white text-bold'> Do you have what it takes to question everything?</p>
                {/* <h2 className='m-0 mt-30 mb-30 text-center text-white text-bold'>Visitor count: {this.state.visitorcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2> */}
                <p className='m-0 text-center text-white text-bold text-muted'>Belief Challenge © {new Date().getFullYear()} All rights reserved.
                </p>
                <p className='m-0 text-center text-white text-bold text-muted'>
                    <Link href='/about-us'><a className='text-muted text-underline'><u> About us</u></a></Link> | <Link href='/terms-of-use'><a className='text-muted text-underline'><u> Terms of Use</u></a></Link> | <Link href='/privacy-policy'><a className='text-muted text-underline'><u>Privacy Policy</u></a></Link>
                </p>
            </div>
        )
    }
}
export default Footer; 