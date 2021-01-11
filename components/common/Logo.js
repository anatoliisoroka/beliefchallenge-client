import React from 'react'
import Link from 'next/link';
const logo = () => {
    return (
        <div className="pt-50 pb-50 text-center">
            <Link href="/">
                <a>
                    <img src="/static/images/logo.png" className="img-fluid" alt="Belief Challenge" />
                </a>
                {/* <h1 className='text-center text-white m-0 cursor-pointer'>Belief Challenge</h1> */}
            </Link>
            {/* <p className='text-center text-white p-0 m-0 font-weight-bold'>Question Everything.</p> */}
        </div>
    )
}

export default logo