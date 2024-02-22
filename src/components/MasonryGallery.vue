<template v-if="items">
  <masonry-wall :items="items" :column-width="300" :gap="1" :ssr-columns="1">
    <template #default="{ item }">
      <div>
        <v-container fluid>
          <v-row dense>
            <v-col :items="items">
              <v-card
                class="card flex items-center justify-center"
                v-transition="{ name: 'v-fade-transition' }"
              >
                <v-img
                  :src="item.img"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  :style="{ height: `${(item.random + 5) * 50}px` }"
                  cover
                >
                  <v-card-title
                    class="text-white"
                    v-text="item.title"
                  ></v-card-title>
                </v-img>
              </v-card>
            </v-col> </v-row
        ></v-container>
      </div>
    </template>
  </masonry-wall>
</template>

<script>
import { useFilmmakerStore } from "@/stores/filmmakerStore";

export default {
  async setup() {
    const filmstore = useFilmmakerStore();
    const items = await filmstore.getMasonryObjects();
    console.log(" MASONRY OBJECTS ", items);
    return {
      items,
    };
  },

  //   const items = [
  //     {
  //       title: "First",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Second",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Third",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Fourth",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Fifth",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Sixth",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Seventh",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Eigth",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Ninth",
  //       random: Math.random() * 10,
  //     },
  //     {
  //       title: "Tenth",
  //       random: Math.random() * 10,
  //     },
  //   ];

  //   return { items };
  // },
};
</script>
<style scoped>
.v-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>
