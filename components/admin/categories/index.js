import React, {  Component} from "react";
import Edit  from '../../../assets/images/edit.png'
import Delete  from '../../../assets/images/trash.png'
import { connect } from 'react-redux';
import { getCategory } from 'redux/action/adminAction'
import Loader from 'components/loading'

class Category extends Component{
    constructor(){
        super()
        this.state={
            categoryData:[]
        }
    }
    
    componentDidMount(){
        this.fetchCategory()
    }

    fetchCategory = () =>{
        let params = {
            url: '/category',
            role:this.props.auth.authUser.role
        }
        this.props.getCategory(params).then(res => {
            console.log(res)
            this.setState({ categoryData: res.data.response.data })
        })
    }

    editHandle = () =>{

    }

    deleteHandle = () =>{
        
    }

    render()
    {
        return(
            <div>
            <table className="table table-striped">
            <thead className="" style={{backgroundColor:'white'}}>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">Category Name</th>
                <th scope="col">Category Image</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            
            {this.state.categoryData && this.state.categoryData.length > 0 ?
                <tbody style={{backgroundColor:'grey',color:'white'}}>
               {this.state.categoryData.map((itm,ind)=>{
                    return(
                      <tr key={itm._id}>
                        <th scope="row">{ind== 0? 1:ind+1}</th>
                            <td>{itm.title}</td>
                            <td><img style={{color:'black',justifyContent:'center'}} src={itm.catIcon.url} /></td>
                            <td className='cursor-pointer' >
                                <img onClick={()=>this.editHandle()} src={Edit} className='mr-5' style={{width:'20px'}}/>
                                <img  onClick={()=>this.deleteHandle()} src={Delete} style={{width:'20px'}}/>
                         </td>                
                      </tr>
                    )
                })}
                </tbody>
             :

             <Loader/> }
           
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
        getCategory: data => dispatch(getCategory(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);