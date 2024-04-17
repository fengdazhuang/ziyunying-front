<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-center__info bgf" style="display: flex;">
        <div class="pull-left clearfix" style="display: flex;">
          <div class="port b-r50">
            <img :src="require('../../../../public/img/ud/default_avt.png')" alt="用户名" class="cover b-r50">
            <a class="edit"><i class="el-icon-edit-outline"></i></a>
          </div>
          <div>
            <p class="name text-nowrap">您好，18759808122！</p>
<!--            <p class="money text-nowrap">余额：¥88.0</p>-->
<!--            <p class="identity text-nowrap">普通消费者</p>-->
            <p class="level text-nowrap">身份：普通消费者 <a>提升</a></p>
          </div>
        </div>
        <div class="pull-right user-nav">
          <a class="user-nav__but">
            <i class="fz40 cr el-icon-money"></i>
            <div class="c6">待支付 <span class="cr">1</span></div>
          </a>
          <a class="user-nav__but">
            <i class="fz40 cr el-icon-chat-dot-round"></i>
            <div class="c6">待评价 <span class="c3">0</span></div>
          </a>
          <a class="user-nav__but">
            <i class="fz40 cr el-icon-star-off"></i>
            <div class="c6">收藏 <span class="c3">0</span></div>
          </a>

          <a class="user-nav__but">
            <i class="fz40 cr el-icon-bell"></i>
            <div class="c6">消息 <span class="cr">2</span></div>
          </a>
        </div>
      </div>

      <div class="order-list__div bgf">
        <div class="user-title">
          我的订单<span class="c6">（显示最新三条）</span>
          <a class="pull-right">查看所有订单&gt;</a>
        </div>
        <div class="order-panel">
          <ul class="nav user-nav__title" role="tablist">
            <li role="presentation" :class="'nav-item '+ (orderIndex === 0?'active':'')" @click="selOrder(0)"><a>所有订单</a></li>
            <li role="presentation" :class="'nav-item '+ (orderIndex === 1?'active':'')" @click="selOrder(1)"><a>待付款 <span class="cr">0</span></a></li>
            <li role="presentation" :class="'nav-item '+ (orderIndex === 2?'active':'')" @click="selOrder(2)"><a>待发货 <span class="cr">0</span></a></li>
            <li role="presentation" :class="'nav-item '+ (orderIndex === 3?'active':'')" @click="selOrder(3)"><a>待收货 <span class="cr">0</span></a></li>
            <li role="presentation" :class="'nav-item '+ (orderIndex === 4?'active':'')" @click="selOrder(4)"><a>待评价 <span class="cr">0</span></a></li>
          </ul>

          <div class="tab-content">
            <div role="tabpanel" :class="'tab-pane fade '+ (orderIndex === 0?'in active':'')" id="all">
              <table class="table text-center">
                <tbody><tr>
                  <th width="380">商品信息</th>
                  <th width="85">单价</th>
                  <th width="85">数量</th>
                  <th width="120">实付款</th>
                  <th width="120">交易状态</th>
                  <th width="120">交易操作</th>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                        <div class="format">颜色分类：深棕色  尺码：均码</div>
