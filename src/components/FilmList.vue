<template>
  <div>
    <div v-if="filmRecords">
      <DisplayDataTable :records="filmRecords" dataType="film" />
    </div>
    <div v-else-if="error">Error fetching records: {{ error }}</div>
    <div v-else>Loading...</div>
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
        const url = `https://fyt9xw8cih.execute-api.us-east-2.amazonaws.com/staging/film-records`;
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
<style></style>
