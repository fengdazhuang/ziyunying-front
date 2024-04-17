<template>
    <div>
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部评价" name="first">
           <span slot="label">
              全部评价
              <span :style="'color: #ffffff;border-radius: 10px;padding: 2px 5px;'+(activeName==='first'?'background-color: #b31e22;':'background-color: #858585;')">1314</span>
            </span>
          <comment-list></comment-list>
        </el-tab-pane>
        <el-tab-pane label="好评" name="second">
            <span slot="label">
              好评
              <span :style="'color: #ffffff;border-radius: 10px;padding: 2px 5px;'+(activeName==='second'?'background-color: #b31e22;':'background-color: #858585;')">1000</span>
            </span>
          <comment-list></comment-list>
        </el-tab-pane>
        <el-tab-pane label="中评" name="third">
           <span slot="label">
              中评
              <span :style="'color: #ffffff;border-radius: 10px;padding: 2px 5px;'+(activeName==='third'?'background-color: #b31e22;':'background-color: #858585;')">314</span>
            </span>
          <comment-list></comment-list>
        </el-tab-pane>
        <el-tab-pane label="差评" name="fourth">
           <span slot="label">
              差评
              <span :style="'color: #ffffff;border-radius: 10px;padding: 2px 5px;'+(activeName==='fourth'?'background-color: #b31e22;':'background-color: #858585;')">0</span>
            </span>
          <comment-list></comment-list>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import commentList from "./comment_list.vue";

  export default {
    components:{
      commentList
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    mounted() {
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>

</style>
