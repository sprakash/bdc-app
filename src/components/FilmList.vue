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
import { get } from "aws-amplify/api";

export default {
  setup() {
    const filmRecords = ref(null);
    const awsFilmRecords = ref(null);
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

    const getFilmsAWS = async () => {
      try {
        const restOperation = get({
          apiName: "bdcapi",
          path: "/film-records",
        });
        const response = await restOperation.response;
        awsFilmRecords.value = await response.json();
        console.log("GET call succeeded: ", response);
      } catch (error) {
        console.log("GET call failed: ", error);
      }
    };

    getFilmsAWS();
    getFilms();
    return { awsFilmRecords, filmRecords, error };
  },

  components: { DisplayDataTable },
};
</script>
<style></style>
