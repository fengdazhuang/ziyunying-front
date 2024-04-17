<template>
    <div style="width: 100%;height: 100%;overflow: scroll;background: #EEEEEE;">
      <top style="background: #FFFFFF;"></top>
      <car ref="car"></car>
    </div>
</template>

<script>
  import top from "../../page/top/carTop";
  import car from "./car";
  import foot from "../../page/foot/index";
  export default {
    components: {
      "top": top,
      "car": car,
      "foot": foot,
    },
    data() {
      return {
        loading: true,
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
