import React, { Component } from 'react'
import Head from 'next/head'
import Router, { withRouter } from 'next/router'
import Header from 'components/common/Header'
import PostCom from 'components/post/postCom'
import Footer from 'components/common/Footer'
import genericfunctions from 'utilfunction/util-api-service'
import { connect } from 'react-redux';
import Pagination from 'components/common/Pagination'
import { ITEMS_LIMIT } from 'common/config'
import Loader from 'components/loading'
import Logo from 'components/common/Logo';
import Modal from 'components/common/modal';
import { showModal } from 'redux/action/generalAction'
/**
 * created by zain ahmed 
 * created date: 25/12/2019
 * class component for user post
 */

class MyPost extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {
            myPostData: [],
            authData: '',
            loading: true,
        }
        this._isMounted = true;

        Router.events.on('routeChangeComplete', () => {
            if (this._isMounted)
                this.fetchPost()
        });
    }


    static getDerivedStateFromProps(props, state) {
        // if (props.auth.authUser.userEmail != state.email) {
        let query = props.router.query

        if (props.auth.authUser.email != state.email) {
            return { authData: props.auth.authUser, currentPage: +query.page > 1 ? +query.page : 1 }
        }
        return { currentPage: +query.page > 1 ? +query.page : 1 };
    }

    componentDidMount() {
        this.fetchPost()
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    /**
     * @param {*userId(string)} params ,
     * function for fetch post with userId
     */
    // fetchPost = (catId) => {
    //     let result = this.state.authData.userId;
    //     let userId = result.userId;
    //     let skip = 0;
    //     let limit = 5;
    //     genericfunctions._fetchWithParams(`/post?userId=${userId}&&skip=${skip}&&limit=${limit}`).then(res => {
    //         this.setState({ myPostData: res.data.response.data })
    //     })


    // }

    /**
     * delete  post funtion
     * @param {postid(string)}
     */
    deletePost = () => {

        let userData = {
            postId: this.props.modalData.postId,
            role: this.props.auth.authUser.role,
            userId: this.props.auth.authUser.userId,
            socialLogin: this.props.auth.authUser.socialLogin
        }
        genericfunctions._deleteRequest(`/post`, userData).then(res => {

            this.fetchPost()
        })
    }

    fetchPost = async () => {
        let queryparams = {
            params: {
                skip: (this.state.currentPage - 1) * ITEMS_LIMIT,
                limit: ITEMS_LIMIT,
                userId: this.state.authData.userId
            }
        }


        await genericfunctions._fetchWithParams('/post', queryparams).then(res => {
            // console.log(res)
            if (res.data) {
                // console.log('data')
                this.setState({ myPostData: res.data.response.data, count: res.data.response.count, loading: false })
                this.props.showModal({})
            }
        })
    }


    render() {
        let { myPostData, loading } = this.state;
        return (
            <>
                <Head>
                    {/* {currentPage && ', Page Number ' + currentPage} */}
                    <title>Belief Challenge - My Posts</title>
                    <meta title='Belief Challenge - My Posts' />
                </Head>
                <Header />
                <div className='bg-dark px-15'>
                    <Logo />
                    <div className='container'>
                        <div className="row">

                            {loading && <div className='text-center'> <Loader /></div>}
                            <div className="col-lg-6 mx-auto">
                                {myPostData && myPostData.map((itms, indx) => {
                                    return (
                                        <PostCom key={itms._id} ind={itms._id} data={itms} fetchPost={this.fetchPost} />
                                    )
                                })}
                                {this.state.count ? <div className="pagination">
                                    <Pagination pageRoute="/my-post" count={this.state.count} itemsLimit={ITEMS_LIMIT} />
                                </div> : <div className="alert alert-danger text-center" role="alert">
                                        Item(s) not found
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                {this.props.modalData.showModal && <Modal showModal={this.props.modalData.showModal} triggerModalSuccess={this.deletePost} triggerModalClose={() => this.props.showModal({})} />}

            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth,
        modalData: state.general.modalData

    };
}
function mapDispatchToProps(dispatch) {
    return {
        showModal: data => dispatch(showModal(data))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyPost));