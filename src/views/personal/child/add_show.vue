<template>
  <div class="user-center">
    <div class="pull-right bgf">
      <div class="user-center__content">
        <div class="head-box">XXX-加入紫云英</div>
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
        content:"<h3>加入紫云英</h3>\n" +
          "<blockquote><ul>\n" +
          "<li>有 BUG 可以在<a href=\"https://blog.csdn.net/lucky_fang?type=blog\" target=\"_blank\" rel=\"external\">【这里】</a>提问、反馈，不过我并不一定能解决。</li>\n" +
          "<li>使用脚本要求署名，可以在例如在游戏ED、游戏介绍文档、游戏发布帖中署名（署名格式：VIPArcher）。</li>\n" +
          "<li>脚本开头的说明中如果有特殊的使用协议的话，以脚本说明中的使用协议为准。</li>\n" +
          "<li>禁止直接转载（只发一个链接是可以的）<strong><code>特别禁止以脚本合集的方式转载我的脚本。</code></strong></li>\n" +
          "<li>在未说明的情况下，这些脚本只适用于RPG制作大师的默认工程。在使用脚本过程中遇到了任何问题参考第一条。</li>\n" +
          "<li>对于那些已经被我删除的脚本，你可以自由的使用而不需要遵守上述规约。</li>\n" +
          "</ul></blockquote>"
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
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  blockquote, q {
    quotes: none;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  a {
    color: #97191d;
    text-decoration: none;
  }
</style>
