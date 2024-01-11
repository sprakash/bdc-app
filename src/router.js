import FilmList from "@/components/FilmList.vue"; // Assuming your component path
import FilmDetail from "@/components/FilmDetail.vue"; // Assuming your component path
import FilmMakers from "@/components/FilmMakers.vue";
import { createRouter, createWebHistory } from "vue-router"; // Use named imports

const router = createRouter({
  history: createWebHistory(), // Employ createWebHistory for navigation
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/films",
      name: "films",
      component: FilmList,
    },
    {
      path: "/filmdetail/:id",
      name: "filmdetail",
      component: FilmDetail,
    },
    {
      path: "/filmmakers",
      name: "filmmakers",
      component: FilmMakers,
    },
    // Other routes...
  ],
});

export default router;
