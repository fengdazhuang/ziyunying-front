<template>
  <div class="user-center">
    <div class="pull-right bgf">
      <div class="user-center__content">
        <div class="head-box">服务中心-售后服务</div>
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
        content:"<h3>售后服务管理常见问题</h3>\n" +
          "          <ul style=\"text-indent: 2em\">\n" +
          "            <li>• 如何提高服务资源的使用效率，降低服务成本？</li>\n" +
          "            <li>• 如何提高服务质量，提高客户满意度？</li>\n" +
          "            <li>• 如何对售后服务的全流程进行精细化的管理？</li>\n" +
          "            <li>• 如何合理分派现场工程师，并监督他们的工作进度？</li>\n" +
          "            <li>• 如何帮助现场工程师方便地申请到备件？</li>\n" +
          "            <li>• 如何帮助现场工程师更快地解决问题？</li>\n" +
          "            <li>• 如何对现场工程师进行考核？</li>\n" +
          "            <li>• 如何发现售后服务中存在的问题，并进行改进？</li>\n" +
          "          </ul>\n" +
          "          <h3>紫云英售后服务系统简介</h3>\n" +
          "          <p style=\"text-indent: 2em\">紫云英售后服务管理系统是新紫云英公司将售后服务领域的专业经验，与强大的任务流程管理平台及最新的信息技术结合在一起，专门为企业的售后服务业务打造的一款专业的售后服务管理软件，它提供对售后服务全流程自动化精细化管理，帮助企业大大提高服务资源的使用效率，节约服务运营成本，提升客户体验，提高客户满意度。</p>\n" +
          "          <p style=\"text-indent: 2em\">紫云英售后服务管理系统可以帮助企业系统化地管理售后服务运营中的各项业务，包括客服中心（呼叫中心或服务热线）、客户管理、服务请求管理、现场任务管理、备件管理、服务资源的管理、安装记录管理、服务业务机会和服务财务管理等。</p>\n" +
          "          <h3>紫云英售后服务系统目标</h3>\n" +
          "          <ul style=\"text-indent: 2em\">\n" +
          "            <li>• 进一步优化服务运营的流程</li>\n" +
          "            <li>• 提高服务响应速度和质量，从而提高客户满意度</li>\n" +
          "            <li>• 提高内部各团队的协作和信息共享</li>\n" +
          "            <li>• 提高服务资源的使用效率，降低服务运营的成本</li>\n" +
          "            <li>• 增加服务业务的机会和成功率以及产品的销售机会</li>\n" +
          "            <li>• 提供产品质量的追溯</li>\n" +
          "            <li>• 为决策层及时提供售后服务数据统计、分析和报表</li>\n" +
          "          </ul>"
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
