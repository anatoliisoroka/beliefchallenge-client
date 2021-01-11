
/**
 * created by zain ahmed 
 * create data: 25/12/2019
 */

import genericfunctions from 'utilfunction/util-api-service'
import Router from 'next/router'
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const REDUXDATA = "REDUXDATA";
import jwtServices from 'common/jwt-services'
import deleteObject from 'common/jwt-services'
import axiosinstance from 'common/config.axios'
// import store from '../'

/**
 * 
 * @param {*email(string) password(string)} params ,
 *  * discription: user login function
 * function loginFN as login
 * 
 */
export const login = params => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        genericfunctions._postRequest(params.url, params.userData).then(res => {
            if (res.data.response.status) {
                axiosinstance.defaults.headers.common['Authorization'] = res.data.response.data.token;

                let authUser = {
                    ...res.data.response.data,
                    socialLogin: params.socialLogin,
                    profilePic: res.data.response.data.profilePic.url ? res.data.response.data.profilePic.url : res.data.response.data.profilePic,
                }
                let paylodaData = {
                    ...authUser,
                    profilePic: res.data.response.data.profilePic.url ? res.data.response.data.profilePic.url : res.data.response.data.profilePic,
                    socialLogin: params.socialLogin
                }

                jwtServices.setObject('authUser', authUser)
                dispatch({ type: "LOGIN", payload: paylodaData });
                resolve(res);
                // if (getState().general.hasPrevUrl)
                //     Router.back()
                // else Router.replace('/')
                window.location = '/'


            } else {
                resolve(res);
            }
        })
            .catch((err) => {
                reject({ message: err });
            });
    })

};


/**
 * 
 * @param {*token(JWT)} params ,
 *  * discription: user lougOut function
 * function logoutFN as logoutFN
 * 
 */
export const logoutFN = (params) => {
    return (dispatch) => {

        genericfunctions._postRequest(params.url, params).then(res => {
            if (res.data.response.status) {
                let authUser = {};
                deleteObject.deleteObject('authUser')
                dispatch({ type: "LOGOUT", payload: authUser });
                dispatch({ type: "POSTLIKES", payload: [] });
                Router.replace('/login')
            }
        })

    };
}


/**
 * 
 * @param {*fullanme(string) email(string) password(string)} params ,
 * discription: user signup function
 * function signUpFN as signup
 * 
 */
export const signup = (params) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            genericfunctions._postRequest(params.url, params.userData).then(res => {
                if (res.data.response.status) {
                    let authUser = {
                        ...res.data.response.data,
                        socialLogin: params.socialLogin,
                        role: 'user'
                    };
                    let paylodaData = {
                        ...authUser,
                        socialLogin: params.socialLogin,
                        role: 'user'
                    }
                    jwtServices.setObject('authUser', authUser)
                    dispatch({ type: "SIGNUP", payload: paylodaData });
                    window.location = '/'
                    //Router.push('/home')
                    resolve(res);

                } else {
                    resolve(res)
                }
            })
                .catch(err => {
                    reject({ message: err });
                })
        })

    };
};


/**
 * 
 * @param {*email(string) fullname(string) token(JWT) role(string) socialLogin(Boolen)} params ,
 *  * discription: data restore to redux from coockie function
 * function reduxData as reduxdata
 * 
 */

export const reduxdata = (params) => {
    return (dispatch) => {
        dispatch({ type: "REDUXDATA", payload: params })
    };
};