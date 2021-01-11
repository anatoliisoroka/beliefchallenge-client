import React, { Component } from 'react';
import SingleCom from './singleCom'
import commentarrow from 'assets/images/commentarrow.png'
import genericfunctions from 'utilfunction/util-api-service'
import PostComment from './postcomment'
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from 'components/loading'
import Modal from 'components/common/modal';

/**
 * create by zain ahmed
 * created date: 20/12/2019
 * class component for see comment and post comment
 */
class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentData: [],
            hasMoreItems: true,
            nextHref: null,
            // userId: '',
            isLoggedIn: false,
            showModal: false,
            commentId: null
        }
    }

    componentDidMount() {
        let authData = this.props.auth.authUser;
        if (authData.token) {
            this.setState({ isLoggedIn: true })
        }
    }

    /**
     * fetch commments function
     * @param {postId(string) limit(number) skip(number)}
     */
    fetchComments = (page, newPost) => {
        let self = this;
        let itemPerPage = 5
        if (newPost) {
            self.setState({
                commentData: [],
            });
            this.props.fetchComments();
        }
            
        if (page) {
            let queryparams = {
                params: {
                    postId: this.props.postItem._id,
                    createdBy: this.props.postItem.createdBy,

                    skip: (page - 1) * itemPerPage,
                    limit: itemPerPage
                }
            }

            genericfunctions._fetchWithParams(`/comment`, queryparams).then(res => {

                if (res.data.response.status) {

                    var commentData = self.state.commentData;

                    res.data.response.data.map((comment) => {

                        commentData.push(comment);
                    });
                    if (res.data.response.data.length)
                        self.setState({
                            commentData: commentData,
                        });

                    if (res.data.response.data.length < itemPerPage)
                        self.setState({
                            hasMoreItems: false
                        });

                }
            })
        }
    }

    pushToPost = (comment) => {
        var comments = this.state.commentData;
        comments.unshift(comment);

        this.setState({
            commentData: comments,
        });
    }

    showConfirmModal = (commentId) => {
        this.setState({
            showModal: true,
            commentId: commentId
        })
    }

    /**
     * delete  comment funtion
     * @param {postid(string)}
     */
    deleteComment = () => {

        let userData = {
            commentId: this.state.commentId,
            role: this.props.auth.authUser.role,
            userId: this.props.auth.authUser.userId,
            socialLogin: this.props.auth.authUser.socialLogin
        }
        genericfunctions._deleteRequest(`/comment`, userData).then(res => {
            this.setState({
                showModal: false,
                commentId: null
            })
            this.fetchComments(1, true)
        })
    }

    render() {

        const loader = <div key={"mango"} className="text-center"><Loader /></div>;

        return (
            <>
                <div className='comment-container border  border-primary m-5' style={this.state.commentData.length == 0 ?
                    (!this.state.isLoggedIn ?
                        ({ height: 100 }) :
                        ({ height: 180 }))
                    : !this.state.isLoggedIn ?
                        ({ height: 250 }) :
                        ({ height: 340 })}>

                    <img src={commentarrow} alt='arrow' className='comment-arrow' />
                    <div className='totl-comment d-flex pt-10 pl-30 pb-10 border-bottom font-weight-bold'>
                        Comment({this.props.commentCount})
                        {/* Comment({this.state.commentData.length}) */}
                    </div>
                    {this.state.isLoggedIn && <PostComment postId={this.props.postItem._id} fetchComments={this.fetchComments} pushToPost={this.pushToPost} />}


                    <div className='comment-section' style={this.state.commentData.length == 0 ? { height: 30 } : !this.state.isLoggedIn ? ({ height: '80%' }) : ({ height: '55%' })}
                        ref={(ref) => this.scrollParentRef = ref}>
                        <div>

                            <InfiniteScroll
                                pageStart={0}
                                loadMore={this.fetchComments.bind(this)}
                                hasMore={this.state.hasMoreItems}
                                useWindow={false}
                                getScrollParent={() => this.scrollParentRef}
                                key={"mango1989"}
                                loader={loader}>
                                {
                                    this.state.commentData.length == 0 ? (<p className="font-weight-bold text-center mb-0 mt-5">Be the first one to comment!</p>) : (
                                        this.state.commentData.map((itm, ind) => {

                                            return (
                                                <SingleCom auth={this.props.auth} itm={itm} key={'comment-' + itm._id + ind} length={this.state.commentData.length} showConfirmModal={this.showConfirmModal} />
                                            )
                                        })
                                    )}
                            </InfiniteScroll>
                        </div>

                    </div>

                </div>

                {this.state.showModal && <Modal showModal={this.state.showModal} triggerModalSuccess={this.deleteComment} triggerModalClose={() => this.setState({showModal: false})} />}

            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps)(Comment);