<template>
    <div class="user-center">
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">订单中心-确认收货</div>
          <div class="order-info__box">
            <div class="step-flow-box" style="width: 800px;margin: 0 auto 24px">
              <div class="step-flow__bd">
                <div class="step-flow__li step-flow__li_done">
                  <div class="step-flow__state"><i class="iconfont icon-ok"></i></div>
                  <p class="step-flow__title-top">拍下商品</p>
                </div>
                <div class="step-flow__line step-flow__li_done">
                  <div class="step-flow__process"></div>
                </div>
                <div class="step-flow__li step-flow__li_done">
                  <div class="step-flow__state"><i class="iconfont icon-ok"></i></div>
                  <p class="step-flow__title-top">付款</p>
                </div>
                <div class="step-flow__line step-flow__li_done">
                  <div class="step-flow__process"></div>
                </div>
                <div class="step-flow__li step-flow__li_done">
                  <div class="step-flow__state"><i class="iconfont icon-ok"></i></div>
                  <p class="step-flow__title-top">卖家发货</p>
                </div>
                <div class="step-flow__line step-flow__line_ing">
                  <div class="step-flow__process"></div>
                </div>
                <div class="step-flow__li">
                  <div class="step-flow__state"><i class="iconfont icon-ok"></i></div>
                  <p class="step-flow__title-top">买家确认收货</p>
                </div>
              </div>
            </div>
            <p class="fz18 cr">我已收到货，同意付款。</p>
            <div class="table-thead">
              <div class="tdf3">商品</div>
              <div class="tdf1">数量</div>
              <div class="tdf1">单价</div>
              <div class="tdf2">优惠</div>
              <div class="tdf1">总价</div>
              <div class="tdf1">运费</div>
            </div>
            <div class="order-item__list">
              <div class="item">
                <div class="tdf3">
                  <a><div class="img"><img :src="require('../../../../../public/img/ud/M-005.jpg')" alt="" class="cover"></div>
                    <div class="ep2 c6">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div></a>
                  <div class="attr ep">颜色分类：深棕色  尺码：均码</div>
                </div>
                <div class="tdf1">1</div>
                <div class="tdf1">¥22.0</div>
                <div class="tdf2">
                  <div class="ep2">活动8折优惠<br>优惠：¥4.0</div>
                </div>
                <div class="tdf1">¥18.0</div>
                <div class="tdf1">
                  <div class="ep2">快递<br>¥0.00</div>
                </div>
              </div>
              <div class="item">
                <div class="tdf3">
                  <a><div class="img"><img :src="require('../../../../../public/img/ud/M-005.jpg')" alt="" class="cover"></div>
                    <div class="ep2 c6">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div></a>
                  <div class="attr ep">颜色分类：深棕色  尺码：均码</div>
                </div>
                <div class="tdf1">2</div>
                <div class="tdf1">¥20.0</div>
                <div class="tdf2">
                  <div class="ep2">会员等级优惠<br>优惠：¥2.0</div>
                </div>
                <div class="tdf1">¥38.0</div>
                <div class="tdf1">
                  <div class="ep2">快递<br>¥0.00</div>
                </div>
              </div>
              <div class="item">
                <div class="tdf3">
                  <a><div class="img"><img :src="require('../../../../../public/img/ud/M-005.jpg')" alt="" class="cover"></div>
                    <div class="ep2 c6">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div></a>
                  <div class="attr ep">颜色分类：深棕色  尺码：均码</div>
                </div>
                <div class="tdf1">1</div>
                <div class="tdf1">¥20.0</div>
                <div class="tdf2">
                  无
                </div>
                <div class="tdf1">¥20.0</div>
                <div class="tdf1">
                  <div class="ep2">快递<br>¥0.00</div>
                </div>
              </div>
            </div>
            <div class="price-total">
              <div class="fz12 c9">使用优惠券【满￥20.0减￥2.0】优惠￥2.0元<br>快递运费 ￥0.0</div>
              <div class="fz18 c6">实付款：<b class="cr">¥76.0</b></div>
              <div class="fz12 c9">（本单可获 <span class="c6">380</span> 积分）</div>
            </div>
            <hr>
            <div class="order-info">
              订单编号：<span class="c6">121324165465465465</span><br>
              支付宝交易号：<span class="c6">165454564564165164654654</span><br>
              收货地址：<span class="c6">福建省 福州市 鼓楼区 温泉街道 温泉街道五四路159号世界金龙大厦20层B北 福州喵喵喵网络，林设计，187***8122</span><br>
              成交时间：<span class="c6">2017-09-07 16:03:07</span>
            </div>
            <div class="modify_div clearfix">
              <form action="" class="user-setting__form" role="form">
                <ul class="fz12 text-nowrap">
                  <li class="cr">◆ 请收到货后，再确认收货！否则我们可能无法为您保障权益！</li>
                  <li class="c6">◆ 如果您想申请退款，<a @click="returnPage">请点击这里</a></li>
                </ul>
                <div class="form-group">
                  <label form="pay-pwd" class="iptut-box-nick posr">
                    <span class="cr">支付密码：</span>
                    <input type="password" id="pay-pwd" maxlength="6">
                    <div class="iptut-fake-box">
                      <div class="pwd-digit active"></div>
                      <div class="pwd-digit active"></div>
                      <div class="pwd-digit current"></div>
                      <div class="pwd-digit"></div>
                      <div class="pwd-digit"></div>
                      <div class="pwd-digit"></div>
                    </div>
                    <p style="font-weight: normal">请输入6位数字支付密码 <a>忘记支付密码？</a></p>
                  </label>
                </div>
                <div class="form-group" style="line-height: 1em">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="but">确认已收货</button>
                  </div>
                </div>
              </form>
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
      };
    },
    mounted() {
    },
    methods: {
      returnPage(){//退货
        this.$router.push({path: '/personal/return'});
      },

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
  .order-info__box {
    margin-top: 30px;
    line-height: 30px;
  }
  .step-flow-box {
    padding: 40px 15px 20px;
  }
  .step-flow__bd {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .step-flow__li {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1;
  }
  .step-flow__li::before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #e2e2e2;
    border-radius: 16px;
    margin-top: -16px;
    margin-left: -16px;
  }
  .step-flow__li_done .step-flow__state, .step-flow__li_done .step-flow__process, .step-flow__line_ing .step-flow__process {
    background-color: #b31e22;
  }
  .step-flow__state {
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    border-radius: 12px;
    box-sizing: border-box;
    background-color: #e2e2e2;
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-ok:before {
    content: "\2714";
  }
  .step-flow__title-top {
    position: absolute;
    color: #666;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    bottom: 24px;
    left: 50%;
    -webkit-transform: translate(-50%,0);
    transform: translate(-50%,0);
  }
  p {
    margin: 0 0 10px;
  }
  .step-flow__line {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #e2e2e2;
    height: 10px;
    position: relative;
  }
  .step-flow__li_done .step-flow__state, .step-flow__li_done .step-flow__process, .step-flow__line_ing .step-flow__process {
    background-color: #b31e22;
  }
  .step-flow__process {
    position: absolute;
    height: 4px;
    width: 100%;
    top: 3px;
    z-index: 10;
    background-color: #e2e2e2;
  }
  .step-flow__line_ing .step-flow__process {
    width: 50%;
  }
  .step-flow__li_done .step-flow__state, .step-flow__li_done .step-flow__process, .step-flow__line_ing .step-flow__process {
    background-color: #b31e22;
  }
  .step-flow__process {
    position: absolute;
    height: 4px;
    width: 100%;
    top: 3px;
    z-index: 10;
    background-color: #e2e2e2;
  }
  .cr {
    color: #b31e22;
  }
  .fz18 {
    font-size: 18px;
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
  img {
    vertical-align: middle;
  }
  img {
    border: 0;
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
  .order-item__list .item > div {
    height: 90px;
    position: relative;
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
  .ep2 {
    -webkit-line-clamp: 2;
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
  .c9 {
    color: #999;
  }
  .fz12 {
    font-size: 12px;
  }
  .c6 {
    color: #666;
  }
  .modify_div {
    margin-top: 20px;
    padding: 20px 30px;
    border: 1px solid #e0e0e0;
  }
  .user-setting__form {
    color: #666;
    float: left;
    width: 300px;
    padding: 20px 10px;
  }
  .clearfix:after, .dl-horizontal dd:after, .container:after, .container-fluid:after, .row:after, .form-horizontal .form-group:after, .btn-toolbar:after, .btn-group-vertical>.btn-group:after, .panel-body:after, .modal-header:after, .modal-footer:after {
    clear: both;
  }
  .clearfix:before, .clearfix:after, .dl-horizontal dd:before, .dl-horizontal dd:after, .container:before, .container:after, .container-fluid:before, .container-fluid:after, .row:before, .row:after, .form-horizontal .form-group:before, .form-horizontal .form-group:after, .btn-toolbar:before, .btn-toolbar:after, .btn-group-vertical>.btn-group:before, .btn-group-vertical>.btn-group:after, .panel-body:before, .panel-body:after, .modal-header:before, .modal-header:after, .modal-footer:before, .modal-footer:after {
    content: " ";
    display: table;
  }
  .text-nowrap {
    white-space: nowrap;
  }
  .fz12 {
    font-size: 12px;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
  }
  ol, ul {
    list-style: none;
  }
  .cr {
    color: #b31e22;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  a {
    color: #97191d;
    text-decoration: none;
  }
  .user-setting__form .form-group {
    position: relative;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .posr {
    position: relative;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .iptut-box-nick input {
    font-size: 0;
    width: 0;
    height: 0;
    border: 0;
    -khtml-opacity: 0;
    -moz-opacity: 0;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .iptut-fake-box {
    font-size: 0;
    line-height: 24px;
    position: absolute;
    width: 200px;
    left: 70px;
    height: 24px;
    top: 4px;
  }
  .form-group .pwd-digit {
    margin-right: 5px;
    text-align: center;
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid #e0e0e0;
  }
  .user-setting__form .form-group {
    position: relative;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .modify_div .but {
    color: #fff;
    padding: 8px 24px;
    text-decoration: none;
    border: 1px solid #b31e22;
    background-color: #b31e22;
  }
  input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .form-group .pwd-digit.current::after {
    content: '';
    margin: auto;
    display: block;
    position: absolute;
    background-color: #999;
    width: 2px;height: 18px;
    left: 0;right: 0;bottom: 0;top: 0;
    animation: blink .75s linear infinite;
    -webkit-animation: blink .75s linear infinite;
    -moz-animation: blink .75s linear infinite;
    -ms-animation: blink .75s linear infinite;
    -o-animation: blink .75s linear infinite;
  }
  .form-group .pwd-digit.active::after {
    content: '';
    margin: auto;
    display: block;
    border-radius: 50%;
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  .order-item__list .item > .tdf2:after, .order-item__list .item > .tdf1:after {
    content: "";
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
</style>
