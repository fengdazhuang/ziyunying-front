<template>
    <div style="font-size: 14px;">
      <div style="border: 1px solid #e0e0e0;height: 80px;padding: 10px 20px;display: flex;line-height: 40px;color: #999;">
        <div style="width: 50%;">
          <div style="height: 40px;">商品编号：D-8812</div>
          <div style="height: 40px;">商品毛重：200克</div>
        </div>
        <div style="width: 50%;">
          <div style="height: 40px;">上架时间：2017-06-24</div>
          <div style="height: 40px;">商品库存：1000件</div>
        </div>
      </div>

      <div style="padding: 10px;text-align: center;">
        <el-image v-for="i in 39" :src="'http://shop.jlkjgf.cn/images/temp/S-001_'+i+'.jpg'" :key="item"></el-image>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    mounted() {
    },
    methods: {

    }
  };
</script>

<style scoped>

</style>
