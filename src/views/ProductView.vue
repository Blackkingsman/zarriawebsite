<template>
  <v-app>
    <NavbarView />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="5" xl="5">
            <v-carousel
              cycle
              delimiter-icon="mdi-minus"
              next-icon="mdi-arrow-right"
              prev-icon="mdi-arrow-left"
              height="400"
              :show-arrows="arrows"
              hide-delimiter-background
              class="mainphoto"
            >
              <center>
                <v-carousel-item
                  
                  width="auto"
                  v-for="(slide, i) in nails.imageurls"
                  :key="i"
                >
                  <v-img
                      style="max-height:100%; max-width:100%"
                      :src="slide"
                      class="rounded-xl"
                      color="error"
                      @click="actionOverlay(slide)"
                    >
                    </v-img>
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="text-h2">{{ slide }} Slide</div>
                    </v-row>
                </v-carousel-item>
              </center>
            </v-carousel></v-col
          >
          <v-col cols="12" sm="12" md="6" lg="7" xl="7">
            <h1>{{nails.name}}</h1>
            <h2>${{nails.nailsize.small.short}}-${{nails.nailsize.small.long}}</h2>
            <v-container>
              <h3 class="headers">Size</h3>
              <v-select solo :items="size" label="Size" dense></v-select>
              <h3 class="headers">Length</h3>
              <v-select solo :items="length" label="Length" dense></v-select>
            </v-container>

            <v-row align="center" justify="center">
              <v-col align="center" cols="6">
                <v-text-field
                  type="number"
                  :rules="rules"
                  style="width: 60%"
                  :value="value"
                >
                  <v-icon slot="append" color="red" @click="add">
                    mdi-plus
                  </v-icon>
                  <v-icon slot="prepend" color="green" @click="subtract">
                    mdi-minus
                  </v-icon>
                </v-text-field>
              </v-col>
              <v-col style="text-align: center" cols="6">
                <v-btn style="width: 60%">ADD TO CART</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row style="padding-top: 50px">
          <v-col>
            <center>
              <div
                style="width: 95%; text-align: center"
                class="rounded-xl pa-4 text-center secondary text-no-wrap"
                v-text="`.rounded${value}`"
              ></div>
            </center>
          </v-col>
        </v-row>
        <v-overlay :value="overlay">
          <v-img
            id="overlayimage"    
            :src="overlayimage"
            color="teal"
            @click="overlay = false"
          >
          </v-img
        ></v-overlay>
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
      windowWidth: window.innerWidth,
      value: 1,
      txt: '',
      rules: [(v) => v <= 99 || "Maximum order is 99 units"],
      size: ["Small", "Medium", "Large"],
      length: ["Short", "Medium", "Long"],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      overlay: false,
      zIndex: 0,
      arrows: false,
      overlayimage: '',
      nails: {}
    };
  },
 created() {
    const routeData = this.$route.params.data
    if(typeof routeData === 'undefined'){
        console.log('hey' + routeData)
    }else {
        this.nails = routeData
       
       console.log( this.nails.imageurls)
    }
  },
  watch: {
        windowWidth(newWidth, oldWidth) {
            this.txt = `it changed to ${newWidth} from ${oldWidth}`;
            
        }
    },
    mounted() {

        this.windowWidth = window.innerWidth
        if(this.windowWidth >= 600)
        this.arrows = true
        else
        this.arrows = false
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
  methods: {
      actionOverlay (value){
          this.overlay = !this.overlay
          this.overlayimage = value
      },
       onResize() {
            this.windowWidth = window.innerWidth
            console.log(this.windowWidth)
            if(this.windowWidth >= 600)
            this.arrows = true
            else
            this.arrows = false
        },

    add() {
      if (this.value <= 99) this.value += 1;
      else if (this.value > 99) this.value = 0;
    },
    subtract() {
      if (this.value >= 2) this.value -= 1;
    },
  },
  components: {
    NavbarView,
  },
};
</script>
<style >
input {
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