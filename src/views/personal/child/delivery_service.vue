<template>
  <div class="user-center">
    <div class="pull-right bgf">
      <div class="user-center__content">
        <div class="head-box">服务中心-配送服务</div>
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
        content:"<div class=\"html-code\">\n" +
          "<h3>配送方式：</h3>\n" +
          "<p style=\"text-indent: 2em\">我们在福州、厦门配送范围内，提供0起点免费配送服务。</p>\n" +
          "<h3>配送时间：</h3>\n" +
          "<p style=\"text-indent: 2em\">我们在当天晚上22点之前下的订单，次日9点—19点进行商品配送（您可以根据此时间选择收货地址）。同时，为方便您的收货，在送货前我们的配送人员会与您电话联系，再次确认您的收货时间和地址。</p>\n" +
          "<p style=\"text-indent: 2em\">杭州地区配送范围： (如对配送范围有疑问，请详询客服4007115050)</p>\n" +
          "<p style=\"text-indent: 2em\">浦沿站新增6个楼盘的配送范围：戈雅公寓、绿城西子郁金香岸、三江花园、江南摩卡、三江新村、中粮湘湖人家</p>\n" +
          "<p style=\"text-indent: 2em\">五常闲林的配送范围：西到东西大道，南到闲林中路，北到文一西路，详情请见配送地图</p>\n" +
          "</div>"
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
