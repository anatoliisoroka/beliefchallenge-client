import React, { Component } from 'react';
import Router, { withRouter } from 'next/router'
import Link from 'next/link';


class Pagination extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            pages: [],
            count: 0,
            currentPage: 1,
            goto: '',
            skip: 0,
            categoryId: '',
            search: '',
            pagesHandler: this.pagesHandler.bind(this)
        }

        this._isMounted = true;
        Router.events.on('routeChangeComplete', (url) => {
            if (this._isMounted)
                this.pagesHandler()
            // if (url, props.router.asPath)
            // this.state.pages = [...this.pagesHandler(true)]
            // props.toggle();
        });


    }
    static getDerivedStateFromProps(nextProps, prevState) {
        let query = nextProps.router.query
        if (prevState.count != nextProps.count) {
            // Router.events.off("routeChangeComplete", prevState.pagesHandler());

            // prevState.pagesHandler()
        }
        return {
            activeCategory: nextProps.router.query.categoryId,
            currentPage: +query.page > 1 ? +query.page : 1,
            categoryId: query.categoryId ? query.categoryId : '',
            search: query.search ? query.search : '',
            // pagesHandler: prevState.pagesHandler()
        }
    }

    componentDidMount() {
        this.pagesHandler()
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    pagesHandler = (derived) => {

        if (this.props.count == this.props.itemsLimit) {
            this.setState({ pages: [] });
        }
        if (this.props.count)
            this.setState({
                pages: [
                    ...Array(Math.ceil(this.props.count / this.props.itemsLimit)).keys()
                ].map(e => e + 1)
            });

    }

    handleGoto = (e) => {
        const re = /^[1-9]\d*$/;
        if ((e.target.value === '' || re.test(e.target.value)) && e.target.value <= this.props.count) {
            this.setState({ goto: +e.target.value })
        }
    }
    handleFocus = (event) => event.target.select();

    handleGotoPage = (e) => {
        e.preventDefault()
        Router.push({ pathname: this.props.pageRoute, query: { page: this.state.goto } })
    }
    handlePageLink = (page) => {
        let { categoryId, search } = this.state;

        let computed = { pathname: this.props.pageRoute, query: { page } }
        if (categoryId) computed.query['categoryId'] = categoryId
        if (search) computed.query['search'] = search

        return computed
    }
    render() {

        let { pages, skip, currentPage, goto } = this.state;
        return (
            <>
                {pages.length &&
                    <div className="d-flex justify-content-between w-100 mt-10">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">

                                <li className="page-item " className={`${currentPage == 1 ? 'disabled' : ''} page-item`}>
                                    <Link
                                        href={this.handlePageLink(currentPage - 1)}
                                    >
                                        <a className="page-link" >Previous</a>
                                    </Link>
                                </li>
                                {(currentPage > 2 && this.props.count > this.props.pagerToShow) && <li className="page-item page-link">
                                    ...
                                </li>}

                                {/* {pages.map(counter =>
                                    (((currentPage < this.props.count ? counter >= currentPage - 1 : counter >= currentPage - 2) &&
                                        (currentPage == 1 ? counter < currentPage + 3 : counter < currentPage + 2)) &&
                                        <li key={counter} className={`${currentPage == counter ? 'active' : ''} page-item`} >
                                            <Link
                                                href={this.handlePageLink(counter)}
                                            >
                                                <a className="page-link" >{counter}</a>
                                            </Link>
                                        </li>
                                    )
                                )} */}

                                {pages.map(counter =>
                                    (currentPage == counter ||
                                        (counter <= this.props.pagerToShow) &&
                                        (currentPage == 1 ? counter >= pages.length - this.props.pagerToShow : null)) &&
                                    <li key={counter} className={`${currentPage == counter ? 'active' : ''} page-item`} >
                                        <Link href={this.handlePageLink(counter)} >
                                            <a className="page-link" >{counter} <br />
                                                {/* {pages.length - this.props.pagerToShow} */}
                                            </a>
                                        </Link>
                                    </li>
                                )}
                                {/* {pages.map(counter =>
                                    (currentPage == counter ||
                                        (currentPage == pages.length ? counter == currentPage - 2 : currentPage + 1 == counter) ||
                                        (currentPage == 1 ? counter == currentPage + 2 : currentPage - 1 == counter)) &&
                                    <li key={counter} className={`${currentPage == counter ? 'active' : ''} page-item`} >
                                        <Link href={this.handlePageLink(counter)} >
                                            <a className="page-link" >{counter}</a>
                                        </Link>
                                    </li>
                                )} */}


                                {(pages.length > 3 && currentPage + 1 != pages.length && currentPage != pages.length) &&
                                    <li className="page-item page-link">
                                        ...
                                    </li>
                                }

                                <li className="page-item " className={`${currentPage == pages.length ? 'disabled' : ''} page-item`}>
                                    <Link href={this.handlePageLink(currentPage + 1)} >
                                        <a className="page-link" >Next</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <form onSubmit={this.handleGotoPage} className="gotopage d-flex">
                            <input type="number" className="form-control" maxLength="4" placeholder={currentPage} onChange={this.handleGoto} onFocus={this.handleFocus} value={goto} />
                            <button className="btn" type="button">Go</button>
                        </form>

                    </div>
                }
            </>
        )
    }
}
export default withRouter(Pagination);