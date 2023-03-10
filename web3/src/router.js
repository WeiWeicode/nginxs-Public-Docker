import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import productsHome from "./components/productsHome.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")
const Payment = () => import("./components/package/Payment.vue")
const PayPage = () => import("./components/package/PayPage.vue")
const Order = () => import("./components/package/Order.vue")
const Addproducts = () => import("./components/moderatorpackage/Addproducts.vue")
const Showproducts = () => import("./components/moderatorpackage/Showproducts.vue")
// const Updataproducts = () => import("./components/moderatorpackage/Updataproducts.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },

  {
    path: "/productsHome",
    component: productsHome,
  },

  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },

  {
    path: "/payment",
    name: "payment",

    component: Payment,
  },

  {
    path: "/paypage",
    name: "paypage",

    component: PayPage,
  },

 {
    path: "/myorder",
    name: "myorder",

    component: Order,

 },

 {
    path: "/addproducts",
    name: "addproducts",
    component: Addproducts,
 },

  {
    path: "/showproducts",
    name: "showproducts",
    component: Showproducts,
  },

  




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router: ??????
// createRouter: ????????????
// createWebHistory: ??????Web????????????


router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
// beforeEarch: ????????????
// to: ???????????????
// from: ??????????????????
// next: ?????????????????????
// publicPages: ????????????
// authRequired: ?????????????????????
// loggedIn: ???????????????

//   // trying to access a restricted page + not logged in
//   // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
  // authRequired && !loggedIn: ????????????????????? + ????????????
  // next('/login'): ?????????????????????
});

export default router;