import { Provider, connect } from 'react-redux';
import App from 'next/app';
import Error from 'error';
// import RestoreReduxData from 'common/redux-data'
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import Router from 'next/router'
import getObject from 'common/jwt-services'
import { reduxdata } from 'redux/action/authAction.js'
// import genericfunctions from 'utilfunction/util-api-service'
import generalMethods from 'common/general-methods'
import { ITEMS_LIMIT } from 'common/config'
import { fetchPost, hasPrevUrl, getPostLikes } from 'redux/action/generalAction'
import { getCategory } from 'redux/action/categoryAction'
// import axiosinstance from 'common/config.axios'


import '../assets/scss/main.scss'
import Head from 'next/head';
import * as Sentry from '@sentry/browser';
import { NextSeo, DefaultSeo } from 'next-seo';


Sentry.init({dsn: "https://7a301d39308c49c08335a86d3f4b1f69@o376432.ingest.sentry.io/5197236"});

const AppWrapper =

    class MyApp extends App {

        state = {}


        static getDerivedStateFromProps(props, state) {

            Router.events.on('routeChangeStart', (url) => {
                if (url)
                    props.hasPrevUrl(true)
                else
                    props.hasPrevUrl(false)
            })

            return null
        }

        static async getInitialProps({ Component, ctx }) {


            if (ctx.req && ctx.req.headers && ctx.req.headers.cookie) {

                let abc
                // let authData
                let authData = generalMethods.getCookie('authUser', ctx.req.headers.cookie)
                if (authData) authData = JSON.parse(authData)

                if (!Object.keys(ctx.store.getState().auth.authUser).length) {
                    if (authData) {
                        ctx.store.dispatch(reduxdata(authData))

                    }
                }

            }
            // }
            let { categoryId, search, skip, limit, page } = ctx.query
            let queryparams = {
                params: {
                    url: "/post",
                    skip: (page ? (+page - 1) : 0) * ITEMS_LIMIT,
                    limit: ITEMS_LIMIT
                }
            }


            if (categoryId) queryparams.params.categoryId = categoryId
            if (search) queryparams.params.search = search

            let categoryParams = {
                params: {
                    url: "/category",
                }
            }
            let postData = null;
            let loaded = false
            if (ctx.pathname == '/home' || ctx.pathname == '/') {
                postData = await ctx.store.dispatch(fetchPost(queryparams))
                if (postData.data.statusCode == 200) loaded = true
                else loaded = false
            }

            return {
                // postData: postData ? postData.data.response.data : null,
                count: postData ? postData.data.response.count : null,
                loaded,
                pageProps: {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps(ctx)
                        : {})
                }
            };

        }


        componentDidMount() {
            let params = {
                url: '/likepost'
            }
            if (this.props.auth.authUser.token) {
                this.props.getPostLikes(params)
            }


            let authData = getObject.getObject('authUser')
            if (Router.router.pathname == '/login') {
                if (authData) {
                    Router.replace('/home')
                }
                if (Router.router.pathname == '/signup') {
                    if (authData) {
                        Router.replace('/home')
                    }
                }
            }
        }
        render() {
            const { Component, pageProps, store, postData, count, fetchPost, loaded } = this.props;
            return (
                <>
                    <Head>
                        <link rel="shortcut icon" href="/static/images/favicon.png" />
                    </Head>
                        <DefaultSeo
                            title="Belief Challenge"
                            description="What would it take to change your mind?"
                            canonical="https://www.beliefchallenge.com/"
                            openGraph={{
                    images: [
                    {
                        url: 'https://beliefchallenge.com/static/images/opengraph.jpeg',
                    },
                    ],
                            }}
                            twitter={{
                                handle: '@beliefchallenge',
                                site: '@beliefchallenge',
                                cardType: 'summary_large_image',
                            }}
                        />
                    <Provider store={store}>
                        <Component {...pageProps} count={count} fetchPost={fetchPost} />
                    </Provider>
                </>
            );
        }
    }




const mapStateToProps = state => {
    return {
        auth: state.auth,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        reduxdata: data => dispatch(reduxdata(data)),
        fetchPost: data => dispatch(fetchPost(data)),
        getCategory: data => dispatch(getCategory(data)),
        hasPrevUrl: data => dispatch(hasPrevUrl(data)),
        getPostLikes: data => dispatch(getPostLikes(data))
    };
};

export default withRedux(initStore)(connect(mapStateToProps, mapDispatchToProps)(AppWrapper));