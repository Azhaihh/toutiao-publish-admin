/**
 * 用户相关的请求模块
 */

//  用户登录
export const login (data) => {
  return request({
    method: 'post',
    url: '/login',
    // data用于设置post请求体
    data: data
     })
}
// 获取用户的信息

// 修改用户信息
