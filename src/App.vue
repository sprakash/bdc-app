<template>
  <HeaderNavigation />
  <div v-if="records">
    <h1>Airtable Records</h1>
    <ul>
      <li v-for="record in records" :key="record" class="m-5 p-3 bg-blue-100">
        <a
          :href="record.fields.Website"
          target="_blank"
          class="border-1 border-blue-950 hover:border-red-400 px-3 py-2 text-lg font-bold"
        >
          {{ record.fields.Name }}
        </a>
        <div class="flex justify-between">
          <img
            v-if="record.fields?.Headshot?.length > 0"
            :src="record.fields?.Headshot[0].url"
            class="w-1/4 mr-5"
          />
          <div>{{ record.fields.Bio }}</div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else-if="error">Error fetching records: {{ error }}</div>
  <div v-else>Loading...</div>
</template>

<script>
import HeaderNavigation from "@/components/HeaderNavigation.vue";
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
  components: { HeaderNavigation },
};
</script>
