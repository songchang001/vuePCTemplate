import axios from "axios";

import {
    Loading,
    // Message,
    Notification
} from 'element-ui';

// 创建axios实例
var service = axios.create({
    baseURL: "http://sso1169sjdptest.haier.net/cn_test_inter/",
    // baseURL:"http://10.138.23.151:19911/",
    timeout: 100000 // 请求超时时间
});

function getQueryString(key) {
    var url = window.location.search;
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = url.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : "";
}

var loadObj = {}

// request拦截器
service.interceptors.request.use(
    config => {

        config.headers = {
            ...config.headers,
            'X-Access-Token': getQueryString('token')
        }

        if (loadObj[config.url]) {
            loadObj[config.url].close();
        }
        loadObj[config.url] = Loading.service({
            lock: true,
            text: '请稍后。。。',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.8)'
        })
        return config;
    },
    error => {
        // Do something with request error
        //console.log(error); // for debug
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        loadObj[response.config.url].close();
        const json = response.data;
        if (json.code == 401) {
            Notification.error({
                title: response.data.resultMsg,
                message: `<a href="http://data.rrs.com/" style="color:#1f44ff;text-decoration:underline;">Token失效，请点击此处前往大数据门户重新登录</a>`,
                duration: 0,
                dangerouslyUseHTMLString: true
            });
            return Promise.reject(json.data);
        } else if (json.code == 403) {
            Notification.error({
                title: response.data.resultMsg,
                message: `<a href="http://data.rrs.com/" style="color:#1f44ff;text-decoration:underline;">访问受限，请点击此处前往大数据门户申请权限</a>`,
                duration: 0,
                dangerouslyUseHTMLString: true
            });
            return Promise.reject(json.data);
        } else if (json.code !== 200) {
            Notification.error({
                title: response.config.headers.dataType + '接口调用错误',
                message: response.data.resultMsg,
                duration: 0
            });
            return Promise.reject(json.data);
        }
        return json;
    },
    error => {
        //console.log('error:' + error);// for debug
        if (error.response) {
            Notification.error({
                title: '接口调用错误',
                message: error
            });

            loadObj[error.response.config.url].close()
        }

        if (error.config) {
            Notification.error({
                title: '接口调用错误',
                message: error
            });
            loadObj[error.config.url].close()
        }
        return Promise.reject(error);
    }
);

export default service;
