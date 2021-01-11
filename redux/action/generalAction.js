import genericfunctions from 'utilfunction/util-api-service'
import Router from 'next/router'
export const UPDATEPROFILE = "UPDATEPROFILE"
export const SHOW_MODAL = "SHOW_MODAL"
export const HAS_PREV_URL = "HAS_PREV_URL"
export const POSTLIKES = "POSTLIKES"
export const POSTUNLIKE = "POSTUNLIKE"
export const POST_DATA = "POST_DATA"
import setObject from 'common/jwt-services'
import generalMethod from 'common/general-methods'


export const changepassword = params => dispatch => {
    return new Promise((resolve, reject) => {
        genericfunctions._updateRequest(params.url, params.userData)
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
    })

};

export const forgotpassword = params => dispatch => {
    return new Promise((resolve, reject) => {
        genericfunctions._updateRequest(params.url, params.userData)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject({ message: err });
            });
    })

};

export const updateprofile = params => dispatch => {
    return new Promise((resolve, reject) => {
        let { token, userId } = params.userData
        if (params.userData.profilePic.name) {
            params.userData = generalMethod.convertToFormData(params.userData)
        }

        genericfunctions._updateRequest(params.url, params.userData)
            .then(res => {
                if (res.data.response.status) {
                    let { fullName, email, profilePic } = res.data.response.data
                    let authUser =
                    {
                        token: token,
                        fullName,
                        email,
                        userId: userId,
                        role: 'role',
                        profilePic: profilePic.url ? profilePic.url : profilePic,
                        socialLogin: params.socialLogin
                    }
                    dispatch({ type: "UPDATEPROFILE", payload: authUser })
                    setObject.setObject('authUser', authUser)
                    resolve(res);
                    // Router.replace('/home')

                } else {
                    console.log("unathorized")
                }
            })
            .catch(err => {
                reject({ message: err });
            });
    })

};


export const fetchPost = params => dispatch => {
    return new Promise((resolve, reject) => {
        genericfunctions._fetchWithParams(params.params.url, params)
            .then(res => {

                if (res.data && res.data.response && res.data.response.data) {
                    dispatch({ type: POST_DATA, payload: res.data.response.data })
                }
                
                resolve(res)

            })
            .catch(err => {
                reject({ message: err })
            })
    })
}

export const updatePostData = params => dispatch => {
    dispatch({ type: POST_DATA, payload: params })
}

export const showModal = params => dispatch => {
    dispatch({ type: "SHOW_MODAL", payload: params })
}

export const hasPrevUrl = params => dispatch => {
    dispatch({ type: "HAS_PREV_URL", payload: params })
}


export const getPostLikes = params => dispatch => {
    return new Promise((resolve, reject) => {
        genericfunctions._fetchWithOutParams(params.url)
            .then(res => {
                if (res.data.response.status) {
                    dispatch({ type: "POSTLIKES", payload: res.data.response.data.postId })
                    resolve(res)
                }
            })
            .catch(err => {
                reject({ message: err })
            })
    })
}


export const addPostLike = params => (dispatch, getState) => {

    return new Promise((resolve, reject) => {
        let likesData = getState().general.postLikes
        if (params.likeFlag == 'add') {
            likesData.push(params.postId);
            dispatch({ type: "POSTLIKES", payload: likesData })
        } else {
            let ind = likesData.findIndex(itm => itm == params.postId)
            if (ind > -1) {
                likesData.splice(ind, 1);
                dispatch({ type: "POSTLIKES", payload: likesData })
            }
            // dispatch({ type: "POSTLIKES", payload: res.data.response.data.postId })

        }
        resolve(getState().general.postLikes)
    })
}

export const removePostLike = params => (dispatch, getState) => {
    return new Promise((resolve, reject) => {

        // genericfunctions._fetchWithOutParams("/likepost").then(({ data }) => {
        //     console.log(data.response.data, 'mor k')
        // })


        let likesData = getState().general.postLikes
        console.log(likesData, 'remove')
        if (params.likeFlag == 'remove') {

            likesData.splice(likesData.indexOf(params.postId), 1);
            console.log(likesData)
            dispatch({ type: "POSTUNLIKE", payload: likesData })
            resolve(true)
        }
    })
}
