import React, {  Component} from "react";
import Edit  from '../../../assets/images/edit.png'
import Delete  from '../../../assets/images/trash.png'
import View  from '../../../assets/images/eye.png'
import { connect } from 'react-redux';
import Loader from 'components/loading'
import { getPosts } from 'redux/action/adminAction'
import ViewPost from './viewPost'
import Modal from '../../common/modal'

class Post extends Component{
    constructor(){
        super()
        this.state={
            page:0,
            ITEMS_LIMIT:10,
            postData:[],
            showModal:false,
            singlePostData:{},
            showDeletModel:false,
            deletePostId:''
        }
    }

    componentDidMount(){
        this.fetchPost()
    }

    fetchPost = () =>{
        let {page,ITEMS_LIMIT}=this.state;
        let queryparams = {
            params: {
                url: "/post",
                role:this.props.auth.authUser.role,
                skip: page,
                limit: ITEMS_LIMIT
            }
        }
        this.props.getPosts(queryparams).then(res => {
            this.setState({ postData: res.data.response.data })
        })
    }

    editHandle = () =>{

    }

    deleteHandle = (id) =>{
        this.setState({showDeletModel:!this.state.showDeletModel,deletePostId:id})
    }

    viewHandle = (id) =>{
        let reslt = this.state.postData.filter(itm => itm._id == id)
        this.setState({showModal:!this.state.showModal,singlePostData:reslt[0]})
    }

    triggerModalClose = () =>{
        this.setState({showModal:!this.state.showModal,singlePostData:{}})
    }

    triggerModalClose = () =>{
        this.setState({showDeletModel:!this.state.showDeletModel})
    }

    triggerModalSuccess = () =>{
        console.log(this.state.deletePostId)
    }

    render()
    {
        return(
            <div>
            {/* <h2 className="text-white">Post</h2> */}
            <table className="table table-striped">
            <thead className="" style={{backgroundColor:'white'}}>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">Question</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            {this.state.postData && this.state.postData.length > 0 ?
                <tbody style={{backgroundColor:'grey',color:'white'}}>
               {this.state.postData.map((itm,ind)=>{
                    return(
                      <tr key={itm._id}>
                        <th scope="row">{ind== 0? 1:ind+1}</th>
                            <td>{`${itm.postQuestion.substr(0, 90)}...`}</td>
                            <td className='cursor-pointer' >
                                <img  onClick={()=>this.viewHandle(itm._id)}  className='mr-5 ' src={View} style={{width:'20px'}}/>
                                {/* <img onClick={()=>this.editHandle()} src={Edit} className='mr-5' style={{width:'20px'}}/> */}
                                <img  onClick={()=>this.deleteHandle(itm._id)}  className='' src={Delete} style={{width:'20px'}}/>
                         </td>                
                      </tr>
                    )
                })}
                </tbody>
             :

             <Loader/> }
           
            </table>
            {this.state.showModal &&  <ViewPost showModal={this.state.showModal} singlePostData={this.state.singlePostData} triggerModalClose={this.triggerModalClose}/>}
            
            {this.state.showDeletModel && 
             <Modal
             showModal = {this.state.showDeletModel} 
             triggerModalClose={this.triggerModalClose} 
              triggerModalSuccess ={this.triggerModalSuccess}
              />}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: data => dispatch(getPosts(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);