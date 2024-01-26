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
          <select v-model="selectedSubject" @change="handleChange">
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
                      <v-card-text class="text-justify truncate">{{
                        item.fields.Summary
                      }}</v-card-text>
                      <v-card-subtitle
                        @click="item ? navigateToFilmDetail(item) : false"
                        class="px-3 py-5"
                        ><span
                          class="card-sub rounded-md text-black font-semibold px-5 py-2"
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
          <v-card
            class="card-size m-5"
            max-width="350"
            @click="item ? navigateToFilmmakerDetail(item) : false"
          >
            <div class="" v-if="item.fields?.Headshot?.length > 0">
              <v-img :src="item.fields?.Headshot[0].url" class="headshot" cover>
              </v-img>
              <v-card-title> {{ item.fields.Name }}</v-card-title>
              <v-card-text class="text-justify">{{
                item.fields.Bio
              }}</v-card-text>
              <v-chip class="ma-3" color="pink" label>{{items?.fields["Subject of Films"]}}</v-chip>
          </div></v-card
          >
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { useFilmStore } from "@/stores/filmStore";
import { useFilmmakerStore } from "@/stores/filmmakerStore";
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
    const filmmakerStore = useFilmmakerStore();

    const navigateToFilmDetail = (film) => {
      filmStore.setSelectedFilm(film); // Use filmStore directly
      router.push({ name: "filmdetail", params: { id: film.id } });
    };

    const navigateToFilmmakerDetail = (filmmaker) => {
      filmmakerStore.setSelectedFilmmaker(filmmaker);
      router.push({ name: "filmmakerDetail", params: { id: filmmaker.id } });
    };

    return {
      headers,
      selectedSubject,
      subjects,
      itemsPerPage,
      totalPages,
      navigateToFilmDetail,
      navigateToFilmmakerDetail,
    };
  },
};
</script>

<style>
.headshot {
  width: 350px;
  height: 350px;
}
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
  background-color: #892482;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  opacity: 0.9;
}
.poster-container:hover .overlay {
  height: 75%;
}
.text {
  color: white;
  font-size: 15px;
  text-align: left;
}
.card-sub {
  background-color: #fdd81b;
}

tbody {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.v-card-subtitle {
  cursor: pointer;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  white-space: pre-wrap;
}

.card-size {
  height: 850px;
}
</style>
