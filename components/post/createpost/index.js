import React, { Component } from 'react';
import Select from 'react-select';
import genericfunctions from 'utilfunction/util-api-service'
import { connect } from 'react-redux';
import { withRouter } from 'next/router'
import { ITEMS_LIMIT } from 'common/config'
import { getCategory } from 'redux/action/categoryAction'
import { fetchPost } from 'redux/action/generalAction'
import Router from 'next/router'
import Loader from 'components/loading'

// import {fetchPost} from 'redux/action/generalAction'
/**
 * created by zain ahmed
 * created date 22/12/2019
 * class component for created post 
 */
const customStyles = {
    option: (provided, state) => {
        return {
            ...provided,
            // borderBottom: '1px dotted #ffffff',
            color: state.isSelected ? 'white' : 'black',
            backgroundColor: state.isFocused ? "#464444" : state.isSelected ? "#464444" : null,
            '&:hover': {
                background: "#464444",
                color: 'white'
            },
            '&:focus': {
                background: "#464444",
                color: 'white'
            },
            padding: 10,
        }
    },
}
class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postQuestion: '',
            postOption1: '',
            postOption2: '',
            postOption3: '',
            selectedCategory: [],
            categoryData: [],
            errorMessage: '',
            Loading: false
        }
    }
    static getDerivedStateFromProps(props, state) {
        // console.log(props.categoryData)
        // console.log(state.categoryData)

        if (props.categoryData.length != state.categoryData.length) {
            // console.log(props.categoryData)
            props.categoryData.map(itm => {
                return (
                    state.categoryData.push({ value: itm._id, label: itm.title })
                )
            })
        }
        return null
    }
    componentDidMount() {
        this.fetchCategoryFN()
    }
    selectedCategoryHandle(e) {
        this.setState({ selectedCategory: e })
    }

    /**
     * fetch category function 
     * @param {}
     */
    fetchCategoryFN = () => {
        // let { categoryData } = this.state;
        // let categoryParams = {
        //     params: {
        //         url: "/category",
        //     }
        // }
        // console.log(this.props.categoryData)
        // this.props.categoryData.data.map(itm => {
        //     return (
        //         categoryData.push({ value: itm._id, label: itm.title })
        //     )
        // })
        // this.props.getCategory(categoryParams).then(res => {
        //     console.log(res)

        // })

        // genericfunctions._fetchWithOutParams('/category').then(res => {
        //     res.data.response.data.map(itm => {
        //         return (
        //             categoryData.push({ value: itm._id, label: itm.title })
        //         )
        //     })
        //     this.setState({ categoryData })
        // })
    }
    textChangeHandle = (e, key) => {
        this.setState({ [key]: e.target.value })
    }

    /**
     * create post function 
     * @param {userid(string) categoryId(string) postQuetion(string) options(string)} 
     */
    postPostFN = async () => {
        let { selectedCategory, postQuestion, postOption1, postOption2, postOption3 } = this.state;
        // || postOption2.length <= 0 || postOption3.length <= 0
        if (postQuestion.length <= 0 || postOption1.length <= 0 || !selectedCategory.value) {
            this.setState({ errorMessage: "please fill all fields" })
        } else {
            let postData = {
                userId: this.props.auth.authUser.userId,
                categoryId: selectedCategory.value,
                postQuestion,
                options: [
                    postOption1,
                    postOption2,
                    postOption3
                ],
                socialLogin: this.props.auth.authUser.socialLogin
            }
            this.setState({ Loading: true, errorMessage: '' })
            genericfunctions._postRequest('/post', postData).then(res => {
                if (res.data.response.status) {

                    this.setState({
                        postQuestion: '',
                        postOption1: '',
                        postOption2: '',
                        postOption3: '',
                        selectedCategory: [],
                        errorMessage: '',
                        Loading: false
                    })

                    Router.push('/home')
                } else {
                    this.setState({ errorMessage: res.data.response.message, Loading: false })
                }
            })
        }
    }
    render() {
        let { categoryData, selectedCategory, postQuestion, postOption1, postOption2, postOption3, errorMessage, Loading } = this.state;

        return (
            <>
                <div className='post-main-container'>
                    <div className="create-post bg-white p-30">
                        <div className='post-quetio'>
                            <div className="d-flex question mb-15 mt-5">
                                <p className='m-0 font-weight-bold question-ibelieve'>I believe </p>
                                <p className="w-75 p-5 bg-gray-1 ml-5 question-field mb-0 question-ibelieve-input">
                                    <input type="string" value={postQuestion} onChange={e => this.textChangeHandle(e, "postQuestion")} placeholder='Enter text here' className="input-text-post" aria-describedby="querion" /> <span className="text-bold times-roman">,</span>
                                </p>
                            </div>
                            <div className='d-flex w-100 mb-10'>
                                <p className='d-flex font-weight-bold mb-0'>but I might change my mind if:</p>
                            </div>
                            <div className='w-100 mb-10 p-5 bg-gray-1'>
                                <div className="option-text d-flex option-text-inner pb-5">
                                    <span className='font-weight-bold'>1) </span><input type="string" value={postOption1} onChange={e => this.textChangeHandle(e, "postOption1")} placeholder='Enter text here' className="px-15 input-text w-100" aria-describedby="querion" />
                                </div>
                            </div>
                            <div className='w-100 mt-5 mb-10 p-5 bg-gray-1'>
                                <div className="option-text d-flex option-text-inner pb-5">
                                    <span className='font-weight-bold'>2) </span><input type="string" value={postOption2} onChange={e => this.textChangeHandle(e, "postOption2")} placeholder='' className="px-15 input-text w-100" aria-describedby="querion" />
                                </div>
                            </div>
                            <div className='w-100 mt-5 mb-10 p-5 bg-gray-1'>
                                <div className="option-text d-flex option-text-inner pb-5">
                                    <span className='font-weight-bold'>3) </span><input type="string" value={postOption3} onChange={e => this.textChangeHandle(e, "postOption3")} placeholder='' className="px-15 input-text w-100" aria-describedby="querion" />
                                </div>
                            </div>
                            <div className='row justify-content-between post-footer-panel mt-25'>
                                <div className='post-btn col-lg-6 col-12'>
                                    <Select
                                        styles={customStyles}
                                        className='theme-select r-4'
                                        value={selectedCategory}
                                        onChange={e => this.selectedCategoryHandle(e)}
                                        options={categoryData}
                                    />
                                </div>

                                <div className='post-btn col-lg-6 col-12 text-right'>
                                    <button type="button" className="btn btn-danger px-50 w-auto" onClick={this.postPostFN}>Post</button>
                                </div>
                                {errorMessage && <div className="text-center alert-error">
                                    <p className='text-red'>{errorMessage}</p>
                                </div>}

                                {Loading && <Loader />}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
function mapStateToProps(state) {
    // console.log(state.category)
    return {
        auth: state.auth,
        categoryData: state.category.category
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPost: data => dispatch(fetchPost(data)),
        getCategory: data => dispatch(getCategory(data))
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));