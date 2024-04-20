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

/**
 *退出登录
 *
 * @param params
 */
export const userLogout = () =>{
  return request({
    url: '/api/user/logout',
    method: 'get',
    params: {
    }
  })
}

export const getUserInfo = (params) =>{
  return request({
    url: '/api/user/getUserInfo',
    method: 'get',
    params: params
  })
}



/**
 * 分页
 */
export const getPage = (params) =>{
  return request({
    url: '/api/product/pageMyProduct',
    method: 'get',
    params: params
  })
};


/**
 * 分页
 */
export const getProductPage = (params) =>{
  return request({
    url: '/api/product/pageProduct',
    method: 'get',
    params: params
  })
};

/**
 * 分页
 */
export const pageOrders = (params) =>{
  return request({
    url: '/api/order/getPage',
    method: 'get',
    params: params
  })
};

/**
 * 详情
 */
export const getOrderDetail = (id) =>{
  return request({
    url: '/api/order/getDetail',
    method: 'get',
    params: {
      id: id
    }
  })
};


/**
 * 详情
 */
export const getOrderItems = (id) =>{
  return request({
    url: '/api/order/getOrderItems',
    method: 'get',
    params: {
      id: id
    }
  })
};



export const getAddressById = (id) =>{
  return request({
    url: '/api/user/getDetaAddr',
    method: 'get',
    params: {
      id: id
    }
  })
};

export const addAddress = (data) =>{
  return request({
    url: '/api/user/addAddress',
    method: 'post',
    data
  })
};

/**
 * 详情
 */
export const getAddressList = (id) =>{
  return request({
    url: '/api/user/getAddressList',
    method: 'get',
    params: {
      id: id
    }
  })
};


/**
 * 新增
 */
export const addProduct = (data) =>{
  return request({
    url: '/api/product/add',
    method: 'post',
    data
  })
};

export const getCollections = (id) =>{
  return request({
    url: '/api/product/getCollections',
    method: 'get',
    params: {
      id: id
    }
  })
};


/**
 * 详情
 */
export const getDetail = (id) =>{
  return request({
    url: '/api/product/getDetail',
    method: 'get',
    params: {
      id: id
    }
  })
};

/**
 * 更新状态
 */
export const updateStatus = (params) =>{
  return request({
    url: '/api/product/updateStatus',
    method: 'post',
    params: params
  })
};

/**
 * 删除
 */
export const del = (ids) =>{
  return request({
    url: '/api/product/del',
    method: 'post',
    params: {
      ids: ids
    }
  })
};

/**
 * 修改密码
 */
export const updatePassword = (params) =>{
  return request({
    url: '/api/user/updatePassword',
    method: 'post',
    params: params
  })
};
