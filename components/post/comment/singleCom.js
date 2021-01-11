import React, { Component } from "react";
import moment from "moment";
import $ from "jquery";

import { transformComment } from "./helpers";
import profilelogo from "assets/images/profilelogo.png";
import postdeleteicon from 'assets/images/postdeleteicon.png'

/**
 * created by zain ahmed
 * created date: 20/12/2019
 * @param {*} props
 */

class SingleCom extends Component {
	constructor(props) {
		super(props)

		this.state = {
			commentImage: '',
		}
	}

	componentDidMount() {
		const pClass = this;

		const content = this.props.itm.content
		const urls = content.match(/\bhttps?:\/\/\S+/gi);

		if (urls && urls.length) {
			const url = `https://cors-anywhere.herokuapp.com/${urls[0]}`;

      $.get(url, function (data) {
        const doc = new DOMParser().parseFromString(data, "text/html");
        const meta = doc.querySelector('meta[property="og:image"]');
				const commentImage = meta && meta.getAttribute("content");
				pClass.setState({ commentImage });
      });
		}
    }

	render() {
		const { commentImage } = this.state;
		let item = this.props.itm;
        let user = item.user_profile ? item.user_profile : {};
        
        let auth = this.props.auth
        let canDeleteComment = false;
        if ((auth.authUser && auth.authUser.userId == user._id) || auth.authUser.role == 'admin') {
            canDeleteComment = true
        }

		const content = transformComment(item.content);

		let publishedDate = moment(item.createdDate).format("MMM DD, YYYY");
		let publishedTime = moment(item.createdDate).format("hh:mm A");

		return (
      <div
        className="show-comment d-flex pt-10 pl-20 pr-10 pb-10 border-bottom"
        style={
          this.props.length - this.props.ind === 1
            ? { borderBottomLeftRadius: "20px", borderBottomRightRadius: "8px" }
            : undefined
        }
      >
        <div className="d-flex bd-highlight w-100 mt-10">
          <div className="profile-pic bd-highlight">
            <img
              src={
                user.profilePic && user.profilePic.url
                  ? user.profilePic.url
                  : profilelogo
              }
              className="rounded-circle img-fluid"
              alt="profile picture"
            />
          </div>
          <div className="pl-15 comment-content bd-highlight">
            <p className="m-0 font-weight-bold">{user.fullName}</p>
            <p
              className="m-0 text-muted"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <p className="m-0 text-muted text-right">
              <small>
                {publishedDate} at {publishedTime}
              </small>
            </p>
            
            {commentImage !== "" ? (
              <img src={commentImage} className="w-100" alt="commentimage" />
            ) : (
              <span />
            )}
          </div>
          {canDeleteComment &&
            <div className='bd-highlight'>
                <div className='btn btn-danger delete-post bd-highlight' onClick={() => this.props.showConfirmModal(item._id)}> <img src={postdeleteicon} alt='postdeleteicon' /> </div>
            </div>
            }
        </div>
      </div>
    );
	}
}

export default SingleCom;
