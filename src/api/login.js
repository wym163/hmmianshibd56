// 导入request
import request from '@/utils/request.js'
// 登录接口
function apiGetCode (data) {
  return request({
    url: '/au/code',
    method: 'post',
    data
  })
}
function apiGetLogin (data) {
  return request({
    url: '/au/login',
    method: 'post',
    data
  })
}
export { apiGetCode, apiGetLogin }
