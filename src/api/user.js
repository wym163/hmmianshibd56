import request from '@/utils/request.js'
function apiGetInfo () {
  return request({
    url: '/au/info',
    // 是否需要携带token
    needToken: true
  })
}
export { apiGetInfo }
