<template>
  <div>
    <v-carousel
      cycle
      delimiter-icon="mdi-minus"
      height="400"
      hide-delimiter-background
      :show-arrows="false"
      class="mainphoto"
    >
      <center>
        <v-carousel-item width="85%" v-for="(slide, i) in slides" :key="i">
          <v-sheet
            class="rounded-xl"
            style="padding: 20px"
            :color="colors[i]"
            padding="20px"
            height="100%"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </center>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselView",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style>
v-carousel-item {
  padding: 400px !important;
}
</style>