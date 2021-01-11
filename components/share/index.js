import React from 'react'
import facebook from 'assets/images/facebook.png'
import twitter from 'assets/images/twitter.png'
import linkdin from 'assets/images/linkdin.png'
import insta from 'assets/images/insta.png'
import commentarrow from 'assets/images/commentarrow.png'
// import 'social-likes-next';
// import 'social-likes-next/lib/social-likes_flat.css';

import Head from 'next/head'
const share = (props) => {
    console.log(props.url)
    return (
        <>
            <Head>
                <script src="https://cdn.jsdelivr.net/npm/social-likes-next/dist/social-likes.min.js" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/social-likes-next/dist/social-likes_birman.css" />
            </Head>
            {/* <div class="social-likes">
                <div data-service="facebook" data-url="http://landscapists.info/" title="Share link on Facebook">Facebook</div>
            </div> */}
            <div className='share-main justify-content-center w-100'>
                <div className='share-icons d-flex justify-content-center pl-10 pr-10 border border-primary text-center'>
                    <img src={commentarrow} alt='arrow' className='share-arrow' />
                    <div className="social-likes">
                        <div data-service="facebook" data-url={`${props.url}`} title="Share link on Facebook"></div>
                        <div data-service="twitter" data-url={`${props.url}`} title="Share link on twitter"></div>
                        <div data-service="linkedin" data-url={`${props.url}`} title="Share link on linkedin"></div>
                    </div>
                    {/* <img src={facebook} alt='facebook' className='m-10' />
                    <div data-service="facebook" title="Share link on Facebook">Facebook</div>

                    <img src={twitter} alt='twitter' className='m-10' />
                    <img src={linkdin} alt='linkdin' className='m-10' />
                    <img src={insta} alt='insta' className='m-10' /> */}
                </div>
            </div>
        </>
    )
}
export default share