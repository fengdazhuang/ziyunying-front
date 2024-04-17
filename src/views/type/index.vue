<template>
  <div class="contain-box" style="font-size: 14px;">
    <div style="margin: 10px 0;">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品筛选</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="display: flex;border-bottom: 1px solid #b31e22;">
      <div>
        <el-dropdown size="small" type="danger">
          <el-button size="small" type="danger" style="background-color: #b31e22;">
            选择商品分类<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>种子</el-dropdown-item>
            <el-dropdown-item>药品</el-dropdown-item>
            <el-dropdown-item>食品</el-dropdown-item>
            <el-dropdown-item>药品</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div style="line-height: 30px;flex: 1;">
        <el-tag
          style="margin: 0 5px;"
          size="small"
          v-for="tag in tags"
          :key="tag.name"
          closable
          @close="handleClose(tag)"
          :type="tag.type">
          {{tag.name}}
        </el-tag>
      </div>
      <div style="width: 100px;text-align: right">
        <el-button size="small" style="background-color: #b31e22;color: #ffffff;">重置</el-button>
      </div>
    </div>
    <div>
      <div style="padding: 10px 0;border-bottom: 1px solid #d1d1d1;">
        <div class="type-title">分类：</div>
        <div v-for="(item,index) in claList" :class="'type-item '+(index === claIndex?'type-item-active':'')"  @click="selClassification(index)">{{item}}</div>
      </div>
<!--      <div style="padding: 10px 0;border-bottom: 1px solid #d1d1d1;">-->
<!--        <div class="type-title">颜色：</div>-->
<!--        <div v-for="(item,index) in types2" :class="'type-item '+(index === typeIndex2?'type-item-active':'')" @click="selType2(index)">{{item}}</div>-->
<!--      </div>-->
<!--      <div style="padding: 10px 0;border-bottom: 1px solid #d1d1d1;">-->
<!--        <div class="type-title">尺寸：</div>-->
<!--        <div v-for="(item,index) in types3" :class="'type-item '+(index === typeIndex3?'type-item-active':'')" @click="selType3(index)">{{item}}</div>-->
<!--      </div>-->
      <div style="padding: 10px 0;border-bottom: 1px solid #d1d1d1;">
        <div class="type-title">价格：</div>
        <div v-for="(item,index) in priceList" :class="'type-item '+(index === priceIndex?'type-item-active':'')" @click="selPrice(index)">{{item}}</div>
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
          <el-button type="primary" plain size="small" @click="pageProducts()">确定</el-button>
        </div>
      </div>
    </div>
    <div style="height: 40px;background-color: #f5f5f5;margin: 10px 0 5px 0;line-height: 40px;">
      <div class="type-title">排序：</div>
      <div v-for="(item,index) in sortList" :class="'bar-item '+(index === sortIndex?'bar-item-active':'')" @click="selSort(index)">{{item}}</div>
    </div>
    <div>
      <div class="product-box" v-for="(item,index) in products" @click="detailPage(item.productId)">
        <div style="text-align: center;">
          <el-image :src="item.img" style=""></el-image>
        </div>
        <div class="product-name" style="color: #666;font-size: 14px;margin: 0 8px;padding: 5px 5px;background-color: rgba(208,208,208,0.5)">
          {{item.productName}}
        </div>
        <div style="line-height: 40px;color: #b31e22;font-size: 16px;margin-left: 10px;font-weight: bolder;">
          ¥{{item.price}}
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
    <div class="pagination-wrapper">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>

    </div>

  </div>
</template>

<script>
    import {getProductPage} from "../../api/user";

    export default {
      name: "index",
      data() {
        return {
          currentPage: 1,
          total: 0,
          pageSize: 10,
          products:[],
          tags: [
            { name: '颜色：灰色', type: 'info' },
            { name: '尺寸：XXXL', type: 'info' }
          ],
          classification:'',
          sort:'',
          startPrice:'',
          endPrice: '',


          claList: ['全部','种子','成花','食品','药品'],
          claIndex: 0,
          types2: ['全部','红色','粉红','蓝色','白色'],
          typeIndex2: 0,
          types3: ['全部','L','M','S','X','XL','XXL','XXXL'],
          typeIndex3: 0,
          priceList: ['全部','0-20','20-40','40-80','80-100','100-150','150以上'],
          priceIndex: 0,
          sortList: ['销量','评价','价格'],
          sortIndex: 0,

          products2: [
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
        this.getData();
      },
      methods: {
        handleSizeChange(newSize) {
          // 当用户改变每页显示条目数量时触发
          this.pageSize = newSize;
          // 重新获取数据，因为页面数量可能会发生变化
          this.getData();
        },
        handleCurrentChange(newPage) {
          // 当用户切换当前页码时触发
          this.currentPage = newPage;
          // 获取新页的数据
          this.getData();
        },
        getData(){
          this.pageProducts();
        },
        pageProducts(){
          getProductPage({currentPage:this.currentPage,pageSize:this.pageSize,classification:this.classification,
            sort:this.sort,startPrice:this.startPrice,endPrice:this.endPrice}).then((res)=>{
            if(res.status===200){
              this.data = res.data.records;
              this.total = res.data.total;
              this.products=res.data.records;
            }
          }),error=>{

          };

        },
        handleClose(tag) {
          this.tags.splice(this.tags.indexOf(tag), 1);
        },
        selClassification(index){
          var classification=this.claList[index];
          this.classification=classification;
          this.claIndex = index;
          this.getData();
        },


        selPrice(index){

          var priceArea = this.priceList[index];
          var len=this.priceList.length;
          if(index===0){
            this.startPrice='';
            this.endPrice='';
          }else if(index===len-1){
            this.startPrice=150;
            this.endPrice='';
          }else{
            var price=priceArea.split("-");
            this.startPrice=price[0];
            this.endPrice=price[1];
          }
          this.priceIndex = index;
          this.getData();
        },
        selSort(index){
          var sort = this.sortList[index];
          this.sort=sort;
          this.sortIndex = index;
          this.getData();
        },


        detailPage(id){
          this.$router.push({path: '/product/detail',query:{productId:id}});
        }

      }
    }
</script>

<style scoped>

.pagination-wrapper {
  text-align: center; /* 让分页组件居中对齐 */
}
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
</style>
