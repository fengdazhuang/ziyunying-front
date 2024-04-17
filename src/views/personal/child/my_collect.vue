<template>
  <div>
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">订单中心-我的收藏</div>
        <div class="collection-list__area clearfix">
          <div class="item-card" v-for="item in myCollections" :key="i" @click="detailPage(item.productId)">
            <a class="photo">
              <img :src="require('../../../../public/img/ud/M-001.jpg')" alt="锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款" class="cover">
              <div class="name">{{ item.productName }}</div>
            </a>
            <div class="middle">
              <div class="price"><small>￥</small>{{ item.productPrice }}</div>
              <div class="sale"><a @click.stop="cancelCollect">取消收藏</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCollections} from "../../../api/user";

  export default {
    data() {
      return {
        myCollections:[]
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData(){
        this.getMyCollections()
      },
      getMyCollections(){
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        getCollections(userInfo.id).then((res)=>{
          if(res.status === 200){
            this.myCollections=res.data;
          }
        }),error => {
        }
      },
      detailPage(productId){//商品详情
        this.$router.push({path: '/product/detail',query:{productId:productId}});
      },
      cancelCollect(){//取消收藏

      }
    }
  };
</script>

<style scoped>
  .user-center > .pull-right {
    width: 950px;
    background-color: #fff;
    font-size: 14px;
  }
  .pull-right {
    float: right !important;
    background-color: #fff;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
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
  .collection-list__area {
    width: 100%;
    margin-top: 10px;
  }
  .collection-list__area .item-card {
    width: 205px;
    height: 320px;
  }
  .item-card {
    float: left;
    width: 250px;
    height: 360px;
    padding: 10px;
    position: relative;
    margin-bottom: 10px;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
  }
  .item-card .photo {
    width: 100%;
    height: 280px;
    display: block;
    position: relative;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  a {
    color: #97191d;
    text-decoration: none;
  }
  .cover {
    object-fit: cover;
  }
  .cover, .contain {
    width: 100%;
    height: 100%;
    object-position: center;
  }
  .item-card .photo > .name {
    color: #666;
    padding: 10px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .9);
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .item-card .middle {
    height: 36px;
    padding-top: 8px;
    overflow: hidden;
    line-height: 36px;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .item-card .price {
    float: left;
    color: #b31e22;
    font-size: 18px;
    font-weight: bold;
  }
  .item-card .price small {
    font-size: 12px;
  }
  .item-card .sale {
    opacity: 0;
    float: right;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  .item-card:hover {
    -webkit-box-shadow: 0 10px 15px rgba(255, 0, 0, 0.3);
    -moz-box-shadow: 0 10px 15px rgba(255,0,0,.3);
    box-shadow: 0 10px 15px rgba(255, 0, 0, 0.3);
  }
  a:hover, a:focus {
    color: #550e10;
    text-decoration: underline;
  }
  a:active, a:hover {
    outline: 0;
  }
  .item-card:hover .sale, .item-card .no-hide {
    opacity: 1;
  }

</style>
