<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">账户信息-物流查询</div>
        <div style="margin-top: 15px;width: 50%;">
          <el-input placeholder="快递单号" v-model="content" clearable>
            <el-button slot="append" icon="el-icon-search" @click="search">查询</el-button>
          </el-input>
        </div>
        <div class="help-block">例如，您可以输入：<span class="cr">40105060123</span></div>
        <div class="query-result__box">
          <div class="no-date" v-if="noData">
            <p class="cr">很抱歉，您的快递单号暂时没有查询结果！</p>
            <p class="fz12 c6">您可以检查下快递单号是否正确</p>
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
        content:'',
        noData: false
      };
    },
    mounted() {
    },
    methods: {
      search(){
        console.info(this.content);
        this.noData = true;
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
  .help-block {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #737373;
  }
  .cr {
    color: #b31e22;
  }
  .query-result__box {
    width: 50%;
    margin: 10px 0;
    min-height: 120px;
  }
  .query-result__box .no-date {
    width: 100%;
    height: 120px;
    text-align: center;
    padding-top: 32px;
    background-color: #fffae2;
    border: 1px solid #b31e22;
  }
  p {
    margin: 0 0 10px;
  }
  .c6 {
    color: #666;
  }
  .fz12 {
    font-size: 12px;
  }
</style>
