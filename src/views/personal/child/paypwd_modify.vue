<template>
    <div class="user-center">
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">账户信息-修改支付密码</div>
          <div class="modify_div" v-if="!show">
            <div class="clearfix">
              <a class="but" @click="show=true">修改支付密码</a>
              <a class="but" @click="show=true">忘记支付密码</a>
            </div>
            <div class="help-block">随时都能更改密码，保障您账户余额支付的安全</div>
          </div>

          <div v-if="show">
            <div style="margin: 20px 0;">
              <el-steps :active="active" finish-status="success">
                <el-step title="验证身份"></el-step>
                <el-step title="重置支付密码"></el-step>
                <el-step title="完成"></el-step>
              </el-steps>
            </div>
            <div v-if="active === 1">
              <el-form :model="form1" ref="form1" :rules="rules1">
                <el-form-item prop="phone">
                  <el-input v-model="form1.phone" placeholder="输入手机号" style="width: 280px;"></el-input>
                </el-form-item>
                <el-form-item prop="validCode">
                  <el-input v-model="form1.validCode" style="width: 280px;" placeholder="输入验证码">
                    <template slot="append">发送验证码</template>
                  </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" style="background-color: #b31e22;" @click="submit('form1')">提交</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-if="active === 2">
              <el-form :model="form2" ref="form2" :rules="rules2">
                <el-form-item prop="pwd1">
                  <el-input v-model="form2.pwd1" placeholder="新的密码" style="width: 280px;"></el-input>
                </el-form-item>
                <el-form-item prop="validCode">
                  <el-input v-model="form2.pwd2" style="width: 280px;" placeholder="再次确认新的密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="danger" style="background-color: #b31e22;" @click="submit('form2')">提交</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-if="active === 3">
              <div class="modify-success__box text-center">
                <div class="icon b-r50"><i class="iconfont icon-checked cf fz24 el-icon-check" style="font-size: 24px;line-height: 50px;"></i></div>
                <div class="text c6">支付密码设置成功！</div>
                <a class="btn" @click="typePage">赶紧去购物，试试新的支付密码吧</a>
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
        show: false,
        active: 1,
        form1:{
          phone:'',
          validCode:''
        },
        rules1: {
          phone: [
            {required: true, message: '请输入手机号', trigger: 'change'}
          ],
          validCode: [
            {required: true, message: '请输入验证码', trigger: 'change'}
          ],
        },
        form2:{
          pwd1:'',
          pwd2:''
        },
        rules2: {
          pwd1: [
            {required: true, message: '请输入新的密码', trigger: 'change'}
          ],
          pwd2: [
            {required: true, message: '请再次输入新的密码', trigger: 'change'}
          ],
        }
      };
    },
    mounted() {
    },
    methods: {
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(formName === 'form1'){
              this.active =2;
            }else if(formName === 'form2'){
              this.active =3;
            }
          }
        });
      },
      typePage(){
        this.$router.push({path: '/type/index'});
      },
    }
  };
</script>

<style scoped>
  .user-center > .pull-right {
    width: 950px;
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
  .modify_div {
    margin-top: 20px;
    padding: 20px 30px;
    border: 1px solid #e0e0e0;
  }
  .modify_div > .clearfix {
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .modify_div .but {
    color: #fff;
    padding: 8px 24px;
    text-decoration: none;
    border: 1px solid #b31e22;
    background-color: #b31e22;
  }
  .help-block {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #737373;
  }
  .modify_div .but + .but {
    color: #666;
    background-color: #fff;
    border: 1px solid #fff;
  }
  .text-center {
    text-align: center;
  }
  .modify-success__box .icon {
    line-height: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: #b31e22;
  }
  .b-r50 {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .cf {
    color: #fff;
  }
  .fz24 {
    font-size: 24px;
  }
  .iconfont {
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .c6 {
    color: #666;
  }
  .modify-success__box .btn {
    color: #fff;
    margin-top: 20px;
    margin-bottom: 60px;
    background-color: #b31e22;
  }
  .btn {
    display: inline-block;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    user-select: none;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  .modify-success__box .btn:hover {
    background-color: #931519;
  }
</style>
