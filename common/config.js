export default {}
let apiUrl = ''
let version = 'v1'
let BASE = ""
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

if (process.env.NODE_ENV == "development") {
    apiUrl = 'http://localhost:3001/'
    // apiUrl = 'http://192.168.0.61:3001/'
    BASE = "http://localhost:8091/"
    // BASE = "https://114035c0.ngrok.io"

} else {
    apiUrl = 'https://api.beliefchallenge.com/'
    BASE = "https://beliefchallenge.com/"
}

export const APIURL = apiUrl
export const API_URL = (APIURL + version)
export const BASEURL = BASE
export const ITEMS_LIMIT = 5

// export const BASE_URL = BASE