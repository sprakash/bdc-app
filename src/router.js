import { createRouter, createWebHistory } from "vue-router";
import FilmList from "@/components/FilmList.vue";
import FilmDetail from "@/components/FilmDetail.vue";
import FilmMakers from "@/components/FilmMakers.vue";
import FilmMakerDetail from "@/components/FilmMakerDetail.vue";

const routes = [
  {
    path: "/films",
    name: "films",
    component: FilmList,
  },
  {
    path: "/filmdetail/:name",
    name: "filmdetail",
    component: FilmDetail,
  },
  {
    path: "/filmdetail",
    name: "filmdetailPage",
    component: FilmList,
  },
  {
    path: "/filmmakers",
    name: "filmmakers",
    component: FilmMakers,
  },
  {
    path: "/filmmakers/:name",
    name: "filmmakerDetail",
    component: FilmMakerDetail,
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
