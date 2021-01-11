import React, { Component } from 'react';
import { withRouter } from 'next/router'
import genericfunctions from 'utilfunction/util-api-service'
// import comment from 'assets/images/comment.png'
import Comment from 'components/post/comment'
import Logo from 'components/common/Logo';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import ShareCom from 'components/share'
import comment from 'assets/images/comment.png'
import share from 'assets/images/share.png'
import { connect } from 'react-redux';
import { getCategory } from 'redux/action/categoryAction'
import moment from 'moment'
import Head from 'next/head';
import { BASEURL } from 'common/config';

import PostCom from 'components/post/postCom'
import { NextSeo, DefaultSeo } from 'next-seo';

class SocialSinglePost extends Component {
    static async getInitialProps(ctx) {
        let queryparams = {
            params: {
                postId: ctx.query.postId,
                skip: 0,
                limit: 1
            }
        }
        let url = "/post"
        let detailsPostData = await genericfunctions._fetchWithParams(url, queryparams).then(res => {
            if (res.data) {
                return res.data.response.data
            }
        })
        return {
            detailsPostData,
        }
    }
    constructor() {
        super()
        this.state = {
            // detailsPostData: {},
            commentPanel: false,
            sharePanel: false,
            categoryData: [],


            postCategory: '',
            chnageCommentpanel: this.chnageCommentpanel.bind(this),


        }
    }

    componentDidMount() {
        this.fetchCategory()

    }

