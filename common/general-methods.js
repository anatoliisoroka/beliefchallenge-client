
export default {
    /**
         * @name @convertToFormData
         * @description convert data to FormData
         * @requires form data
         * */

    convertToFormData(form) {
        var bodyFormData = new FormData();
        for (var i in form) {
            if (form[i] instanceof FileList) {
                for (var j in form[i]) {
                    bodyFormData.append(i, form[i][j])
                }
            } else {
                bodyFormData.set(i, form[i]);
            }
        }
        return bodyFormData
    },
    getCookie(cookiename, cookieData) {
        // Get name followed by anything except a semicolon
        var cookiestring = RegExp(cookiename + "=[^;]+").exec(cookieData);
        // Return everything after the equal sign, or an empty string if the cookie name not found
        return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
    }

}