<template>
  <div class="user-center">
    <div class="pull-right">
      <div class="user-content__box clearfix bgf">
        <div class="title">服务中心-我的消息</div>

      </div>
      <div class="qq-message-page">
        <!-- 左侧消息列表 -->
        <el-aside width="300px">
          <el-menu
            default-active="1"
            class="qq-message-list"
            @select="handleSelect"
            router
          >
            <el-menu-item
              index="1"
              class="friend-item"
              v-for="friend in friends"
              :key="friend.id"
            >
              {{ friend.name }}
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 右侧消息详情 -->
        <div class="qq-message-detail">
          <el-card class="message-card">
            <div v-if="selectedFriend">
              <h3>{{ selectedFriend }}</h3>
              <div v-for="(message, index) in messages" :key="index" class="message">
                <p :class="{ 'message-left': message.sender !== currentUser, 'message-right': message.sender === currentUser }">{{ message.content }}</p>
              </div>
            </div>
            <div v-else>
              <p class="no-friend-selected">请选择一个好友开始聊天。</p>
            </div>
          </el-card>
        </div>
      </div>




    </div>
  </div>



</template>

<script>
import {addProduct} from "../../../../api/user";

export default {
  data() {
    return {
      selectedFriend: null,
      currentUser: '我',
      messages: [
        { sender: '好友1', content: '你好，有什么需要帮助的吗？' },
        { sender: '我', content: '你好，我有一个问题想问你。' },
        { sender: '好友1', content: '请问是关于 Vue.js 的问题吗？' },
        { sender: '我', content: '是的，我在使用 Vue.js 遇到了一个困难。' },
        { sender: '好友1', content: '没问题，我可以帮你解决。' }
      ]

    };
  },
  methods: {
    handleSelect(index) {
      this.selectedFriend = `好友${index}`;
    }
  }
}
</script>

<style scoped>
.qq-message-page {
  display: flex;
}

.qq-message-list {
  height: 100vh;
  overflow-y: auto;
}

.qq-message-detail {
  flex-grow: 1;
  padding: 20px;
}

.message-card {
  height: 100%;
}

.message {
  margin-bottom: 10px;
}

.message-left {
  text-align: left;
}

.message-right {
  text-align: right;
}

.no-friend-selected {
  text-align: center;
}
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

