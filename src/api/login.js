// 导入_fetch
import _fetch from '@/utils/request.js'
// 登录接口
function apiGetCode (data) {
  return _fetch({
    url: '/au/code',
    method: 'post',
    data
  })
}
function apiGetLogin (data) {
  return _fetch({
    url: '/au/login',
    method: 'post',
    data
  })
}
export { apiGetCode, apiGetLogin }
