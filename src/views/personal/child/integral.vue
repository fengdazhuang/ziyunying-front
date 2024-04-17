<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">账户信息-积分平台</div>
        <ul class="nav user-nav__title" role="tablist">
          <li role="presentation" :class="'nav-item '+(tabIndex1===1?'active':'')" @click="selTab1(1)"><a>我的积分</a></li>
          <li role="presentation" :class="'nav-item '+(tabIndex1===2?'active':'')" @click="selTab1(2)"><a>积分明细</a></li>
        </ul>
        <div class="integral-box clearfix bgf5">
          <div class="integral-total">
            <div class="fz16">可用的积分</div>
            <b class="num">888</b>
          </div>
          <div class="integral-desc">
            <b class="cr fz16">积分使用规则：</b><br>
            <span class="c3">1、如何获得积分？</span>
            <ul>
              <li>1) 积分可以通过在购买商品获得，积分会在确认收货的时候增加。</li>
              <li>2) 通过签到获得：每次签到可获得 3 积分</li>
            </ul>
            <span class="c3">2、如何使用积分？</span>
            <ul><li>可使用积分兑换商品</li></ul>
          </div>
        </div>

        <div class="tab-content">
          <div :class="'tab-pane fade '+(tabIndex1===1?'in active':'')">
            <p class="fz18 cr">商品兑换</p>
            <ul class="nav user-nav__title" role="tablist">
              <li role="presentation" :class="'nav-item '+(tabIndex2===1?'active':'')" @click="selTab2(1)"><a>全部</a></li>
              <li role="presentation" :class="'nav-item '+(tabIndex2===2?'active':'')" @click="selTab2(2)"><a>可兑换</a></li>
            </ul>
            <div class="table-thead">
              <div class="tdf3">商品信息</div>
              <div class="tdf2">市场价</div>
              <div class="tdf2">所需积分</div>
              <div class="tdf1">操作</div>
            </div>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active" id="all">
                <div class="integral-item__list">
                  <div class="integral-item">
                    <div class="tdf3">
                      <a class="integral-item__info">
                        <div class="img"><img :src="require('../../../../public/img/ud/M-001.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                        <div class="type">颜色分类：深棕色 尺码：均码</div>
                      </a>
                    </div>
                    <div class="tdf2"><span class="c9">¥269.90</span></div>
                    <div class="tdf2"><span class="cr">500</span></div>
                    <div class="tdf1">
                      <a class="but">兑换</a>
                    </div>
                  </div>
                  <div class="integral-item">
                    <div class="tdf3">
                      <a class="integral-item__info">
                        <div class="img"><img :src="require('../../../../public/img/ud/M-002.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套</div>
                        <div class="type">颜色分类：深棕色 尺码：均码</div>
                      </a>
                    </div>
                    <div class="tdf2"><span class="c9">¥1269.90</span></div>
                    <div class="tdf2"><span class="cr">2000</span></div>
                    <div class="tdf1">
                      <a class="but disabled">积分不够</a>
                    </div>
                  </div>
                  <div class="integral-item">
                    <div class="tdf3">
                      <a class="integral-item__info">
                        <div class="img"><img :src="require('../../../../public/img/ud/M-003.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套</div>
                        <div class="type">颜色分类：深棕色 尺码：均码</div>
                      </a>
                    </div>
                    <div class="tdf2"><span class="c9">¥1269.90</span></div>
                    <div class="tdf2"><span class="cr">700</span></div>
                    <div class="tdf1">
                      <a class="but">兑换</a>
                    </div>
                  </div>
                  <div class="integral-item">
                    <div class="tdf3">
                      <a class="integral-item__info">
                        <div class="img"><img :src="require('../../../../public/img/ud/M-001.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套</div>
                        <div class="type">颜色分类：深棕色 尺码：均码</div>
                      </a>
                    </div>
                    <div class="tdf2"><span class="c9">¥1269.90</span></div>
                    <div class="tdf2"><span class="cr">700</span></div>
                    <div class="tdf1">
                      <a class="but">兑换</a>
                    </div>
                  </div>
                  <div class="integral-item">
                    <div class="tdf3">
                      <a class="integral-item__info">
                        <div class="img"><img :src="require('../../../../public/img/ud/M-002.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套</div>
                        <div class="type">颜色分类：深棕色 尺码：均码</div>
                      </a>
                    </div>
                    <div class="tdf2"><span class="c9">¥1269.90</span></div>
                    <div class="tdf2"><span class="cr">700</span></div>
                    <div class="tdf1">
                      <a class="but">兑换</a>
                    </div>
                  </div>
                  <div class="integral-item">
                    <div class="tdf3">
                      <a class="integral-item__info">
                        <div class="img"><img :src="require('../../../../public/img/ud/M-003.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套</div>
                        <div class="type">颜色分类：深棕色 尺码：均码</div>
                      </a>
                    </div>
                    <div class="tdf2"><span class="c9">¥1269.90</span></div>
                    <div class="tdf2"><span class="cr">700</span></div>
                    <div class="tdf1">
                      <a class="but">兑换</a>
                    </div>
                  </div>
                  <div class="integral-item">
                    <div class="tdf3">
                      <a class="integral-item__info">
                        <div class="img"><img :src="require('../../../../public/img/ud/M-006.jpg')" alt="" class="cover"></div>
                        <div class="name ep2">霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套</div>
                        <div class="type">颜色分类：深棕色 尺码：均码</div>
                      </a>
                    </div>
                    <div class="tdf2"><span class="c9">¥1269.90</span></div>
                    <div class="tdf2"><span class="cr">700</span></div>
                    <div class="tdf1">
                      <a class="but">兑换</a>
                    </div>
                  </div>
                </div>
                <div class="page text-right clearfix">
                  <a class="disabled">上一页</a>
                  <a class="select">1</a>
                  <a>2</a>
                  <a>3</a>
                  <a class="">下一页</a>
                </div>
              </div>
            </div>
          </div>
          <div :class="'tab-pane fade '+(tabIndex1===2?'in active':'')">
            <div class="table-thead">
              <div class="tdf3">来源/用途</div>
              <div class="tdf2">积分变化</div>
              <div class="tdf2">日期</div>
              <div class="tdf1">备注</div>
            </div>
            <div class="integral-item__list">
              <div class="integral-item">
                <div class="tdf3">
                  <a class="integral-item__info">
                    <div class="img"><img :src="require('../../../../public/img/ud/M-002.jpg')" alt="" class="cover"></div>
                    <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type">颜色分类：深棕色 尺码：均码</div>
                  </a>
                </div>
                <div class="tdf2">
                  <b class="fz24 cg">+200</b>
                </div>
                <div class="tdf2"><span class="c6">2017年4月12日 15:13:14</span></div>
                <div class="tdf1">
                  <span class="c6">交易获得</span>
                </div>
              </div>
              <div class="integral-item">
                <div class="tdf3">
                  <a class="integral-item__info">
                    <div class="img"><img :src="require('../../../../public/img/ud/M-009.jpg')" alt="" class="cover"></div>
                    <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type">颜色分类：深棕色 尺码：均码</div>
                  </a>
                </div>
                <div class="tdf2">
                  <b class="fz24 cr">-1500</b>
                </div>
                <div class="tdf2"><span class="c6">2017年4月12日 15:13:14</span></div>
                <div class="tdf1">
                  <span class="c6">兑换消耗</span>
                </div>
              </div>
              <div class="integral-item">
                <div class="tdf3">
                  <a class="integral-item__info">
                    <div class="img"><img :src="require('../../../../public/img/ud/M-003.jpg')" alt="" class="cover"></div>
                    <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type">颜色分类：深棕色 尺码：均码</div>
                  </a>
                </div>
                <div class="tdf2">
                  <b class="fz24 cg">+300</b>
                </div>
                <div class="tdf2"><span class="c6">2017年4月12日 15:13:14</span></div>
                <div class="tdf1">
                  <span class="c6">交易获得</span>
                </div>
              </div>
              <div class="integral-item">
                <div class="tdf3">
                  <a class="integral-item__info">
                    <div class="img"><img :src="require('../../../../public/img/ud/M-004.jpg')" alt="" class="cover"></div>
                    <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type">颜色分类：深棕色 尺码：均码</div>
                  </a>
                </div>
                <div class="tdf2">
                  <b class="fz24 cg">+250</b>
                </div>
                <div class="tdf2"><span class="c6">2017年4月12日 15:13:14</span></div>
                <div class="tdf1">
                  <span class="c6">交易获得</span>
                </div>
              </div>
              <div class="integral-item">
                <div class="tdf3">
                  <a class="integral-item__info">
                    <div class="img"><img :src="require('../../../../public/img/ud/M-007.jpg')" alt="" class="cover"></div>
                    <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type">颜色分类：深棕色 尺码：均码</div>
                  </a>
                </div>
                <div class="tdf2">
                  <b class="fz24 cg">+450</b>
                </div>
                <div class="tdf2"><span class="c6">2017年4月12日 15:13:14</span></div>
                <div class="tdf1">
                  <span class="c6">交易获得</span>
                </div>
              </div>
              <div class="integral-item">
                <div class="tdf3">
                  <a class="integral-item__info">
                    <div class="img"><img :src="require('../../../../public/img/ud/M-001.jpg')" alt="" class="cover"></div>
                    <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type">颜色分类：深棕色 尺码：均码</div>
                  </a>
                </div>
                <div class="tdf2">
                  <b class="fz24 cr">-1000</b>
                </div>
                <div class="tdf2"><span class="c6">2017年4月12日 15:13:14</span></div>
                <div class="tdf1">
                  <span class="c6">兑换消耗</span>
                </div>
              </div>
              <div class="integral-item">
                <div class="tdf3">
                  <a class="integral-item__info">
                    <div class="img"><img :src="require('../../../../public/img/ud/M-007.jpg')" alt="" class="cover"></div>
                    <div class="name ep2">锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款</div>
                    <div class="type">颜色分类：深棕色 尺码：均码</div>
                  </a>
                </div>
                <div class="tdf2">
                  <b class="fz24 cr">-12450</b>
                </div>
                <div class="tdf2"><span class="c6">2017年4月12日 15:13:14</span></div>
                <div class="tdf1">
                  <span class="c6">兑换消耗</span>
                </div>
              </div>
            </div>
            <div class="page text-right clearfix">
              <a class="disabled">上一页</a>
              <a class="select">1</a>
              <a>2</a>
              <a>3</a>
              <a class="">下一页</a>
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
        tabIndex1: 1,
        tabIndex2: 1
      };
    },
    mounted() {
    },
    methods: {
      selTab1(index){
        this.tabIndex1 = index;
      },
      selTab2(index){
        this.tabIndex2 = index;
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
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  .user-content__box {
    padding: 10px 24px;
  }
  .user-content__box .title {
    color: #666;
    line-height: 36px;
    border-bottom: 1px solid #e0e0e0;
  }
  .user-nav__title {
    height: 20px;
    line-height: 40px;
    padding: 10px 0;
    margin-bottom: 0;
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid #e0e0e0;
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
    cursor: pointer;
  }
  .nav-item.active a, .nav-item:hover a {
    color: #b31e22;
  }
  .user-nav__title a {
    text-decoration: none;
    color: #333;
  }
  .nav-item + .nav-item::before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: #d3d3d3;
    position: absolute;
    left: 0;
  }
  .nav-item.active::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -11px;
    border-bottom: 2px solid #b31e22;
  }
  .integral-box {
    width: 100%;
    height: 150px;
    margin: 20px auto;
    border: 1px solid #e0e0e0;
  }
  .bgf5 {
    background-color: #f5f5f5;
  }
  .integral-total {
    float: left;
    height: 60px;
    margin: 24px 0;
    line-height: 1.2;
    margin-right: 50px;
    padding: 20px 50px;
    text-align: center;
    border-right: 1px solid #e0e0e0;
  }
  .fz16 {
    font-size: 16px;
  }
  .integral-total .num {
    color: #b31e22;
    font-size: 36px;
  }
  b, strong {
    font-weight: bold;
  }
  .integral-desc {
    font-size: 12px;
    height: 148px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .cr {
    color: #b31e22;
  }
  .c3 {
    color: #333;
  }
  .integral-desc ul {
    color: #666;
    text-indent: 2em;
    margin-bottom: 5px;
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
  .fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
  }
  .fz18 {
    font-size: 18px;
  }
  p {
    margin: 0 0 10px;
  }
  .table-thead {
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    color: #666;
    height: 30px;
    line-height: 28px;
    margin: 20px auto;
    background-color: #f1f1f1;
    border: 1px solid #e0e0e0;
  }
  .tdf3 {
    flex: 3;
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
  .tdf2 {
    flex: 2;
  }
  .tdf1, .tdf2, .tdf3 {
    text-align: center;
    align-self: center;
  }
  .tdf1 {
    flex: 1;
  }
  .tdf1, .tdf2, .tdf3 {
    text-align: center;
    align-self: center;
  }
  .integral-item {
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    height: 100px;
    margin: 10px auto;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    transition: all .3s;
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
  }
  .integral-item__info {
    width: 100%;
    height: 60px;
    text-align: left;
    text-decoration: none !important;
  }
  .integral-item__info .img {
    float: left;
    margin: 0 10px;
    border: 1px solid #999;
    width: 60px;
    height: 60px;
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
  .integral-item__info .name {
    color: #666;
    height: 2.4em;
    line-height: 1.2em;
  }
  .ep2 {
    -webkit-line-clamp: 2;
  }
  .ep2, .ep3, .ep4, .ep5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .integral-item__info .type {
    color: #999;
    font-size: 12px;
    margin-top: 14px;
    line-height: 1em;
  }
  .c9 {
    color: #999;
  }
  .integral-item .but, .user-addr__form .but {
    color: #fff;
    width: 100px;
    height: 30px;
    margin: auto;
    display: block;
    font-size: 12px;
    line-height: 30px;
    border-radius: 5px;
    text-decoration: none;
    background-color: #b31e22;
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
  .integral-item .but.disabled {
    pointer-events: none;
    background-color: #999;
    background-image: none;
  }
  .integral-item:hover {
    border-color: #fff;
    -webkit-box-shadow: 0 0 10px rgba(200, 0, 0, 0.3);
    -moz-box-shadow: 0 0 10px rgba(200, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(200, 0, 0, 0.3);
  }
  .integral-item .but:active, .user-addr__form .but:active {
    background-color: #611111;
  }
  .integral-item .but:hover, .user-addr__form .but:hover {
    background-color: #a11b1f;
  }
  .cg {
    color: #280;
  }
  .fz24 {
    font-size: 24px;
  }
</style>
