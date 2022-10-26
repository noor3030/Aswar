import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/Login.vue";
import Products from "@/views/Products.vue";
import ExpiredProducts from "@/views/ExpiredProducts.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
 {
  path:"/products",
  name:"Products",
  component:Products
 },
 {
  path:"/expired-products",
  name:"ExpiredProducts",
  component:ExpiredProducts
 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
