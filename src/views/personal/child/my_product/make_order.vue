<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">订单中心-退款/退货</div>
        <div class="order-list__box bgf">
          <div class="order-panel">
            <ul class="nav user-nav__title" role="tablist">
              <li role="presentation" :class="'nav-item '+(tabIndex===1?'active':'')" @click="selTab(1)"><a>所有订单</a></li>
              <li role="presentation" :class="'nav-item '+(tabIndex===2?'active':'')" @click="selTab(2)"><a>退款 <span class="cr">0</span></a></li>
              <li role="presentation" :class="'nav-item '+(tabIndex===3?'active':'')" @click="selTab(3)"><a>退货 <span class="cr">0</span></a></li>
            </ul>
            <div class="tab-content">
              <div :class="'tab-pane fade '+(tabIndex===1?'in active':'')" id="all">
                <table class="table table-hover table-striped text-center">
                  <tbody><tr>
                    <th width="170">申请单号</th>
                    <th width="170">原订单号</th>
                    <th width="170">商品名称</th>
                    <th width="105">申请时间</th>
                    <th width="105">应退金额</th>
                    <th width="90">订单状态</th>
                    <th width="90">操作</th>
                  </tr>
                  <tr>
                    <td>2669901385864042</td>
                    <td>2669901385864042</td>
                    <td class="text-left">
                      <div class="name ep" style="width: 180px">纯色圆领短袖T恤活动衫弹</div>
                      <div class="c9 ep">颜色分类：深棕色  尺码：均码</div>
                    </td>
                    <td>2017-03-30</td>
                    <td>¥18.0</td>
                    <td class="refund-state">已退货<br><a>联系客服</a></td>
                    <td class="refund-state"><a>完成</a></td>
                  </tr>

                  <tr>
                    <td>2669901385864042</td>
                    <td>2669901385864042</td>
                    <td class="text-left">
                      <div class="name ep" style="width: 180px">纯色圆领短袖T恤活动衫弹</div>
                      <div class="c9 ep">颜色分类：深棕色  尺码：均码</div>
                    </td>
                    <td>2017-03-30</td
                    ><td>¥18.0</td>
                    <td class="refund-state">已退款<br><a>联系客服</a></td>
                    <td class="refund-state"><a>完成</a></td>
                  </tr>

                  <tr v-for="i in 5" :key="i">
                    <td>2669901385864042</td>
                    <td>2669901385864042</td>
                    <td class="text-left">
                      <div class="name ep" style="width: 180px">纯色圆领短袖T恤活动衫弹</div>
                      <div class="c9 ep">颜色分类：深棕色  尺码：均码</div>
                    </td>
                    <td>2017-03-30</td>
                    <td>¥18.0</td>
                    <td class="refund-state">退款中<br><a>联系客服</a></td>
                    <td class="refund-state"><a>取消退款</a></td>
                  </tr>
                  </tbody>
                </table>
                <div class="page text-right clearfix" style="margin-top: 40px">
                  <a class="disabled">上一页</a>
                  <a class="select">1</a>
                  <a>2</a>
                  <a>3</a>
                  <a class="">下一页</a>
                </div>
              </div>

              <div :class="'tab-pane fade '+(tabIndex===2 || tabIndex===3?'in active':'')" id="money">
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
                    <div class="empty-msg">最近没有退款订单！</div>
                  </td></tr>
                  </tbody></table>
              </div>

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
        tabIndex: 1,
      };
    },
    mounted() {
    },
    methods: {
      selTab(index){
        this.tabIndex = index;
      }
    }
  };
</script>

<style scoped>
  .user-center > .pull-right {
    width: 950px;
    background-color: #fff;
    font-size: 14px;
  }
  .pull-right {
    float: right !important;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  .user-content__box {
    padding: 10px 24px;
  }
  .bgf {
    background-color: #fff;
  }
  .user-content__box .title {
    color: #666;
    line-height: 36px;
    border-bottom: 1px solid #e0e0e0;
  }
  .order-list__box {
    margin-left: -20px;
    margin-right: -20px;
  }
  .order-panel {
    padding: 10px 20px;
  }
  .user-nav__title {
    line-height: 40px;
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
  .table-striped>tbody>tr:nth-of-type(odd) {
    background-color: #f9f9f9;
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
  .order-panel td:first-child {
    text-align: left;
  }
  .text-left {
    text-align: left;
  }
  .ep {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .c9 {
    color: #999;
  }
  .ep {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .refund-state a {
    color: #999;
    text-decoration: none;
  }

  .text-right {
    text-align: right;
  }
  .page a.disabled {
    color: #999;
    border-color: #ccc;
  }
  .page a {
    color: #666;
    padding: 10px 15px;
    margin: 5px;
    line-height: 1em;
    border: 1px solid #999;
    display: inline-block;
    text-decoration: none;
  }
  .page a.select {
    color: #fff;
    border-color: #b31e22;
    background-color: #b31e22;
  }
  .page a {
    color: #666;
    padding: 10px 15px;
    margin: 5px;
    line-height: 1em;
    border: 1px solid #999;
    display: inline-block;
    text-decoration: none;
  }

  .order-empty .empty-msg {
    padding-top: 130px;
    text-align: center;
    background-position: center;
    width: 400px;
    margin: auto;
    line-height: 36px;
    background-image: url("../../../../../public/img/ud/order-empty.gif");
    background-repeat: no-repeat;
    background-size: 100px;
  }
  .refund-state a:hover {
    color: #b31e22;
  }
</style>
