import axios from 'axios'
var request = axios.create({
  baseURL: process.env.VUE_APP_URL
  // withCredentials: true
})
request.interceptors.response.use(
  function (response) {
    if (response) {
      if (response.data.code === 200) {
        return response.data
      } else if (
        response.data.code === 400 ||
        response.data.code === 401 ||
        response.data.code === 403
      ) {
        return Promise.reject(new Error(response.data.message))
      }
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default request
