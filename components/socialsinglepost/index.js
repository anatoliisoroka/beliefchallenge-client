import React, { Component } from 'react';
import { withRouter } from 'next/router'
import genericfunctions from 'utilfunction/util-api-service'
// import comment from 'assets/images/comment.png'
import Comment from 'post/comment'
import Logo from 'common/Logo';
import Header from 'common/Header';
import Footer from 'common/Footer';
import ShareCom from 'share'
import comment from 'assets/images/comment.png'
import share from 'assets/images/share.png'
import { connect } from 'react-redux';
import { getCategory } from 'redux/action/categoryAction'
import moment from 'moment'
import { BASEURL } from 'common/config';

class SocialSinglePost extends Component {
    static getInitialProps(state) {
        console.log(state, 'asdsadsadsad')
        // let queryparams = {
        //     params: {
        //         postId: ctx.router.query.postId,
        //         skip: 0,
        //         limit: 1
        //     }
        // }
        // let url = "/post"
        // genericfunctions._fetchWithParams(url, queryparams).then(res => {
        //     if (res.data) {
        //         // this.setState({ postData: res.data.response.data })
        //     }
        // })

        return {}
    }
    constructor() {
        super()
        this.state = {
            postData: {},
            commentPanel: false,
            sharePanel: false,
            categoryData: []

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

    handleOpenSharePanel = () => {
        let { sharePanel, commentPanel } = this.state
        this.setState({ sharePanel: !sharePanel, commentPanel: false })
    }
    render() {
        // let publishedDate = moment(this.props.data.createdDate).format('DD MMM, YYYY')
        // let publishedTime = moment(this.props.data.createdDate).format('HH:MM A')
        let postCategory;

        let { sharePanel, commentPanel, readMore, postData } = this.state
        postCategory = this.state.categoryData.filter(categoryid => categoryid._id == postData.categoryId)[0]
        console.log(this.state.categoryData, postData[0], 'postCategory');


        return (
            <>
                <Header />
                <Logo />
                <div className='col-12'>
                    <div className='social-post border-dark d-flex p-2 bg-white flex-column'>
                        {postData.length > 0 &&
                            <>
                                <div className=' w-100'>
                                    <p className='font-weight-bold'>I believe {postData[0].postQuestion},
                                but I might change my mind if:</p>
                                </div>
                                <div className='pl-30 pr-30 post-question-option w-75'>
                                    <p className='border-bottom font-weight-bold'>1:&nbsp; &nbsp;<span className='text-muted'>{postData[0].options[0]}</span></p>
                                    <p className='border-bottom font-weight-bold'>2:&nbsp; &nbsp;<span className='text-muted'>{postData[0].options[1]}</span></p>
                                    <p className='border-bottom font-weight-bold'>3:&nbsp; &nbsp;<span className='text-muted'>{postData[0].options[2]}</span></p>
                                </div>

                            </>}

                        <div className='post-fotter row pl-30 pr-30'>
                            <div className={`col-sm-12 col-md-3 float-left ${commentPanel ? 'comment-active' : 'comment'} border  m-2 `} onClick={this.handleOpenCommentPanel}>
                                <div className='commet-icon text-center align-self-cente w-100'>
                                    <p className='m-0 pt-5 pb-5 text-muted font-weight-bold'>
                                        <img src={comment} alt="pinpiost" className='mr-5 mb-1' />
                                        Commet</p>
                                </div>
                            </div>
                            <div className={`col-sm-12 col-md-3 ${sharePanel ? 'share-active' : 'share'} border float-left mr-auto m-2  text-center`} onClick={this.handleOpenSharePanel}>
                                <div className='share-icon align-self-cente w-100'>
                                    <p className='m-0 pt-5 pb-5 text-muted font-weight-bold'>
                                        <img src={share} alt="pinpiost" className='mr-5 mb-1' />
                                        Share</p>
                                </div>

                            </div>

                            <div className='col-sm-12 col-md-4 m-2 pt-5 float-right entertainment '>
                                <div className='entertainment-icon text-center align-self-cente w-100'>
                                    {JSON.stringify(postCategory)}
                                    {/* {this.state.categoryData.length > 0 && <p className='m-0 text-muted text-right font-weight-bold text-capitalize'>
                                        <img src={postCategory.catIcon.url} alt="pinpiost" className='mr-5 mb-1 img-invert' />
                                        {postCategory.title}
                                    </p>} */}
                                </div>

                            </div>
                        </div>
                    </div>

                    {commentPanel && <Comment postData={this.props.data} ind={this.props.indx} />}
                    {/* {sharePanel && <ShareCom  url={'192.168.0.79:8091/SocialPost?postId=5e0ecc3163297d1f1cff6b4b'}/>} */}
                    {sharePanel && <ShareCom url={`${BASEURL}/post-detail?postId=${detailsPostData[0]._id}`} />}

                </div>
                <Footer />
                {/* <div className='social-post-main bg-dark p-10'>
                    <div className='social-post-header'>
                        <h1 className='text-center text-white pt-30 m-0'>Belief Challenge</h1>
                        <p className='text-center text-white p-0 m-0 font-weight-bold'>Question Everything.</p>
                    </div>
                    <div className={`social-post border-dark d-flex p-2 bg-white flex-column ${commentPanel ? 'social-post-comment-active' : 'social-post-comment'}`}>
                        {postData.length > 0 &&
                            <>
                                <div className=' w-100'>
                                    <p className='font-weight-bold'>I believe {postData[0].postQuestion},
                                but I might change my mind if:</p>
                                </div>
                                <div className='pl-30 pr-30 post-question-option w-75'>
                                    <p className='border-bottom font-weight-bold'>1:&nbsp; &nbsp;<span className='text-muted'>{postData[0].options[0]}</span></p>
                                    <p className='border-bottom font-weight-bold'>2:&nbsp; &nbsp;<span className='text-muted'>{postData[0].options[1]}</span></p>
                                    <p className='border-bottom font-weight-bold'>3:&nbsp; &nbsp;<span className='text-muted'>{postData[0].options[2]}</span></p>
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