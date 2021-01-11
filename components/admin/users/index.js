import React, {  Component} from "react";
import Edit  from '../../../assets/images/edit.png'
import Delete  from '../../../assets/images/trash.png'
import { connect } from 'react-redux';
import Loader from 'components/loading'
import Select from 'react-select';

const selectRole=[
    {value:'admin',label:'Admin'},
    {value:'user',label:'User'},
]

import { getUsers } from 'redux/action/adminAction'
class User extends Component{
    constructor(){
        super()
        this.state={
            page:0,
            ITEMS_LIMIT:10,
            selectedRole:{value:'user',label:'User'},
            allUserData:[],
            userRoleData:[],

        }
    }

    componentDidMount(){
        this.fetchUser()
    }

    fetchUser = () =>{
        let {page,ITEMS_LIMIT}=this.state;
        let queryparams = {
            params: {
                url: "/alluser",
                role:this.props.auth.authUser.role,
                skip: page,
                limit: ITEMS_LIMIT
            }
        }
      
        this.props.getUsers(queryparams).then(res => {
            this.setState({allUserData:res.data.response.data})
            this.getUserRoleData({value:'user',label:'User'})
        })
      
    }

    getUserRoleData = (value) =>{
        let result;
        result = this.state.allUserData.filter(itm =>  itm.role == value.value)
        this.setState({userRoleData:result,selectedRole:value})
    }

    getAdminRoleData = (value) =>{
        let result;
        result = this.state.allUserData.filter(itm =>  itm.role == value.value && itm._id != this.props.auth.authUser.userId)
        this.setState({userRoleData:result,selectedRole:value})
    }

    editHandle = () =>{

    }

    deleteHandle = () =>{
        
    }

    selectRoleHandle = (e)=>{
        if(e.value == 'admin'){
            this.getAdminRoleData(e)
        }else{
            this.getUserRoleData(e)
        }
        // this.setState({selectedRole:e})
    }

    render()
    {
        return(
            <div className='row'>
            <div className='d-flex flex-row-reverse float-right mb-5'>
            <Select
                   className='theme-select r-4'
                        value={this.state.selectedRole}
                           onChange={e => this.selectRoleHandle(e)}
                                options={selectRole}
            />
            </div>
            
             <table className="table table-striped">
            <thead className="" style={{backgroundColor:'white'}}>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">fullName</th>
                <th scope="col">email</th>
                <th scope="col">role</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody style={{backgroundColor:'grey',color:'white'}}>
            {this.state.userRoleData && this.state.userRoleData.length && this.state.userRoleData.map((itm,ind)=>{
                return(
                    <tr>
                    <th scope="row">{ind== 0? 1:ind+1}</th>
                        <td>{itm.fullName}</td>
                        <td>{itm.email}</td>
                        <td>{itm.role}</td>
                        <td className='cursor-pointer' >
                             <img onClick={()=>this.editHandle()} src={Edit} className='mr-5' style={{width:'20px'}}/>
                            <img  onClick={()=>this.deleteHandle()} src={Delete} style={{width:'20px'}}/>
                </td>
                </tr>
                )
            })}
                
            </tbody>
            </table>
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
        getUsers: data => dispatch(getUsers(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);