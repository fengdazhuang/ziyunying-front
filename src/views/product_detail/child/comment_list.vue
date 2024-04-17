<template>
    <div style="font-size: 14px;">
      <div v-for="(item,index) in comments" :key="index" style="padding: 10px  10px 10px 0;display: flex;">
        <div style="text-align: center;width: 100px;">
          <div>
            <el-image :src="item.avatar" style="width: 60px;height: 60px;border-radius: 50%;"></el-image>
          </div>
          <div>
            {{item.nickname}}
          </div>
        </div>
        <div style="flex: 1;border-bottom: 1px solid #e0e0e0;padding-bottom: 10px;">
          <div style="margin-bottom: 10px;">{{item.content}}</div>
          <div>
            <el-image v-for="(item2,index2) in item.imgList" :key="index2" :preview-src-list="item.imgList" :src="item2" style="width: 65px;height: 65px;margin-right: 10px;"></el-image>
          </div>
          <div style="color: #999;">
            <span style="margin-right: 10px;">{{item.createTime}}</span>
            <span style="margin-right: 10px;">颜色分类：{{item.color}}</span>
            <span style="margin-right: 10px;">尺码：{{item.size}}</span>
          </div>
        </div>
      </div>

      <div style="text-align: center;margin-top: 20px;">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        comments: [
          {avatar:require('../../../../public/img/ud/default_avt.png'),nickname:'高***恒',content:'真是特别美_回头穿了晒图',createTime:'2017年08月11日 20:31',color:'深棕色',size:'均码',
            imgList: [
              require('../../../../public/img/ud/S-001-1_s.jpg'),
              require('../../../../public/img/ud/S-001-2_s.jpg'),
              require('../../../../public/img/ud/S-001-3_s.jpg'),
              require('../../../../public/img/ud/S-001-4_s.jpg'),
              require('../../../../public/img/ud/S-001-5_s.jpg'),
            ]
          },
          {avatar:require('../../../../public/img/ud/default_avt.png'),nickname:'高***恒',content:'真是特别美_回头穿了晒图',createTime:'2017年08月11日 20:31',color:'深棕色',size:'均码',
            imgList: [
              require('../../../../public/img/ud/S-001-1_s.jpg'),
              require('../../../../public/img/ud/S-001-2_s.jpg'),
              require('../../../../public/img/ud/S-001-3_s.jpg'),
              require('../../../../public/img/ud/S-001-4_s.jpg'),
              require('../../../../public/img/ud/S-001-5_s.jpg'),
            ]
          },
          {avatar:require('../../../../public/img/ud/default_avt.png'),nickname:'高***恒',content:'真是特别美_回头穿了晒图',createTime:'2017年08月11日 20:31',color:'深棕色',size:'均码',
            imgList: [
              require('../../../../public/img/ud/S-001-1_s.jpg'),
              require('../../../../public/img/ud/S-001-2_s.jpg'),
              require('../../../../public/img/ud/S-001-3_s.jpg'),
              require('../../../../public/img/ud/S-001-4_s.jpg'),
              require('../../../../public/img/ud/S-001-5_s.jpg'),
            ]
          },
          {avatar:require('../../../../public/img/ud/default_avt.png'),nickname:'高***恒',content:'真是特别美_回头穿了晒图',createTime:'2017年08月11日 20:31',color:'深棕色',size:'均码',
            imgList: [
              require('../../../../public/img/ud/S-001-1_s.jpg'),
              require('../../../../public/img/ud/S-001-2_s.jpg'),
              require('../../../../public/img/ud/S-001-3_s.jpg'),
              require('../../../../public/img/ud/S-001-4_s.jpg'),
              require('../../../../public/img/ud/S-001-5_s.jpg'),
            ]
          },
          {avatar:require('../../../../public/img/ud/default_avt.png'),nickname:'高***恒',content:'真是特别美_回头穿了晒图',createTime:'2017年08月11日 20:31',color:'深棕色',size:'均码',
            imgList: [
              require('../../../../public/img/ud/S-001-1_s.jpg'),
              require('../../../../public/img/ud/S-001-2_s.jpg'),
              require('../../../../public/img/ud/S-001-3_s.jpg'),
              require('../../../../public/img/ud/S-001-4_s.jpg'),
              require('../../../../public/img/ud/S-001-5_s.jpg'),
            ]
          },
          {avatar:require('../../../../public/img/ud/default_avt.png'),nickname:'高***恒',content:'真是特别美_回头穿了晒图',createTime:'2017年08月11日 20:31',color:'深棕色',size:'均码',
            imgList: [
              require('../../../../public/img/ud/S-001-1_s.jpg'),
              require('../../../../public/img/ud/S-001-2_s.jpg'),
              require('../../../../public/img/ud/S-001-3_s.jpg'),
              require('../../../../public/img/ud/S-001-4_s.jpg'),
              require('../../../../public/img/ud/S-001-5_s.jpg'),
            ]
          },
          {avatar:require('../../../../public/img/ud/default_avt.png'),nickname:'高***恒',content:'真是特别美_回头穿了晒图',createTime:'2017年08月11日 20:31',color:'深棕色',size:'均码',
            imgList: [
              require('../../../../public/img/ud/S-001-1_s.jpg'),
              require('../../../../public/img/ud/S-001-2_s.jpg'),
              require('../../../../public/img/ud/S-001-3_s.jpg'),
              require('../../../../public/img/ud/S-001-4_s.jpg'),
              require('../../../../public/img/ud/S-001-5_s.jpg'),
            ]
          },
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
