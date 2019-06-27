import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(["@/views/Index.vue"], resolve);
const Category = resolve => require(["@/views/Category.vue"], resolve);
const Car = resolve => require(["@/views/Car.vue"], resolve);
const User = resolve => require(["@/views/User.vue"], resolve);

export default new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      component: Index
    },
    {
      path: "/category",
      name: "分类页",
      component: Category
    },
    {
      path: "/car",
      name: "购物车页",
      component: Car
    },
    {
      path: "/user",
      name: "用户页",
      component: User,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录才能进入的
      }
    }
  ]
});
