import React, { Component } from 'react';
// import genericfunctions from '../../utilfunction/util-api-service'
import { connect } from 'react-redux';
import genericfunctions from 'utilfunction/util-api-service'
import { getCategory } from 'redux/action/categoryAction'
import Router, { withRouter } from 'next/router'
import Link from 'next/link';
import Select from 'react-select';

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

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropDownCategory:[],
            homeSidebarData: [],
            activeIndx: '',
            activeCategory: '',
            selectCategory:{},
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return { activeCategory: nextProps.router.query.categoryId }
    }

    componentDidMount() {
        if (!this.state.homeSidebarData.length)
            this.fetchCategory()
    }

    fetchCategory = () => {
        let params = {
            url: '/category'
        }
        this.props.getCategory(params).then(res => {
            // console.log(res)
            let dropDownCategory=[];
              res.data.response.data.map(itm=>{
                dropDownCategory.push({label:itm.title,value:itm._id})
            })
            this.setState({ homeSidebarData: res.data.response.data,dropDownCategory,selectCategory:dropDownCategory[0] })
        })
    }

    selectedCategoryHandle = (e) =>{
        this.setState({selectCategory:e})
        Router.push({
            pathname: '/home',
            query: { page: 1, categoryId: e.value },
          })
    }

    render() {

        let { homeSidebarData, activeIndx, activeCategory,dropDownCategory,selectCategory } = this.state;
        return (
            <>
                <div className='category-items web-view bg-dark pt-20 pb-20'>
                    {homeSidebarData.map((itm, ind) => {
                        return (
                            <Link href={{ pathname: '/home', query: { page: 1, categoryId: itm._id } }} key={ind}>
                                <a className={`d-block font-weight-bold text-capitalize pt-5 pb-5 pl-20 pr-30 mt-20  mb-20 ml-20 mr-20 text-white ${activeCategory == itm._id ? 'home-category-itm-active ' : 'text-muted'}`}>
                                    <img src={this.props.activeCategory == itm._id ? itm.catIcon.url : itm.catIcon.url} className='mr-10' style={activeCategory == itm._id ? { opacity: '1' } : { opacity: '0.5' }} />{itm.title}
                                </a>
                            </Link>
                        )
                    })}
                    
                </div>
                    <div className='category-items mobile-view bg-dark pt-20 pb-20'>
                    <Select
                        styles={customStyles}
                        className='theme-select r-4'
                        value={selectCategory}
                        onChange={e => this.selectedCategoryHandle(e)}
                        options={dropDownCategory}
                    />
                    </div>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCategory: data => dispatch(getCategory(data))
    };
};
export default withRouter(connect(null, mapDispatchToProps)(SideBar));
