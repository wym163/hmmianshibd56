import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from '@/utils/Local.js'
var request = axios.create({
  baseURL: process.env.VUE_APP_URL
  // withCredentials: true
})
request.interceptors.request.use(
  function (config) {
    console.log(config)
    if (config.needToken) {
      if (getToken()) {
        config.headers.authorization = `Bearer ${getToken()}`
      }
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  function (response) {
    if (response.data.code === 200) {
      return response.data
    } else if (
      response.data.code === 400 ||
      response.data.code === 401 ||
      response.data.code === 403
    ) {
      // 提示一下错误
      Toast.fail(response.data.message)
      return Promise.reject(new Error(response.data.message))
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default request
