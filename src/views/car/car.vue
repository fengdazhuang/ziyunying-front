<template>
  <div style="padding: 50px 0;">
    <div class="contain-box" style="margin: 0 auto;background: #ffffff;">
      <el-table
        :data="cars"
        @selection-change="selectionChange"
        style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column
          prop="url"
          label=""
          width="100">
          <template slot-scope="scope">
            <div v-if="scope.row.cover && scope.row.cover != ''" class="demo-image__preview">
              <el-image
                style="width: 80px; height: 80px"
                :src="scope.row.cover"
                :preview-src-list="scope.row.cover.split(',')"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="productName"
          label="商品名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价"
          width="180">
          <template slot-scope="scope">
            <div>{{scope.row.price}}元</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="num"
          label="数量">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" @change="handleChange(scope.row)" :min="1"></el-input-number>
          </template>

        </el-table-column>
        <el-table-column
          prop="total"
          label="小计">
          <template slot-scope="scope">
            <div style="color: #ff6700;">{{scope.row.total}}元</div>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="danger" circle icon="el-icon-close" plain @click="rowDel(scope)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="height: 40px;display: flex;">
        <div style="flex: 1;display: flex;">
          <div style="line-height: 40px;color: gray;margin: 0 20px;cursor: pointer;" @click="homePage">继续购物</div>
          <div style="line-height: 40px;color: gray;margin: 0 20px;">已选择<span style="color: #ff6700;">{{totalNum}}</span>件</div>
        </div>
        <div style="width: 250px;display: flex;">
          <div style="font-size: 18px;color: #ff6700;line-height: 40px;width: 200px;">合计{{totalPrice}}元</div>
          <div>
            <el-button type="warning" @click="toPay" :disabled="selectionList.length === 0" style=";margin-left: 20px;width: 100px;">去结算</el-button>
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
          loading: true,
          cars:[
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',cover:require('../../../public/img/ud/M-001.jpg'),price: 30,num: 1,total: 30},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',cover:require('../../../public/img/ud/M-001.jpg'),price: 40,num: 1,total: 40},
            {productName:'锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款',cover:require('../../../public/img/ud/M-001.jpg'),price: 50,num: 1,total: 50}
          ],
          selectionList: [],
          totalPrice: 0,
          totalNum: 0,
        }
      },
      computed: {
        ids() {
          const ids = [];
          this.selectionList.forEach(ele => {
            ids.push(ele.id)
          });
          return ids.join(',')
        }
      },
      mounted() {
        // this.initCar();
      },
      methods: {
        homePage(){
          this.$router.push({path: '/'});
        },
        initCar(){//刷新购物车
          this.selectionList= [];
          this.totalPrice = 0;
          this.totalNum = 0;
          this.cars = localStorage.getItem("cars")?JSON.parse(localStorage.getItem("cars")):[];
        },
        saveCar(){//刷新保存购物车
          localStorage.setItem('cars',JSON.stringify(this.cars));
        },
        selectionChange(val) { // checkbox选择
          this.selectionList = val;
          this.getTotalPrice();
        },
        getTotalPrice(){
          this.totalPrice = 0;
          this.totalNum = 0;
          this.selectionList.forEach(ele => {
            this.totalPrice += parseFloat(ele.total);
            this.totalNum += parseInt(ele.num);
          });
        },
        rowDel(scope) {
          console.info(scope);
          this.$confirm("确定将选择数据删除?", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.cars.splice(scope.$index,1);
              this.saveCar();
            })
            .then(() => {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            });
        },
        handleChange(row){//小计
          row.total = row.price * row.num;
          this.getTotalPrice();
          this.saveCar();
        },
        toPay(){//结算
          this.$router.push({path: '/pay'});
        }
      }
    }
</script>

<style scoped>

</style>
