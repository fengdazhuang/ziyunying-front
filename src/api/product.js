import request from '@/utils/request'

/**
 * 登录
 */
export const userLogin = (params) =>{
  return request({
    url: '/api/user/login',
    method: 'get',
    params: params
  })
}
