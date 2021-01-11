import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import pinpost from 'assets/images/pinpost.png'
import pinposted from 'assets/images/pinposted.png'
import profilelogo from 'assets/images/profilelogo.png'
import comment from 'assets/images/comment.png'
import share from 'assets/images/share.png'
import likeIcon from 'assets/images/like.png'
import Comment from 'comment'
import postdeleteicon from 'assets/images/postdeleteicon.png'
import ShareCom from '../../share'
import genericfunctions from 'utilfunction/util-api-service'
import { connect } from 'react-redux';
import Router from 'next/router'

import moment from 'moment'
import { BASEURL } from 'common/config';
import { showModal, addPostLike, removePostLike } from 'redux/action/generalAction'

library.add(faUserCircle, faThumbtack);

class postCom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commentPanel: false,
            sharePanel: false,
            postCategory: '',
            chnageCommentpanel: this.chnageCommentpanel.bind(this),
            readMore: this.props.data.postQuestion.length > 100 ? true : false,
            showModal: false,
            likeFlag: '',
            postLikeCount: this.props.data.likes ? this.props.data.likes : 0,
            isLike: [],
            processing: false,
            isLoggedIn: false,
            commentCount: 0
        }

    }
    static getDerivedStateFromProps(props, state) {

        let isLike = props.generalData.postLikes.filter(i => i == props.data._id)
        if (isLike[0] == props.data._id) {

            return {
                ...state,
                isLike
            }
        }
        else return null
    }
    handleOpenCommentPanel = () => {
        let { sharePanel, commentPanel } = this.state
        // this.setState({ commentPanel: commentPanel == true ? false : true, sharePanel: false })
        this.setState({ commentPanel: !commentPanel, sharePanel: false })
    }
    handleOpenSharePanel = () => {
        let { sharePanel, commentPanel } = this.state
        // this.setState({ sharePanel: sharePanel == true ? false : true, commentPanel: false })
        this.setState({ sharePanel: !sharePanel, commentPanel: false })
    }
    chnageCommentpanel = () => {
        // console.log("abc")
        this.setState({ commentPanel: false, sharePanel: false })
    }


    /**
     * fetch pin post funtion
     * @param {postid(string)}
     */
    pinPostHandle = () => {
        let params = {
            postId: this.props.data._id,
            isPin: this.props.pinPost,
            socialLogin: this.props.auth.authUser.socialLogin,
            // socialLogin:"abc"
        }
        // let postId = { postId: this.props.data._id }
        genericfunctions._updateRequest('/post/pinpost', params).then(res => {
            // this.props.fetchPost()

        })
    }
    // componentWillUnmount() {
    // this.setState({ commentPanel: false })
    // }

    /**
    * delete  post funtion
    * @param {postid(string)}
    */
    deletePost = () => {
        let userData = {
            postId: this.props.data._id,
            role: this.props.auth.authUser.role,
            userId: this.props.auth.authUser.userId,
            socialLogin: this.props.auth.authUser.socialLogin
        }
        genericfunctions._deleteRequest(`/post`, userData).then(res => {
            // this.props.fetchPost()
        })
    }
    /**
    * prompt delete  post funtion
    * @param {delete(Boolean)}
    */
    deletePrompt = (postId) => {
        this.props.showModal({ showModal: true, postId })
    }
    /**
     * fetch pin post funtion
     * @param {postid(string)}
     */
    pinPostHandle = () => {
        let params = {
            postId: this.props.data._id,
            isPin: this.props.pinPost,
            socialLogin: this.props.auth.authUser.socialLogin
        }
        // let postId = { postId: this.props.data._id }

        genericfunctions._updateRequest('/post/pinpost', params).then(res => {
            this.props.fetchPinPost()
            Router.router.push(Router.router.asPath)
        })
    }


    pinPostPrompt = () => {
        this.props.showModal({ showModal: true, })
    }

    showMore = () => {
        let { readMore } = this.state
        this.setState({ readMore: readMore = !readMore })
    }
    handleLike = (flag) => {
        this.setState({ processing: true })
        let { likeFlag, postLikeCount, isLike } = this.state;
        let params = {
            postId: this.props.data._id,
            likeFlag: flag
        }
        // console.log(this.props.generalData.postLikes, flag == 'add' && isLike[0] != params.postId)

        genericfunctions._postRequest('/likepost', params).then(res => {
            if (res.data.response.status) {

                this.props.addPostLike(params).then(res => {
                    if (res) {
                        this.setState({ postLikeCount: flag == 'add' ? ++postLikeCount : --postLikeCount })

                        // if (flag == 'add') {
                        //     this.setState({ postLikeCount: ++postLikeCount })
                        // }
                        // if (flag == 'remove') {
                        //     // this.props.removePostLike(params)
                        //     //     .then(res => {
                        //     //         this.setState({ isLike: this.props.generalData.postLikes })
                        //     //     })
                        //     this.setState({ postLikeCount: --postLikeCount })
                        // }
                        this.setState({ isLike: res.filter(i => i == this.props.data._id) })
                    }
                })
                this.setState({ processing: false })


            }
        })
    }
    handleClick = (url) => {
        Router.push(url)
    }


    componentDidMount() {
        this.fetchComments()
        let authData = this.props.auth.authUser;
        if (authData.token) {
            this.setState({ isLoggedIn: true })
        }

    }

    /**
     * fetch commments function
     * @param {postId(string) limit(number) skip(number)}
     */
    fetchComments = () => {
        // console.log(this.props.data)
        let queryparams = {
            params: {
                postId: this.props.data._id,
                createdBy: this.props.data.createdBy,
                skip: 0,
                limit: 1
            }
        }
        genericfunctions._fetchWithParams(`/comment`, queryparams).then(res => {

            if (res.data.response.status) {
                this.setState({ commentCount: res.data.response.count ? res.data.response.count : 0 })

            }
        })
    }

    // updateCommentCount = (commentCount) => {
    //     this.setState({ commentCount })
    // }

    render() {
        // let isLike = this.props.generalData.postLikes.filter(i => i == this.props.data._id)
        let item = this.props.data
        let user = item.output[0]
        let publishedDate = moment(item.createdDate).format('MMM DD, YYYY')
        let publishedTime = moment(item.createdDate).format('hh:mm A')
        let postCategory;
        if (this.props.categoryData && this.props.categoryData.category.length > 0)
            postCategory = this.props.categoryData.category.filter(categoryid => categoryid._id == item.categoryId)[0]
        let { sharePanel, commentPanel, like, readMore, postLikeCount, isLike, processing, commentCount } = this.state

        return (
            <>
                <div className='post-main-container mb-40'>
                    <div className={`${this.props.auth.authUser && this.props.auth.authUser.userId == user._id ? 'highlight-my-post' : ''} create-post p-30 bg-white`} >
                        <div className='post-header row align-items-center justify-content-between mb-3 w-100'>
                            <div className="col-9 d-flex pl-0">
                                <div className="profile-pic d-flex align-items-center pic-large bd-highlight">
                                    <img src={user.profilePic.url ? user.profilePic.url : profilelogo} alt="profilelogo" className="rounded-circle img-fluid" alt="Profile Picture" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <p className='m-0 font-weight-bold text-capitalize'> {item.output[0].fullName} {this.props.auth.authUser && this.props.auth.authUser.userId == user._id && <small className="text-muted">
                                        (Posted by you)
                                    </small>}</p>
                                    <p className='m-0 font-weight-bold text-muted'>{publishedDate} at {publishedTime}</p>

                                </div>
                            </div>
                            <div className="d-flex">
                                {this.props.auth.authUser.role == 'admin' && <div className="p-2 mr-10 bd-highlight">
                                    <img src={this.props.pinPost ? pinposted : pinpost} alt="pinpiost" onClick={this.pinPostHandle} />
                                </div>
                                }
                                {((this.props.auth.authUser && this.props.auth.authUser.userId == user._id) || this.props.auth.authUser.role == 'admin') &&
                                    <div className='bd-highlight'>
                                        <div className='btn btn-danger delete-post bd-highlight' onClick={() => this.deletePrompt(item._id)}> <img src={postdeleteicon} alt='postdeleteicon' /> </div>
                                    </div>
                                }

                            </div>


                        </div>
                        <div className='post-question cursor-pointer' onClick={() => this.handleClick(`/post-detail?postId=${item._id}`)}>
                            {item.postQuestion && <><p className='font-weight-bold'>
                                I believe <ins> {readMore ?
                                    `${item.postQuestion.substr(0, 100)}` :
                                    (item.postQuestion)}
                                    {item.postQuestion.length > 100 ?
                                        <span className='cursor-pointer' onClick={this.showMore}>... <span className="font-weight-normal text-primary"> Read
                                   {readMore ? ' More' : ' Less'}</span></span> : (undefined)}<span className="text-bold times-roman">,</span></ins>
                            </p> <p className='font-weight-bold'> but I might change my mind if: </p></>}
                            {/* <p className='font-weight-bold'>I believe <u>{item.postQuestion}</u>,
                        //     but I might change my mind if:</p> */}
                        </div>
                        <div className='post-question-option'>

                            <p className='border-bottom d-flex'><span className="mr-15">1)</span><span className='text-muted'>{item.options[0]}</span></p>
                            <p className='border-bottom d-flex'><span className="mr-15">2)</span><span className='text-muted'>{item.options[1]}</span></p>
                            <p className='border-bottom d-flex'><span className="mr-15">3)</span><span className='text-muted'>{item.options[2]}</span></p>
                        </div>
                        <div className='post-fotter row'>
                            <div className="col-xl-9 col-lg-12 col-12 d-sm-flex p-0">
                                <div className='col-sm-4 col-12 pl order-1 btn-wrap mt-10 pr-5' onClick={this.handleOpenCommentPanel}>
                                    <div className={`${commentPanel ? 'comment-active' : 'comment'} border commet-icon text-center align-self-cente blue-btn px-10`}>
                                        <p className='m-0 pt-10 pb-10 text-muted position-relative bc__comment-container'>
                                            <div className="mr-5 bc__comment-count">
                                                <span>{commentCount}</span>
                                            </div>
                                            {/* <img src={comment} alt="pinpiost" className='mr-5' />
                                            <span className="comment-count">{commentCount}</span> */}
                                            Comment
                                        </p>
                                    </div>
                                </div>
                                {/* btn-wrap */}
                                <div className='col-sm-4 col-12 text-center order-2 order-sm-2 mt-10  pl-5 pr-5' onClick={this.handleOpenSharePanel}>
                                    <div className={`${sharePanel ? 'share-active' : 'share'} border share-icon align-self-cente w-100 px-10`} >
                                        <p className='m-0 pt-10 pb-10 text-muted'>
                                            <img src={share} alt="pinpiost" className='mr-5' />
                                            Share</p>
                                    </div>
                                    {/* {sharePanel && <div className="order-4 order-sm-6 pl-25 offset-xl-3 mt-10"> */}
                                    {sharePanel && <div className="w-100 mt-10">
                                        <ShareCom url={`${BASEURL}post-detail?postId=${item._id}`} />
                                    </div>}
                                </div>
                                <div className=
                                    {"col-sm-4 col-12 text-center order-2 order-sm-2 mt-10 pr-0 " + (this.props.auth.authUser.token ? 'cursor-pointer' : '')}
                                    onClick={this.props.auth.authUser.token ? () => this.handleLike(isLike.length > 0 && !processing ? 'remove' : 'add') : null}
                                >
                                    <div className={`${isLike.length > 0 ? 'like-active ' : 'like like-icon'}  w-100 `} >
                                        <p className='m-0 pt-10 pb-10 text-center text-sm-left text-muted'>
                                            <img src={likeIcon} alt="pinpiost" className='mr-5' />
                                            {postLikeCount}</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-3 col-lg-12 mt-20 entertainment order-4 order-xl-3'>
                                <div className='entertainment-icon text-center text-xl-right align-self-center w-100'>
                                    {this.props.categoryData.category.length > 0 && <p className='m-0 text-muted font-weight-bold text-capitalize '>
                                        <img src={postCategory.catIcon.url} alt="pinpiost" className='mr-5 mb-1 img-invert' />
                                        {postCategory.title}
                                    </p>}
                                </div>

                            </div>
                            {commentPanel && <div className="order-3 order-xl-4 mt-10 px-15 w-100 comment-panel">
                                <Comment postItem={item} commentCount={commentCount} fetchComments={this.fetchComments}/>
                                {/* updateCommentCount={this.updateCommentCount} */}
                            </div>}

                        </div>
                    </div >
                </div >
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        categoryData: state.category,
        generalData: state.general
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showModal: data => dispatch(showModal(data)),
        addPostLike: data => dispatch(addPostLike(data)),
        removePostLike: data => dispatch(removePostLike(data)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(postCom);