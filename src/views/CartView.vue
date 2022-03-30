<template>
  <v-app>
    <v-main>
      <v-container fluid>
          <NavbarView />
        <div>MY CART</div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarView from "../components/Navbar.vue";
export default {
  name: "CartView",

  components: {
    NavbarView
  },
};
</script>