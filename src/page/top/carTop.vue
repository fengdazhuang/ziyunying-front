<template>
  <div style="font-size: 14px;">
    <div style="height: 40px;background-color: #f5f5f5;">
      <div style="display: flex;" class="contain-box">
        <div class="top-title" style="padding-right: 20px;line-height: 40px;color: #666;">嗨，欢迎来到<span style="color: #b31e22;">紫云英网</span></div>
<!--        <div class="top-title" style="padding-right: 20px;line-height: 40px;color: #666;margin-left: 20px;" @click="toConsignmentPage">网店代销</div>-->
        <div class="top-title" style="padding-right: 20px;line-height: 40px;color: #666;margin-left: 20px;" @click="toHelpPage">帮助中心</div>
        <div style="flex: 1;display: flex;">
          <div style="flex: 1;"></div>
          <div style="width: 300px;display: flex;">
            <div v-if="userInfo.id" style="display: flex;line-height: 40px;margin-right: 10px;">
              <div style="color: #666;" class="top-title" v-if="!userInfo.id" @click="toLogin">登录</div>
              <el-dropdown v-if="userInfo.id">
                <div style="display: flex;overflow:hidden;">
                  <el-image :src="userInfo.avatar" style="width: 30px;height: 30px;margin: 5px 0;border-radius: 50%;"></el-image>
                  <div style="max-width: 46px;height: 40px;overflow: hidden;text-overflow: ellipsis;">
                    {{userInfo.username}}
                  </div>
                  <i class="el-icon-arrow-down" style="line-height: 40px;"></i>
                </div>
                <el-dropdown-menu slot="dropdown" style="margin-top: 0;">
                  <el-dropdown-item @click.native="toUserInfo">个人资料</el-dropdown-item>
                  <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <el-button v-if="!userInfo.id" type="text" style="color: #666;" class="top-title" @click="toLogin">登录</el-button>
            <el-button v-if="!userInfo.id" type="text" style="color: #666;margin-right: 10px;" class="top-title" @click="toLogin">注册</el-button>
            <el-button type="text" style="color: #666;margin-right: 10px;" class="top-title" @click="toWel">个人中心</el-button>
            <el-button type="text" style="color: #666;margin-right: 10px;" class="top-title" @click="toOrder">我的订单</el-button>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 100px;line-height: 100px;">
      <div class="contain-box" style="display: flex;">
        <div style="width: 200px;height: 100px;" @click="selMenu(2)">
          <img src="../../../public/img/logo.jpg" style="cursor: pointer;width: 200px;height: 100px;">
        </div>
        <div style="flex: 1;border-left: 1px solid #f2f2f2;margin: 20px 0;height: 80px;line-height: 80px;">
          <span style="margin-left: 20px;font-size: 20px;">购物车</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        input:'',
        menuIndex: 1
      };
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    mounted() {
    },
    methods: {
      selMenu(index){
        if(this.menuIndex === index){
          return;
        }
        this.menuIndex = index;
        if(index === 2){
          this.$router.push({path: '/home/index'});
        }else if(index === 5){
          this.$router.push({path: '/video/index'});
        }else if(index === 6){
          this.$router.push({path: '/enterprise/index'});
        }else if(index === 7){
          this.$router.push({path: '/contract/index'});
        }else if(index === 8){
          this.$router.push({path: '/shelf/index'});
        }
      },
      toLogin(){
        this.$router.push({path: '/login'});
      },
      toWel(){
        this.$router.push({path: '/personal/wel'});
      },
      toOrder(){
        this.$router.push({path: '/personal/order'});
      },
      toIntegral(){
        this.$router.push({path: '/personal/integral'});
      },
      toUserInfo(){
        this.$router.push({path: '/personal/userInfo'});
      },
      toConsignmentPage(){//网店代销

      },
      toHelpPage(){
        this.$router.push({path: '/personal/commonProblem'});
      },
      logout(){//退出登录
        this.$confirm("确定退出登录?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$notify({
              title: '提示',
              message: '退出成功',
              type: 'success'
              //duration: 0//为0则不会自动关闭
            });
            //清除用户信息缓存
            localStorage.removeItem("userInfo");
            this.$store.commit('SET_USER_INFO', {});
            this.toLogin();
          })
      },
      logout2() {//请求后端 真实退出
        this.$confirm('退出系统, 是否继续?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: "warning"
        }).then(() => {
          this.$store.dispatch('logout').then((res)=>{
            if(res.code === 200){
              this.$notify({
                title: '退出成功',
                type: 'success'
              });
              this.$router.push({path: '/login'});
            }
          });
        });
      },
    }
  };
</script>

<style>
  .top-title:hover{
    cursor: pointer;
    color: #b31e22!important;
  }
  .el-input-group__append, .el-input-group__prepend{
    background-color: #b31e22!important;
    color: #ffffff!important;
  }
  .menu-index{
    text-align: center;
    width: 100px;
    color: #FFFFFF;
    cursor: pointer;
  }
  .menu-index:hover{
    background-color: #666;
  }
  .menu-active{
    color: red;
  }
</style>
