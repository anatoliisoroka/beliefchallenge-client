
import genericfunctions from 'utilfunction/util-api-service'
import Router from 'next/router'
import jwtServices from 'common/jwt-services'
import deleteObject from 'common/jwt-services'
import axiosinstance from 'common/config.axios'

export const CATEGORY = "CATEGORY";
export const POST = "POST";
export const USER = "USER";


export const getCategory = params => dispatch => {
    return new Promise((resolve, reject) => {
        if(params.role == 'admin'){
        genericfunctions._fetchWithParams(params.url, params)
            .then(res => {
                if (res.data.response.status) {
                    resolve(res);
                } else {
                    resolve(res);
                }
            })
            .catch(err => {
                reject({ message: err });
            });
    }
})

};

export const getPosts = params => dispatch => {
    return new Promise((resolve, reject) => {
        if(params.params.role == 'admin'){
         genericfunctions._fetchWithParams(params.params.url, params)
            .then(res => {
                if (res.data.response.status) {
                    resolve(res);
                } else {
                    resolve(res);
                }
            })
            .catch(err => {
                reject({ message: err });
            });
    }
})

};

export const getUsers = params => dispatch => {
    return new Promise((resolve, reject) => {
        if(params.params.role == 'admin'){
         genericfunctions._fetchWithParams(params.params.url, params)
            .then(res => {
                console.log(res)
                if (res.data.response.status) {
                    resolve(res);
                } else {
                    resolve(res);
                }
            })
            .catch(err => {
                reject({ message: err });
            });
    }
})

};