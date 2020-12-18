// 用于将信息储存至本地
export const setStorage = (store) => {
  const newStore = store || {}
  Object.keys(newStore).forEach(key => {
    // 本地存储只能存字符串，如果需要存储数组或者对象数据，则转为 JSON 格式字符串
    const value = typeof newStore[key] === 'string' ? newStore[key] : JSON.stringify(newStore[key])
    window.sessionStorage.setItem(key, value)
  })
}
export const getStorage = (name) => {
  const content = window.sessionStorage.getItem(name)
  try {
    return JSON.parse(content)
  } catch (e) {
    return content
  }
}
