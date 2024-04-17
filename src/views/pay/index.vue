<template>
  <div>
    <section class="user-center inner clearfix">
      <div class="user-content__box clearfix bgf">
        <div class="title">购物车-确认支付 </div>
        <div class="shop-title">收货地址</div>
        <form class="shopcart-form__box">
          <div class="addr-radio">
            <div :class="'radio-line radio-box '+(radio1 === '1'?'active':'') " @click="selAddr('1')">
              <label class="radio-label ep" title="福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （喵喵喵 收） 153****9999">
                <el-radio v-model="radio1" label="1">&nbsp;</el-radio>
                福建省 福州市 鼓楼区 温泉街道
                五四路159号世界金龙大厦20层B北 福州rpg.blue网络
                （喵喵喵 收） 153****9999
              </label>
              <a class="default">默认地址</a>
              <a class="edit" @click="editAddr">修改</a>
            </div>
            <div :class="'radio-line radio-box '+(radio1 === '2'?'active':'') " @click="selAddr('2')">
              <label class="radio-label ep" title="福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （taroxd 收） 153****9999">
                <el-radio v-model="radio1" label="2">&nbsp;</el-radio>
                福建省 福州市 鼓楼区 温泉街道
                五四路159号世界金龙大厦20层B北 福州rpg.blue网络
                （taroxd 收） 153****9999
              </label>
              <a class="default">设为默认地址</a>
              <a class="edit" @click="editAddr">修改</a>
            </div>
            <div :class="'radio-line radio-box '+(radio1 === '3'?'active':'') " @click="selAddr('3')">
              <label class="radio-label ep" title="福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （喵污喵⑤ 收） 153****9999">
                <el-radio v-model="radio1" label="3">&nbsp;</el-radio>
                福建省 福州市 鼓楼区 温泉街道
                五四路159号世界金龙大厦20层B北 福州rpg.blue网络
                （喵污喵⑤ 收） 153****9999
              </label>
              <a class="default">设为默认地址</a>
              <a class="edit" @click="editAddr">修改</a>
            </div>
            <div :class="'radio-line radio-box '+(radio1 === '4'?'active':'') " @click="selAddr('4')">
              <label class="radio-label ep" title="福建省 福州市 鼓楼区 温泉街道 五四路159号世界金龙大厦20层B北 福州rpg.blue网络 （浴巾打码女 收） 153****9999">
                <el-radio v-model="radio1" label="4">&nbsp;</el-radio>
                福建省 福州市 鼓楼区 温泉街道
                五四路159号世界金龙大厦20层B北 福州rpg.blue网络
                （浴巾打码女 收） 153****9999
              </label>
              <a class="default">设为默认地址</a>
              <a class="edit" @click="editAddr">修改</a>
            </div>
          </div>
          <div class="add_addr">
            <a @click="editAddr">添加新地址</a>
          </div>
          <div class="shop-title">确认订单</div>

          <div class="shop-order__detail">
            <table class="table">
              <thead>
              <tr>
                <th width="120"></th>
                <th width="300">商品信息</th>
                <th width="150">单价</th>
                <th width="200">数量</th>
                <th width="200">运费</th>
                <th width="80">总价</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row"><a @click="detailPage"><div class="img"><img :src="require('../../../public/img/ud/M-003.jpg')" alt="" class="cover"></div></a></th>
                <td>
                  <div class="name ep3">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                  <div class="type c9">颜色分类：深棕色  尺码：均码</div>
                </td>
                <td>¥20.0</td>
                <td>1</td>
                <td>¥0.0</td>
                <td>¥20.0</td>
              </tr>
              <tr>
                <th scope="row"><a @click="detailPage"><div class="img"><img :src="require('../../../public/img/ud/M-003.jpg')" alt="" class="cover"></div></a></th>
                <td>
                  <div class="name ep3">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                  <div class="type c9">颜色分类：深棕色  尺码：均码</div>
                </td>
                <td>¥20.0</td>
                <td>2</td>
                <td>¥0.0</td>
                <td>¥40.0</td>
              </tr>
              <tr>
                <th scope="row"><a @click="detailPage"><div class="img"><img :src="require('../../../public/img/ud/M-003.jpg')" alt="" class="cover"></div></a></th>
                <td>
                  <div class="name ep3">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                  <div class="type c9">颜色分类：深棕色  尺码：均码</div>
                </td>
                <td>¥20.0</td>
                <td>1</td>
                <td>¥0.0</td>
                <td>¥20.0</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div class="shop-cart__info" style="height: 160px;">
            <div class="pull-left text-left">
              <div class="info-line text-nowrap">购买时间：<span class="c6">2017年09月14日 17:31:05</span></div>
              <div class="info-line text-nowrap">交易类型：<span class="c6">担保交易</span></div>
              <div class="info-line text-nowrap">交易号：<span class="c6">1001001830267490496</span></div>
            </div>
            <div class="pull-right text-right">
              <div class="form-group">
                <label class="control-label">优惠券使用：</label>
                <select id="coupon">
                  <option value="-1" selected="">- 请选择可使用的优惠券 -</option>
                  <option value="1">【满￥20.0元减￥2.0】</option>
                  <option value="2">【满￥30.0元减￥2.0】</option>
                  <option value="3">【满￥25.0元减￥1.0】</option>
                  <option value="4">【满￥10.0元减￥1.5】</option>
                  <option value="5">【满￥15.0元减￥1.5】</option>
                  <option value="6">【满￥20.0元减￥1.0】</option>
                </select>
              </div>
              <div class="info-line">优惠活动：<span class="c6">无</span></div>
              <div class="info-line">运费：<span class="c6">¥0.00</span></div>
              <div class="info-line"><span class="favour-value">已优惠 ¥2.0</span>合计：<b class="fz18 cr">¥18.0</b></div>
              <div class="info-line fz12 c9">（可获 <span class="c6">20</span> 积分）</div>
            </div>
          </div>

          <div class="shop-title">确认订单</div>
          <div class="pay-mode__box">
            <div :class="'radio-line radio-box '+(radio2 === '1'?'active':'') " @click="selPayMethod('1')">
              <label class="radio-label ep">
                <el-radio v-model="radio2" label="1">&nbsp;</el-radio>
                <span class="fz16">余额支付</span><span class="fz14">（可用余额：¥88.0）</span>
              </label>
              <div class="pay-value">支付<b class="fz16 cr">18.00</b>元</div>
            </div>
            <div :class="'radio-line radio-box '+(radio2 === '2'?'active':'') " @click="selPayMethod('2')">
              <label class="radio-label ep">
                <el-radio v-model="radio2" label="2">&nbsp;</el-radio>
                <img :src="require('../../../public/img/ud/alipay.png')" alt="支付宝支付">
              </label>
              <div class="pay-value">支付<b class="fz16 cr">18.00</b>元</div>
            </div>
            <div :class="'radio-line radio-box '+(radio2 === '3'?'active':'') " @click="selPayMethod('3')">
              <label class="radio-label ep">
                <el-radio v-model="radio2" label="3">&nbsp;</el-radio>
                <img :src="require('../../../public/img/ud/paywechat.png')" alt="微信支付">
              </label>
              <div class="pay-value">支付<b class="fz16 cr">18.00</b>元</div>
            </div>
          </div>
        </form>
        <div class="user-form-group shopcart-submit">
          <button class="btn">继续支付</button>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        radio1: '1',
        radio2: '1'
      };
    },
    mounted() {
    },
    methods: {
      selAddr(index){//切换地址
        this.radio1 = index;
      },
      editAddr(){//编辑地址
        this.$router.push({path: '/personal/address'});
      },
      detailPage(){//商品详情
        this.$router.push({path: '/product/detail'});
      },
      selPayMethod(index){//切换支付方式
        this.radio2 = index;
      },
    }
  };
