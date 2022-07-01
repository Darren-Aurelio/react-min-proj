import axios from 'axios';

const accessToken = sessionStorage.getItem('access_token');


const request = axios.create({
    baseURL: 'http://localhost:7777/',

    headers: {
        'authorization': accessToken

    }
})

request.interceptors.response.use(
    (res) => res.data,
    (err) => {
        console.log(err);

        if(err.response?.status === 403) {
            localStorage.removeItem('access_token')
            window.location.href = '/'
        }

        throw new Error(err.message || 'Error')
    }
)

export default request;