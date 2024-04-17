<template>
  <div style="font-size: 14px;">
    <div style="height: 40px;background-color: #f5f5f5;">
      <div style="display: flex;" class="contain-box">
        <div class="top-title" style="padding-right: 20px;line-height: 40px;color: #666;">嗨，欢迎来到<span style="color: #b31e22;">紫云英网</span></div>
        <div class="top-title" style="padding-right: 20px;line-height: 40px;color: #666;margin-left: 20px;" @click="toConsignmentPage">网店代销</div>
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

    <div class="contain-box" style="height: 100px;line-height: 100px;">
      <div style="display: flex;">
        <div style="width: 200px;height: 100px;" @click="selMenu('/home/index')">
          <img src="../../../public/img/logo.jpg" style="cursor: pointer;width: 200px;height: 100px;">
        </div>
        <div style="flex: 1;text-align: center;padding: 0 50px;">
          <el-input placeholder="搜索商品" v-model="input" style="width: 100%;margin-top: 30px;">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div style="width: 200px;text-align: center;">
          <el-button type="warning" icon="el-icon-shopping-cart-2" @click="toCar">购物车 0 件</el-button>
        </div>
      </div>
    </div>

    <div style="height: 40px;background-color: #333;">
      <div class="contain-box" style="display: flex;position: relative;">
        <div style="color: #FFFFFF;width: 200px;background-color: #b31e22;" class="all-type">
          <div>
            <i class="el-icon-menu" style="line-height: 40px;margin-left: 10px;"></i>
            <span style="line-height: 40px;" >全部分类</span>
            <div v-if="menuPath!=='/home/index'" style="position:absolute;z-index: 2000;" class="big-menu">
              <div class="scroll-none" style="width: 200px;background-color: #333;height: 505px;overflow: scroll;">
                <div style="border-bottom: 1px solid #666;">
<!--                  <div v-for="i in 5" :key="i" @mouseenter="enter(i)" @mouseleave="leave" style="padding: 0 10px;">-->
                    <div style="color: #FFFFFF;margin-top: 10px;"><i class="el-icon-shopping-bag-2" style="margin-right: 10px;"></i>种子</div>
                  <div style="color: #FFFFFF;margin-top: 10px;"><i class="el-icon-shopping-bag-2" style="margin-right: 10px;"></i>成花</div>
                  <div style="color: #FFFFFF;margin-top: 10px;"><i class="el-icon-shopping-bag-2" style="margin-right: 10px;"></i>制品</div>
                  <div style="color: #FFFFFF;margin-top: 10px;"><i class="el-icon-shopping-bag-2" style="margin-right: 10px;"></i>药物</div>
<!--                    <div style="display: inline-block;margin: 10px 10px 10px 0;">-->
<!--                      <div><el-link :underline="false" style="color: #999;">种子</el-link></div>-->
<!--                    </div>-->
<!--                    <div style="display: inline-block;margin: 10px 10px 10px 0;">-->
<!--                      <div><el-link :underline="false" style="color: #999;">下装</el-link></div>-->
<!--                    </div>-->
<!--                    <div style="display: inline-block;margin: 10px 10px 10px 0;">-->
<!--                      <div><el-link :underline="false" style="color: #999;">裙装</el-link></div>-->
<!--                    </div>-->
<!--                    <div style="display: inline-block;margin: 10px 10px 10px 0;">-->
<!--                      <div><el-link :underline="false" style="color: #999;">内衣</el-link></div>-->
<!--                    </div>-->
                  </div>
<!--                </div>-->
              </div>

<!--              <div v-if="hover" @mouseenter="enter()" @mouseleave="leave" class="scroll-none" style="width: 500px;height: 530px;overflow: scroll;margin-top:-505px;margin-left: 200px;">-->
<!--                <div style="background-color: rgba(48, 48, 48, .8);">-->
<!--                  <div style="margin: 0 10px;border-bottom: 1px solid #666;">-->
<!--                    <div v-for="(item1,index1) in subMenusOfHover" :key="index1" style="display: flex;color: #FFFFFF;line-height: 30px;padding: 10px 0;">-->
<!--                      <div>-->
<!--                        {{item1.typeName}}：-->
<!--                      </div>-->
<!--                      <div style="flex: 1;border-bottom: 1px solid #FFFFFF;margin-left: 20px;">-->
<!--                        <div v-for="(item2,index2) in item1.items" :key="index2" style="margin: 0 10px;display: inline-block;" class="sub-menu" @click="typePage">-->
<!--                          {{item2.name}}-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->


            </div>
          </div>
        </div>
        <div style="line-height: 40px;" v-for="(item,index) in menus" :key="index" :class="'menu-index '+(menuPath===item.path?'menu-active':'')" @click="selMenu(item.path)">
          {{item.name}}
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
          menuPath: '',
          hover: true,
          menus:[
            {name:'首页',path:'/home/index'},
            {name:'关于我们',path:'/personal/companyProfile'},
            {name:'官方账号',path:'/enterprise/index'},
            {name:'诚信合约',path:'/contract/index'},
          ],
          subMenusOfHover: [],
          // subMenusOfHover1:[
          //   {typeName:'下装',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]},
          //   {typeName:'裙装',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]},
          //   {typeName:'内衣',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'},{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]},
          // ],
          // subMenusOfHover2:[
          //   {typeName:'下装',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]},
          //   {typeName:'裙装',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]}
          // ]
        };
      },
      computed: {
        ...mapGetters([
          'userInfo'
        ])
      },
      mounted() {
        let that = this;
        setInterval(function(){
          that.menuPath = that.$router.currentRoute.path;
        },300)
      },
      methods: {
        selMenu(path){
          if(this.menuPath === path){
            return;
          }
          this.menuPath = path;
          this.$router.push({path:path});
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
        toCar(){
          this.$router.push({path: '/car'});
        },
        typePage(){
          this.$router.push({path: '/type/index'});
        },
        enter(id){
          if(id){
            if(id % 2 == 0){
              this.subMenusOfHover = this.subMenusOfHover1;
            }else{
              this.subMenusOfHover = this.subMenusOfHover2;
            }
          }
          this.hover = true;
        },
        leave(){
          this.hover = false;
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

  .scroll-none::-webkit-scrollbar {
    display: none !important;
  }
  .sub-menu:hover{
    cursor: pointer;
    text-decoration-line: underline;
    text-underline: #FFFFFF;
  }
  .big-menu{
    display: none;
  }
  .all-type:hover .big-menu{
    display: block!important;
  }
</style>
