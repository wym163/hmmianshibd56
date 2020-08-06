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
// 面经详情
function apiShareDetail (id) {
  return request({
    url: `/articles/share/${id}`
  })
}
// 面经评论
function apiShareComment (params) {
  const { id, limit, start } = params
  return request({
    url: `/articles/comments/${id}`,
    params: {
      limit,
      start
    }
  })
}
// 发布评论
function apiArticlesComment (data) {
  return request({
    url: '/articles/comments',
    method: 'post',
    needToken: true,
    data
  })
}
// 文章点赞接口
function apiLikeArticles (data) {
  return request({
    url: '/articles/star',
    method: 'post',
    needToken: true,
    data
  })
}
export {
  apiTechnicArticles,
  apiShareArticles,
  apiHotData,
  apiShareTopSearch,
  apiShareDetail,
  apiShareComment,
  apiArticlesComment,
  apiLikeArticles
}
