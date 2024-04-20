<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">商品管理-我的商品</div>
        <div class="order-list__box bgf">
          <div class="order-panel">
            <ul class="nav user-nav__title" role="tablist">
              <li role="presentation" :class="'nav-item '+(status === 0?'active':'')" @click="queryByStatus(0)"><a>所有商品</a></li>
              <li role="presentation" :class="'nav-item '+(status === 1?'active':'')" @click="queryByStatus(1)"><a>已上架 <span class="cr"></span></a></li>
              <li role="presentation" :class="'nav-item '+(status === 2?'active':'')" @click="queryByStatus(2)"><a>已下架 <span class="cr"></span></a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade active in" id="all">
                <table class="table text-center">
                  <tbody><tr>
                    <th width="380">商品信息</th>
                    <th width="85">单价</th>
                    <th width="85">销量</th>
                    <th width="120">库存</th>
                    <th width="120">交易状态</th>
                    <th width="120">交易操作</th>
                  </tr>
                  <tr v-if="total===0" class="order-empty"><td colspan="6">
                    <div class="empty-msg">没有上架任何商品，家里好像缺了点什么！<br><a>要不去上架商品？</a></div>
                  </td></tr>
                  <tr v-for="product in products" class="order-item">
                    <td>
                      <label>
                        <a class="num">
                          {{ product.createdTime }} 商品编号: {{ product.productId }}
                        </a>
                        <div class="card">
                          <div class="img"><img :src="require('../../../../../public/img/ud/S-007.jpg')" alt="" class="cover"></div>
                          <div class="name ep2">{{ product.name }}<br><br></div>
                          <div class="format">分类：{{ product.classification }}<br><br>规格：{{ product.specifications }}</div>
<!--                          <div class="favour">使用优惠券：优惠¥2.00</div>-->
                        </div>
                      </label>
                    </td>
                    <td>￥{{ product.price }}</td>
                    <td>{{product.salesVolume}}</td>
                    <td>{{product.inventory}}</td>
<!--                    <td>-->
<!--                      ￥1000-->
<!--                      <br>-->
<!--                      <span class="fz12 c6 text-nowrap">(含运费: ¥0.00)</span>-->
<!--                      <br>-->
<!--                      <span class="lease-tag">（租赁）</span>-->
<!--                    </td>-->
                    <td class="state">
                      <a class="but c6" v-if="product.status===1">已上架</a>
                      <a class="but c6" v-if="product.status===2">已下架</a>
                      <a class="but c9" @click="productDetail(product.productId)">商品详情</a>
                    </td>
                    <td class="order">
<!--                      <div class="del">-->
<!--                        <i class="el-icon-delete"></i>-->
<!--                      </div>-->
                      <a v-if="product.status===1" class="but but-primary" @click="downProduct(product.productId)">下架商品</a>
                      <a v-if="product.status===2" class="but but-primary" @click="rePublish(product.productId)">重新上架</a>
                    </td>
                  </tr>
                  </tbody>
                </table>

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
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import {getPage,add,getDetail,updateStatus,del,updatePassword} from '@/api/user';

  export default {
    data() {
      return{
        loading: false,
        status:0,

        currentPage: 1,
        total: 0,
        pageSize: 10,
        products:[]
      }


    },
    created() {
      this.getData();
    },
    mounted() {
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
        this.queryMyProducts(this.currentPage,this.pageSize,this.status)
      },
      queryByStatus(status){
        this.status=status;
        this.getData();
      },
      queryMyProducts(currentPage,pageSize,status){
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.loading = true;
        getPage({currentPage:currentPage,pageSize:pageSize,status: status,id:userInfo.id}).then(res => {
          this.loading = false;
          if(res.status === 200){
            this.data = res.data.records;
            this.total = res.data.total;
            this.products=res.data.records;

          }
        },error => {
          this.loading = false;
        })
      },
      rePublish(id){
        this.updateProductStatus(id,1)
      },
      downProduct(id){
        this.updateProductStatus(id,2)
      },
      updateProductStatus(id,status){
        updateStatus({id:id,status:status}).then(res => {
          if(res.status === 200){
            this.getData();
          }
        },error => {
          this.loading = false;
        })
      },
      productDetail(id){//商品详情
        this.$router.push({path: '/product/detail',query:{productId:id}});
      },
      receipt(){//确认收货
        this.$router.push({path: '/personal/receipt'});
      },
      returnPage(){//退款退货
        this.$router.push({path: '/personal/return'});
      }
    }
  };
</script>

