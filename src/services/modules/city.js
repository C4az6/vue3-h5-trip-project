/* 城市相关的接口请求函数 */
import hyRequest from '../request'

// 获取所有的城市数据
export const getCityAll = () => {
  return hyRequest.get({ url: '/city/all' })
}