<!--                        <div class="favour">使用优惠券：优惠¥2.00</div>-->
                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>
                    ¥1000
                    <br>
                    <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                    <br>
                  </td>
                  <td class="state">
                    <a class="but c6">等待付款</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-primary">立即付款</a>
                    <!-- <a class="but but-link">评价</a> -->
                    <a class="but c3">取消订单</a>
                  </td>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                  <div class="format">颜色分类：深棕色  尺码：均码</div>

                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>¥1000<br><span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span></td>
                  <td class="state">
                    <a class="but c6">等待收货</a>
                    <a class="but cr">查看物流</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-primary">确认收货</a>
                    <!-- <a class="but but-link">评价</a> -->
                    <a class="but c3">退款/退货</a>
                  </td>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                        <div class="format">颜色分类：深棕色  尺码：均码</div>
                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>¥1000<br><span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span></td>
                  <td class="state">
                    <a class="but c6">交易成功</a>
                    <a class="but cr">查看物流</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-link">评价</a>
                    <a class="but c3">取消订单</a>
                  </td>
                </tr>
                </tbody></table>
            </div>
            <div role="tabpanel" :class="'tab-pane fade '+ (orderIndex === 1?'in active':'')" id="pay">
              <table class="table text-center">
                <tbody><tr>
                  <th width="380">商品信息</th>
                  <th width="85">单价</th>
                  <th width="85">数量</th>
                  <th width="120">实付款</th>
                  <th width="120">交易状态</th>
                  <th width="120">交易操作</th>
                </tr>
                <tr class="order-empty"><td colspan="6">
                  <div class="empty-msg">最近没有任何订单，家里好像缺了点什么！<br><a>要不瞧瞧去？</a></div>
                </td></tr>
                </tbody></table>
            </div>
            <div role="tabpanel" :class="'tab-pane fade '+ (orderIndex === 2?'in active':'')" id="emit">
              <table class="table text-center">
                <tbody><tr>
                  <th width="380">商品信息</th>
                  <th width="85">单价</th>
                  <th width="85">数量</th>
                  <th width="120">实付款</th>
                  <th width="120">交易状态</th>
                  <th width="120">交易操作</th>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                        <div class="format">颜色分类：深棕色  尺码：均码</div>
                        <div class="favour">使用优惠券：优惠¥2.00</div>
                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>
                    ¥1000
                    <br>
                    <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                    <br>
                    <span class="lease-tag">（租赁）</span>
                  </td>
                  <td class="state">
                    <a class="but c6">等待发货</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-primary">确认收货</a>
                    <a class="but c3">退款/退货</a>
                  </td>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                        <div class="format">颜色分类：深棕色  尺码：均码</div>
                        <div class="favour">使用优惠券：优惠¥2.00</div>
                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>
                    ¥1000
                    <br>
                    <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>
                    <br>
                    <span class="lease-tag">（租赁）</span>
                  </td>
                  <td class="state">
                    <a class="but c6">等待发货</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-primary">确认收货</a>
                    <a class="but c3">退款/退货</a>
                  </td>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                        <div class="format">颜色分类：深棕色  尺码：均码</div>
                        <div class="favour">使用优惠券：优惠¥2.00</div>
                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>¥1000<br><span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span></td>
                  <td class="state">
                    <a class="but c6">等待发货</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-primary">确认收货</a>
                    <a class="but c3">退款/退货</a>
                  </td>
                </tr>
                </tbody></table>
            </div>
            <div role="tabpanel" :class="'tab-pane fade '+ (orderIndex === 3?'in active':'')" id="take">
              <table class="table text-center">
                <tbody><tr>
                  <th width="380">商品信息</th>
                  <th width="85">单价</th>
                  <th width="85">数量</th>
                  <th width="120">实付款</th>
                  <th width="120">交易状态</th>
                  <th width="120">交易操作</th>
                </tr>
                <tr class="order-empty"><td colspan="6">
                  <div class="empty-msg">最近没有任何订单，家里好像缺了点什么！<br><a>要不瞧瞧去？</a></div>
                </td></tr>
                </tbody></table>
            </div>
            <div role="tabpanel" :class="'tab-pane fade '+ (orderIndex === 4?'in active':'')" id="eval">
              <table class="table text-center">
                <tbody><tr>
                  <th width="450">商品信息</th>
                  <th width="85">单价</th>
                  <th width="85">数量</th>
                  <th width="120">实付款</th>
                  <th width="120">交易状态</th>
                  <th width="120">交易操作</th>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                        <div class="format">颜色分类：深棕色  尺码：均码</div>
                        <div class="favour">使用优惠券：优惠¥2.00</div>
                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>¥1000<br><span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span></td>
                  <td class="state">
                    <a class="but c6">交易成功</a>
                    <a class="but cr">查看物流</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-link">评价</a>
                    <a class="but c3">取消订单</a>
                  </td>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                        <div class="format">颜色分类：深棕色  尺码：均码</div>
                        <div class="favour">使用优惠券：优惠¥2.00</div>
                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>¥1000<br><span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span></td>
                  <td class="state">
                    <a class="but c6">交易成功</a>
                    <a class="but cr">查看物流</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-link">评价</a>
                    <a class="but c3">取消订单</a>
                  </td>
                </tr>
                <tr class="order-item">
                  <td>
                    <label>
                      <div class="num">
                        <!-- <input type="checkbox"> -->
                        2017-03-30 订单号: 2669901385864042
                      </div>
                      <div class="card">
                        <div class="img"><img :src="require('../../../../public/img/ud/product/item-img_1.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤</div>
                        <div class="format">颜色分类：深棕色  尺码：均码</div>
                        <div class="favour">使用优惠券：优惠¥2.00</div>
                      </div>
                    </label>
                  </td>
                  <td>¥100</td>
                  <td>1</td>
                  <td>¥1000<br><span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span></td>
                  <td class="state">
                    <a class="but c6">交易成功</a>
                    <a class="but cr">查看物流</a>
                    <a class="but c9" @click="orderDetailPage">订单详情</a>
                  </td>
                  <td class="order">
                    <a class="but but-link">评价</a>
                    <a class="but c3">取消订单</a>
                  </td>
                </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderIndex: 0
      };
    },
    mounted() {
    },
    methods: {
      selOrder(index){//切换订单列表
        this.orderIndex = index;
      },
      orderDetailPage(){//订单详情
        this.$router.push({path: '/personal/orderDetail'});
      },
    }
  };
