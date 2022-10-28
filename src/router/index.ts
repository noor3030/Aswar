import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/LoginView.vue";
import Products from "@/views/ProductsView.vue";
import ExpiredProducts from "@/views/ExpiredProductsView.vue";
import { TOKEN } from "@/utils/keys";

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
  component:Products,
  meta: {
    requiresAuth: true,
  },
 },
 {
  path:"/expired-products",
  name:"ExpiredProducts",
  component:ExpiredProducts,
  meta: {
    requiresAuth: true,
  },
 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem(TOKEN) != null) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});
