<template>
  <div class="user-center">
    <div class="pull-right bgf">
      <div class="user-center__content">
        <div class="head-box">服务中心-用户协议</div>
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
        content:"<h3>一、【定义】</h3>\n" +
          "<p style=\"text-indent: 2em\">1.1 本协议：指本协议正文、《腾讯服务协议》、《QQ号码规则》、游戏规则及其修订版本。上述内容一经正式发布，即为本协议不可分割的组成部分。本协议同时还包括文化部根据《网络游戏管理暂行办法》（文化部令第49号）制定的《网络游戏服务格式化协议必备条款》。</p>\n" +
          "<p style=\"text-indent: 2em\">1.2 游戏规则：指腾讯游戏服务提供方不时发布并修订的关于腾讯游戏的用户守则、玩家条例、游戏公告及通知等内容。</p>\n" +
          "<p style=\"text-indent: 2em\">1.3 腾讯游戏服务提供方：指向您提供腾讯游戏及其服务的深圳市腾讯计算机系统有限公司，在本协议中简称为“腾讯”。</p>\n" +
          "<p style=\"text-indent: 2em\">1.4 腾讯游戏：指由腾讯负责运营的游戏的统称，包括计算机客户端游戏、网页游戏、HTML5游戏（H5游戏）、移动终端游戏、电视端游戏以及其他形式的游戏；腾讯游戏可能以软件形式提供，这种情况下，腾讯游戏还包括该相关软件及相关文档。</p>\n" +
          "<p style=\"text-indent: 2em\">1.5 腾讯游戏服务：指腾讯向您提供的与游戏相关的各项在线运营服务。</p>\n" +
          "<p style=\"text-indent: 2em\">1.6 您：又称“玩家”或“用户”，指被授权使用腾讯游戏及其服务的自然人。</p>\n" +
          "<p style=\"text-indent: 2em\">1.7 游戏数据：指您在使用腾讯游戏过程中产生的被服务器记录的各种数据，包括游戏日志、安全日志等数据。</p>\n" +
          "<h3>二、【协议的变更和生效】</h3>\n" +
          "<p style=\"text-indent: 2em\">2.1 腾讯有权在必要时变更本协议条款，并在相关页面进行通知。您可以在腾讯游戏的相关页面查阅最新版本的协议条款。</p>\n" +
          "<p style=\"text-indent: 2em\">2.2 本协议条款变更后，如果您继续使用腾讯游戏服务，即视为您已接受变更后的协议。如果您不接受变更后的协议，应当停止使用腾讯游戏服务。</p>"
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
