<template>
  <v-app>
    <NavbarView />
    <v-main>
      <v-container fluid>
        <CarouselView />

        <NewCollection/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarView from "../components/Navbar.vue";
import CarouselView from "../components/Carousel.vue";
import NewCollection from "../components/NewCollection.vue"
export default {
  name: "HomeView",

  components: {
    NavbarView,
    CarouselView,
    NewCollection
  },
};
</script>
