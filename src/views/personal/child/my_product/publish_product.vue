<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">商品管理-发布商品</div>

      </div>
      <div >
        <el-form :model="product" :rules="rules" ref="productForm" label-width="100px" @submit.native.prevent="addProduct">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="product.name" placeholder="请输入商品名称" clearable :style="{ width: '300px' }"></el-input>
          </el-form-item>
          <el-form-item label="商品类别" prop="classification">
            <el-select v-model="product.classification" placeholder="请选择商品类别">
              <el-option label="种子" value="种子"></el-option>
              <el-option label="成花" value="成花"></el-option>
              <el-option label="药品" value="药品"></el-option>
              <el-option label="食品" value="食品"></el-option>
              <!-- 根据需要添加更多选项 -->
            </el-select>
          </el-form-item>
          <el-form-item label="售价和规格">
            <el-row>
              <el-col :span="12">
                <el-input v-model.number="product.price" placeholder="请输入售价" clearable :style="{ width: '250px' }"></el-input>
              </el-col>
              <el-col :span="12">
                <el-input v-model="product.specifications" placeholder="请输入商品规格" clearable :style="{ width: '250px' }"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="库存" prop="inventory">
            <el-input v-model.number="product.inventory" placeholder="请输入库存" clearable :style="{ width: '250px' }"></el-input>
          </el-form-item>
          <el-form-item label="图片上传" prop="image">
            <el-upload
              class="upload-demo"
              action="/upload"
              :on-success="handleUploadSuccess"
              :on-remove="handleRemove"
              :limit="1"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">添加商品</el-button>
            <el-button @click="resetForm">重置表单</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>



</template>

<script>
import {addProduct} from "../../../../api/user";

export default {
  name: "publish_product",
  data() {
    return {
      product: {
        publisherId:"",
        name: "",
        classification: "",
        specifications: "",
        price: 0,
        inventory: 0,
        image: ""
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        classification: [
          { required: true, message: '请选择商品类别', trigger: 'change' }
        ],
        price: [
          { required: true, message: '请输入售价', trigger: 'blur' }
        ],
        specifications: [
          { required: true, message: '请输入商品规格', trigger: 'blur' }
        ],
        inventory: [
          { required: true, message: '请输入库存', trigger: 'blur' }
        ],
        // image: [
        //   { required: true, message: '请上传图片', trigger: 'change' }
        // ]
      },
      fileList: []

    };
  },
  methods: {
    addProduct() {
      this.$refs.productForm.validate((valid) => {
        if (valid) {
          const userInfo = JSON.parse(localStorage.getItem("userInfo"));
          this.product.publisherId=userInfo.id;
          var addProd=this.product;
          console.log(addProd)
          addProduct(addProd).then(res => {
            if(res.status === 200){

            }
          },error => {
            this.loading = false;

          })
          // 在这里处理表单提交逻辑，可以将 this.product 发送到后端保存
          console.log('提交商品信息：', this.product);
          // 重置表单
          this.resetForm();
        } else {
        }
      });
    },
    handleUploadSuccess(response, file, fileList) {
      this.product.image = response.url;
      this.fileList = fileList.slice(-1);
    },
    handleRemove(file, fileList) {
      this.product.image = '';
      this.fileList = fileList;
    },
    resetForm() {
      this.$refs.productForm.resetFields();
      this.product = {
        name: '',
        classification: '',
        specifications: '',
        price: 0,
        inventory: 0,
        image: ''
      };
      this.fileList = [];
    }
  }
}
</script>

<style scoped>
.upload-demo {
  display: inline-block;
  margin-bottom: 20px;
}
.el-upload__tip {
  margin-top: 10px;
}
.user-center > .pull-right {
  width: 950px;
  background-color: #fff;
  font-size: 14px;
}
.pull-right {
  float: right !important;
}
.user-content__box {
  padding: 10px 24px;
}
.bgf {
  background-color: #fff;
}
.user-content__box .title {
  color: #666;
  line-height: 36px;
  border-bottom: 1px solid #e0e0e0;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
.order-item .num {
  color: #666;
  line-height: 30px;
  text-decoration: none;
}
.order-item .card {
  height: 80px;
  position: relative;
  font-weight: normal;
}
.order-item .card .img {
  float: left;
  margin-right: 10px;
  width: 80px;
  height: 80px;
  border: 1px solid #999;
}
.cover {
  object-fit: cover;
}
.cover, .contain {
  width: 100%;
  height: 100%;
  object-position: center;
}
img {
  vertical-align: middle;
}
img {
  border: 0;
}
.order-item .card .name {
  height: 2.8em;
  line-height: 1.4em;
}

.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-trash:before {
  content: "\e020";
}
.order-item .order .but-primary {
  color: #fff;
  border: 1px solid #b31e22;
  background-color: #b31e22;
}
.order-item .order .but {
  width: 80px;
  height: 24px;
  margin: auto;
  line-height: 22px;
  border-radius: 4px;
  margin-bottom: 5px;
}
.order-item .but {
  display: block;
  text-decoration: none;
}
.order-item .order .but {
  width: 80px;
  height: 24px;
  margin: auto;
  line-height: 22px;
  border-radius: 4px;
  margin-bottom: 5px;
}
.order-item .but.c3 {
  color: #333;
}
.order-item .but.cr {
  color: #b31e22;
}
.order-item .order .but-link {
  color: #666;
  border: 1px solid #bfbfbf;
}
.order-item:hover {
  border-radius: 3px;
  -webkit-box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
  -moz-box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
  box-shadow: 0 0 10px rgba(233, 0, 0, 0.3);
}
.order-item .order .but-primary:hover {
  border: 1px solid #931519;
  background-color: #931519;
}
.order-item .order .but.c3:hover {
  color: #666;
}
.text-right {
  text-align: right;
}
.page a.disabled {
  color: #999;
  border-color: #ccc;
}
.page a {
  color: #666;
  padding: 10px 15px;
  margin: 5px;
  line-height: 1em;
  border: 1px solid #999;
  display: inline-block;
  text-decoration: none;
}
.page a.select {
  color: #fff;
  border-color: #b31e22;
  background-color: #b31e22;
}
.page a {
  color: #666;
  padding: 10px 15px;
  margin: 5px;
  line-height: 1em;
  border: 1px solid #999;
  display: inline-block;
  text-decoration: none;
}
.page a {
  color: #666;
  padding: 10px 15px;
  margin: 5px;
  line-height: 1em;
  border: 1px solid #999;
  display: inline-block;
  text-decoration: none;
}

.order-empty .empty-msg, .coupon-list .empty-msg {
  width: 400px;
  margin: auto;
  line-height: 36px;
  padding: 40px 0 30px 120px;
  background-image: url("../../../../../public/img/ud/order-empty.gif");
  background-repeat: no-repeat;
  -webkit-background-size: 100px;
  background-size: 100px;
  background-position: center left;
}
:link, :visited, ins {
  text-decoration: none;
}
a {
  color: #97191d;
  text-decoration: none;
}
.order-item .card .favour {
  bottom: 0;
  color: #b31e22;
}
</style>

