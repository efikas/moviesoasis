import Vue from "vue";
import axios from "axios/index";
import {apiURL} from './resources'


axios.defaults.baseURL = apiURL

axios.interceptors.request.use(function (config) {
    if (typeof window === "undefined") {
        return config
    }

    // const token = window.localStorage.getItem('token');
    const token = Vue.auth.getToken();

    if (token) {
        // config.headers['Access-Control-Allow-Origin'] = 'null'
        // config.headers.Authorization = `Bearer ${token}`
        // // config.headers.common['Access-Control-Allow-Origin'] = 'http://127.0.0.1:8000'
        // // config.headers.common['Access-Control-Request-Method'] = '*'
        // config.headers['accept'] = 'application/json'
        // config.headers['accept-language'] = 'en_US'
        // config.headers['content-type'] = 'application/x-www-form-urlencoded'
    }

    return config
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        // Do something with response error

        if (error.response.status === 401){
            //Todo: add sweetAlert here
            Vue.auth.destroyToken();
            window.location.href = "/login?redirect=" + to.fullPath
        }

        return Promise.reject(error);
    }
);

export default axios;