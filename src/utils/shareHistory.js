// 声明一个常量保存搜索记录
const SHAREHISTORY = 'SHAREHISTORY'
// 保存
function savaHistory (history) {
  localStorage.setItem(SHAREHISTORY, JSON.stringify(history))
}
// 读取
function getHistory () {
  const historystr = localStorage.getItem(SHAREHISTORY)
  const history = JSON.parse(historystr)
  if (history) {
    return history
  } else {
    return []
  }
}
// 删除
function removeHistory () {
  localStorage.removeItem(SHAREHISTORY)
}
export { savaHistory, getHistory, removeHistory }
