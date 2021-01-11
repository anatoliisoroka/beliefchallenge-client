import axiosinstance  from 'common/config.axios'

const fetchApi_withoutparams = async (url) => {
    
    return await axiosinstance
        .get(url,null)
        .then(res => {
            return res
        })
        .catch((error) => {
            return error.response
        })
}


const fetchApi_withparams = async (url, queryData) => {
    
    return await axiosinstance
        .get(url, queryData)
        .then(res => {
            return res
        })
        .catch((error) => {
            return error.response
        })
}

const postApi = async (url, data) => {

    return await axiosinstance
        .post(url, data)
        .then(res => {
            return res
        })
        .catch((error) => {
            return error.response
        })
}


const deleteApi = async (url, data) => {
    return await axiosinstance
        .delete(url, {data})
        .then(res => {
            return res
        })
        .catch((error) => {
            return error.response
        })
}

const updateApi = async (url, data) => {
    return await axiosinstance
        .put(url, data)
        .then(res => {
            return res
        })
        .catch((error) => {
            return error.response
        })
}

export default {
    _fetchWithOutParams: fetchApi_withoutparams,
    _fetchWithParams: fetchApi_withparams,
    _postRequest: postApi,
    _deleteRequest: deleteApi,
    _updateRequest: updateApi,

}