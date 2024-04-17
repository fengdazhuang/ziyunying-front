<template>
    <div class="contain-box" style="font-size: 14px;">
      <div style="display: flex;">
        <div style="flex: 1;">
          <div style="margin: 20px 0;">
            <el-breadcrumb separator=">">
              <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/type/index' }">爆款推荐</el-breadcrumb-item>
              <el-breadcrumb-item><span style="color: #b31e22;">{{ productAll.name }}</span></el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div style="display: flex;">
            <div style="width: 363px;overflow: hidden;">
              <div style="width: 363px;height: 363px;">
                <el-image :src="bigImg" :preview-src-list="banners" style="width: 363px;height: 363px;"></el-image>
              </div>
              <div style="display: flex;margin-top: 10px;overflow: auto;">
                <div v-for="(item,index) in banners" @mouseenter="selImg(index)" :key="index" style="width: 50px;height: 50px;margin: 5px 5px;" :class="item===bigImg?'img-active':''">
                  <el-image :src="item" style="width: 50px;height: 50px;"></el-image>
                </div>
              </div>
            </div>
            <div style="flex: 1;margin-left: 20px;">
              <div style="font-size: 16px;">
                {{ productAll.name }}
              </div>
              <div style="height: 100px;background-color: #f5f5f5;padding: 10px 5px;">
                <div style="height: 40px;">
                  <span>售价：</span>
                  <span style="font-size: 24px;color: #d00;">￥{{ productAll.price }}</span>
<!--                  <span style="font-size: 16px;color: #999;text-decoration: line-through;">￥29.20</span>-->
                </div>
              </div>
              <div style="border: 1px dotted #ccc;height: 46px;margin: 20px 0;display: flex;line-height: 46px;">
                <div style="width: 33.3%;text-align: center;">
                  <span style="color: #999;">累计销量</span>
                  <span style="color: #b31e22;font-weight: bold;">{{ productAll.salesVolume }}</span>
                </div>
                <div style="width: 33.3%;text-align: center;">
                  <span style="color: #999;">累计评论</span>
                  <span style="color: #b31e22;font-weight: bold;">{{ productAll.commentCount }}</span>
                </div>

              </div>
<!--              <div style="height: 50px;line-height: 50px;margin: 10px 0;display: flex;">-->
<!--                <span style="color: #999;margin-left: 10px;">颜色：</span>-->
<!--                <div v-for="(item,index) in colors" :key="item" @click="selColor(index)" :class="'type-item '+(colorIndex===index?'type-item-active':'')" style="width: 75px;height: 30px;line-height: 30px;">-->
<!--                  {{item}}-->
<!--                </div>-->
<!--              </div>-->
<!--              <div style="height: 50px;line-height: 50px;margin: 10px 0;display: flex;">-->
<!--                <span style="color: #999;margin-left: 10px;">尺寸：</span>-->
<!--                <div v-for="(item,index) in sizes" :key="item" @click="selSize(index)" :class="'type-item '+(sizeIndex===index?'type-item-active':'')" style="width: 75px;height: 30px;line-height: 30px;">-->
<!--                  {{item}}-->
<!--                </div>-->
<!--              </div>-->
              <div style="height: 130px;background-color: #f5f5f5;padding: 10px;">
                <div style="line-height: 40px;display: flex;">
                  <span style="color: #999;">数量：</span>
                  <div style="margin-left: 10px;">
                    <el-input-number v-model="buyNum" size="medium" controls-position="right" :min="1" :max="productAll.inventory"></el-input-number>
                  </div>
                  <span style="margin-left: 10px;">库存：<span style="font-weight: bold">{{productAll.inventory}}</span>件</span>
                </div>
                <div style="margin: 30px 0 0 55px;">
                  <el-button type="danger" style="width: 130px;" @click="toPay">立即购买</el-button>
                  <el-button type="warning" style="margin-left: 50px;" @click="addCar"><i class="el-icon-shopping-cart-2"></i> 加入购物车</el-button>
<!--                  <el-button type="primary" plain style="margin-left: 50px;" @click="toPay"> 租赁衣服</el-button>-->
                </div>
              </div>

            </div>
          </div>
        </div>
        <div style="width: 200px">

        </div>
      </div>
      <div style="margin-top: 20px;">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="商品详情" name="first">
            <product-info></product-info>
          </el-tab-pane>
          <el-tab-pane label="累计评价" name="second">
            <span slot="label">
              累计评价
              <span :style="'color: #ffffff;border-radius: 10px;padding: 2px 5px;'+(activeName==='second'?'background-color: #b31e22;':'background-color: #858585;')">1314</span>
            </span>
            <comment-index></comment-index>
          </el-tab-pane>
          <el-tab-pane label="售后服务" name="third">
            <sale-service></sale-service>
          </el-tab-pane>
        </el-tabs>
      </div>


    </div>
</template>

<script>
  import productInfo from "./child/product_info.vue";
  import commentIndex from "./child/comment_index.vue";
  import saleService from "./child/sale_service.vue";
  import {getCollections, getDetail} from "../../api/user";

  export default {
    components:{
      productInfo,
      commentIndex,
      saleService
    },
    data() {
      return {
        bigImg: require('../../../public/img/ud/S-001-5_s.jpg'),
        banners: [
          require('../../../public/img/ud/S-001-1_s.jpg'),
          require('../../../public/img/ud/S-001-2_s.jpg'),
          require('../../../public/img/ud/S-001-3_s.jpg'),
          require('../../../public/img/ud/S-001-4_s.jpg'),
          require('../../../public/img/ud/S-001-5_s.jpg'),
          require('../../../public/img/ud/S-001-6_s.jpg'),
          require('../../../public/img/ud/S-001-7_s.jpg'),
          require('../../../public/img/ud/S-001-8_s.jpg'),
          require('../../../public/img/ud/S-001-9_s.jpg'),
          require('../../../public/img/ud/S-001-10_s.jpg'),
        ],
        colors: ['白色','黑色','粉红色','黄色'],
        colorIndex: 0,
        sizes: ['S','M','L','XL'],
        sizeIndex: 0,
        buyNum: 1,
        stockNum: 1000,
        activeName: 'first',
        productAll:[]
      };
    },
    mounted() {
      var productId=this.$route.query.productId
      this.getProductDetail(productId);
    },
    methods: {
      getProductDetail(productId){
        getDetail(productId).then((res)=>{
          if(res.status === 200){
            this.productAll=res.data;
          }
        }),error => {
        }
      },
      selImg(index){
        this.bigImg = this.banners[index];
      },
      selColor(index){
        this.colorIndex = index;
      },
      selSize(index){
        this.sizeIndex = index;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      toPay(){//结算
        this.$router.push({path: '/pay'});
      },
      addCar(){//添加购物车
        this.$router.push({path: '/car'});
      }
    }
  };
</script>

<style scoped>
  .img-active{
    border: 2px solid #b31e22;
  }
  .type-item{
    text-align: center;
    border: 1px solid #d1d1d1;
    margin: 10px 10px;
  }
  .type-item-active{
    border: 1px solid #b31e22!important;
    font-weight: bold;
  }
  .type-item:hover{
    cursor: pointer;
    border: 1px solid #b31e22!important;
    font-weight: bold;
  }
</style>
