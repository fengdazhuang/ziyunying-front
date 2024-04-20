<template>
  <div id="body">
    <div style="display: flex;width: 100%;height: 100%;overflow: hidden;">
      <div class="name"><span @click="homePage" style="cursor: pointer;">欢迎使用紫云英网平台</span></div>
      <div class="login-modal">
        <div class="title">{{modalType === 'login'?'登录':(modalType==='forget'?'找回密码':'注册')}}</div>
        <el-form class="login-form"
                 :rules="loginRules"
                 ref="loginForm"
                 :model="loginForm"
                 label-width="0">

          <el-form-item prop="phone">
            <el-input
              placeholder="请输入手机号"
              prefix-icon="el-icon-mobile-phone"
              v-model="loginForm.phone">
            </el-input>
          </el-form-item>

          <el-form-item v-show="modalType !== 'login'" prop="validCode">
            <el-input placeholder="请输入验证码" v-model="loginForm.validCode">
              <el-button slot="append" @click="handleLogin">发送短信验证码</el-button>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              :type="passwordType"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="loginForm.password">
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-row>
              <el-col :span="12">
                <el-checkbox v-model="loginForm.rememberPwd">30天内免登录</el-checkbox>
              </el-col>
              <el-col :span="12" v-if="modalType !== 'forget'">
                <div style="color: #df1f20;float: right;cursor: pointer;" @click="changeModalType('forget')">忘记密码?</div>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item>
            <el-button type="primary"
                       style="width: 100%;"
                       @click.native.prevent="handleLogin"
                       class="login-submit">
              {{modalType === 'login'?'登录':(modalType==='forget'?'重置密码':'注册')}}
            </el-button>
          </el-form-item>
          <div v-if="modalType === 'login'" style="text-align: center;font-size: 14px;">
            没有账号？<span style="cursor: pointer;color: #df1f20;" @click="changeModalType('register')">免费注册</span>
          </div>
          <div v-if="modalType !== 'login'" style="text-align: center;font-size: 14px;">
            已有账号？<span style="cursor: pointer;color: #df1f20;" @click="changeModalType('login')">返回登录</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          loading: false,
          modalType: 'login',
          passwordType: "password",
          loginForm: {
            //用户名
            phone: "",
            validCode:'',
            //密码
            password: "",
            rememberPwd: false,
          },
          loginRules: {
            phone: [
              {required: true, message: "请输入手机号", trigger: "change"}
            ],
            validCode: [
              {required: false, message: "请输入验证码", trigger: "change"}
            ],
            password: [
              {required: true, message: "请输入密码", trigger: "change"},
              {min: 1, message: "密码长度最少为6位", trigger: "change"}
            ]
          },
        };
      },
      mounted() {
      },
      methods: {
        changeModalType(type){
          this.modalType = type;
          this.$refs.loginForm.resetFields();
          if(type === 'login'){
            this.loginRules['validCode'][0]['required'] = false;
          }else{
            this.loginRules['validCode'][0]['required'] = true;
          }
        },
        homePage(){
          this.$router.push({path: '/home/index'});
        },
        showPassword() {
          this.passwordType === ""
            ? (this.passwordType = "password")
            : (this.passwordType = "");
        },
        handleLogin2() {
          let that = this;
          that.$refs.loginForm.validate(valid => {
            if (valid) {
              const loading = that.$loading({
                lock: true,
                text: '登录中,请稍后。。。',
                spinner: "el-icon-loading"
              });
              //延时1秒模拟请求效果
              setTimeout(function(){
                that.$notify({
                  title: '提示',
                  message: '登录成功',
                  type: 'success'
                  //duration: 0//为0则不会自动关闭
                });
                //模拟登录用户 存到缓存
                let userInfo = {id:'1001',username: that.loginForm.phone,avatar: require('../../../public/img/ud/default_avt.png')};
                that.$store.commit('SET_USER_INFO', userInfo);
                loading.close();
                that.$router.push({'path':'/home/index'});
              },1000)
            }
          });
        },
        handleLogin() {//请求后端 真实登录
          let that = this;
          that.$refs.loginForm.validate(valid => {
            if (valid) {
              const loading = that.$loading({
                lock: true,
                text: '登录中,请稍后。。。',
                spinner: "el-icon-loading"
              });
              this.$store.dispatch('login',this.loginForm).then((res)=>{
                console.log(res)
                if(res.status === 200){
                  this.$notify({
                    title: '登录成功',
                    message: res.data.username+'，欢迎您！',
                    type: 'success'
                  });
                  this.$router.push({path: '/'});
                }
              }).finally(() =>
                loading.close(),
              );

            }
          });
        },
      }
    }
</script>

<style scoped>
  #body{
    margin: 200px 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 50%;
    background-image:  url("../../../public/img/login_bg.jpg");
    background-repeat: no-repeat;
  }
  .name{
    line-height: 50px;
    font-size: 30px;
    font-weight: 700;
    color: #FFFFFF;
    margin-left: 10px;
  }
  .login-modal{
    position: relative;
    width: 400px;
    height: 450px;
    margin: 0 0 0 50%;
    top: 236px;
    margin-top: -225px;
    background-color: #FFFFFF;
    border-radius: 5px;
  }
  .title{
    height: 80px;
    line-height: 80px;
    font-weight: 600;
    text-align: center;
    font-size: 25px;
  }
  .login-form{
    margin: 20px 40px;
  }
</style>
