/**
 * 用户相关的请求模块
 */
import request from '../utils/request'

//  用户登录
export const loginApi = (data) => {
  const token = window.sessionStorage.getItem
  return request({
    method: 'post',
    url: '/login',
    // data用于设置post请求体
    data: data
  })
}
// 获取用户的信息
export const getUserProfile = () => {
  return request({
    method: 'get',
    url: '/users',
    headers: {
      // 调用登录时保存的token  保存于客户端的sessionStorage中
      Authorization: 'Bearer '
    }
  })
}

// 修改用户信息
