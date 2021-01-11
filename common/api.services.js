/*
 * =====================================================================
 * --------------------------- API SERVICES ----------------------------
 * =====================================================================
 * */

import React from 'react';
import axios from 'axios'
const Cookies = require('js-cookie')

import https from 'https';
import {
  API_URL
} from '@/common/config'

/**
* @name @Erro
* @description Default Api Service for Auth and Defaul Queries
* */


const Erro = {





  /* General query for get request */
  query(resource, params) {
    return React.axios
      .get(resource, params)
      .catch((error) => {
        if (error && error.response)
          throw new Error(`Lemostre Generic ApiService on API: ${params}, error: ${error.response.data.response.message}`)
        else
          throw new Error(`Lemostre Generic ApiService on API: ${params}, error: ${error}`)

      })
  },


  /* General get request */
  get(resource, params) {
    params = params ? `${resource}/${params}` : `${resource}`;
    return React.axios
      .get(params)
  },

  /* Get request with params*/
  getWithParams(resource, params) {
    return React.axios
      .get(resource, params)
      .catch((error) => {
        // throw new Error(`Lemostre Generic ApiService on API: ${resource}, error: ${error}`)
        return error.response
        // , error: ${ JSON.stringify(error) }

        // return error.response
        // throw new Error(`Lemostre Get ApiService ${error}`)
      })
  },

  /* General post request */
  post(resource, params) {
    return React.axios.post(resource, params)
  },

  /* General put request */
  put(resource, params) {
    return React.axios.put(resource, params)
  },

  /* General delete request */
  delete(resource, params) {
    return React.axios.delete(resource, params)
  }

}
/* Export Erro as default*/
export default Erro