import React, { Component } from 'react';
import SingleCom from './singleCom'
import commentarrow from 'assets/images/commentarrow.png'
import genericfunctions from 'utilfunction/util-api-service'
import PostComment from './postcomment'
import { connect } from 'react-redux';

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
            // userId: '',
            isLoggedIn: false
        }
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
        let queryparams = {
            params: {
                postId: this.props.postData._id,
                createdBy: this.props.postData.createdBy,

                skip: 0,
                limit: 5
            }
        }
        genericfunctions._fetchWithParams(`/comment`, queryparams).then(res => {
            console.log(res.data.response)
            // console.log(res.data.response.status)
            // if (this.props.externalLink) {
            //     this.setState({ isLoggedIn: false })
            // }
            if (res.data.response.status) {
                this.setState({ commentData: res.data.response.data })

            }
        })
    }

    render() {

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
                        Comment({this.state.commentData.length})
                </div>
                    {this.state.isLoggedIn && <PostComment postId={this.props.postData._id} fetchComments={this.fetchComments} />}
                    <div className='comment-section' style={this.state.commentData.length == 0 ?
                        { height: 30 } :
                        !this.state.isLoggedIn ?
                            ({ height: '80%' }) :
                            ({ height: '55%' })}>
                        {
                            this.state.commentData.length == 0 ? (<p className="font-weight-bold text-center mb-0 mt-5">Be the first one to comment!</p>) : (
                                this.state.commentData.map((itm, ind) => {

                                    return (
                                        <SingleCom itm={itm} key={'comment-' + itm._id} length={this.state.commentData.length} />
                                    )
                                })
                            )}

                    </div>
                </div>

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