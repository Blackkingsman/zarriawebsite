<template>
  <v-app-bar class="style rounded-xl" color="pink" elevation="8" app dark hide-on-scroll>

     <v-row >
      <v-col> </v-col>
      <v-col>
        <h1 :color=accentColor @click="update" class="Name">DAE NAILS</h1>
      </v-col>
      <v-col class="buttons">
        <v-btn
          text
        >
          <v-icon size='40px' :color=accentColor >mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          to="/my-account/"
          text
        >
          <span class="mr-2"></span>
          <v-icon size='40px' :color=accentColor>mdi-account</v-icon>
        </v-btn>
        <v-btn
          to="/cart/"
          text
        >
          <span class="mr-2"></span>
          <v-badge left :color=accentColor>
              <span slot="badge">{{cartCount}}</span>
            <v-icon size='40px' :color=accentColor>mdi-cart </v-icon>  
          </v-badge>
        </v-btn>
      </v-col>
    </v-row>  
   
    
  </v-app-bar>
</template>

<script>
export default {
  name: "NavbarView",
  data () {
      return{
            colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      cartCount: 0,
      accentColor: 'black'
      };
      
  },
  methods:{
      update() {
          this.$router.push('/')
      }    
    }
};
</script>

<style>

v-icon{
    color: black !important
}
.Name{
    font-family: "AguafinaScript-Regular" ;
    text-align: center;
   
    color: black;
  }
.style {
    margin: 30px !important
}

.buttons{
    text-align: right;
} 
h1:hover{
    cursor: pointer;
}

</style>