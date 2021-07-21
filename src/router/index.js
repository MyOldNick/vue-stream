import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: "home",
    component: () => import("../views/Home/Home.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register/Register.vue"),
  },
  {
    path: "/login",
    name: 'login',
    component: () => import("../views/Login/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
