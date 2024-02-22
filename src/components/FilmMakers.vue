<template>
  <div class="py-20">
    <div v-if="filmmakerRecords" id="filmmakerRecords">
      <h1>Film Makers Directory</h1>
      <DisplayDataTable :records="filmmakerRecords" dataType="filmmaker" />
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
    const filmmakerRecords = ref(null);
    const error = ref(null);
    const fetchRecords = async () => {
      try {
        const url = `https://egq0zydibl.execute-api.us-east-2.amazonaws.com/main/filmmaker-records`;
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
<style>
#filmmakerRecords h1 {
  font-size: 2em;
  margin-top: 0.5em;
  margin-left: 1em;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid gray;
}
</style>
