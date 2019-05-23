import axios from 'axios';

//基本配置
const proxy = {
    apiPath: 'http://127.0.0.1:8010/'
}

//Ajax通用配置
proxy.ajax = axios.create({
    baseURL: proxy.apiPath
});

//添加响应拦截器
proxy.ajax.interceptors.response.use(res=>{
    return res.data
});

export default proxy;