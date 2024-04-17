<template>
  <div class="user-center">
    <div class="pull-right bgf">
      <div class="user-center__content">
        <div class="head-box">新手上路-代销商上架教程</div>
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
        content:"<h3>代销商上架教程？</h3>\n" +
          "<p>并不能在本站上架，自己开淘宝店上架吧，哈哈哈哈哈哈哈哈哈</p>"
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
