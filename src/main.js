// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './permission'; // 权限
import store from './store';
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import './styles/common.css';
import ElementUI from 'element-ui'

Vue.use(VueQuillEditor);
Vue.config.productionTip = false;
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
