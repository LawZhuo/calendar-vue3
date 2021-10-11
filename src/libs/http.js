import axios from 'axios'
import qs from 'qs'
import JUHE_APPKEY from '../configs/keys'

//post请求方式
const axiosPost = options => {
    axios.post(
        options.url,
        //将用户传过来的数据对象转化为字符串，作为参数发起post请求
        qs.stringify({
            key: JUHE_APPKEY,
            ...options.data
        })
    ).then(res => {
        //获取成功的请求
        options.success(res.data);
    }).catch(err => {
        //获取错误的请求
        options.error(err)
    })
};
// get请求方式
const axiosGet = options => {
    axios.post(
        options.url,
        {
            params: {
                key: JUHE_APPKEY,
                ...options.data
            }
        }
    ).then(res => {
        //获取成功的请求
        options.success(res.data);
    }).catch(err => {
        //获取错误的请求
        options.error(err)
    })
};

export {
    axiosGet,
    axiosPost
};
