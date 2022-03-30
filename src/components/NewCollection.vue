<template>
  <div>
    <v-row style="margin: 20px">
      <v-col><h1>New Collection</h1></v-col>
      <v-col align="end"><v-btn>view all</v-btn></v-col>
    </v-row>
    <v-row style="margin: 20px">
      <v-col align="center">
        <v-card
          rounded="xl"
          align="center"
          :loading="loading"
          class=""
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>
        </v-card>
      </v-col>
      <v-col align="center">
        <v-card
          rounded="xl"
          align="center"
          :loading="loading"
          class=""
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>
        </v-card>
      </v-col>
      <v-col align="center">
        <v-card
          rounded="xl"
          align="center"
          :loading="loading"
          class=""
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-row>
            <v-col>
                <h2>
                    5 stars
                </h2>
            </v-col>
            <v-col>
                <h2>$39.99-49.99
                </h2>
            </v-col>
            
        </v-row>
        <v-card-title>Special edition</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>