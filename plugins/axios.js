import https from 'https';
export default function (context) {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    context.app.$axios.onRequest(config => {
        console.log('Making request to ' + config.url)
        config.httpsAgent = agent;
    })

    context.app.$axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
            console.log('error')
        }
    })
}