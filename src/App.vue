<template>
  <div v-if="records">
    <h1>Airtable Records</h1>
    <ul>
      <li v-for="record in records" :key="record">
        {{ record }}
      </li>
    </ul>
  </div>
  <div v-else-if="error">Error fetching records: {{ error }}</div>
  <div v-else>Loading...</div>
</template>

<script>
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
        records.value = data;
      } catch (error) {
        console.error("Error fetching records:", error);
        error.value = error.message;
      }
    };

    fetchRecords();

    return { records, error };
  },
};
</script>
