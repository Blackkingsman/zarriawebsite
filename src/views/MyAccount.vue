<template>
  <v-app>
    <NavbarView />
    <v-main>
      <v-container fluid>
        <div>MY ACCOUNT</div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarView from "../components/Navbar.vue";
export default {
  name: "MyAccount",

  components: {
    NavbarView
  },
};
</script>
