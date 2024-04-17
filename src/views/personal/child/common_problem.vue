<template>
  <div class="user-center">
    <div class="pull-right bgf">
      <div class="user-center__content">
        <div class="head-box">服务中心-常见问题</div>
        <div class="html-code" v-html="content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content:"<h3>下单后可以修改订单吗？</h3>\n" +
          "<p style=\"text-indent: 2em\">由京东快递发货的自营（非自提）订单，在订单打印之前可以修改，打开“我的订单”，进入您想修改的“订单详情”页面，点击右上角的“修改订单”即可，若没有修改订单按钮，则表示订单无法修改。</p>\n" +
          "<p style=\"text-indent: 2em\">注：</p>\n" +
          "<ul style=\"text-indent: 2em\">\n" +
          "<li>1. 修改订单可能影响送货时间。</li>\n" +
          "<li>2. 修改时将以当前商品信息为准，修改时需要注意查看活动信息。</li>\n" +
          "<li>3. 由于订单生产速度快，可能出现修改不成功的情况。</li>\n" +
          "</ul>\n" +
          "<h3>您可以通过以下方法获取商品的到货时间：</h3>\n" +
          "<p style=\"text-indent: 2em\">1. 若商品页面中，显示“无货”时：商品具体的到货时间是无法确定的，您可以通过商品页面的“到货通知”功能获得商品到货提醒。（如下图）</p>\n" +
          "<img src=\""+(require("../../../../public/img/ud/54bf4433N10cc6963.png"))+"\" alt=\"\">"
      };
    },
    mounted() {
    },
    methods: {
    }
  };
</script>

<style >
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
  .user-center__content {
    padding: 10px 24px;
  }
  .user-center__content > .head-box {
    color: #666;
    line-height: 36px;
    border-bottom: 1px solid #e0e0e0;
  }
  .message-box > .html-code, .user-center__content > .html-code {
    margin: 0 -10px;
  }
  .html-code {
    padding: 10px;
    width: 100%;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
  }
  ol, ul {
    list-style: none;
  }
  h3, .h3 {
    font-size: 24px;
  }
  h1, .h1, h2, .h2, h3, .h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
  p {
    margin: 0 0 10px;
  }
</style>
