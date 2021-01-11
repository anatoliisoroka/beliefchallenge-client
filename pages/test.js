

import React, { Component } from 'react';
// import Link from './Link'
import axios from 'axios'
import genericfunctions from 'utilfunction/util-api-service'
import PostCom from 'components/post/postCom'
import Link from 'next/link';

class Test extends Component {
    static async getInitialProps(props) {
        let { categoryId, search, skip, limit } = props.query
        let queryparams = {
            params: {
                categoryId: categoryId ? categoryId : '',
                search: search ? search : '',
                skip,
                limit
            }
        }

        let postData = await genericfunctions._fetchWithParams("/post", queryparams).then(res => {
            if (res.data) {
                return res.data.response.data
            }
        })
        return { postData }
    }
    constructor(props) {
        super(props)
        this.state = {
            postData: [],
            activeCategory: '',
            pinPost: [],
            isLoggedIn: false,
            search: '',
            isActiveCate: true,
            limit: 5,
            skip: 0,
            total: '',
            pageCount: 3,
            currentPage: 1,
            urlcategoryId: ''
        }
    }


    // fetchPost = async (props) => {
    //     let { limit, skip, categoryId } = props
    //     let queryparams = {
    //         params: {
    //             categoryId: categoryId ? categoryId : '',
    //             skip,
    //             limit
    //         }
    //     }
    //     let url = "/post"

    //     await genericfunctions._fetchWithParams(url, queryparams).then(res => {
    //         if (res.data) {
    //             console.log(res)
    //             this.setState({ postData: res.data.response.data, total: res.data.response.data.length * limit })
    //         }
    //     })
    // }
    render() {
        return (
            <>
                {/* {this.props.data[0].categoryId} */}
                <Link href={{ pathname: '/test', query: { categoryId: '5e01bfd28e9fb50e70802f42', skip: 1, limit: 1 } }}>
                    <a>
                        goto
                       </a>
                </Link>
                {this.props.postData.map((itms, indx) => {
                    return (
                        <PostCom key={indx} data={itms} />
                        // <div key={indx}>{itms.categoryId}</div>
                    )
                })}
            </>
        )
    }
}
export default Test;