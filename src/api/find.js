import request from '@/utils/request.js'
// 面试技术
function apiTechnicArticles (params) {
  return request({
    url: '/articles/technic',
    // 是否需要携带token
    needToken: true,
    params
  })
}
// 热门数据
function apiHotData () {
  return request({
    url: '/chart-data/hot'
  })
}
// 面经分享
function apiShareArticles (params) {
  return request({
    url: '/articles/share',
    // 是否需要携带token
    needToken: true,
    params
  })
}
// 面经热搜
function apiShareTopSearch () {
  return request({
    url: '/articles/shareTopSearch'
  })
}
export { apiTechnicArticles, apiShareArticles, apiHotData, apiShareTopSearch }
