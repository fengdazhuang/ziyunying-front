<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">账户信息-积分平台</div>
        <ul class="nav user-nav__title" role="tablist">
          <li role="presentation" :class="'nav-item '+(tabIndex===1?'active':'')" @click="selTab(1)"><a >未使用</a></li>
          <li role="presentation" :class="'nav-item '+(tabIndex===2?'active':'')" @click="selTab(2)"><a>已使用</a></li>
          <li role="presentation" :class="'nav-item '+(tabIndex===3?'active':'')" @click="selTab(3)"><a>已过期</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" :class="'tab-pane fade '+(tabIndex===1?'in active':'')" id="useful">
            <div class="coupon-list">
              <div class="coupon">
                <div class="coupon-hd">
                  <b><small class="fz16">¥</small>2.00</b>
                  <div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div>
                </div>
                <div class="coupon-bd">
                  <div class="fz12 c9">券号：70000503249136</div>
                  <div class="fz12 c9">规则： 消费需满50元</div>
                </div>
                <a class="coupon-ft">立即使用</a>
              </div>

              <div class="coupon">
                <div class="coupon-hd">
                  <b><small class="fz16">¥</small>5.00</b>
                  <div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div>
                </div>
                <div class="coupon-bd">
                  <div class="fz12 c9">券号：70000503249137</div>
                  <div class="fz12 c9">规则： 消费需满60元</div>
                </div>
                <a class="coupon-ft">立即使用</a>
              </div>

              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>1.50</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249137</div><div class="fz12 c9">规则： 消费需满30元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>1.00</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满20元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>1.50</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满25元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>100.00</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满2000元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>150.00</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满2500元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>100.00</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满2000元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>88.00</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满890元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>2.00</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满5元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>1.00</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满2元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
              <div class="coupon">
                <div class="coupon-hd"><b><small class="fz16">¥</small>99999.00</b><div class="fz12">【使用期限】<br>2017.09.20至2017.12.5</div></div>
                <div class="coupon-bd"><div class="fz12 c9">券号：70000503249136</div><div class="fz12 c9">规则： 消费需满100000元</div></div>
                <a class="coupon-ft">立即使用</a>
              </div>
            </div>
          </div>

          <div role="tabpanel" :class="'tab-pane fade '+(tabIndex===2?'in active':'')" id="used">
            <div class="coupon-list">
              <div class="empty-msg">哇，居然没有优惠券了？</div>
            </div>
          </div>

          <div role="tabpanel" :class="'tab-pane fade '+(tabIndex===3?'in active':'')" id="overdue">
            <div class="coupon-list">
              <div class="coupon" v-for="i in 10" :key="i">
                <div class="coupon-hd">
                  <b><small class="fz16">¥</small>2.00</b>
                  <div class="fz12">
                    【使用期限】
                    <br>
                    2017.09.20至2017.12.5
                  </div>
                </div>
                <div class="coupon-bd">
                  <div class="fz12 c9">
                    券号：70000503249136</div>
                  <div class="fz12 c9">
                    规则： 消费需满50元
                  </div>
                </div>
                <a class="coupon-ft">已经过期</a>
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
</template>

<script>
  export default {
    data() {
      return {
        tabIndex: 1,
      };
    },
    mounted() {
    },
    methods: {
      selTab(index){
        this.tabIndex = index;
      }
    }
  };
</script>

<style scoped>
  .user-center > .pull-right {
    width: 950px;
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
  .bgf {
    background-color: #fff;
  }
  .user-content__box .title {
    color: #666;
    line-height: 36px;
    border-bottom: 1px solid #e0e0e0;
  }
  .user-nav__title {
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
  .coupon-list {
    display: -webkit-flex;
    display: flex;
    flex-flow: row wrap;
    margin: 10px -9px 20px;
  }
  .coupon-list .coupon {
    margin: 10px;
    width: 210px;
    height: 220px;
    position: relative;
  }
  .coupon-hd {
    color: #fff;
    background-color: #f98282;
    text-align: center;
    position: relative;
    padding: 20px 10px 15px;
    border-radius: 10px 10px 0 0;
  }
  .coupon-hd::before {
    content: "";
    height: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background-image: -webkit-gradient(linear,50% 0,0 100%,from(transparent),color-stop(.5,transparent),color-stop(.5,#fff),to(#fff)),-webkit-gradient(linear,50% 0,100% 100%,from(transparent),color-stop(.5,transparent),color-stop(.5,#fff),to(#fff));
    background-size: 1rem 1rem;
    background-repeat: repeat-x;
  }
  .coupon-hd b {
    font-size: 30px;
    line-height: 50px;
  }
  b, strong {
    font-weight: bold;
  }
  .fz16 {
    font-size: 16px;
  }
  .fz12 {
    font-size: 12px;
  }
  .coupon-bd {
    width: 100%;
    padding: 15px 0;
    margin-top: -10px;
    white-space: nowrap;
    position: absolute;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    text-align: center;
  }
  .c9 {
    color: #999;
  }
  .coupon-ft {
    color: #f98282 !important;
    width: 100%;
    height: 40px;
    padding-top: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    border: 1px solid #e0e0e0;
    border-top: 0;
    text-decoration: none !important;
    border-radius: 0 0 10px 10px;
  }
  .coupon-ft::before {
    content: '';
    height: 18px;
    width: 210px;
    display: block;
    position: absolute;
    top: -10px;
    left: -1px;
    background-image: url(data:image/gif;base64,R0lGODlh0gASAKIAAObm5uzs7Pr6+vLy8vf39+Pj4+Dg4P///yH5BAAAAAAALAAAAADSABIAAAP/aBB0/jDKSau9OOvNu/8YEQDGIQwAIIBs675wLFtCOqzQUDRz7//AYKgwqBAKOKFyyWxiBLsLykmtWoGAIgbAu3q/4BBAMwiEz+hzQPs0uN+GaOQIr8e7D7r9LYfo93cSf3t9eQWAboUOg3aKB4x1jpBwkoeIhUgtRxKOfgWceIKfEZ2GoBabpKFzoxCli60Pr4+xDrOprqueECWatQe3v8GnRsK6pqqoxsrEFLiyx7DNE8+9GQKEq5N82paAlYiBrOHgl93k5+ai6OvqsklSZmnz9E1rGlz1+vs+BGMYU/gJHNgiy4Uj8AgqXEjjlY5oDCMyPMLGwYkUCSVqlFgjDMsKBQw2ihz5aISBBAA7);
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .nav-item.active::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -11px;
    border-bottom: 2px solid #b31e22;
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

  .coupon-list .empty-msg {
    padding-top: 130px;
    text-align: center;
    background-position: center;
    width: 400px;
    margin: auto;
    line-height: 36px;
    background-image: url("../../../../public/img/ud/order-empty.gif");
    background-repeat: no-repeat;
    background-size: 100px;
  }
  #used .coupon-hd, #overdue .coupon-hd {
    background-color: #b8b8b8;
  }
  #overdue .coupon::after {
    background-image: url("../../../../public/img/ud/coupon_overdue.png");
  }
  .coupon::after {
    content: '';
    display: block;
    position: absolute;
    width: 80px;
    height: 80px;
    bottom: 50px;
    right: 20px;
  }
  #used .coupon-ft, #overdue .coupon-ft {
    color: #999 !important;
  }
</style>
