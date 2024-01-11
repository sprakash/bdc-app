<template>
  <div>
    <h3>Data Table</h3>
    <v-row>
      <v-spacer />
      <v-pagination v-model="page" :length="totalPages" />
    </v-row>
    <v-data-table :headers="headers" :items="records">
      <template #item="{ item }">
        <div v-if="dataType === 'film'">
          {{ item.fields.Name }}
        </div>
        <div v-if="dataType === 'filmmaker'">
          <span> {{ item.fields.Name }}</span>
          <div
            class="bg-blue-100 p-3 mb-5 w-full flex"
            v-if="item.fields?.Headshot?.length > 0"
          >
            <img :src="item.fields?.Headshot[0].url" class="headshot mr-4" />
            <div>{{ item.fields.Bio }}</div>
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router"; // Import router
export default {
  props: {
    records: {
      type: Array,
      required: true,
    },
    dataType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: "Name", value: "fields.Name" },
        { text: "Website", value: "Website" },
        { text: "Bio", value: "fields.Bio" },
        { text: "Headshot", value: "Headshot" },
      ],
      page: 1, // Initial page number
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.records.length / this.itemsPerPage); // Assuming a fixed itemsPerPage
    },
  },
  methods: {
    navigateToFilmDetail(item) {
      const store = useStore();
      store.commit("setSelectedFilm", item);
      const router = useRouter(); // Use router within the method
      router.push({ name: "filmdetail" });
    },
    mounted() {
      console.log(" this is mounted as ", this.dataType);
    },
  },
};
</script>
<style>
.headshot {
  width: 20%;
  height: 20%;
}
</style>