<style scoped>
.pagination-wrapper {
  text-align: center; /* 让分页组件居中对齐 */
}
  .user-center > .pull-right {
    width: 950px;
    background-color: #fff;
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
  .order-list__box {
    margin-left: -20px;
    margin-right: -20px;
  }
  .order-panel {
    padding: 10px 20px;
  }
  .user-nav__title {
    height: 20px;
    line-height: 20px;
    padding: 10px 0;
    margin-bottom: 0;
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid #e0e0e0;
  }
  .nav-item.active::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -11px;
    border-bottom: 2px solid #b31e22;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
  }
  ol, ul {
    list-style: none;
  }
  .nav-item {
    color: #333;
    padding: 0 20px;
    line-height: 20px;
    position: relative;
  }
  .nav-item.active a, .nav-item:hover a {
    color: #b31e22;
  }
  .user-nav__title a {
    text-decoration: none;
    color: #333;
  }
  .tab-content > .tab-pane.active {
    display: block;
  }
  .tab-content > .tab-pane {
    display: none;
  }
  .fade.in {
    opacity: 1;
  }
  .order-panel .table {
    border-top: 2px solid #fff;
    margin-bottom: 0;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .text-center {
    text-align: center;
  }
  table {
    background-color: transparent;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  .text-center th {
    text-align: center;
  }
  .order-item {
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  table .order-item > td:first-child {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .table .order-item > td {
    padding-top: 50px;
  }
  .order-panel td:first-child {
    text-align: left;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .order-item .num {
    color: #666;
    line-height: 30px;
    text-decoration: none;
  }
  .order-item .card {
    height: 80px;
    position: relative;
    font-weight: normal;
  }
  .order-item .card .img {
    float: left;
    margin-right: 10px;
    width: 80px;
    height: 80px;
    border: 1px solid #999;
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
  .order-item .card .name {
    height: 2.8em;
    line-height: 1.4em;
  }
  .ep2 {
    -webkit-line-clamp: 2;
  }
  .ep2, .ep3, .ep4, .ep5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .order-item .card .format, .order-item .card .favour {
    color: #999;
    font-size: 12px;
    line-height: 1em;
    position: absolute;
    bottom: 16px;
    left: 90px;
  }
  .order-item .card .favour {
    bottom: 0;
    color: #b31e22;
  }
  .order-item .card .format, .order-item .card .favour {
    color: #999;
    font-size: 12px;
    line-height: 1em;
    position: absolute;
    bottom: 16px;
    left: 90px;
  }
  .table .order-item > td {
    padding-top: 50px;
  }
  .text-nowrap {
    white-space: nowrap;
  }
  .c6 {
    color: #666;
  }
  .fz12 {
    font-size: 12px;
  }
  .order-item .but.c6 {
    color: #666;
  }
  .order-item .but {
    display: block;
    text-decoration: none;
  }
  .order-item .but.c9 {
    color: #999;
  }
  .order-item .but {
    display: block;
    text-decoration: none;
  }
  .order-item .order {
    position: relative;
  }
  .order-item .order .del {
    color: #999;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .glyphicon-trash:before {
    content: "\e020";
  }
  .order-item .order .but-primary {
    color: #fff;
    border: 1px solid #b31e22;
    background-color: #b31e22;
  }
  .order-item .order .but {
    width: 80px;
    height: 24px;
    margin: auto;
    line-height: 22px;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  .order-item .but {
    display: block;
    text-decoration: none;
  }
  .order-item .order .but {
    width: 80px;
    height: 24px;
    margin: auto;
    line-height: 22px;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  .order-item .but.c3 {
    color: #333;
  }
  .order-item .but.cr {
    color: #b31e22;
  }
  .order-item .order .but-link {
    color: #666;
    border: 1px solid #bfbfbf;
  }
  .order-item:hover {
    border-radius: 3px;
    -webkit-box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
    -moz-box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
  }
  .order-item .order .but-primary:hover {
    border: 1px solid #931519;
    background-color: #931519;
  }
  .order-item .order .but.c3:hover {
    color: #666;
  }
  .text-right {
    text-align: right;
  }
  .page a.disabled {
    color: #999;
    border-color: #ccc;
  }
  .page a {
    color: #666;
    padding: 10px 15px;
    margin: 5px;
    line-height: 1em;
    border: 1px solid #999;
    display: inline-block;
    text-decoration: none;
  }
  .page a.select {
    color: #fff;
    border-color: #b31e22;
    background-color: #b31e22;
  }
  .page a {
    color: #666;
    padding: 10px 15px;
    margin: 5px;
    line-height: 1em;
    border: 1px solid #999;
    display: inline-block;
    text-decoration: none;
  }
  .page a {
    color: #666;
    padding: 10px 15px;
    margin: 5px;
    line-height: 1em;
    border: 1px solid #999;
    display: inline-block;
    text-decoration: none;
  }

  .order-empty .empty-msg, .coupon-list .empty-msg {
    width: 400px;
    margin: auto;
    line-height: 36px;
    padding: 40px 0 30px 120px;
    background-image: url("../../../../../public/img/ud/order-empty.gif");
    background-repeat: no-repeat;
    -webkit-background-size: 100px;
    background-size: 100px;
    background-position: center left;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  a {
    color: #97191d;
    text-decoration: none;
  }
  .order-item .card .favour {
    bottom: 0;
    color: #b31e22;
  }
</style>
