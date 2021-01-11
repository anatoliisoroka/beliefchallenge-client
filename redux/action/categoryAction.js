// import axios from 'axios';
import apiCall from '../../utilfunction/util-api-service'
import genericfunctions from 'utilfunction/util-api-service'

export const CATEGORY = "CATEGORY"

export const getCategory = params => dispatch => {
    return new Promise((resolve, reject) => {
        genericfunctions._fetchWithOutParams(params.url)
            .then(res => {
                if (res.data.response.status) {
                    // console.log(res)
                    dispatch({ type: "CATEGORY", payload: res.data })
                    resolve(res);
                } else {
                    resolve(res);
                }
            })
            .catch(err => {
                // console.log(err);

                // reject({ message: err });
            });


    })
}

