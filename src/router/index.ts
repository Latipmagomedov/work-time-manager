import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from "vue-router";
import { useAuthStore } from "@/store/auth";
import HomeView from "../views/TaskList.vue";
import AppLayoutAuthorized from '../layouts/AppLayoutAuthorized.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    meta: { layout: AppLayoutAuthorized },
    children: [
      {
        path: '',
        name: "home",
        component: HomeView,
      },
      {
        path: "/task/:id",
        name: "TaskDetail",
        component: () => import("../views/TaskDetail.vue"),
      },
    ]
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/FavoriteTasks.vue"),
    meta: { layout: AppLayoutAuthorized }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/UserProfile.vue"),
    meta: { layout: AppLayoutAuthorized }
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/AuthorizationView.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const store = await useAuthStore();

  if (!store.token) {
    to.fullPath !== '/auth' ? next('/auth') : next()
  } else {
    to.fullPath === '/auth' ? next('/') : next()
  }
});

export default router;