</script>

<style scoped>
  .user-center > .pull-right {
    width: 950px;
    font-size: 14px;
  }
  .pull-right {
    float: right !important;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  .user-center__info {
    height: 80px;
    padding: 20px;
  }
  .bgf {
    background-color: #fff;
  }
  .pull-left {
    float: left !important;
  }
  .user-center__info .port {
    width: 80px;
    height: 80px;
    padding: 2px;
    margin-right: 20px;
    position: relative;
    border: 1px solid #e0e0e0;
  }
  .pull-left {
    float: left !important;
  }
  .b-r50 {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .b-r50 {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .cover {
    object-fit: cover;
  }
  .cover, .contain {
    width: 100%;
    height: 100%;
    object-position: center;
  }
  img {
    vertical-align: middle;
  }
  img {
    border: 0;
  }
  .user-center__info .edit {
    line-height: 1;
    font-size: 20px;
    position: absolute;
    text-decoration: none;
    bottom: -4px;
    right: -8px;
  }
  a {
    color: #97191d;
    text-decoration: none;
  }
  a:hover, a:focus {
    color: #550e10;
    text-decoration: underline;
  }
  .text-nowrap {
    white-space: nowrap;
  }
  p {
    margin: 0 0 10px;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  .user-nav {
    width: 650px;
    height: 80px;
    padding: 0 24px;
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    border-left: 1px solid #d0d0d0;
  }
  .pull-right {
    float: right !important;
  }
  .user-nav__but {
    width: 90px;
    font-size: 12px;
    text-align: center;
    text-decoration: none !important;
  }
  .cr {
    color: #b31e22;
  }
  .fz40 {
    font-size: 40px;
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .c6 {
    color: #666;
  }
  .cr {
    color: #b31e22;
  }
  .c3 {
    color: #333;
  }
  .order-list__div {
    margin-top: 20px;
  }
  .bgf {
    background-color: #fff;
  }
  .user-title {
    height: 16px;
    line-height: 16px;
    padding: 12px 24px;
    background-color: #ebebeb;
  }
  .user-title a {
    text-decoration: none;
    color: #666;
  }
  .order-panel {
    padding: 10px 20px;
  }
  .user-nav__title {
    height: 20px;
    padding: 10px 0;
    margin-bottom: 0;
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid #e0e0e0;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
  }
  ol, ul {
    list-style: none;
  }
  .nav-item {
    color: #333;
    padding: 0 20px;
    line-height: 20px;
    position: relative;
  }
  .nav-item.active a, .nav-item:hover a {
    color: #b31e22;
    cursor: pointer;
  }
  .user-nav__title a {
    text-decoration: none;
    color: #333;
  }
  .nav-item.active::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -11px;
    border-bottom: 2px solid #b31e22;
  }
  .nav-item.active a, .nav-item:hover a {
    color: #b31e22;
  }
  .nav-item + .nav-item::before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: #d3d3d3;
    position: absolute;
    left: 0;
  }

  .tab-content > .tab-pane.active {
    display: block;
  }
  .tab-content > .tab-pane {
    display: none;
  }
  .fade.in {
    opacity: 1;
  }
  .fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
  }
  .order-panel .table {
    border-top: 2px solid #fff;
    margin-bottom: 0;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .text-center {
    text-align: center;
  }
  table {
    background-color: transparent;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  .text-center th {
    text-align: center;
  }
  .order-item {
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .table .order-item > td:first-child {
    height: 140px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .table .order-item > td {
    padding-top: 50px;
  }
  .order-panel td:first-child {
    text-align: left;
  }
  .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  label {
    position: relative;
  }
  .order-item .num {
    color: #666;
    line-height: 30px;
    text-decoration: none;
  }
  .order-item .card {
    height: 80px;
    position: relative;
    font-weight: normal;
  }
  .order-item .card .img {
    float: left;
    margin-right: 10px;
    width: 80px;
    height: 80px;
    border: 1px solid #999;
  }
  .cover {
    object-fit: cover;
  }
  .cover, .contain {
    width: 100%;
    height: 100%;
    object-position: center;
  }
  .order-item .card .name {
    height: 2.8em;
    line-height: 1.4em;
  }
  .ep2 {
    -webkit-line-clamp: 2;
  }
  .ep2, .ep3, .ep4, .ep5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .order-item .card .format, .order-item .card .favour {
    color: #999;
    font-size: 12px;
    line-height: 1em;
    position: absolute;
    bottom: 16px;
    left: 90px;
  }
  .order-item .card .favour {
    bottom: 0;
    color: #b31e22;
  }
  .order-item .order {
    position: relative;
  }
  .order-item .but.c6 {
    color: #666;
  }
  .order-item .but {
    display: block;
    text-decoration: none;
  }
  .order-item .but.c9 {
    color: #999;
  }
  .order-item .but {
    display: block;
    text-decoration: none;
  }
  .order-item .order .but-primary {
    color: #fff;
    border: 1px solid #b31e22;
    background-color: #b31e22;
  }
  .order-item .order .but {
    width: 80px;
    height: 24px;
    margin: auto;
    line-height: 22px;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  .order-item .but {
    display: block;
    text-decoration: none;
  }
  .order-item .order .but {
    width: 80px;
    height: 24px;
    margin: auto;
    line-height: 22px;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  .order-item .but.c3 {
    color: #333;
  }
  .order-item .but {
    display: block;
    text-decoration: none;
  }
  .order-item .order .but-primary:hover {
    border: 1px solid #931519;
    background-color: #931519;
  }
  .order-item:hover {
    border-radius: 3px;
    -webkit-box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
    -moz-box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
  }

  .order-empty .empty-msg, .coupon-list .empty-msg {
    height: 70px;
    width: 400px;
    margin: auto;
    line-height: 36px;
    padding: 40px 0 30px 120px;
    background-image: url("../../../../public/img/ud/order-empty.gif");
    background-repeat: no-repeat;
    -webkit-background-size: 100px;
    background-size: 100px;
    background-position: center left;
  }
  a{
    cursor: pointer;
  }
  .order-item .order .but-link {
    color: #666;
    border: 1px solid #bfbfbf;
  }
  .order-item .order .but-link:hover {
    background-color: #efefef;
  }
  .order-item .order .but.c3:hover {
    color: #666;
  }
</style>