    fetchCategory = () => {
        let params = {
            url: '/category'
        }
        this.props.getCategory(params).then(res => {
            // console.log(res)
            this.setState({ categoryData: res.data.response.data })
        })
    }
    handleOpenCommentPanel = () => {
        let { commentPanel } = this.state
        this.setState({ commentPanel: commentPanel = !commentPanel })
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     Router.onRouteChangeStart = (url) => {
    //         prevState.chnageCommentpanel()
    //     }
    //     return null
    // };
    chnageCommentpanel = () => {
        // console.log("abc")
        this.setState({ commentPanel: false, sharePanel: false })
    }

    handleOpenSharePanel = () => {
        let { sharePanel, commentPanel } = this.state
        this.setState({ sharePanel: !sharePanel, commentPanel: false })
    }
    readMore() {
        return this.props.detailsPostData.postQuestion.length > 100 ? true : false
    }
    render() {
        let postCategory;

        let { sharePanel, commentPanel, readMore } = this.state
        let { detailsPostData } = this.props
        // let publishedTime = moment(detailsPostData[0].createdDate).format('HH:MM A')
        // let publishedDate = moment(detailsPostData[0].createdDate).format('DD MMM, YYYY')
        postCategory = this.state.categoryData.filter(categoryid => categoryid._id == detailsPostData[0].categoryId)
        console.log(postCategory, 'rednder')


        return (
            <>
             <NextSeo
                title="Belief Challenge"
                description={'I believe ' + detailsPostData[0].postQuestion}
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: `https://beliefchallenge.com/post-detail?postId=${detailsPostData[0]._id}`,
                }}
                />
                <Head>
                    <title>Belief Challenge - I believe + {detailsPostData[0].postQuestion}</title>
                </Head>
                <Header />
                <Logo />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-12 mx-auto">
                            <PostCom indx={1} data={detailsPostData[0]} commentFlag={false} />
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className='p-30 border-dark d-flex bg-white flex-column col-lg-6 col-md-8 col-12 mx-auto'>
                            {detailsPostData.length > 0 &&
                                <>
                                    <div className='post-question ' >
                                        {detailsPostData[0].postQuestion && <><p className='font-weight-bold'>
                                            I believe {readMore ?
                                                `${detailsPostData[0].postQuestion.substr(0, 100)}` :
                                                (detailsPostData[0].postQuestion)}
                                            {detailsPostData[0].postQuestion.length > 100 ?
                                                <span className='cursor-pointer' onClick={this.showMore}>... <span className="font-weight-normal text-primary"> Read
                                   {readMore ? ' More' : ' Less'}</span></span> : (undefined)}
                                        </p> <p className='font-weight-bold'> but I might change my mind if: </p></>}

                                    </div>
                                    <div className='post-question-option'>
                                        <p className='border-bottom font-weight-bold'>1:&nbsp; &nbsp;<span className='text-muted'>{detailsPostData[0].options[0]}</span></p>
                                        <p className='border-bottom font-weight-bold'>2:&nbsp; &nbsp;<span className='text-muted'>{detailsPostData[0].options[1]}</span></p>
                                        <p className='border-bottom font-weight-bold'>3:&nbsp; &nbsp;<span className='text-muted'>{detailsPostData[0].options[2]}</span></p>
                                    </div>

                                </>}

                            <div className='post-fotter '>
                                <div className={`col-sm-12 col-md-3 float-left ${commentPanel ? 'comment-active' : 'comment'} border mr-10 mt-10`} onClick={this.handleOpenCommentPanel}>
                                    <div className='commet-icon text-center align-self-cente w-100'>
                                        <p className='m-0 pt-5 pb-5 text-muted font-weight-bold'>
                                            <img src={comment} alt="pinpiost" className='mr-5 mb-1' />
                                            Comment</p>
                                    </div>
                                </div>
                                <div className={`col-sm-12 col-md-3 ${sharePanel ? 'share-active' : 'share'} border float-left mr-auto mt-10 text-center`} onClick={this.handleOpenSharePanel}>
                                    <div className='share-icon align-self-cente w-100'>
                                        <p className='m-0 pt-5 pb-5 text-muted font-weight-bold'>
                                            <img src={share} alt="pinpiost" className='mr-5 mb-1' />
                                            Share</p>
                                    </div>

                                </div>

                                <div className='col-sm-12 col-md-4 pt-15 pr-0 float-right entertainment '>
                                    <div className='entertainment-icon text-center align-self-cente w-100'>
                                        {postCategory.length && <p className='m-0 text-muted text-right font-weight-bold text-capitalize'>
                                            <img src={postCategory[0].catIcon.url} alt="pinpiost" className='mr-5 mb-1 img-invert' />
                                            {postCategory[0].title}
                                        </p>}
                                    </div>

                                </div>
                            </div>
                            {commentPanel && <Comment postData={detailsPostData[0]} ind={0} />}
                            {sharePanel && <ShareCom url={`${BASEURL}/post-detail?postId=${detailsPostData[0]._id}`} />}
                        </div>

                    </div>
                </div> */}


                <Footer />
                {/* <div className='social-post-main bg-dark p-10'>
                    <div className='social-post-header'>
                        <h1 className='text-center text-white pt-30 m-0'>Belief Challenge</h1>
                        <p className='text-center text-white p-0 m-0 font-weight-bold'>Question Everything.</p>
                    </div>
                    <div className={`social-post border-dark d-flex p-2 bg-white flex-column ${commentPanel ? 'social-post-comment-active' : 'social-post-comment'}`}>
                        {detailsPostData.length > 0 &&
                            <>
                                <div className=' w-100'>
                                    <p className='font-weight-bold'>I believe {detailsPostData[0].postQuestion},
                                but I might change my mind if:</p>
                                </div>
                                <div className='pl-30 pr-30 post-question-option w-75'>
                                    <p className='border-bottom font-weight-bold'>1:&nbsp; &nbsp;<span className='text-muted'>{detailsPostData[0].options[0]}</span></p>
                                    <p className='border-bottom font-weight-bold'>2:&nbsp; &nbsp;<span className='text-muted'>{detailsPostData[0].options[1]}</span></p>
                                    <p className='border-bottom font-weight-bold'>3:&nbsp; &nbsp;<span className='text-muted'>{detailsPostData[0].options[2]}</span></p>
                                </div>
                                
                            </>}
                    </div>
                </div> */}

            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategory: data => dispatch(getCategory(data))
    };
};
// function mapStateToProps(state) {
//     return {
//         categoryData: state.category
//     };
// }
export default withRouter(connect(null, mapDispatchToProps)(SocialSinglePost));

// export default withRouter(SocialSinglePost);