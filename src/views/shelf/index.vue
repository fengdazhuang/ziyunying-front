<template>
  <div class="contain-box" style="font-size: 14px;">
    <div style="height: 30px;border-bottom: 1px solid #b31e22;margin-top: 20px;display: flex;">
      <div style="width: 150px;background-color: #b31e22;line-height: 30px;color: #ffffff;text-align: center;">
        下架通知
      </div>
    </div>
    <div style="margin-top: 20px;">
      <div v-for="i in 5">
        <span style="color: #b31e22;">9月18日下架货号：</span>
        <span>A100、RHW-083#、6912、RZ-JCT21、K601、WBX 4301#</span>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
