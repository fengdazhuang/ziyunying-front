<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">账户信息-资金管理</div>
        <div class="assets-box">
          <samll class="c6">账户余额：</samll>
          <samll class="cr">¥</samll>
          <b class="fz16 cr">88.0</b>
          <ul class="nav pull-right">
            <li role="presentation" :class="tabIndex === 1?'active':''" @click="selTab(1)"><a>充值</a></li>
            <li role="presentation" :class="tabIndex === 2?'active':''"  @click="selTab(2)"><a>提现</a></li>
            <li role="presentation" :class="tabIndex === 3?'active':''"  @click="selTab(3)"><a>交易记录</a></li>
          </ul>
        </div>
        <div class="tab-content">
          <div role="tabpanel" :class="'tab-pane fade '+(tabIndex === 1?'in active':'')">
            <form action="" class="user-setting__form" role="form">
              <div class="form-group">
                <label>充值金额</label>
                <el-input placeholder="输入您要充值的金额"></el-input>
              </div>
              <div class="form-group">
                <label>备注（可不填）</label>
                <el-input type="textarea" placeholder="输入备注"></el-input>
              </div>
              <div class="form-group">
                <label>支付方式（手续费 <span id="tip">0</span>）</label>
                <div class="pay-method-box tags-box">
                  <label><input type="radio" name="pay_method" value="Alipay"><i class="pay-method__img alipay"></i></label>
                  <label><input type="radio" name="pay_method" value="WeChat"><i class="pay-method__img wechat"></i></label>
                </div>
              </div>
              <div class="user-form-group tags-box">
                <el-button type="danger" style="background-color: #b31e22;" size="mini">立即支付</el-button>
                <el-button type="danger" plain size="mini">重置</el-button>
              </div>
            </form>
          </div>
          <div role="tabpanel" :class="'tab-pane fade '+(tabIndex === 2?'in active':'')">
            <form action="" class="user-setting__form" role="form">
              <div class="form-group">
                <label>提现金额</label>
                <el-input placeholder="输入您要提现的金额"></el-input>
                <span class="help-block fz12">注：单次提现，提现金额不低于100.0元</span>
              </div>
              <div class="form-group">
                <label>姓名</label>
                <el-input placeholder="输入您的姓名"></el-input>
              </div>
              <div class="form-group">
                <label>开户行</label>
                <el-input placeholder="输入开户行"></el-input>
              </div>
              <div class="form-group">
                <label>银行账号</label>
                <el-input placeholder="输入银行账号"></el-input>
              </div>
              <div class="form-group">
                <label>手机号码</label>
                <el-input placeholder="输入手机号码"></el-input>
              </div>
              <div class="form-group">
                <label>备注（可不填）</label>
                <el-input type="textarea" placeholder="输入备注"></el-input>
              </div>
              <div class="user-form-group tags-box">
                <el-button type="danger" style="background-color: #b31e22;" size="mini">申请提现</el-button>
                <el-button type="danger" plain size="mini">重置</el-button>
              </div>
            </form>
          </div>
          <div role="tabpanel" :class="'tab-pane fade '+(tabIndex === 3?'in active':'')">
            <div class="bs-example" data-example-id="hoverable-table">
              <table class="assets-table table table-bordered table-hover c6 text-center">
                <thead>
                <tr>
                  <th>操作时间</th>
                  <th>类型</th>
                  <th>金额</th>
                  <th>备注</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>2017.09.20 17:20</td>
                  <td>充值</td>
                  <td>50.00</td>
                  <td>充值代销</td>
                  <td><span class="text-primary">未确认</span></td>
                  <td><a>付款</a> <a>取消</a></td>
                </tr>
                <tr>
                  <td>2017.09.20 17:20</td>
                  <td>提现</td>
                  <td>50.00</td>
                  <td>提现金额</td>
                  <td><span class="text-success">完成</span></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2017.09.20 17:20</td>
                  <td>提现</td>
                  <td>50.00</td>
                  <td>提现金额</td>
                  <td><span class="text-info">提现中</span></td>
                  <td><a>联系客服</a></td>
                </tr>
                <tr>
                  <td>2017.09.20 17:20</td>
                  <td>提现</td>
                  <td>50.00</td>
                  <td>无</td>
                  <td><span class="text-success">完成</span></td>
                  <td>-</td>
                </tr>
                </tbody>
              </table>
            </div>
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
        tabIndex: 1,
      };
    },
    mounted() {
    },
    methods: {
      selTab(index){
        this.tabIndex = index;
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
  .assets-box {
    height: 56px;
    line-height: 55px;
    border-bottom: 1px solid #e0e0e0;
  }
  .c6 {
    color: #666;
  }
  .cr {
    color: #b31e22;
  }
  .cr {
    color: #b31e22;
  }
  .fz16 {
    font-size: 16px;
  }
  b, strong {
    font-weight: bold;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
  }
  ol, ul {
    list-style: none;
  }
  .assets-box > .nav li {
    float: left;
    margin-left: 24px;
    cursor: pointer;
  }
  .assets-box > .nav li.active a {
    color: #b31e22;
  }
  .assets-box > .nav a {
    color: #666;
    text-decoration: none;
  }
  .tab-content > .tab-pane.active {
    display: block;
  }
  .tab-content > .tab-pane {
    display: none;
  }
  .fade.in {
    opacity: 1;
  }
  .fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
  }
  .user-setting__form {
    color: #666;
    float: left;
    width: 300px;
    padding: 20px 10px;
  }
  .user-setting__form .form-group {
    position: relative;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  label {
    position: relative;
  }
  .assets-control {
    display: block;
    width: 100%;
    height: 32px;
    padding: 9px;
    font-size: 12px;
    line-height: 12px;
    border: 1px solid #e0e0e0;
  }
  button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .assets-control {
    display: block;
    width: 100%;
    height: 32px;
    padding: 9px;
    font-size: 12px;
    line-height: 12px;
    border: 1px solid #e0e0e0;
  }
  .tags-box {
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .pay-method-box input[type="radio"] {
    display: none;
  }
  input[type="radio"], input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal;
  }
  input[type="checkbox"], input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }
  .pay-method__img.alipay {
    background-image: url("../../../../public/img/ud/alipay.gif");
  }
  .pay-method__img {
    width: 125px;
    height: 32px;
    display: inline-block;
    border: 1px solid #e0e0e0;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }
  .pay-method__img.wechat {
    background-image: url("../../../../public/img/ud/wechat.gif");
  }
  .pay-method__img {
    width: 125px;
    height: 32px;
    display: inline-block;
    border: 1px solid #e0e0e0;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }
  .table-bordered {
    border: 1px solid #ddd;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .text-center {
    text-align: center;
  }
  .c6 {
    color: #666;
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
  .table-bordered>thead>tr>th, .table-bordered>thead>tr>td {
    border-bottom-width: 2px;
  }
  .table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, .table-bordered>tfoot>tr>td {
    border: 1px solid #ddd;
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
  .assets-table th {
    width: 16.66666%;
    text-align: center;
    background-color: #f5f5f5;
  }
  .text-center th {
    text-align: center;
  }
  th {
    text-align: left;
  }
  td, th {
    padding: 0;
  }
  ctoolion, th {
    text-align: left;
  }
  address, ctoolion, cite, code, dfn, em, strong, th, var, optgroup {
    font-style: normal;
    font-weight: normal;
  }
  .pay-method-box input[type="radio"]:checked + .pay-method__img {
    border-color: #b31e22;
  }
  .text-primary {
    color: #97191d;
  }
  .text-success {
    color: #3c763d;
  }
  .text-info {
    color: #31708f;
  }
  .assets-table a {
    text-decoration: none;
    color: #666;
    cursor: pointer;
  }
  .assets-table a:hover {
    color: #b31e22;
  }
</style>