</script>

<style scoped>
  .user-center {
    margin: 35px auto;
    font-size: 14px;
  }

  .inner {
    width: 1200px;
    margin: 0 auto;
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
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  .shop-title {
    color: #fff;
    margin-top: 20px;
    line-height: 20px;
    padding: 5px 30px;
    display: inline-block;
    background-color: #b31e22;
  }
  .shopcart-form__box {
    width: 100%;
    padding: 20px 0;
  }
  .addr-radio .radio-line.active {
    border: 1px solid #b31e22;
  }
  .addr-radio .radio-line.active .radio-label {
    height: 38px;
    font-size: 16px;
    line-height: 38px;
  }
  .addr-radio .radio-line .radio-label {
    width: 800px;
  }
  .shopcart-form__box label {
    margin-bottom: 0;
  }
  .ep {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .radio-label {
    font-weight: normal;
  }
  .addr-radio .radio-line {
    line-height: 24px;
    padding-left: 80px;
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    position: relative;
    border: 1px solid transparent;
  }
  .addr-radio .radio-line.active::before {
    left: 20px;
    color: #b31e22;
    font-size: 16px;
    content: '寄送至';
    line-height: 38px;
    position: absolute;
  }
  .addr-radio .radio-line.active .radio-label {
    height: 38px;
    font-size: 16px;
    line-height: 38px;
  }
  .addr-radio .radio-line .radio-label {
    width: 800px;
  }
  .shopcart-form__box label {
    margin-bottom: 0;
  }
  .radio-label {
    font-weight: normal;
  }
  .radio-label input[type="radio"] {
    display: none;
  }
  input[type="radio"], input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal;
  }
  .addr-radio .radio-line.active .iconfont {
    font-size: 14px;
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .radio-label input[type="radio"]:checked + .iconfont::before {
    content: "\e67b";
  }
  .icon-radio:before {
    content: "\e652";
  }
  .addr-radio .radio-line.active .default, .addr-radio .radio-line.active .edit {
    visibility: visible;
    line-height: 38px;
  }
  .addr-radio .radio-line .default {
    width: 160px;
    font-size: 14px;
    text-align: center;
    visibility: hidden;
  }
  .shopcart-form__box a {
    color: #666;
    text-decoration: none;
  }
  .addr-radio .radio-line.active .default, .addr-radio .radio-line.active .edit {
    visibility: visible;
    line-height: 38px;
  }
  .addr-radio .radio-line .edit {
    width: 60px;
    color: #b31e22;
    font-size: 14px;
    text-align: center;
    visibility: hidden;
  }
  .shopcart-form__box a {
    color: #666;
    text-decoration: none;
  }
  .shopcart-form__box a:hover {
    color: #b31e22;
  }

  .shopcart-form__box .add_addr {
    display: block;
    line-height: 40px;
    padding-left: 80px;
  }
  .shopcart-form__box .add_addr a {
    color: #b31e22;
  }
  .shopcart-form__box a {
    color: #666;
    text-decoration: none;
  }

  .shop-order__detail .table {
    margin-top: 10px;
    border: 1px solid #ddd;
  }

  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  table {
    background-color: transparent;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>th, .table>caption+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>td, .table>thead:first-child>tr:first-child>td {
    border-top: 0;
  }
  .table>thead>tr>th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }
  .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  th {
    text-align: left;
  }
  .shopcart-form__box a {
    color: #666;
    text-decoration: none;
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
  .shopcart-form__box .name {
    height: 4.5em;
    line-height: 1.5em;
  }
  .ep3 {
    -webkit-line-clamp: 3;
  }
  .ep2, .ep3, .ep4, .ep5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .shopcart-form__box .type {
    margin-top: 30px;
  }
  .c9 {
    color: #999;
  }

  .pull-left {
    float: left !important;
  }
  .text-left {
    text-align: left;
  }
  .shop-cart__info .info-line {
    line-height: 1.8;
  }
  .text-nowrap {
    white-space: nowrap;
  }
  .c6 {
    color: #666;
  }
  .shop-cart__info .info-line {
    line-height: 1.8;
  }
  .text-nowrap {
    white-space: nowrap;
  }
  .c6 {
    color: #666;
  }
  .shop-cart__info .info-line {
    line-height: 1.8;
  }
  .text-nowrap {
    white-space: nowrap;
  }
  .pull-right {
    float: right !important;
  }
  .text-right {
    text-align: right;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .shopcart-form__box label {
    margin-bottom: 0;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .form-group select {
    display: inline-block;
    min-width: 140px;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding-right: 30px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05MzIuODEyIDE2NC4zOWM1LjQwMiAwIDEwLjY0IDIuODYzIDEzLjQ0IDcuOTI0YTE1LjMzOSAxNS4zMzkgMCAwIDEtLjQyNiAxNS41OTVMNTIyLjkzIDg2Mi40OTNhMTUuMzM0IDE1LjMzNCAwIDAgMS0xMy4wMTQgNy4yIDE1LjMzOCAxNS4zMzggMCAwIDEtMTMuMDE0LTcuMkw3NC4wMDUgMTg3LjkxYTE1LjM0NiAxNS4zNDYgMCAwIDEtLjQyNi0xNS41OTUgMTUuMzQ1IDE1LjM0NSAwIDAgMSAxMy40NC03LjkyM2g4NDUuNzkzeiIgZmlsbD0iIzY2NiIvPjwvc3ZnPg==);
    background-repeat: no-repeat;
    -webkit-background-size: 16px;
    background-size: 16px;
    background-position: center right 8px;
  }
  .shop-cart__info option {
    text-align: center;
  }
  .shop-cart__info .info-line {
    line-height: 1.8;
  }
  .shop-cart__info .info-line {
    line-height: 1.8;
  }
  .favour-value {
    color: #999;
    margin-right: 2em;
  }
  .cr {
    color: #b31e22;
  }
  .fz18 {
    font-size: 18px;
  }
  .shop-cart__info .info-line {
    line-height: 1.8;
  }
  .c9 {
    color: #999;
  }
  .fz12 {
    font-size: 12px;
  }

  .pay-mode__box {
    padding: 18px;
    margin-top: 10px;
    border: 2px solid #b31e22;
  }
  .pay-mode__box .radio-line {
    height: 40px;
    padding: 0 15px;
    margin: 5px auto;
    line-height: 38px;
    border: 1px solid transparent;
    border-bottom: 1px solid #ccc;
  }
  .fz16 {
    font-size: 16px;
  }
  .fz14 {
    font-size: 14px;
  }
  .pay-mode__box .radio-line.active .pay-value {
    display: block;
  }
  .pay-mode__box .pay-value {
    float: right;
    display: none;
  }
  .pay-mode__box .radio-line.active {
    border: 1px solid #b31e22;
  }
  .shopcart-submit {
    z-index: 100;
    position: relative;
    height: 50px;
  }
  .user-form-group {
    padding-top: 5px;
  }
  .shopcart-submit .btn {
    width: 120px;
    float: right;
    margin: 10px 0;
  }
  .user-form-group .btn {
    color: #fff;
    background-color: #b31e22;
  }
  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
