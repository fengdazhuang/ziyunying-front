<template>
    <div class="user-center">
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">订单中心-订单{{ order.orderId }}</div>
          <div class="order-info__box">
            <div class="order-addr">收货地址：<span class="c6">{{ address.receiverName }}，{{ address.receiverPhone }}，
              {{ address.province }}{{address.city}}{{address.county}}{{address.detailedAddr}}</span></div>
            <div class="order-info">
              订单信息
              <table>
                <tbody><tr>
                  <td>订单编号：{{ order.orderId }}</td>
                  <td>{{ order.payType===0?'微信':'支付宝' }}交易号：{{ order.payId }}</td>
                  <td>创建时间：{{ order.createdTime }}</td>
                </tr>
                <tr>
                  <td>付款时间：{{ order.payTime }}</td>
                  <td>成交时间：{{ order.finishTime }}</td>
                  <td></td>
                </tr>
                </tbody></table>
            </div>
            <div class="table-thead">
              <div class="tdf3">商品</div>
<!--              <div class="tdf1">类别</div>-->
              <div class="tdf1">状态</div>
              <div class="tdf1">数量</div>
              <div class="tdf1">单价</div>
<!--              <div class="tdf2">规格</div>-->
              <div class="tdf1">总价</div>

            </div>
            <div v-for="item in orderItems" class="order-item__list">
              <div class="item">
                <div class="tdf3">
                  <a>
                    <div class="img"><img :src="require('../../../../../public/img/ud/M-001.jpg')" alt="" class="cover"></div>
                    <div class="ep2 c6">{{item.productName}}</div></a>
                  <div class="attr ep">分类：{{  }}  尺码：均码</div>
                </div>
                <div class="tdf1" v-if="item.isComment===0"><a>待评价</a><!-- 已确认收货 --></div>
                <div class="tdf1" v-if="item.isComment===1"><a>已评价</a><!-- 已确认收货 --></div>
                <div class="tdf1">{{item.buyCounts}}</div>
                <div class="tdf1">¥{{ item.productPrice }}</div>
<!--                <div class="tdf2">-->
<!--                  <div class="ep2">活动8折优惠<br>优惠：¥4.0</div>-->
<!--                </div>-->
                <div class="tdf1">¥{{ item.totalAmount }}</div>
<!--                <div class="tdf1">-->
<!--                  <div class="ep2">快递<br>¥0.00</div>-->
<!--                </div>-->
              </div>
<!--              <div class="item">-->
<!--                <div class="tdf3">-->
<!--                  <a>-->
<!--                    <div class="img"><img :src="require('../../../../../public/img/ud/M-001.jpg')" alt="" class="cover"></div>-->
<!--                    <div class="ep2 c6">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div></a>-->
<!--                  <div class="attr ep">颜色分类：深棕色  尺码：均码</div>-->
<!--                </div>-->
<!--                <div class="tdf1"><a>待评价</a></div>-->
<!--                <div class="tdf1">2</div>-->
<!--                <div class="tdf1">¥20.0</div>-->
<!--                <div class="tdf2">-->
<!--                  <div class="ep2">会员等级优惠<br>优惠：¥2.0</div>-->
<!--                </div>-->
<!--                <div class="tdf1">¥38.0</div>-->
<!--                <div class="tdf1">-->
<!--                  <div class="ep2">快递<br>¥0.00</div>-->
<!--                </div>-->
<!--              </div>-->


          </div>
            <div class="price-total">
              <!--              <div class="fz12 c9">使用优惠券【满￥20.0减￥2.0】优惠￥2.0元<br>快递运费 ￥0.0</div>-->
              <div class="fz18 c6">总付款：<b class="cr">{{order.totalPrice}}</b></div>
<!--              <div class="fz12 c9">（本单可获 <span class="c6">380</span> 积分）</div>-->
            </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import {getAddressById, getOrderDetail, getOrderItems} from "../../../../api/user";

  export default {
    data() {
      return {
        order:{},
        address:{},
        orderItems:[]
      };
    },
    mounted() {
      var orderId=this.$route.query.orderId
      this.getOrderDetail(orderId);
    },
    methods: {
      getOrderDetail(orderId){
        getOrderDetail(orderId).then((res)=>{
          if(res.status===200){
            this.order=res.data;
            var addressId=res.data.addressId;
            getAddressById(addressId).then((res)=> {
              if (res.status === 200) {
                this.address=res.data

              }
            });

          }
        }),
          getOrderItems(orderId).then((res)=>{
            if(res.status===200){
              this.orderItems=res.data;
            }
          })
      },
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
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
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
  .order-info__box {
    margin-top: 30px;
    line-height: 30px;
  }
  .c6 {
    color: #666;
  }
  .order-info table {
    color: #666;
    width: 880px;
    margin-left: 22px;
  }
  table {
    background-color: transparent;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td, th {
    padding: 0;
  }
  .order-info__box .table-thead {
    margin-bottom: 0;
  }
  .table-thead {
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    color: #666;
    height: 30px;
    line-height: 28px;
    margin: 20px auto;
    background-color: #f1f1f1;
    border: 1px solid #e0e0e0;
  }
  .tdf3 {
    flex: 3;
  }
  .tdf1, .tdf2, .tdf3 {
    text-align: center;
    align-self: center;
  }
  .tdf1 {
    flex: 1;
  }
  .tdf2 {
    flex: 2;
  }
  .order-item__list .item {
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    border: 1px solid #e0e0e0;
    border-top: 0;
  }
  .order-item__list .item > .tdf3 {
    padding: 4px;
  }
  .order-item__list .item > div {
    height: 90px;
    position: relative;
  }
  .tdf3 {
    flex: 3;
  }
  .order-item__list .item > div + div {
    border-left: 1px solid #e0e0e0;
  }
  .tdf1 {
    flex: 1;
  }
  .order-item__list .item a {
    text-decoration: none;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  a {
    color: #97191d;
    text-decoration: none;
  }
  .order-item__list .item .img {
    float: left;
    width: 82px;
    height: 82px;
    margin-right: 8px;
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
  .order-item__list .tdf3 .ep2 {
    height: 2.8em;
    line-height: 1.4;
    text-align: left;
  }
  .c6 {
    color: #666;
  }
  .ep2 {
    -webkit-line-clamp: 2;
  }
  .ep2, .ep3, .ep4, .ep5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .order-item__list .item .attr {
    color: #999;
    width: 175px;
    font-size: 12px;
    text-align: left;
    position: absolute;
    bottom: 0;
    left: 95px;
  }
  .ep {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .order-item__list .item > div + div {
    border-left: 1px solid #e0e0e0;
  }
  .order-item__list .item > .tdf2:after, .order-item__list .item > .tdf1:after {
    content: "";
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .order-item__list .tdf1 .ep2, .order-item__list .tdf2 .ep2 {
    height: 3em;
    margin-top: -1.5em;
    position: absolute;
    line-height: 1.5em;
    top: 50%;
    left: 0;
    right: 0;
  }
  .price-total {
    margin-top: 20px;
    line-height: 20px;
    text-align: right;
    margin-bottom: 10px;
  }
  .c9 {
    color: #999;
  }
  .fz12 {
    font-size: 12px;
  }
  .c6 {
    color: #666;
  }
  .fz18 {
    font-size: 18px;
  }
  .cr {
    color: #b31e22;
  }
  a:hover, a:focus {
    color: #550e10;
    text-decoration: underline;
  }
</style>
