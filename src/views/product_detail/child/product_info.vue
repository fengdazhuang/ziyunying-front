<template>
    <div style="font-size: 14px;border: 1px solid #e0e0e0;padding: 10px;">
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
        <el-image v-for="(item,index) in imgList" :src="item" :key="index"></el-image>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        imgList:[
          require('../../../../public/img/ud/detail/S-001_1.jpg'),
          require('../../../../public/img/ud/detail/S-001_2.jpg'),
          require('../../../../public/img/ud/detail/S-001_3.jpg'),
          require('../../../../public/img/ud/detail/S-001_4.jpg'),
          require('../../../../public/img/ud/detail/S-001_5.jpg'),
          require('../../../../public/img/ud/detail/S-001_6.jpg'),
          require('../../../../public/img/ud/detail/S-001_7.jpg'),
          require('../../../../public/img/ud/detail/S-001_8.jpg'),
          require('../../../../public/img/ud/detail/S-001_9.jpg'),
          require('../../../../public/img/ud/detail/S-001_10.jpg'),
          require('../../../../public/img/ud/detail/S-001_11.jpg'),
          require('../../../../public/img/ud/detail/S-001_12.jpg'),
          require('../../../../public/img/ud/detail/S-001_13.jpg'),
          require('../../../../public/img/ud/detail/S-001_14.jpg'),
          require('../../../../public/img/ud/detail/S-001_15.jpg'),
          require('../../../../public/img/ud/detail/S-001_16.jpg'),
          require('../../../../public/img/ud/detail/S-001_17.jpg'),
          require('../../../../public/img/ud/detail/S-001_18.jpg'),
          require('../../../../public/img/ud/detail/S-001_19.jpg'),
          require('../../../../public/img/ud/detail/S-001_20.jpg'),
          require('../../../../public/img/ud/detail/S-001_21.jpg'),
          require('../../../../public/img/ud/detail/S-001_22.jpg'),
          require('../../../../public/img/ud/detail/S-001_23.jpg'),
          require('../../../../public/img/ud/detail/S-001_24.jpg'),
          require('../../../../public/img/ud/detail/S-001_25.jpg'),
          require('../../../../public/img/ud/detail/S-001_26.jpg'),
          require('../../../../public/img/ud/detail/S-001_27.jpg'),
          require('../../../../public/img/ud/detail/S-001_28.jpg'),
          require('../../../../public/img/ud/detail/S-001_29.jpg'),
          require('../../../../public/img/ud/detail/S-001_37.jpg'),
          require('../../../../public/img/ud/detail/S-001_38.jpg'),
          require('../../../../public/img/ud/detail/S-001_39.jpg'),
          require('../../../../public/img/ud/detail/S-001_40.jpg'),
        ]
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
