<template>
  <HeaderNavigation />
  <div v-if="records">
    <DisplayDataTable :records="records" />
  </div>
  <div v-else-if="error">Error fetching records: {{ error }}</div>
  <div v-else>Loading...</div>
</template>

<script>
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import DisplayDataTable from "@/components/DisplayDataTable.vue";

import { ref } from "vue";

export default {
  setup() {
    const records = ref(null);
    const error = ref(null);
    const fetchRecords = async () => {
      try {
        const url = `http://localhost:3000/airtable-records`;
        console.log(" URL ", url);
        const response = await fetch(url);
        const data = await response.json();
        records.value = data.records;
      } catch (error) {
        console.error("Error fetching records:", error);
        error.value = error.message;
      }
    };
    fetchRecords();
    return { records, error };
  },
  components: { HeaderNavigation, DisplayDataTable },
};
</script>
