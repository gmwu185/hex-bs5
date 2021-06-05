import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: '首頁', // 元件呈現的名稱
      path: '/', // 對應虛擬路徑
      component: Home, //對應元件
    },
    {
      name: 'hello', // 元件呈現的名稱
      path: '/hello', // 對應虛擬路徑
      component: HelloWorld, //對應元件
    },
  ],
});
