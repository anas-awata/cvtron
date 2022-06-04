import { createRouter, createWebHistory } from "vue-router";
import pdf from "../views/pdf.vue";
import cvpage from "../views/cvpage.vue";

const routes = [
  {
    path: "/pdf",
    name: "home",
    component: pdf,
  },
  {
    path: "/cvpage",
    name: "cvpage",
    component: cvpage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
