import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";
import UserDetail from "../views/UserDetail.vue";
import UserAdd from "../views/UserAdd.vue";
import UserEdit from "../views/UserEdit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/users'
  },
  {
    path: "/users",
    component: () => import(/* webpackChunkName: "group-foo" */ "../views/Users.vue")
  },
  {
    path: "/users/add",
    component: () => import(/* webpackChunkName: "group-foo" */ "../views/UserAdd.vue")
  },
  {
    path: "/users/:id",
    component: UserDetail
  },
  {
    path: "/users/edit/:id",
    component: UserEdit
  },
];

const router = new VueRouter({
  routes
});

console.log("router", router);

export default router;
