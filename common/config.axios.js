import axios from 'axios';
import { API_URL } from './config'
import getObject from 'common/jwt-services'
let cookieData = getObject.getObject('authUser');
import cookie from 'js-cookie'
import Router from 'next/router'

let AUTH_TOKEN = ''
if (cookieData) {
    let parsed = JSON.parse(getObject.getObject('authUser'))
    AUTH_TOKEN = parsed.token
}

const instance = axios.create({
    baseURL: API_URL,

})

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.interceptors.request.use(function (request) {
    if (!request.headers.common.Authorization)
        request.headers.common.Authorization = AUTH_TOKEN;
    // console.log(request.headers.common.Authorization, 'request');
    return request
})
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {

    if (error.response && error.response.status === 401) {
        cookie.remove('authUser');
        Router.push("/login")
        // window.location.replace("/login");
    }
    // Do something with response error
    return Promise.reject(error);
});

export default instance;