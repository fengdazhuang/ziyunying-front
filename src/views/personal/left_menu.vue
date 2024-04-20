<template>
  <div class="user-center">
    <div class="pull-left bgf">
      <a class="title" @click="selMenu('/personal/wel')">个人中心页</a>
      <dl class="user-center__nav" v-for="(item,index) in menus" :key="index">
        <dt>{{item.name}}</dt>
        <a v-for="(item2,index2) in item.items" :key="index+'_'+index2" @click="selMenu(item2.path)"><dd :class="path === item2.path?'active':''">{{item2.name}}</dd></a>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        path: '/personal/wel',
        menus: [
          {
            name: '帐户信息',
            items: [
              {name:'个人资料',path:'/personal/userInfo'},
              {name:'收货地址',path:'/personal/address'},
              {name:'修改登录密码',path:'/personal/loginPwdModify'}
            ]
          },
          {
            name: '商家管理',
            items: [
              {name:'我的商品',path:'/personal/myProduct'},
              {name:'发布商品',path:'/personal/publishProduct'},
              {name:'确认订单',path:'/personal/makeOrder'}
            ]
          },

          {
            name: '订单中心',
            items: [
              {name:'我的订单',path:'/personal/order'},
              {name:'我的收藏',path:'/personal/myCollect'},
              {name:'退款/退货',path:'/personal/refund'}
            ]
          },
          {
            name: '服务中心',
            items: [
              {name:'售后服务',path:'/personal/saleService'},
              {name:'配送服务',path:'/personal/deliveryService'},
              {name:'用户协议',path:'/personal/userAgreement'},
              {name:'我的消息',path:'/personal/myMessage'},
              {name:'常见问题',path:'/personal/commonProblem'}
            ]
          },
          // {
          //   name: '新手上路',
          //   items: [
          //     {name:'如何成为代理商',path:'/personal/newbie'},
          //     {name:'代销商上架教程',path:'/personal/listingTutorial'},
          //     {name:'分销商常见问题',path:'/personal/distributorCommonProblem'},
          //     {name:'付款账户',path:'/personal/paymentAccount'},
          //   ]
          // },
          {
            name: '紫云英交易平台',
            items: [
              {name:'企业简介',path:'/personal/companyProfile'},
              {name:'了解紫云英',path:'/personal/addShow'}
            ]
          },
        ]
      };
    },
    mounted() {
      let that = this;
      setInterval(function(){
        let path = that.$router.currentRoute.path;
        if(path === '/personal/orderDetail' || path === '/personal/return' || path === '/personal/receipt'){
          that.path = '/personal/order';
        }else{
          that.path = path;
        }
      },300)
    },
    methods: {
      selMenu(path){
        this.path = path;
        this.$router.push({path: path});
      }
    }
  };
</script>

<style scoped>
  .user-center > .pull-left {
    width: 230px;
    font-size: 14px;
  }
  .pull-left {
    float: left !important;
  }
  .bgf {
    background-color: #fff;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  a{
    cursor: pointer;
  }
  .user-center > .pull-left .title {
    color: #fff;
    height: 32px;
    display: block;
    line-height: 32px;
    padding-left: 20px;
    margin-bottom: 10px;
    text-decoration: none;
    background-color: #b31e22;
  }
  .user-center__nav {
    color: #666;
    margin-bottom: 10px;
  }
  dl {
    margin-top: 0;
    margin-bottom: 20px;
  }
  .user-center__nav dt {
    background-color: #f5f5f5;
  }

  .user-center__nav dt, .user-center__nav dd {
    line-height: 32px;
    padding-left: 20px;
  }
  dt {
    font-weight: bold;
  }
  .user-center__nav a {
    color: #666;
    text-decoration: none;
  }
  dd {
    margin-left: 0;
  }
  .user-center__nav a:hover dd {
    background-color: #e0e0e0;
  }
  .user-center__nav .active {
    color: #b31e22;
    padding-left: 16px;
    border-left: 4px solid #b31e22;
  }
</style>
