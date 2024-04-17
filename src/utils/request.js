import axios from 'axios'
import { MessageBox, Message, Notification } from 'element-ui'
import { getToken,setToken,removeToken } from '@/utils/auth'
import router from '@/router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 30 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 全局请求头
    if(getToken()){
      // console.info('token='+getToken());
      config.headers['Authorization'] = 'bearer' + getToken();
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    if(res.refreshTokenFlag && res.refreshToken){
      setToken(res.refreshToken);
    }
    if (res.status === 403) {
      Notification({
        title: '提示',
        message: '请登录~',
        type: 'warning'
      });
      removeToken();
      // location.reload();
      router.push({ path: '/login' })
    } else if (res.status === 500) {
      Message({
        message: res.msg || '系统异常，请联系技术人员',
        type: 'error',
        duration: 2 * 1000
      });
      return res
    } else if (res.status !== 200) {
      console.info(res);
      Message({
        message: res.msg || '系统异常，请联系技术人员',
        type: 'error',
        duration: 2 * 1000
      });
      return Promise.reject(new Error(res.msg || 'Error'))
    }
    return res
  },
  error => {
    console.log(error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
