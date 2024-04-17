<template>
    <div class="user-center">
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">订单中心-申请退款/退货</div>
          <div class="order-info__box">
            <div class="step-flow-box" style="width: 800px;margin: 0 auto 24px">
              <div class="step-flow__bd">
                <div class="step-flow__li step-flow__li_done">
                  <div class="step-flow__state"><i class="iconfont icon-ok"></i></div>
                  <p class="step-flow__title-top">买家申请</p>
                </div>
                <div class="step-flow__line step-flow__line_ing">
                  <div class="step-flow__process"></div>
                </div>
                <div class="step-flow__li">
                  <div class="step-flow__state"><i class="iconfont icon-ok"></i></div>
                  <p class="step-flow__title-top">卖家处理</p>
                </div>
                <div class="step-flow__line">
                  <div class="step-flow__process"></div>
                </div>
                <div class="step-flow__li">
                  <div class="step-flow__state"><i class="iconfont icon-ok"></i></div>
                  <p class="step-flow__title-top">完毕</p>
                </div>
              </div>
            </div>
            <hr>
            <div class="return-item__info">
              <div class="img"><img :src="require('../../../../../public/img/ud/M-001.jpg')" alt="" class="cover"></div>
              <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
              <div class="type">颜色分类：深棕色 尺码：均码</div>
              <div class="num">订单编号：156465416412132</div>
            </div>
           <div style="margin-top: 20px;">
             <el-form ref="form" :model="form" label-width="80px">
               <el-form-item label="服务类型:">
                 <el-radio-group v-model="form.resource">
                   <el-radio label="仅退款"></el-radio>
                   <el-radio label="退货退款"></el-radio>
                 </el-radio-group>
               </el-form-item>
               <el-form-item label="货物状态:">
                 <el-radio-group v-model="form.resource">
                   <el-radio label="未收到货"></el-radio>
                   <el-radio label="已收到货"></el-radio>
                 </el-radio-group>
               </el-form-item>
               <el-form-item label="退款金额">
                 <div style="color: #b31e22;">￥15.0</div>
               </el-form-item>
               <el-form-item label="退款原因:">
                 <el-select v-model="form.region" placeholder="请选择" clearable>
                   <el-option label="质量问题" value="1"></el-option>
                   <el-option label="发错货物" value="2"></el-option>
                   <el-option label="七天无理由退换" value="3"></el-option>
                 </el-select>
               </el-form-item>
               <el-form-item label="退款说明:">
                 <el-input type="textarea" v-model="form.desc" clearable></el-input>
               </el-form-item>
               <el-form-item>
                 <el-button type="danger" @click="onSubmit" style="background-color: #a11b1f;">提交</el-button>
               </el-form-item>
             </el-form>
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
        form: {}
      };
    },
    mounted() {
    },
    methods: {
      onSubmit(){

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
  .order-info__box {
    margin-top: 30px;
    line-height: 30px;
  }
  .step-flow-box {
    padding: 40px 15px 20px;
  }
  .step-flow__bd {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .step-flow__li {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1;
  }
  .step-flow__li::before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #e2e2e2;
    border-radius: 16px;
    margin-top: -16px;
    margin-left: -16px;
  }
  .step-flow__li_done .step-flow__state, .step-flow__li_done .step-flow__process, .step-flow__line_ing .step-flow__process {
    background-color: #b31e22;
  }
  .step-flow__state {
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    border-radius: 12px;
    box-sizing: border-box;
    background-color: #e2e2e2;
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-ok:before {
    content: "\2714";
  }
  .step-flow__title-top {
    position: absolute;
    color: #666;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    bottom: 24px;
    left: 50%;
    -webkit-transform: translate(-50%,0);
    transform: translate(-50%,0);
  }
  p {
    margin: 0 0 10px;
  }
  .step-flow__line {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #e2e2e2;
    height: 10px;
    position: relative;
  }
  .step-flow__line_ing .step-flow__process {
    width: 50%;
  }
  .step-flow__li_done .step-flow__state, .step-flow__li_done .step-flow__process, .step-flow__line_ing .step-flow__process {
    background-color: #b31e22;
  }
  .step-flow__process {
    position: absolute;
    height: 4px;
    width: 100%;
    top: 3px;
    z-index: 10;
    background-color: #e2e2e2;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  hr {
    box-sizing: content-box;
    height: 0;
  }
  .return-item__info {
    height: 80px;
    width: 500px;
    position: relative;
  }
  .return-item__info .img {
    float: left;
    width: 80px;
    height: 80px;
    margin-right: 10px;
    border: 1px solid #e0e0e0;
  }
  .cover {
    object-fit: cover;
  }
  .cover, .contain {
    width: 100%;
    height: 100%;
    object-position: center;
  }
  .return-item__info .name {
    max-height: 40px;
    font-size: 16px;
    line-height: 20px;
  }
  .ep2 {
    -webkit-line-clamp: 2;
  }
  .ep2, .ep3, .ep4, .ep5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .return-item__info .type {
    color: #999;
    text-wrap: normal;
    font-size: 12px;
  }
  .return-item__info .num {
    color: #666;
    font-size: 12px;
    position: absolute;
    line-height: 18px;
    bottom: 0;
    left: 90px;
  }
</style>
