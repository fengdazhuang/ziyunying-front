import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/index/index'
import LayoutPersonal from '@/views/personal/index'
import LayoutPay from '@/views/pay/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Layout,
      redirect: '/home/index',
      children: [{
        path: 'index',
        name: '主页',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/home/index')
      }]
    },
    {
      path: '/',
      name: '主页',
      redirect: '/home'
    },
    {
      path: '/lease',
      component: Layout,
      children: [{
        path: '',
        name: '衣服租赁',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/lease/index')
      }]
    },
    {
      path: '/type',
      component: Layout,
      redirect: '/type/index',
      children: [{
        path: 'index',
        name: '分类',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/type/index')
      }]
    },
    {
      path: '/video',
      component: Layout,
      redirect: '/video/index',
      children: [{
        path: 'index',
        name: '紫云英学堂',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/video/index')
      }]
    },
    {
      path: '/enterprise',
      component: Layout,
      redirect: '/enterprise/index',
      children: [{
        path: 'index',
        name: '企业账号',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/enterprise/index')
      }]
    },
    {
      path: '/contract',
      component: Layout,
      redirect: '/contract/index',
      children: [{
        path: 'index',
        name: '诚信合约',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/contract/index')
      }]
    },
    {
      path: '/shelf',
      component: Layout,
      redirect: '/shelf/index',
      children: [{
        path: 'index',
        name: '实时下架',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/shelf/index')
      }]
    },
    {
      path: '/product',
      component: Layout,
      redirect: '/product/detail',
      children: [{
        path: 'detail',
        name: '商品详情',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/product_detail/index')
      }]
    },
    {
      path: '/login',
      name: '登录页',
      component: () =>
        import( /* webpackChunkName: "page" */ '@/page/login/index'),
    },
    {
      path: '/car',
      component: () => import('@/views/car/index'),
      hidden: true
    },

    {
      path: '/personal',
      component: LayoutPersonal,
      redirect: '/personal/wel',
      children: [{
        path: 'wel',
        name: '欢迎页',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/wel')
      },{
        path: 'userInfo',
        name: '个人资料',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/user_info')
      },{
        path: 'fund',
        name: '资金管理',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/fund')
      },{
        path: 'integral',
        name: '积分平台',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/integral')
      },{
        path: 'address',
        name: '收货地址',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/address')
      },{
        path: 'coupon',
        name: '我的优惠券',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/coupon')
      },{
        path: 'paypwdModify',
        name: '修改支付密码',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/paypwd_modify')
      },{
        path: 'loginPwdModify',
        name: '修改登录密码',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/login_pwd_modify')
      },{
        path: 'myProduct',
        name: '我的商品',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/my_product/index')
      },{
        path: 'publishProduct',
        name: '发布商品',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/my_product/publish_product')
      },{
        path: 'makeOrder',
        name: '确认订单',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/my_product/make_order')
      },{
        path: 'order',
        name: '我的订单',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/order/index')
      },{
        path: 'orderDetail',
        name: '订单详情',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/order/order_detail')
      },{
        path: 'receipt',
        name: '确认收货',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/order/receipt')
      },{
        path: 'return',
        name: '订单中心-申请退款/退货',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/order/return')
      },{
        path: 'myCollect',
        name: '我的收藏',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/my_collect')
      },{
        path: 'refund',
        name: '订单中心-退款/退货',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/refund')
      },{
        path: 'logisticsQuery',
        name: '账户信息-物流查询',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/logistics_query')
      },{
        path: 'download',
        name: '服务中心-数据自助下载',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/download')
      },{
        path: 'saleService',
        name: '服务中心-售后服务',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/sale_service')
      }, {
        path: 'myMessage',
        name: '服务中心-我的消息',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/my_message/index')
      },{
        path: '/chat',
        component: () =>
          import( /* webpackChunkName: "page" */ '@/views/personal/child/my_message/chat')
      }, {
        path: 'deliveryService',
        name: '服务中心-配送服务',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/delivery_service')
      },{
        path: 'userAgreement',
        name: '服务中心-用户协议',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/user_agreement')
      },{
        path: 'commonProblem',
        name: '服务中心-常见问题',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/common_problem')
      },{
        path: 'newbie',
        name: '新手上路-如何成为代理商',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/newbie')
      },{
        path: 'listingTutorial',
        name: '新手上路-如何成为代理商',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/listing_tutorial')
      },{
        path: 'distributorCommonProblem',
        name: '新手上路-如何成为代理商',
        component: () =>
        import( /* webpackChunkName: "views" */ '@/views/personal/child/distributor_common_problem')
      },{
        path: 'paymentAccount',
        name: '新手上路-付款账户',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/payment_account')
      },{
        path: 'companyProfile',
        name: 'XXX-企业简介',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/company_profile')
      },{
        path: 'addShow',
        name: 'XXX-加入紫云英',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/add_show')
      },{
        path: 'privacyStatement',
        name: 'XXX-隐私说明',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/personal/child/privacy_statement')
      }]
    },
    {
      path: '/pay',
      component: LayoutPay,
      children: [{
        path: '',
        name: '确认支付',
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/pay/index')
      }]
    },
  ]
})
