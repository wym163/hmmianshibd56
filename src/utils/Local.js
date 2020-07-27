// 本地方法封装
// 保存token
const TOKENKEY = 'HMTOKEN'
function setToken (value) {
  window.localStorage.setItem(TOKENKEY, value)
}
function getToken () {
  return window.localStorage.getItem(TOKENKEY)
}
function removeToken () {
  return window.localStorage.removeItem(TOKENKEY)
}
export { setToken, getToken, removeToken }
