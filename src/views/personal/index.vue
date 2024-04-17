<template>
  <div class="page-scroll" style="width: 100%;height: 100%;overflow: auto;">
    <top></top>
    <div style="background-color: #f5f5f5;min-height: calc(100% - 410px);">
      <div class="contain-box" style="padding: 35px 0;">
        <div style="display: flex;">
          <div>
            <leftMenu></leftMenu>
          </div>
          <div style="margin-left: 20px;">
            <router-view></router-view>
          </div>
        </div>
      </div>

    </div>
    <foot></foot>
    <el-backtop target=".page-scroll" :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
  import top from "./top.vue";
  import leftMenu from "./left_menu.vue";
  import foot from "../../page/foot/index";

  export default {
    components: {
      top,
      leftMenu,
      foot
    },
    name: "index",
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

<style>
</style>
