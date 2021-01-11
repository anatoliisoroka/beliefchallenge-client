
import cookie from 'js-cookie'

export default {
    getObject(key) {
        return cookie.get(key)
    },

    setObject(key, value) {
        cookie.set(key, JSON.stringify(value))
    },

    deleteObject(key) {
        cookie.remove(key);

    },
}


