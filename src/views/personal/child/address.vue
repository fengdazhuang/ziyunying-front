<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">账户信息-收货地址</div>

        <div style="margin-top: 20px;">
          <p class="fz18 cr">新增收货地址</p>
          <el-form ref="form" :model="form" label-width="100px" @submit.native.prevent="addAddress()">
            <el-form-item label="收货人姓名">
              <el-input v-model="form.receiverName"></el-input>
            </el-form-item>
            <el-form-item label="收货地址">
              <div style="display: flex;">
                <el-select v-model="form.province" placeholder="请选择省">
                </el-select>
                <el-select v-model="form.city" placeholder="请选择市">
                </el-select>
                <el-select v-model="form.county" placeholder="请选择区/县">
                </el-select>
              </div>
            </el-form-item>
            <el-form-item label="">
              <el-input type="textarea" v-model="form.detailedAddr" placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码等信息"></el-input>
            </el-form-item>
            <el-form-item label="电话号码">
              <el-input v-model="form.receiverPhone"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox v-model="form.checked">设为默认收货地址</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="background-color: #a11b1f;width: 250px;" native-type="submit">保存</el-button>
            </el-form-item>
          </el-form>
        </div>

        <p class="fz18 cr">已保存的有效地址</p>

        <div class="table-thead addr-thead">
          <div class="tdf1">收货人</div>
          <div class="tdf2">所在地</div>
          <div class="tdf3"><div class="tdt-a_l">详细地址</div></div>
          <!-- <div class="tdf1">邮编</div> -->
          <div class="tdf1">电话/手机</div>
          <div class="tdf1">操作</div>
          <div class="tdf1"></div>
        </div>
        <div v-for="addr in addrList" class="addr-list">
          <div class="addr-item">
            <div class="tdf1">{{ addr.receiverName }}</div>
            <div class="tdf2 tdt-a_l">{{ addr.province }} {{ addr.city }} {{addr.county}}</div>
            <div class="tdf3 tdt-a_l">{{ addr. detailedAddr}}</div>
            <!-- <div class="tdf1">350111</div> -->
            <div class="tdf1">{{ addr.receiverPhone }}</div>
            <div class="tdf1 order">
              <a>修改</a><a>删除</a>
            </div>
            <div class="tdf1">
              <a class="default active">默认地址</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {addAddress, getAddressList} from "../../../api/user";

  export default {
    data() {
      return {
        form: {
          receiverName:'',
          province:'',
          city:'',
          county:'',
          detailedAddr:'',
          receiverPhone:'',
          checked:0,

        },
        addrList:[]
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData(){
        this.getAddressList();
      },
      getAddressList(){
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        getAddressList(userInfo.id).then((res)=>{
          if(res.status === 200){
            this.addrList=res.data;
          }
        }),error => {
        }
      },
      addAddress(){
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        addAddress({...this.form,userId:userInfo.id}).then((res)=>{
          if(res.status === 200){

          }
        }),error => {
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
  .cr {
    color: #b31e22;
  }
  .fz18 {
    font-size: 18px;
  }
  p {
    margin: 0 0 10px;
  }
  .addr-thead {
    height: 40px;
    margin-bottom: 0;
    border-bottom: 0;
    line-height: 38px;
  }
  .table-thead {
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    color: #666;
    height: 40px;
    line-height: 40px;
    background-color: #f1f1f1;
    border: 1px solid #e0e0e0;
  }
  .tdf1 {
    flex: 1;
  }
  .tdf1, .tdf2, .tdf3 {
    text-align: center;
    align-self: center;
  }
  .tdf2 {
    flex: 2;
  }
  .tdf1, .tdf2, .tdf3 {
    text-align: center;
    align-self: center;
  }
  .tdf3 {
    flex: 3;
  }
  .tdf1, .tdf2, .tdf3 {
    text-align: center;
    align-self: center;
  }
  .tdt-a_l {
    -ms-align-self: flex-start;
    align-self: flex-start;
    text-align: left;
    padding: 10px 5px;
  }
  .addr-list {
    margin-bottom: 20px;
  }
  .addr-item {
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    border: 1px solid #e0e0e0;
  }
  .tdf2 {
    flex: 2;
  }
  .tdf3 {
    flex: 3;
  }
  .addr-item .order a {
    color: #36c;
    padding: 0 3px;
    text-decoration: none;
  }
  .addr-item .order a + a {
    border-left: 1px solid #666;
  }
  .addr-item .default.active {
    color: #ff3300;
    background-color: #ffd6cc;
    border: 1px solid #ff3300;
  }
  .addr-item .default {
    padding: 3px;
    color: #999;
    border-radius: 4px;
    white-space: nowrap;
    text-decoration: none;
    background-color: #eee;
    border: 1px solid #999;
  }
  .addr-item .order a:hover {
    color: #b31e22;
  }
</style>
