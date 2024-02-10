<template>
  <div>
    <div v-if="filmmakerRecords">
      <DisplayDataTable :records="filmmakerRecords" dataType="filmmaker" />
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
    const filmmakerRecords = ref(null);
    const error = ref(null);
    const fetchRecords = async () => {
      try {
        const url = `https://fyt9xw8cih.execute-api.us-east-2.amazonaws.com/staging/filmmaker-records`;
        console.log(" URL ", url);
        const response = await fetch(url);
        const data = await response.json();
        filmmakerRecords.value = data.records;
      } catch (error) {
        console.error("Error fetching records:", error);
        error.value = error.message;
      }
    };
    fetchRecords();
    return { filmmakerRecords, error };
  },
  components: { DisplayDataTable },
};
</script>
<style></style>
