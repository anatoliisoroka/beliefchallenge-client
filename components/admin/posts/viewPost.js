import React, { Component } from "react";

class ViewPost extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <div className="modal-dialog modal-dialog-centered">
                <div role="dialog" className={`${this.props.showModal ? 'show' : ''} modal fade`}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                           <div className='Question p-10'>
                                 <h3>Question</h3>
                                 <p>{this.props.singlePostData.postQuestion}</p>
                           </div>
                           <div className='option p-10'>
                                <h3>Options</h3>
                                <p>1. {this.props.singlePostData.options[0]}</p>
                                <p>2. {this.props.singlePostData.options[1]}</p>
                                <p>3. {this.props.singlePostData.options[2]}</p>
                           </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark px-20" onClick={this.props.triggerModalClose}>Close</button>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            </>
        )
    }
}
export default ViewPost;