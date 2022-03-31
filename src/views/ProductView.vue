<template>
  <v-app>
    <NavbarView />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col> CarouselView </v-col>
          <v-col>
            <h1>Nude Pink Press on Nails with Stripes</h1>
            <h2>$39.99-$79.99</h2>
            <v-container>
              <h3 class="headers">Size</h3>
              <v-select solo :items="size" label="Size" dense></v-select>
              <h3 class="headers">Length</h3>
              <v-select solo :items="length" label="Length" dense></v-select>
            </v-container>

            <v-row align="center" justify="center">
              <v-col align="center" cols="6">
                <v-text-field @change="checkValue" style="width:60%" :value="this.value">
                  <v-icon  slot="append" color="red" @click="add"> mdi-plus </v-icon>
                  <v-icon slot="prepend" color="green" @click="subtract"> mdi-minus </v-icon>
                </v-text-field>
              </v-col>
              <v-col style="text-align:center;" cols="6">
                <v-btn style="width:60%">ADD TO CART</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarView from "../components/Navbar.vue";
export default {
  name: "MyAccount",
  data() {
    return {
      value: 1,
      size: ["Small", "Medium", "Large"],
      length: ["Short", "Medium", "Long"],
    };
  },
  methods :{
      checkValue(){
          console.log('that hoe changed')
          
          this.value = 1;
      },
      add() {
          if(this.value < 99)
            this.value+=1;
          else if(this.value > 99)
          this.value = 1;

      },
      subtract() {
          if(this.value >=2)
                this.value-=1;
      }
  },
  components: {
    NavbarView,
  },
};
</script>
<style >
input{
    text-align: center !important;
}
.v-label {
  width: 100%;
  text-align: center;
}
.v-select__selections {
  width: 100% !important;
  text-align: center !important;
}
.alignit {
  text-align: center;
 
  /* Center vertically */
  position: absolute;
  top: 50%;
  margin-top: -25px;

}
</style>