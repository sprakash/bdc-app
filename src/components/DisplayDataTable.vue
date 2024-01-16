<template>
  <div>
    <v-row>
      <v-spacer />
    </v-row>
    <p>Total Records: {{ props?.records.length }}</p>
    <p>Data Type: {{ props?.dataType }}</p>
    <div>
      <div v-if="dataType === 'film'">
        <div class="p-3">
          <select v-model="selectedSubject" @change="filterBySubject">
            <option value="">All Subject</option>
            <option v-for="subject in subjects" :key="subject" :value="subject">
              {{ subject }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <v-data-table :headers="headers" :items="records" class="d-flex">
      <template #item="{ item }">
        <div v-if="dataType === 'film'">
          <v-card class="mx-auto p-3 m-5" max-width="300">
            <div class="grid-container">
              <div class="grid-item">
                <div class="poster-container">
                  <v-img
                    :src="item.fields.Poster[0].thumbnails.large.url"
                    class="poster align-center"
                    cover
                  />
                  <div class="overlay">
                    <div class="text">
                      <v-card-title>{{ item.fields.Name }}</v-card-title>
                      <v-card-text class="text-justify">{{
                        item.fields.Summary
                      }}</v-card-text>
                      <v-card-subtitle
                        @click="item ? navigateToFilmDetail(item) : false"
                        ><span class="card-sub"
                          >LEARN MORE >></span
                        ></v-card-subtitle
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div v-if="dataType === 'filmmaker'">
          <v-card class="m-5" max-width="350">
            <div class="" v-if="item.fields?.Headshot?.length > 0">
              <v-img
                :src="item.fields?.Headshot[0].url"
                class="align-end"
                max-width="350"
                max-height="300"
                cover
              >
              </v-img>
              <v-card-title> {{ item.fields.Name }}</v-card-title>
              <v-card-text class="text-justify" max-height="300">{{
                item.fields.Bio
              }}</v-card-text>
              <!-- <v-card-subtitle>{{ items.fields.Subject%20of%20Films}}</v-card-subtitle> -->
            </div></v-card
          >
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { useFilmStore } from "@/stores/filmStore";
import { useRouter } from "vue-router";

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
  setup(props) {
    console.log(props);

    const headers = [
      { text: "Name", value: "fields.Name" },
      { text: "Website", value: "Website" },
      { text: "Bio", value: "fields.Bio" },
      { text: "Headshot", value: "Headshot" },
    ];

    const selectedSubject = "";
    const subjects = ["African American", "Politics", "Biography"]; // sample genres

    /* eslint-disable no-unused-vars */
    const router = useRouter();

    const itemsPerPage = 10;
    const totalPages = Math.ceil(props.records.length / itemsPerPage);
    const filmStore = useFilmStore(); // Access filmStore here

    const navigateToFilmDetail = (film) => {
      filmStore.setSelectedFilm(film); // Use filmStore directly
      router.push({ name: "filmdetail", params: { id: film.id } });
    };

    return {
      headers,
      selectedSubject,
      subjects,
      itemsPerPage,
      totalPages,
      navigateToFilmDetail,
    };
  },
};
</script>

<style>
.headshot {
  width: 250px;
  height: 250px;
}
/* .grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  place-items: center;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
} */
.poster {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
.poster-container {
  position: relative;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008cba;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  opacity: 0.8;
}
.poster-container:hover .overlay {
  height: 100%;
}
.text {
  color: white;
  font-size: 15px;
  text-align: left;
}
.card-sub {
  color: white;
}

tbody {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.v-card-subtitle {
  cursor: pointer;
}
</style>
