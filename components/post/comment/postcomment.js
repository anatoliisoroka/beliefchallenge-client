import React, { Component } from 'react'
import profilelogo from 'assets/images/profilelogo.png'
import commentsend from 'assets/images/commentsend.png'
import genericfunctions from 'utilfunction/util-api-service'
import { connect } from 'react-redux';
import Loader from 'components/loading'
import getObject from 'common/jwt-services'


/**
 * created by zain ahmed
 * created date: 18/12/2019
 * class componen for create comment on single post
 */
class postComment extends Component {
    constructor() {
        super()
        this.state = {
            commentContent: '',
            loader: false,
            user_profile: JSON.parse(getObject.getObject('authUser'))
        }
    }

    /**
     * function for create/post commont
     * @param {commentContent(string) postId(string) createdBy(string)}
     */
    postCommenthandle = async () => {
        let { commentContent, user_profile } = this.state
        this.setState({ loader: true })

        let params = {
            content: commentContent, postId: this.props.postId,
            createdBy: this.props.auth.userId,
            socialLogin: this.props.auth.socialLogin
        }


        if (commentContent.length <= 0) {
            console.log("please fill the field")
        } else {
            genericfunctions._postRequest('/comment', params).then(res => {
                let obj = {
                    content: commentContent,
                    user_profile: {
                        fullName: user_profile.fullName,
                        email: user_profile.email,
                        profilePic: {
                            url: user_profile.profilePic
                        }
                    }
                }
                // this.props.pushToPost(obj)
                this.setState({ commentContent: '', loader: false })
                this.props.fetchComments(1, true)
            })
        }
    }


    txtHandle = (e) => {
        this.setState({ commentContent: e.target.value })
    }

    onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            this.setState({ loader: true })
            let { commentContent, user_profile } = this.state
            let params = { content: commentContent, postId: this.props.postId, createdBy: this.props.auth.userId, socialLogin: this.props.auth.socialLogin }

            if (commentContent.length <= 0) {
                console.log("please fill the field")
            } else {
                genericfunctions._postRequest('/comment', params).then(res => {

                    let obj = {
                        content: commentContent,
                        user_profile: {
                            fullName: user_profile.fullName,
                            email: user_profile.email,
                            profilePic: {
                                url: user_profile.profilePic
                            }
                        }
                    }
                    // this.props.pushToPost(obj)
                    this.setState({ commentContent: '', loader: false })
                    this.props.fetchComments(1, true)
                })
            }
            // this.postCommet.submit();
        }
    }
    render() {
        let { commentContent, loader } = this.state

        return (
            <>
                <div className='send-comment-main d-flex pt-10 pl-20 pr-10 pb-10 border-bottom' >

                    <form ref={el => this.postCommet = el} className='d-flex bd-highlight w-100 align-items-center'>
                        <div className="profile-pic bd-highlight">
                            <img src={this.props.auth.profilePic ? this.props.auth.profilePic : profilelogo} className="rounded-circle img-fluid" alt="profilelogo" />
                        </div>
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <div className="post-comment h-100">
                                {/* <input onChange={this.txtHandle} value={commentContent} type="string" className="form-control h-100" aria-describedby="comment" placeholder="Write a Comment" /> */}
                                <textarea onKeyDown={this.onEnterPress} onChange={this.txtHandle} value={commentContent} type="string" className="form-control h-100" aria-describedby="comment" placeholder="Write a Comment" ></textarea>

                            </div>
                        </div>
                        <div className="p-2 cursor-pointer bd-highlight">
                            <div className="commentsend">

                                <img src={commentsend} alt="commentsend" onClick={this.postCommenthandle} />
                            </div>
                        </div>
                    </form>
                </div>
                {loader && <div className="text-center mt-2">
                    <Loader />
                </div>}
            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth.authUser,
    };
}


export default connect(mapStateToProps)(postComment);