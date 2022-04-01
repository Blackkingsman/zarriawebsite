<template>
  <div>
    <v-row style="margin: 20px">
      <v-col><h1>New Collection</h1></v-col>
      <v-col align="end"><v-btn>view all</v-btn></v-col>
    </v-row>

    <v-row style="margin: 20px">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="nail in nails"
        :key="nail.pid"
        align="center"
      >
        <v-card
          class="card"
          @click="route(nail.pid)"
          rounded="xl"
          align="center"
          :loading="loading"
          max-width="95%"
          height="100%"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" :src="nail.imageid[0]"></v-img>

          <v-row style="padding-top: 20px; padding-bottom: 20px">
            <v-col cols="12" sm="12" md="12" lg="6" class="stars">
              <div v-if="nail.stars >= 0 || nail.stars <= 5">
                <v-icon
                  color="pink"
                  v-for="n in nail.stars % 2 === 0
                    ? nail.stars
                    : Math.floor(nail.stars)"
                  :key="n"
                  size="35"
                  >mdi-star</v-icon
                >
                <v-icon color="pink" v-if="nail.stars % 2 !== 0" size="35"
                  >mdi-star-half-full</v-icon
                >
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="6" class="price">
              <h2>
                ${{ nail.nailsize.small.short }}-${{ nail.nailsize.small.long }}
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" >
              <h2
                style="
                  text-align: center;
                  padding-left: 15px !important;
                  font-weight: bold !important;
                "
              >
                {{ nail.name }}
              </h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="nail in nails"
        :key="nail.pid"
        align="center"
      >
        <v-card
          class="card"
          @click="route(nail.pid)"
          rounded="xl"
          align="center"
          :loading="loading"
          max-width="95%"
          height="100%"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" :src="nail.imageid[0]"></v-img>

          <v-row style="padding-top: 20px; padding-bottom: 20px">
            <v-col cols="12" sm="12" md="12" lg="6" class="stars">
              <div v-if="nail.stars >= 0 || nail.stars <= 5">
                <v-icon
                  color="pink"
                  v-for="n in nail.stars % 2 === 0
                    ? nail.stars
                    : Math.floor(nail.stars)"
                  :key="n"
                  size="35"
                  >mdi-star</v-icon
                >
                <v-icon color="pink" v-if="nail.stars % 2 !== 0" size="35"
                  >mdi-star-half-full</v-icon
                >
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="6" class="price">
              <h2>
                ${{ nail.nailsize.small.short }}-${{ nail.nailsize.small.long }}
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" >
              <h2
                style="
                  text-align: center;
                  padding-left: 15px !important;
                  font-weight: bold !important;
                "
              >
                {{ nail.name }}
              </h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getDocs, getFirestore, collection } from "firebase/firestore";
export default {
  data() {
    return {
      nails: [],
    };
  },
  mounted() {
    this.getNails();
  },
  methods: {
    route(item) {
      console.log(item);
      const nailSelection = this.nails.find(x=> x.pid === item)
      console.log( nailSelection)
      this.$router.push({ name:"viewProduct" , params: {pid: item , data: nailSelection}});
    },
    getNails() {
      const db = getFirestore();
      const colRef = collection(db, "products");
      getDocs(colRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          this.nails.push({ ...doc.data(), id: doc.id });
        });
        console.log(this.nails);
      });
    },
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.flexible {
  flex-grow: 1;
}

.stars,
.price {
  margin: 0px;
  
  height: 100px;
  line-height: 100px;
  text-size-adjust: auto;
  text-align: center;
}
</style>