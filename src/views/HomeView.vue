<template>
  <v-app>
    <NavbarView
    :products = "items" />
    <v-main>
      <v-btn @click="()=>this.$store.commit('increment')">Hey</v-btn>
      <v-container fluid>
        <CarouselView />
        <NewCollection/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarView from "../components/Navbar.vue";
import cart from "../model/cart.js"
import CarouselView from "../components/Carousel.vue";
import NewCollection from "../components/NewCollection.vue"
export default {
  name: "HomeView",

  components: {
    NavbarView,
    CarouselView,
    NewCollection
  },
  data () {
    return {
      items: cart
    }
  }
};
</script>
