/**
 * 基于 axios 封装的请求模块
 */
import axios from 'axios'

// 创建一个 axios 实例
// 我们通过这个实例去发请求
const request = axios.create({
  // 请求基础路径
  baseURL: 'https://www.liulongbin.top:8888/api/private/v1/'
})

// 发送真正的请求
export default request

// 谁要使用谁就加载 request 模块
// import request from 'request.js'
// request.xxx
// request({
//   method: ,
//   url: ''
// })