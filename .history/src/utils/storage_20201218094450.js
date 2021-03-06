// 用于将状态管理的信息储存至本地
export const setStorage = (store) => {
  const newStore = store || {}
  Object.keys(newStore).forEach(key => {
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
