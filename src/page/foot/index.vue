<template>
  <div style="font-size: 14px;">
    <div class="contain-box" style="margin-top: 50px;">
      <div style="display: flex;">
        <div style="flex: 1;display: flex;">
          <div style="">
            <div class="foot-title">帮助中心</div>
            <div class="foot-item">账户管理</div>
            <div class="foot-item">购物指南</div>
            <div class="foot-item">订单操作</div>
          </div>
          <div style="margin-left: 100px;">
            <div class="foot-title">服务支持</div>
            <div class="foot-item">账户管理</div>
            <div class="foot-item">购物指南</div>
            <div class="foot-item">订单操作</div>
          </div>
          <div style="margin-left: 100px;">
            <div class="foot-title">线下门店</div>
            <div class="foot-item">账户管理</div>
            <div class="foot-item">购物指南</div>
            <div class="foot-item">订单操作</div>
          </div>
          <div style="margin-left: 100px;">
            <div class="foot-title">支付方式</div>
            <div class="foot-item">账户管理</div>
            <div class="foot-item">购物指南</div>
            <div class="foot-item">订单操作</div>
          </div>
        </div>
        <div style="width: 250px;border-left: 1px solid #dfdfdf;text-align: center;">
          <div style="color: #19b4ea;font-weight: bold;font-size: 18px;line-height: 40px;">000-123456789</div>
          <div style="color: gray;">周一至周日8:00~18:00</div>
          <div style="color: gray;margin-bottom: 10px;">（节假日不休）</div>
          <el-button type="success" round icon="el-icon-headset">24小时客服在线</el-button>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
</script>

<style>
  .foot-title{
    height: 40px;
    line-height: 40px;
  }
  .foot-item{
    height: 25px;
    line-height: 25px;
    color: gray;
  }
  .foot-item:hover{
    cursor: pointer;
    color: #e37a2f;
  }
</style>
