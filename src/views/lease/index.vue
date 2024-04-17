<template>
  <div class="contain-box" style="font-size: 14px;">
    <div style="margin: 10px 0;">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>衣服租赁</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <div style="padding: 10px 0;border-bottom: 1px solid #d1d1d1;">
        <div class="type-title">分类：</div>
        <div v-for="(item,index) in types1" :class="'type-item '+(index === typeIndex1?'type-item-active':'')" @click="selType1(index)">{{item}}</div>
      </div>
      <div style="padding: 10px 0;border-bottom: 1px solid #d1d1d1;">
        <div class="type-title">颜色：</div>
        <div v-for="(item,index) in types2" :class="'type-item '+(index === typeIndex2?'type-item-active':'')" @click="selType2(index)">{{item}}</div>
      </div>
      <div style="padding: 10px 0;border-bottom: 1px solid #d1d1d1;">
        <div class="type-title">尺寸：</div>
        <div v-for="(item,index) in types3" :class="'type-item '+(index === typeIndex3?'type-item-active':'')" @click="selType3(index)">{{item}}</div>
      </div>
      <div style="padding: 10px 0;border-bottom: 1px solid #d1d1d1;">
        <div class="type-title">价格：</div>
        <div v-for="(item,index) in types4" :class="'type-item '+(index === typeIndex4?'type-item-active':'')" @click="selType4(index)">{{item}}</div>
        <div style="display: inline-block;">
          <el-input v-model="startPrice" placeholder="" size="small" style="width: 100px;"></el-input>
        </div>
        <div style="display: inline-block;line-height: 30px;color: #d1d1d1;">
          -
        </div>
        <div style="display: inline-block;">
          <el-input v-model="endPrice" placeholder="" size="small" style="width: 100px;"></el-input>
        </div>
        <div style="display: inline-block;">
          <el-button type="primary" plain size="small">确定</el-button>
        </div>
      </div>
    </div>
    <div style="height: 40px;background-color: #f5f5f5;margin: 10px 0 5px 0;line-height: 40px;">
      <div class="type-title">排序：</div>
      <div v-for="(item,index) in types5" :class="'bar-item '+(index === typeIndex5?'bar-item-active':'')" @click="selType5(index)">{{item}}</div>
    </div>
    <div>
      <div class="product-box" v-for="(item,index) in products" @click="detailPage">
        <div style="text-align: center;">
          <img :src="item.img" style="">
        </div>
        <div class="product-name" style="color: #666;font-size: 14px;margin: 0 8px;padding: 5px 5px;background-color: rgba(208,208,208,0.5)">
          {{item.productName}}
        </div>
        <div style="line-height: 40px;color: #b31e22;font-size: 16px;margin-left: 10px;font-weight: bolder;display: flex;">
          <div>¥{{item.price}}</div>
          <div class="lease-tag lease-but" style="text-align: right;flex: 1;margin-right: 10px;display: none;">立即租赁</div>
        </div>
        <div style="display: flex;">
          <div style="width: 33.3%;margin-left: 10px;color: #666666;">
            销量{{item.saleNum}}
          </div>
          <div style="width: 33.3%;color: #666666;">
            人气{{item.hot}}
          </div>
          <div style="width: 33.3%;text-align: right;margin-right: 8px;color: #666666;">
            评论{{item.commentNum}}
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;margin-top: 20px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>

  </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          tags: [
            { name: '颜色：灰色', type: 'info' },
            { name: '尺寸：XXXL', type: 'info' }
          ],
          types1: ['全部','上装','下装','裙装','内衣'],
          typeIndex1: 0,
          types2: ['全部','红色','粉红','蓝色','白色'],
          typeIndex2: 0,
          types3: ['全部','L','M','S','X','XL','XXL','XXXL'],
          typeIndex3: 0,
          types4: ['全部','0-20','20-40','40-80','80-100','100-150','150以上'],
          typeIndex4: 0,
          types5: ['销量↑','评价↓','价格'],
          typeIndex5: 0,
          startPrice:'',
          endPrice: '',
          products: [
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-001.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-002.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-003.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-004.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-005.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-006.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-007.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-008.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-009.jpg')},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',price: 18.0,saleNum: 666,hot: 888,commentNum: 1666,img:require('../../../public/img/ud/M-010.jpg')},
          ]
        };
      },
      mounted() {
      },
      methods: {
        handleClose(tag) {
          this.tags.splice(this.tags.indexOf(tag), 1);
        },
        selType1(index){
          this.typeIndex1 = index;
        },
        selType2(index){
          this.typeIndex2 = index;
        },
        selType3(index){
          this.typeIndex3 = index;
        },
        selType4(index){
          this.typeIndex4 = index;
        },
        selType5(index){
          this.typeIndex5 = index;
        },
        detailPage(){
          this.$router.push({path: '/product/detail'});
        },

      }
    }
</script>

<style scoped>
  .type-title{
    font-size: 14px;
    color: #666666;
    display: inline-block;
    margin-left: 10px;
  }
  .type-item{
    font-size: 14px;
    color: #666666;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
  .type-item:hover{
    color: #b31e22;
  }
  .type-item-active{
    color: #b31e22;
  }

  .bar-item{
    font-size: 14px;
    color: #666666;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
  }
  .bar-item-active{
    color: #b31e22;
  }
  .bar-item:hover{
    color: #b31e22;
  }
  .product-box{
    width: 230px;
    height: 350px;
    cursor: pointer;
    border-bottom: 1px solid #d1d1d1;
    box-shadow: 0 2px 5px 1px rgba(255, 175, 138, 0.47);
    display: inline-block;
    margin: 0 10px 10px 0;
  }
  .product-box:hover{
    box-shadow: 0 2px 5px 2px rgba(255, 60, 13, 0.64);
  }
  .product-box:hover .product-name{
    height: 40px;
    overflow: hidden;
    color: #b31e22!important;
  }
  .product-box:hover .lease-but{
    display: block!important;
  }
</style>
