import React, { Component } from 'react'
import SideBar from 'common/SideBar'
import Head from 'next/head'
import Logo from 'components/common/Logo'
import CreatePost from 'components/post/createpost'
import PostCom from 'components/post/postCom'
import Pagination from 'components/common/Pagination'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import genericfunctions from 'utilfunction/util-api-service'
import { connect } from 'react-redux';
import getObject from 'common/jwt-services'
import { ITEMS_LIMIT } from 'common/config'
import Loader from 'components/loading'
import Router, { withRouter } from 'next/router'
import Modal from 'components/common/modal';
import { showModal } from 'redux/action/generalAction'




class DefaultLayout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeCategory: '',
            pinPost: [],
            isLoggedIn: false,
            isActiveCate: true,
            currentPage: 1,
            loader: true.pagerToShow,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let query = nextProps.router.query

        return {
            currentPage: +query.page > 1 ? +query.page : 1,
        }
    }

    componentDidMount() {

        let result = getObject.getObject('authUser');
        if (result) {
            this.setState({ isLoggedIn: true })
        }
        this.fetchPinPost()
        if (this.props.postData) {
            this.setState({ loader: false })
        }

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-163410270-1');
    }

    fetchPinPost = async () => {
        await genericfunctions._fetchWithOutParams('/post/pinpost').then(res => {
            if (res.data.response.status) {
                this.setState({ pinPost: res.data.response.data })
            }
        })
    }

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
            this.props.showModal({})
            Router.router.push(Router.router.asPath)
        })
    }

    handlePageChange = (page, e) => {
        this.setState({ skip: limit, limit: limit * page })
        this.setState({
            currentPage: page
        });
    };

    render() {
        let { activeCategory, pinPost, isLoggedIn, currentPage, loader } = this.state;

        return (
            <>
                <Head>
                    <title>Belief Challenge</title>
                    {/* <title>Belief Challenge - Home {currentPage && ', Page Number ' + currentPage}</title> */}
                    <meta title='Belief Challenge - Home' />
                </Head>
                <Header />

                <div className='container-fluid home-main bg-dark' onScroll={this.scrollHandle}>
                    <Logo />
                    <div className='container pb-35'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <SideBar activeCategory={activeCategory} />
                            </div>

                            <div className="col-lg-6 mb-50" >
                                {loader && <div className='text-center'> <Loader /></div>}
                                {isLoggedIn && <><CreatePost fetchPost={this.props.fetchPost} count={this.props.count} /> <hr className="mt-40 mb-40" /></>}

                                {pinPost.length > 0 && <>
                                    <PostCom data={pinPost[0]} pinPost={true} fetchPinPost={this.fetchPinPost} /> <hr className="mt-40 mb-40" />
                                </>}
                                {this.props.postData && this.props.postData.map((itms, indx) => {
                                    return (<PostCom key={'post-' + itms._id} data={itms} commentFlag={false} pinPost={false} fetchPinPost={this.fetchPinPost} />)
                                })}
                                {this.props.count ? <div className="pagination">
                                    <Pagination pageRoute="/home" count={this.props.count} itemsLimit={ITEMS_LIMIT} pagerToShow={4} />
                                </div> : <div className="alert alert-danger text-center" role="alert">
                                        Nothing to show
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
        modalData: state.general.modalData,
        postData: state.general.postData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showModal: data => dispatch(showModal(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DefaultLayout));