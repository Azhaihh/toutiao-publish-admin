/**
 * 用户相关的请求模块
 */
import request from '../utils/request'

//  用户登录
export const loginApi = (data) => {
  return request({
    method: 'post',
    url: '/login',
    // data用于设置post请求体
    data: data
  })
}
// 获取用户的信息
export const getUserPro

// 修改用户信息
