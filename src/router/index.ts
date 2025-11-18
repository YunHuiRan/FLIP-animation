import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/start",
  },
  {
    path: "/start",
    name: "start",
    component: () => import("../components/start.vue"),
  },
  {
    path: "/end",
    name: "end",
    component: () => import("../components/end.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
