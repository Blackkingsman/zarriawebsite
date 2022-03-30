<template>
  <v-app>
    <v-main>
       <v-router to="/"></v-router>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
}
</script>

<style>
@font-face {
  font-family: "AguafinaScript-Regular";
  src: local("AguafinaScript-Regular"),
   url(./assets/fonts/AguafinaScript-Regular.ttf);
}

</style>
