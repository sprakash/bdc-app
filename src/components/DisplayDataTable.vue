<template>
  <div>
    <h3>Data Table</h3>
    <v-data-table :headers="headers" :items="records" class="elevation-1">
      <template #item="{ item }">
        <div>
          <a
            :href="item.fields.Website"
            target="_blank"
            class="link-primary font-bold text-lg"
            >{{ item.fields.Name }}</a
          >
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
export default {
  props: {
    records: {
      type: Array,
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
    };
  },
};
</script>
<style>
.headshot {
  width: 20%;
  height: 20%;
}
</style>
