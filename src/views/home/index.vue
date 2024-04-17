<template>
  <div style="font-size: 14px;">
    <div style="height: 500px;overflow: hidden;">
      <div>
        <el-carousel indicator-position="outside" :loop="true" :autoplay="true" :interval="2000" height="500px" style="z-index: -1">
          <el-carousel-item v-for="url in imgs" :key="url">
            <el-image
              style="width: 100%;height: 100%;"
              :src="url">
            </el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="contain-box">
        <div class="scroll-none" style="width: 200px;background-color: #333;height: 505px;overflow: scroll;margin-top:-530px;z-index: 99999">
<!--          <div style="border-bottom: 1px solid #666;">-->
<!--            <div v-for="i in 5" :key="i" @mouseenter="enter(i)" @mouseleave="leave" style="padding: 0 10px;">-->
<!--              <div style="color: #FFFFFF;margin-top: 10px;"><i class="el-icon-shopping-bag-2" style="margin-right: 10px;"></i>女装</div>-->
<!--              <div style="display: inline-block;margin: 10px 10px 10px 0;">-->
<!--                <div><el-link :underline="false" style="color: #999;">上装</el-link></div>-->
<!--              </div>-->
<!--              <div style="display: inline-block;margin: 10px 10px 10px 0;">-->
<!--                <div><el-link :underline="false" style="color: #999;">下装</el-link></div>-->
<!--              </div>-->
<!--              <div style="display: inline-block;margin: 10px 10px 10px 0;">-->
<!--                <div><el-link :underline="false" style="color: #999;">裙装</el-link></div>-->
<!--              </div>-->
<!--              <div style="display: inline-block;margin: 10px 10px 10px 0;">-->
<!--                <div><el-link :underline="false" style="color: #999;">内衣</el-link></div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>

        <div v-if="hover" @mouseenter="enter()" @mouseleave="leave" class="scroll-none" style="width: 500px;height: 530px;overflow: scroll;margin-top:-505px;margin-left: 200px;z-index: 99999">
          <div style="background-color: rgba(48, 48, 48, .8);">
            <div style="margin: 0 10px;border-bottom: 1px solid #666;">
              <div v-for="(item1,index1) in subMenusOfHover" :key="index1" style="display: flex;color: #FFFFFF;line-height: 30px;padding: 10px 0;">
                <div>
                  {{item1.typeName}}：
                </div>
                <div style="flex: 1;border-bottom: 1px solid #FFFFFF;margin-left: 20px;">
                  <div v-for="(item2,index2) in item1.items" :key="index2" style="margin: 0 10px;display: inline-block;" class="sub-menu" @click="typePage">
                    {{item2.name}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scroll-none" :style="'float:right;width: 200px;background-color: #FFFFFF;height: 505px;overflow: scroll;z-index: 99999;'+(hover?'margin-top:-530px;':'margin-top:-505px;')">
          <div class="face-box" style="height: 220px;">
            <div style="text-align: center;margin-top: 32px;">
              <img src="public/img/ud/default_avt.png" style="width: 60px;height: 60px;border-radius: 50%;">
            </div>
            <div style="height: 24px;line-height: 24px;text-align: center;color: #666;">
              Hi~
              <span style="color: #b31e22;">18836416134</span>
            </div>
<!--            <div style="height: 24px;line-height: 24px;text-align: center;color: #666;">-->
<!--              积分：30-->
<!--            </div>-->
            <div style="text-align: center;margin: 10px 0;">
<!--              <el-badge :value="30" class="item">-->
<!--                <el-button type="success" size="small" style="width: 150px;">已签到1天</el-button>-->
<!--              </el-badge>-->
            </div>
          </div>
          <div style="border-top: 1px solid #eee;border-bottom: 1px solid #eee;display: flex;">
            <div style="flex: 1;border-right: 1px solid #eee;text-align: center;">
<!--              <div style="line-height: 40px;">-->
<!--                <i class="el-icon-shopping-bag-2"></i>-->
<!--              </div>-->
<!--              <div style="height: 24px;line-height: 24px;color: #666;">-->
<!--                申请网店代销-->
<!--              </div>-->
            </div>
            <div style="flex: 1;text-align: center;">
<!--              <div style="line-height: 40px;">-->
<!--                <i class="el-icon-s-custom"></i>-->
<!--              </div>-->
<!--              <div style="height: 24px;line-height: 24px;color: #666;">-->
<!--                <span style="color: #b31e22;">9356</span>位代销商-->
<!--              </div>-->
            </div>
          </div>
          <div style="margin-top: 20px;">
            <div style="height: 30px;line-height: 30px;text-align: center;color: #666;font-size: 12px;">
              <i class="el-icon-circle-close" style="color: red;"></i>
              真假QQ客服验证-远离骗子
            </div>
            <div style="text-align: center;padding: 0 10px;">
              <el-input size="mini" placeholder="收入客服QQ号码" v-model="input" style="width: 100%;">
                <el-button slot="append">验证</el-button>
              </el-input>
            </div>
          </div>
          <div style="margin-top: 20px;">
            <div style="display: flex;border-top: 1px solid #eee;border-bottom: 1px solid #eee;">
              <div style="flex: 1;border-right: 1px solid #eee;text-align: center;">
                <div style="height: 40px;line-height: 40px;color: #666;">
                  <i class="el-icon-success" style="margin-right: 10px;"></i>品牌正品
                </div>
              </div>
              <div style="flex: 1;text-align: center;">
                <div style="height: 40px;line-height: 40px;color: #666;">
                  <i class="el-icon-trophy" style="margin-right: 10px;"></i>信誉认证
                </div>
              </div>
            </div>
            <div style="display: flex;border-bottom: 1px solid #eee;">
              <div style="flex: 1;border-right: 1px solid #eee;text-align: center;">
                <div style="height: 40px;line-height: 40px;color: #666;">
                  <i class="el-icon-timer" style="margin-right: 10px;"></i>当天发货
                </div>
              </div>
              <div style="flex: 1;text-align: center;">
                <div style="height: 40px;line-height: 40px;color: #666;">
                  <i class="el-icon-s-check" style="margin-right: 10px;"></i>人工质检
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="contain-box">
      <div>
        <div style="height: 40px;margin: 20px 0;background: linear-gradient(to right, #f76850, #eb3349);display: flex;">
          <div style="height: 40px;line-height: 40px;color: #FFFFFF;">
            <i class="el-icon-s-check" style="margin: 0 10px;"></i>
            种子
          </div>
          <div style="flex: 1;text-align: right;margin-right: 20px;">
            <el-button @click="typePage" type="text" style="color: #ffffff;">高端种子</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">耐寒</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">耐热</el-button>
<!--            <el-button @click="typePage" type="text" style="color: #ffffff;">下装</el-button>-->
<!--            <el-button @click="typePage" type="text" style="color: #ffffff;">裙装</el-button>-->
          </div>
        </div>

        <div style="height: 560px;display: flex;overflow: hidden;">
          <div style="width: 300px;">
            <img src="../../../public/img/ud/floor_6.jpg" style="width: 300px;height: 560px;">
          </div>
          <div style="flex: 1;margin-left: 10px;overflow: auto;">
            <div v-for="i in 2" style="height: 270px;display: flex;margin-bottom: 10px;">
              <div v-for="(item,index) in imgsOfProduct"  @click="detailPage(item.productId)" class="list-box" :style="'width: 189px;'+(index > 0?'margin-left: 20px;':'')">
                <div style="width: 189px;">
                  <img :src="item" style="height: 210px;width: 100%;">
                </div>
                <div style="display: flex;line-height: 32px;">
                  <div style="color: red;flex: 1;">¥ 18.0</div>
                  <div style="color: #666666;flex: 1;text-align: right">进货价</div>
                </div>
                <div style="color: #666666;height: 16px;line-height: 16px;overflow: hidden;text-overflow: ellipsis;">
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style="height: 40px;margin: 20px 0;background: linear-gradient(to right, #ffb2b2, #ff6666);display: flex;">
          <div style="height: 40px;line-height: 40px;color: #FFFFFF;">
            <i class="el-icon-s-check" style="margin: 0 10px;"></i>
            成花
          </div>
          <div style="flex: 1;text-align: right;margin-right: 20px;">
            <el-button @click="typePage" type="text" style="color: #ffffff;">高端女装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">时尚女装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">上装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">下装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">裙装</el-button>
          </div>
        </div>

        <div style="height: 560px;display: flex;overflow: hidden;">
          <div style="width: 300px;">
            <img src="../../../public/img/ud/floor_3.jpg" style="width: 300px;height: 560px;">
          </div>
          <div style="flex: 1;margin-left: 10px;overflow: auto;">
            <div v-for="i in 2" style="height: 270px;display: flex;margin-bottom: 10px;">
              <div v-for="(item,index) in imgsOfProduct"  @click="detailPage" class="list-box" :style="'width: 189px;'+(index > 0?'margin-left: 20px;':'')">
                <div style="width: 189px;">
                  <img :src="item" style="height: 210px;width: 100%;">
                </div>
                <div style="display: flex;line-height: 32px;">
                  <div style="color: red;flex: 1;">¥ 18.0</div>
                  <div style="color: #666666;flex: 1;text-align: right">进货价</div>
                </div>
                <div style="color: #666666;height: 16px;line-height: 16px;overflow: hidden;text-overflow: ellipsis;">
                  纯色圆领短袖T恤活a动衫弹力柔软纯色圆领短袖T恤活a动衫弹力柔软
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style="height: 40px;margin: 20px 0;background: linear-gradient(to right, #ffb2b2, #ff6666);display: flex;">
          <div style="height: 40px;line-height: 40px;color: #FFFFFF;">
            <i class="el-icon-s-check" style="margin: 0 10px;"></i>
            食品
          </div>
          <div style="flex: 1;text-align: right;margin-right: 20px;">
            <el-button @click="typePage" type="text" style="color: #ffffff;">高端女装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">时尚女装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">上装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">下装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">裙装</el-button>
          </div>
        </div>

        <div style="height: 560px;display: flex;overflow: hidden;">
          <div style="width: 300px;">
            <img src="../../../public/img/ud/floor_5.jpg" style="width: 300px;height: 560px;">
          </div>
          <div style="flex: 1;margin-left: 10px;overflow: auto;">
            <div v-for="i in 2" style="height: 270px;display: flex;margin-bottom: 10px;">
              <div v-for="(item,index) in imgsOfProduct"  @click="detailPage" class="list-box" :style="'width: 189px;'+(index > 0?'margin-left: 20px;':'')">
                <div style="width: 189px;">
                  <img :src="item" style="height: 210px;width: 100%;">
                </div>
                <div style="display: flex;line-height: 32px;">
                  <div style="color: red;flex: 1;">¥ 18.0</div>
                  <div style="color: #666666;flex: 1;text-align: right">进货价</div>
                </div>
                <div style="color: #666666;height: 16px;line-height: 16px;overflow: hidden;text-overflow: ellipsis;">
                  纯色圆领短袖T恤活a动衫弹力柔软纯色圆领短袖T恤活a动衫弹力柔软
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style="height: 40px;margin: 20px 0;background: linear-gradient(to right, #ffb2b2, #ff6666);display: flex;">
          <div style="height: 40px;line-height: 40px;color: #FFFFFF;">
            <i class="el-icon-s-check" style="margin: 0 10px;"></i>
            药品
          </div>
          <div style="flex: 1;text-align: right;margin-right: 20px;">
            <el-button @click="typePage" type="text" style="color: #ffffff;">高端女装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">时尚女装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">上装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">下装</el-button>
            <el-button @click="typePage" type="text" style="color: #ffffff;">裙装</el-button>
          </div>
        </div>

        <div style="height: 560px;display: flex;overflow: hidden;">
          <div style="width: 300px;">
            <img src="../../../public/img/ud/floor_4.jpg" style="width: 300px;height: 560px;">
          </div>
          <div style="flex: 1;margin-left: 10px;overflow: auto;">
            <div v-for="i in 2" style="height: 270px;display: flex;margin-bottom: 10px;">
              <div v-for="(item,index) in imgsOfProduct"  @click="detailPage" class="list-box" :style="'width: 189px;'+(index > 0?'margin-left: 20px;':'')">
                <div style="width: 189px;">
                  <img :src="item" style="height: 210px;width: 100%;">
                </div>
                <div style="display: flex;line-height: 32px;">
                  <div style="color: red;flex: 1;">¥ 18.0</div>
                  <div style="color: #666666;flex: 1;text-align: right">进货价</div>
                </div>
                <div style="color: #666666;height: 16px;line-height: 16px;overflow: hidden;text-overflow: ellipsis;">
                  纯色圆领短袖T恤活a动衫弹力柔软纯色圆领短袖T恤活a动衫弹力柔软
                </div>
              </div>
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
           input:'',
           hover: true,
           imgs: [
             require('../../../public/img/ud/banner_7.jpg'),
             require('../../../public/img/ud/banner_8.jpg'),
             require('../../../public/img/ud/banner_6.jpg'),
           ],
          productImgs:[],
          imgsOfProduct: [
            require('../../../public/img/ud/S-001.jpg'),
            require('../../../public/img/ud/S-002.jpg'),
            require('../../../public/img/ud/S-003.jpg'),
            require('../../../public/img/ud/S-004.jpg'),
            require('../../../public/img/ud/S-005.jpg'),
          ],
           products: [
             {name:'荣耀笔记本MagicBook V 14',des:'超大容量，超级高清，超级速度',url:'https://www.wantongdiannao.com/upload/goods/1786/17180525093_175_175.jpg'},
             {name:'荣耀笔记本MagicBook V 14',des:'超大容量，超级高清，超级速度',url:'https://www.wantongdiannao.com/upload/goods/1796/09165363212_175_175.png'},
             {name:'荣耀笔记本MagicBook V 14',des:'超大容量，超级高清，超级速度',url:'https://www.wantongdiannao.com/upload/goods/1796/09165363212_175_175.png'},
             {name:'荣耀笔记本MagicBook V 14',des:'超大容量，超级高清，超级速度',url:'https://www.wantongdiannao.com/upload/goods/1747/14211244528_175_175.png'}
           ],
          subMenusOfHover: [],
          subMenusOfHover1:[
            {typeName:'下装',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]},
            {typeName:'裙装',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]},
            {typeName:'内衣',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'},{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]},
          ],
          subMenusOfHover2:[
            {typeName:'下装',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]},
            {typeName:'裙装',items:[{name:'牛仔裤'},{name:'短裤'},{name:'休闲裤'},{name:'打底裤'},{name:'丝袜'}]}
          ]
        };
      },
      mounted() {
      },
      methods: {
        typePage(){
          this.$router.push({path: '/type/index'});
        },
        detailPage(id){
          this.$router.push({path: '/product/detail',query:{productId:id}});
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
        }
      }
    };
</script>

<style>
  .product:hover{
    cursor: pointer;
    transform: scale(1.05);
    border-top: 1px solid red!important;
  }
  .scroll-none::-webkit-scrollbar {
    display: none !important;
  }
  .face-box{
    height: 220px;
    background-size: 100% 100%;
    background-image: url('/public/img/bg_box.jpg');
  }
  img{
    object-fit: cover;
  }
  .list-box:hover{
    cursor: pointer;
    box-shadow: 0 2px 10px 2px rgba(255, 60, 13, 0.64);
  }
  .sub-menu:hover{
    cursor: pointer;
    text-decoration-line: underline;
    text-underline: #FFFFFF;
  }
</style>
