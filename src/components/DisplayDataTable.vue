<template>
  <div>
    <v-row>
      <v-spacer />
    </v-row>

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
    <v-card-title>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-card v-transition="{ name: 'v-fade-transition' }">
      <v-row class="text-center px-4 align-center" wrap>
        <v-col class="text-truncate" cols="12" md="2">
          Total {{ totalRecords }} records
        </v-col>
        <v-col cols="12" md="6">
          <v-pagination v-model="page" :length="pageCount"> </v-pagination>
        </v-col>
      </v-row>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="currentPageRecords"
      hide-default-footer
      class="d-flex"
    >
      <template #item="{ item }">
        <div v-if="dataType === 'film'" id="films">
          <v-card
            class="mx-auto p-3 m-5"
            max-width="300"
            v-transition="{ name: 'v-fade-transition' }"
          >
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
            //stop grid-container films
          </v-card>
        </div>
        <div v-if="dataType === 'filmmaker'" id="filmmakers">
          <v-card
            class="card-size"
            max-width="400"
            @click="item ? navigateToFilmmakerDetail(item) : false"
          >
            <div class="grid-container">
              <div class="grid-item">
                <div class="poster-container">
                  <div class="" v-if="item.fields?.Headshot?.length > 0">
                    <v-img
                      :src="item.fields?.Headshot[0].url"
                      class="headshot"
                      cover
                    />
                  </div>

                  <v-card-title> {{ item.fields.Name }}</v-card-title>

                  <div class="overlay">
                    <div class="text">
                      <v-card-title>{{ item.fields.Name }}</v-card-title>
                      <v-card-text class="text-justify truncate">{{
                        item.fields.Bio
                      }}</v-card-text>
                      <v-card-subtitle
                        @click="item ? navigateToFilmmakerDetail(item) : false"
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
        <!-- <v-card-text class="text-justify">{{
                item.fields.Bio
              }}</v-card-text>
              <v-chip class="ma-3" color="pink" label>{{
                items?.fields["Subject of Films"]
              }}</v-chip> -->
      </template>
    </v-data-table>
    <v-card v-transition="{ name: 'v-fade-transition' }">
      <v-row class="text-center px-4 align-center" wrap>
        <v-col class="text-truncate" cols="12" md="2">
          Total {{ totalRecords }} records
        </v-col>
        <v-col cols="12" md="6">
          <v-pagination v-model="page" :length="pageCount"> </v-pagination>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import "@mdi/font/css/materialdesignicons.min.css";
import { useFilmStore } from "@/stores/filmStore";
import { useFilmmakerStore } from "@/stores/filmmakerStore";
import { useRouter } from "vue-router";
import { computed, ref, watch } from "vue";

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
    const search = "";
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

    const filmStore = useFilmStore(); // Access filmStore here
    const filmmakerStore = useFilmmakerStore();

    const navigateToFilmDetail = (film) => {
      filmStore.setSelectedFilm(film); // Use filmStore directly
      router.push({
        name: "filmdetail",
        params: { name: formattedName(film.fields?.Name) },
      });
    };

    const navigateToFilmmakerDetail = (filmmaker) => {
      filmmakerStore.setSelectedFilmmaker(filmmaker);
      router.push({
        name: "filmmakerDetail",
        params: { name: formattedName(filmmaker.fields?.Name) },
      });
    };

    const formattedName = (name) => {
      // Transform film name to lowercase and separate by dashes
      return name
        .trim() // Remove leading/trailing whitespace
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9-]+/g, "-"); // Replace other characters with hyphens
    };

    //pagination
    const page = ref(1); // Initialize page number
    const itemsPerPage = 10;
    const totalRecords = computed(() => props.records?.length);
    const pageCount = computed(() =>
      Math.ceil(totalRecords.value / itemsPerPage)
    );
    const totalPages = Math.ceil(totalRecords.value / itemsPerPage);

    watch(page, async (newPage, oldPage) => {
      if (newPage !== oldPage) {
        // Calculate data slice for the new page
        const start = (newPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentRecords = props.records.slice(start, end);
        // Assign sliced data to a separate property
        // (e.g., currentPageRecords) for v-data-table
      }
    });

    return {
      search,
      headers,
      selectedSubject,
      subjects,
      page,
      pageCount,
      totalPages,
      totalRecords,
      currentPageRecords: computed(() => {
        // Return sliced data based on page and itemsPerPage
        const start = (page.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return props.records.slice(start, end);
      }),
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
#films .poster-container {
  top: 20px;
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
  opacity: 0.95;
}
.poster-container:hover .overlay {
  height: 100%;
}

#films .poster-container:hover .overlay {
  height: 108%;
}

.text {
  color: white;
  font-size: 15px;
  text-align: left;
}
.card-sub {
  background-color: #fff;
  position: relative;
  top: 8px;
}

#films .card-sub {
  top: -12px;
}

table {
  background-color: black;
}

tbody {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #d696d6;
}

.v-card-subtitle {
  cursor: pointer;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
  white-space: pre-wrap;
  margin-top: 2em;
}

.card-size {
  height: 850px;
}

#films {
  margin: 1em;
}

#filmmakers {
  width: 20%;
}

#filmmakers img.v-img__img.v-img__img--cover,
#films img.v-img__img.v-img__img--cover {
  object-fit: contain;
  border-bottom: 2px solid white;
  top: 15px;
}

#filmmakers .v-card {
  color: whitesmoke;
  height: auto;
  background-color: black;
  margin: 1.15em;
  border: 1px solid whitesmoke;
}

#films .v-card .v-card-title,
#filmmakers .v-card-title {
  background: whitesmoke;
  color: #8044a7;
  border-top: 1px solid gray;
}

#films .v-card {
  background-color: black;
  margin: 0.15em;
  border-radius: 35px;
  padding: 0;
  border: 8px solid white;
}
.v-data-table-footer {
  display: none;
}
.v-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>
