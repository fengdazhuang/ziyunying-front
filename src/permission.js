/**
 * 全站权限配置
 *
 */
import router from './router/index';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/login','/403','/404'];// 白名单路由

router.beforeEach(function(to, from, next) {
  if(router.currentRoute.path === to.path){
    return;
  }
  const value = to.query.src || to.fullPath;
  if (to.query.target) {
    window.open(value)
  }
  NProgress.start();
  const hasToken = getToken();
  let flag = false;
  for(let i=0;i<whiteList.length;i++){//白名单
    if (to.path === whiteList[i]) {
      flag = true;
    }
  }
  if (flag || hasToken) {//已登录或者白名单
    next();
    NProgress.done();
  }else{//没登录情况
    next();//实际开发没登录情况 应该跳转登录页 这一句应该屏蔽 下面一句应该开放出来 这里还没对接后端，先不验证
    // next({ path: '/login' });
    NProgress.done();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
});
