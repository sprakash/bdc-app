<template>
  <div>
    <div v-if="filmRecords" id="filmRecords">
      <h1>Film Catalog</h1>
      <DisplayDataTable :records="filmRecords" dataType="film" />
    </div>
    <div v-else-if="error">Error fetching records: {{ error }}</div>
    <div
      v-else
      class="text-center items-center justify-center p-20 flex-col h-80"
    >
      <div>
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </div>
    </div>
  </div>
</template>
<script>
import DisplayDataTable from "@/components/DisplayDataTable.vue";
import { ref } from "vue";

export default {
  setup() {
    const filmRecords = ref(null);
    const error = ref(null);
    const getFilms = async () => {
      try {
        const url = `https://egq0zydibl.execute-api.us-east-2.amazonaws.com/main/film-records`;
        console.log(" URL ", url);
        const response = await fetch(url);
        const data = await response.json();
        filmRecords.value = data.records;
      } catch (error) {
        console.error("Error fetching records:", error);
        error.value = error.message;
      }
    };

    getFilms();
    return { filmRecords, error };
  },

  components: { DisplayDataTable },
};
</script>
<style>
#filmRecords h1 {
  font-size: 2em;
  margin-top: 0.5em;
  margin-left: 1em;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid gray;
}
</style>
