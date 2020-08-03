import request from '@/utils/request.js'
function apiGetInfo () {
  return request({
    url: '/au/info',
    // 是否需要携带token
    needToken: true
  })
}
function apiEditInfo (data) {
  return request({
    url: '/au/edit',
    // 是否需要携带token
    needToken: true,
    method: 'post',
    data
  })
}
function apiUpload (data) {
  return request({
    url: '/upload',
    // 是否需要携带token
    needToken: true,
    method: 'post',
    data
  })
}
export { apiGetInfo, apiEditInfo, apiUpload }
