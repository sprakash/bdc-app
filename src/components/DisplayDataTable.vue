<template>
  <div class="flex">
    <div class="w-1/5" v-if="dataType === 'film'">
      <v-card
        v-if="dataType === 'film' && currentPageRecords.length > 0"
        class="p-3"
        id="bySelect"
      >
        <v-select
          v-model="selectedSubject"
          label="By Film Subject"
          :items="uniqueTags"
          id="selectedSubject"
        >
        </v-select>
        <v-select
          v-model="selectedYear"
          label="By Film Year"
          :items="uniqueYears"
          v-if="dataType === 'film'"
          id="selectedYear"
        >
        </v-select>
      </v-card>
    </div>

    <div class="w-1/5" v-if="dataType === 'filmmaker'">
      <v-card
        v-if="dataType === 'filmmaker' && currentPageRecords.length > 0"
        class="p-3"
        id="byFilmmakerSubject"
      >
        <v-select
          v-model="selectedFilmmakerSubject"
          label="By Filmmaker Subject"
          :items="uniqueFilmmakerSubjects"
          id="selectedFilmmakerSubject"
        >
        </v-select>
        <v-select
          v-model="selectedRole"
          label="By Filmmaker Roles"
          :items="uniqueRoles"
          v-if="dataType === 'filmmaker'"
          id="selectedRole"
        >
        </v-select>
      </v-card>
    </div>

    <div class="w-full">
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
        ></v-text-field>
      </v-card-title>
      <v-card v-transition="{ name: 'v-fade-transition' }" flat>
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
        :search="search"
        :items="currentPageRecords"
        itemKey="fields.Name"
        hide-default-footer
        class="d-flex"
        loading-text="Loading... Please wait"
      >
        <template #item="{ item }">
          <div
            v-if="dataType === 'film'"
            id="films"
            class="flex justify-center flex-col items-center"
          >
            <p class="text-center">{{ item.fields.Name }}</p>

            <v-card
              class="mx-auto p-3 m-5"
              max-width="300"
              v-transition="{ name: 'v-fade-transition' }"
            >
              <div class="grid-container">
                <div class="grid-item">
                  <div class="poster-container">
                    <v-img
                      v-if="item.fields?.Poster?.length > 0"
                      :src="item.fields?.Poster[0]?.thumbnails.large.url"
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
                          @click="
                            item ? navigateToFilmmakerDetail(item) : false
                          "
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
    //refs
    const search = ref("");
    const selectedSubject = ref("ALL"); // Initialize selectedSubject
    const selectedYear = ref("SELECT");
    const selectedFilmmakerSubject = ref("all");
    const selectedRole = ref("SELECT");
    const page = ref(1); // Initialize page number
    const filteredRecords = ref([...props.records]);

    const headers = [
      { text: "Name", value: "fields.Name", filterable: false },
      { text: "Website", value: "Website" },
      { text: "Bio", value: "fields.Bio" },
      { text: "Headshot", value: "Headshot" },
    ];

    // Data source consistency check (optional)
    if (!props.records || !props.records.length) {
      // Handle empty data case
      return;
    }

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

    const testingTable = () => {
      console.log(" testing this table");
      return "testing";
    };
    //search
    const filterBySearch = (record) => {
      // Implement your specific search logic here
      const searchText = search?.value.toLowerCase();

      if (props.dataType === "filmmaker") {
        return (
          record.fields.Name.toLowerCase().includes(searchText) ||
          record.fields.Bio.toLowerCase().includes(searchText) ||
          record.fields.Summary.toLowerCase()
          // ... other fields to search in
        );
      } else {
        return (
          record.fields.Name.toLowerCase().includes(searchText) ||
          record.fields.Summary.toLowerCase().includes(searchText)
          // ... other fields to search in
        );
      }
    };

    //pagination
    const itemsPerPage = 10;

    const currentPageRecords = computed(() => {
      const start = (page.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredRecords.value.slice(start, end);
    });
    const totalRecords = computed(() => filteredRecords.value?.length);
    const pageCount = computed(() =>
      Math.ceil(totalRecords.value / itemsPerPage)
    );
    const totalPages = Math.ceil(totalRecords.value / itemsPerPage);
    // Filtered records (including search)

    watch(page, async (newPage, oldPage) => {
      console.log(" PAGES CHANGE");
      if (newPage !== oldPage) {
        // Calculate data slice for the new page
        const start = (newPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        currentPageRecords.value = props.records.slice(start, end);
        // Assign sliced data to a separate property
        // (e.g., currentPageRecords) for v-data-table
      }
    });

    watch(selectedSubject, async (newSubject, oldSubject) => {
      // Update filteredRecords when selectedSubject changes
      if (props.dataType === "film") {
        if (selectedSubject.value !== "ALL") {
          filteredRecords.value = props.records.filter((record) => {
            console.log(
              "oldSubject",
              oldSubject.toLowerCase(),
              "   newSubject",
              newSubject.toLowerCase(),
              record.fields.Tags?.includes(newSubject.toLowerCase())
                ? "true"
                : "false",
              record.fields.Tags
            );
            return record.fields.Tags?.includes(newSubject.toLowerCase());
          });
        } else {
          console.log(" WE ARE AT ALL", props.records);
          filteredRecords.value = props.records;
        }
      }
    });

    watch(selectedFilmmakerSubject, async (newSubject, oldSubject) => {
      // Update filteredRecords when selectedSubject changes
      if (props.dataType === "filmmaker") {
        if (selectedFilmmakerSubject.value !== "ALL") {
          filteredRecords.value = props.records.filter((record) => {
            return record.fields["Subject of Films"]?.includes(newSubject);
          });
        } else {
          console.log(" WE ARE AT ALL", props.records);
          filteredRecords.value = props.records;
        }
      }
    });

    watch(selectedYear, async (newYear, oldYear) => {
      if (props.dataType === "film") {
        if (selectedYear.value !== "SELECT") {
          filteredRecords.value = props.records.filter((record) => {
            return record.fields["Name (from Year)"]?.includes(
              newYear.toString()
            );
          });
          console.log(" FOUND BASED ON YEAR ", filteredRecords.value);
        } else {
          console.log("WE ARE AT YEAR SELECT", props.records);
          filteredRecords.value = props.records;
        }
      }
    });

    watch(selectedRole, async (newRole, oldRole) => {
      if (props.dataType === "filmmaker") {
        if (selectedRole.value !== "SELECT") {
          filteredRecords.value = props.records.filter((record) => {
            return record.fields["Name (from Roles)"]?.includes(
              newRole.toString()
            );
          });
          console.log(" FOUND BASED ON ROLE ", filteredRecords.value);
        } else {
          console.log("WE ARE AT ROLE  SELECT", props.records);
          filteredRecords.value = props.records;
        }
      }
    });

    const uniqueTags = computed(() => {
      const tagsSet = new Set();
      props.records.forEach((record) => {
        record.fields?.Tags?.forEach((tag) => {
          tagsSet.add(tag.toUpperCase());
        });
      });
      const tagFiltered = Array.from(tagsSet).sort((a, b) =>
        a.localeCompare(b)
      );
      tagFiltered.unshift("ALL");
      return tagFiltered;
    });

    const uniqueYears = computed(() => {
      const yearsSet = new Set();
      props.records.forEach((record) => {
        record.fields["Name (from Year)"]?.forEach((year) => {
          yearsSet.add(year);
        });
      });

      const yearsFiltered = Array.from(yearsSet).sort((a, b) => b - a);
      yearsFiltered.unshift("SELECT");
      return yearsFiltered;
    });

    const uniqueFilmmakerSubjects = computed(() => {
      const filmmakerSubjectsSet = new Set();
      props.records.forEach((record) => {
        record.fields["Subject of Films"]?.forEach((subject) => {
          filmmakerSubjectsSet.add(subject);
        });
      });
      const subjectFiltered = Array.from(filmmakerSubjectsSet).sort((a, b) =>
        a.localeCompare(b)
      );
      subjectFiltered.unshift("ALL");
      return subjectFiltered;
    });

    const uniqueRoles = computed(() => {
      const roleSet = new Set();
      props.records.forEach((record) => {
        record.fields["Name (from Roles)"]?.forEach((role) => {
          roleSet.add(role);
        });
      });

      const rolesFiltered = Array.from(roleSet).sort((a, b) => b - a);
      rolesFiltered.unshift("SELECT");
      return rolesFiltered;
    });

    return {
      search,
      headers,
      selectedSubject,
      selectedYear,
      selectedFilmmakerSubject,
      selectedRole,
      uniqueTags,
      uniqueYears,
      page,
      pageCount,
      totalPages,
      totalRecords,
      currentPageRecords,
      uniqueFilmmakerSubjects,
      uniqueRoles,
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
#bySelect {
  margin-top: 5em;
}
#films p {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  width: 65%;
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
  width: 30%;
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
