<template>
  <div class="user-center">
    <div class="pull-right bgf">
      <div class="user-center__content">
        <div class="head-box">服务中心-数据自助下载</div>
        <div>数据自助下载</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "download"
    }
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
  .user-center__content {
    padding: 10px 24px;
  }
</style>
