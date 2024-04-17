<template>
  <div style="min-height: 500px;text-align: center;line-height: 50px;">
    <div>测试页，这里显示内容，页面顶部和底部共用，内容页面都是一个个单独的页面实现，非常清晰。</div>
    <div>
      登录用户信息：{{userInfo?JSON.stringify(userInfo):''}}
    </div>
    <div>
      <el-button type="primary" @click="getPageFun">get请求</el-button>
      <el-button type="warning" @click="delFun">post请求</el-button>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  import {getStore,setStore} from "@/utils/store.js";
  import {getPage,add,getDetail,updateStatus,del,updatePassword} from '@/api/user';

  export default {
    data() {
      return {
        loading: false,
        page: {
          total: 0,
          pageSize: 10,
          currentPage: 1
        },
        ids: '12121,323343,545454'
      };
    },
    watch: {

    },
    computed: {
      ...mapGetters([
        'userInfo'
      ]),
    },
    mounted() {
    },
    methods: {
      getPageFun(){
        this.loading = true;
        getPage({type:'动漫综合1'}).then(res => {
          this.loading = false;
          if(res.code === 200){
            this.data = res.data;
            this.page.total = res.dataTotal;
          }
        },error => {
          this.loading = false;
        })
      },
      delFun(){
        this.loading = true;
        del(this.ids).then(res => {
          this.loading = false;
          if(res.code === 200){
            this.$message.success(res.msg);
            this.getPageFun();
          }
        },error => {
          this.loading = false;
          this.$message.error("操作失败，请重试");
        })
      }
    }
  };
</script>

<style>

</style>
