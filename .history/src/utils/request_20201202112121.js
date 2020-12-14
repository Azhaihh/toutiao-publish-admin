/**
 * 基于 axios 封装的请求模块
 */
import axios from 'axios'

// 创建一个 axios 实例
// 我们通过这个实例去发请求
axios.create({
    // 请求基础路径
    baseURL: 'http://ttapi.research.itcast.cn/'
})

