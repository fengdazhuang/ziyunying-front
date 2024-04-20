sa<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">账户信息-个人资料</div>
        <div class="port b-r50" id="crop-avatar">
          <div class="img" data-original-title="" title=""><img :src="require('../../../../public/img/ud/default_avt.png')" class="cover b-r50"></div>
        </div>
        <form action="" class="user-setting__form" role="form">
          <div class="user-form-group">
            <label for="user-id">用户名：</label>
            <input type="text" id="user-id" v-model="userInfo.username" placeholder="请输入您的昵称">
          </div>
          <div class="user-form-group">
            <label>身份：</label>
            企业商户 <a href="agent_level.html">提升</a>
          </div>
          <div class="user-form-group">
            <label>性别：</label>
            <el-radio-group v-model="userInfo.sex">
              <el-radio :label="1">男士</el-radio>
              <el-radio :label="2">女士</el-radio>
              <el-radio :label="3">保密</el-radio>
            </el-radio-group>
          </div>
          <div class="user-form-group">
            <label>邮箱：</label>
            {{ userInfo.email }}
          </div>
          <div class="user-form-group">
            <label>电话：</label>
            {{ userInfo.phone }}
          </div>
          <div class="user-form-group">
            <label>生日：</label>
            <el-date-picker
              v-model="userInfo.birthday"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="user-form-group">
            <el-button type="danger" size="mini" style="background-color: #b31e22;">确认修改</el-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {getUserInfo} from "../../../api/user";

  export default {
    data() {
      return {
        userInfo:{
          username:'',
          sex:1,
          phone:'',
          email:'',
          birthday:''

        }
      };
    },
    mounted() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo(){
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        getUserInfo({id:userInfo.id}).then((res=>{
          if(res.status===200){
            this.userInfo=res.data;
          }
        })),error=>{

        }
      }
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
    background-color: #fff;
  }
  .user-content__box {
    padding: 10px 24px;
  }
  .user-content__box .title {
    color: #666;
    line-height: 36px;
    border-bottom: 1px solid #e0e0e0;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  .user-content__box .port {
    float: left;
    cursor: pointer;
    border: 1px solid #ccc;
    width: 80px;
    height: 80px;
    padding: 2px;
    margin: 20px;
  }
  .b-r50 {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .cover {
    object-fit: cover;
  }
  .cover, .contain {
    width: 100%;
    height: 100%;
    object-position: center;
  }
  img {
    vertical-align: middle;
  }
  img {
    border: 0;
  }
  .user-setting__form {
    color: #666;
    float: left;
    width: 300px;
    padding: 20px 10px;
  }
  .user-form-group {
    padding-top: 5px;
  }
  .user-form-group label {
    font-weight: normal;
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
  .user-form-group > input[type="text"] {
    border: 0;
  }
  input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  input {
    line-height: normal;
  }
  input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  a {
    color: #97191d;
    text-decoration: none;
  }
  a:hover, a:focus {
    color: #550e10;
    text-decoration: underline;
  }
  a:active, a:hover {
    outline: 0;
  }
</style>
