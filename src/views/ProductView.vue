<template>
  <v-app>
    <NavbarView />
    <v-main>
      <v-container style="width: 90vw" fluid>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="7" xl="7">
            <v-carousel
              delimiter-icon="mdi-minus"
              next-icon="mdi-arrow-right"
              prev-icon="mdi-arrow-left"
              height="auto"
              :show-arrows="arrows"
              hide-delimiter-background
            >
              <v-carousel-item v-for="(slide, i) in nails.imageurls" :key="i">
                <v-img
                  style="height:100% width:100%"
                  :src="slide"
                  class="rounded-xl"
                  color="error"
                  alt="loading"
                  @click="actionOverlay()"
                >
                </v-img>
              </v-carousel-item> </v-carousel
          ></v-col>
          <v-col cols="12" sm="12" md="12" lg="5" xl="5">
            <v-container style="padding: 100px">
              <center>
                <h1>{{ nails.name }}</h1>
                <h1 v-if="typeof lowPrice !== 'undefined' && typeof highPrice!== 'undefined'">
                  ${{ Price === 0  ? nails.nailsize.small.short : Price
                  }}{{ Price === 0 ? "-$" + nails.nailsize.small.long : "" }}
                </h1>
              </center>

              <h3 class="headers">Size</h3>
              <v-select
                solo
                v-model="selectedWidth"
                :items="size"
                label="Size"
                dense
              ></v-select>
              <h3 class="headers">Length</h3>
              <v-select
                solo
                :items="length"
                label="Length"
                v-model="selectedLength"
                @input="displayPrice"
              ></v-select>

              <v-row align="center" justify="center">
                <v-col style="padding-left: 60px; padding-right: 60px" cols="8">
                  <v-text-field
                    class="inputPrice"
                    type="number"
                    :rules="rules"
                    style="width: 100%; height: 100%"
                    v-model.number="quantity"
                    solo
                  >
                    <v-icon slot="append" color="pink" @click="add">
                      mdi-plus
                    </v-icon>
                    <v-icon slot="prepend-inner" color="pink" @click="subtract">
                      mdi-minus
                    </v-icon>
                  </v-text-field>
                </v-col>

                <v-col style="padding: 60px" cols="8">
                  <v-btn
                    class="rounded-xl"
                    @click="addToCart"
                    style=" width: 100%; height:100% color:white; background-color:pink; "
                    >ADD TO CART</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        <v-row style="padding-top: 50px">
          <v-col>
            <center>
              <div
                style="width: 95%; text-align: center; background-color: grey"
                class="rounded-xl pa-4 text-center"
              >
                <v-row>
                  <h1
                    @click="description"
                    class="itemInfo"
                    :style="selected === true ? selectedline : ''"
                  >
                    Description
                  </h1>
                  <h1
                    @click="additional"
                    class="itemInfo"
                    :style="selected === false ? selectedline : ''"
                  >
                    Additional Info
                  </h1>
                </v-row>
                <v-row
                  v-if="selected"
                  style="
                    padding-top: 40px;
                    margin-left: 10px;
                    margin-right: 10px;
                  "
                >
                  <h4
                    style="
                      margin-left: 15px;
                      margin-right: 15px;
                      text-align: left;
                    "
                  >
                    Press On Nails by Lilium Nails gives you a perfect,
                    non-damaging manicure in seconds for a bit of the salon
                    cost. Use nail glue to wear weeks straight or apply adhesive
                    tabs for a few days show off — you decide. The best part of
                    using adhesive tabs is that you can reuse your fake nails
                    again and again. Can your salon nails do so?
                  </h4>
                  <h3 style="width: 100%; text-align: left; padding-top: 20px">
                    This set is made to order
                  </h3>
                  <h4
                    style="
                      margin-left: 15px;
                      margin-right: 15px;
                      text-align: left;
                    "
                  >
                    Preparation time may vary depending on the load. You can
                    find information about the current situation on the front
                    page. All Lilium nails are hand painted, and at times some
                    minor improvements are permitted.
                  </h4>
                  <h3 style="text-align: left; width: 100vw; padding-top: 20px">
                    What's inside
                  </h3>
                  <ul style="margin-left: 10px; margin-right: 10px">
                    <li>
                      <h4 style="text-align: left">
                        10 nails of your size / 20 nails of all sizes
                      </h4>
                    </li>
                    <li><h4 style="text-align: left">12 adhesive tabs</h4></li>
                    <li>
                      <h4 style="text-align: left">Mini nail file</h4>
                    </li>
                    <li>
                      <h4 style="text-align: left">Buffer</h4>
                    </li>
                    <li>
                      <h4 style="text-align: left">Orangewood stick</h4>
                    </li>
                    <li>
                      <h4 style="text-align: left">Alcohol Pad</h4>
                    </li>
                    <li>
                      <h4 style="text-align: left">Storage gift box</h4>
                    </li>
                  </ul>
                  <h3 style="text-align: left; width: 100vw; padding-top: 20px">
                    Customization
                  </h3>
                  <h4
                    style="
                      margin-left: 15px;
                      margin-right: 15px;
                      text-align: left;
                    "
                  >
                    Want to make some changes? Easy as pie! Fill out the form on
                    Contact Us page, and we’ll get in touch with you shortly to
                    discuss ideas.
                  </h4>
                  <h3 style="text-align: left; width: 100vw; padding-top: 20px">
                    Choose a perfect size?
                  </h3>
                  <h4
                    style="
                      margin-left: 15px;
                      margin-right: 15px;
                      text-align: left;
                    "
                  >
                    Refer to our Size Guide or skip measuring and purchase our
                    Sample Sizing Kit to ensure the perfect fit.
                  </h4>
                  <h3 style="text-align: left; width: 100vw; padding-top: 20px">
                    Have questions?
                  </h3>
                  <h4
                    style="
                      margin-left: 15px;
                      margin-right: 15px;
                      margin-bottom: 20px;
                      text-align: left;
                    "
                  >
                    If you have questions about how to apply press on nails,
                    remove press on nails or any other questions about
                    artificial nails, please visit our Questions & Answers page.
                  </h4>
                </v-row>
                <v-row
                  v-if="!selected"
                  style="
                    padding-top: 40px;
                    margin-left: 10px;
                    margin-right: 10px;
                  "
                >
                  <h2>Length: Short, Medium, Long, Full Set(20 nails)</h2>
                </v-row>
              </div>
            </center>
          </v-col>
        </v-row>
        <v-overlay @click="overlay = false" class="myoverlay" :value="overlay">
          <v-row
            align="center"
            justify="center"
            style="width: 100vw; height: 90vh"
          >
            <v-carousel
              hide-delimiters
              next-icon="mdi-arrow-right"
              prev-icon="mdi-arrow-left"
              height="inherit"
              :show-arrows="arrows"
              hide-delimiter-background
            >
              <v-row align="center" justify="center">
                <v-carousel-item v-for="(slide, i) in nails.imageurls" :key="i">
                  <v-img
                    :src="slide"
                    class=""
                    color="error"
                    contain
                    style="width: 100vw; height: 90vh"
                    @click="actionOverlay(slide)"
                  >
                  </v-img>
                </v-carousel-item>
              </v-row>
            </v-carousel>
          </v-row>
        </v-overlay>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarView from "../components/Navbar.vue";
import { getFirestore, getDocs, collection } from "firebase/firestore";
export default {
  name: "ProductView",

  data() {
    return {
      windowWidth: window.innerWidth,
      quantity: 1,
      txt: "",
      lowPrice: undefined,
      highPrice: undefined,
      selectedLength: "",
      selectedWidth: "",
      rules: [(v) => v <= 99 || "Maximum order is 99 units"],
      size: ["Small", "Medium", "Large"],
      length: ["Short", "Medium", "Long"],
      overlay: false,
      arrows: false,
      nails: {},
      selected: true,
      selectedline: "border-bottom: 4px solid rgb(255,255,255);",
      Price: 0,
    };
  },
  async created() {
    const routeData = this.$route.params.data;
    if (typeof routeData === "undefined") {
      const db = getFirestore();
      const holder = [];
      const colRef = collection(db, "products");
      await getDocs(colRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          holder.push({ ...doc.data(), id: doc.id });
          
        })
          const search = this.$router.currentRoute.path.replace("/products/", "");
        this.nails = holder.find((x) => x.pid === search);
        this.lowPrice = this.nails.nailsize.small.short
        this.highPrice = this.nails.nailsize.small.long
        console.log("HEY I HAVE IT heRE", this.nails)
      
      
        
        
      });
    } else {
      this.nails = routeData;
      this.lowPrice = this.nails.nailsize.small.short
      this.highPrice = this.nails.nailsize.small.short

    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.txt = `it changed to ${newWidth} from ${oldWidth}`;
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth >= 600) this.arrows = true;
    else this.arrows = false;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    addToCart() {
      if (
        this.quantity > 0 &&
        this.quantity < 100 &&
        this.selectedWidth.length !== 0 &&
        this.selectedLength.length !== 0
      ) {
        console.log(this.nails)
        let cartItem = {
          pid:this.$router.currentRoute.path.replace("/", ""),
          price: this.Price,
          quantity: this.quantity,
          thumbnail: this.nails.imageurls['image1'],
          name: this.nails.name,
          length: this.selectedLength,
          width: this.selectedWidth,
          uniquekey: this.selectedLength + this.selectedWidth + this.$router.currentRoute.path.replace("/", "")
        };
        this.$store.commit("addToCart", cartItem);
      }
      //get the user values picked from the form fields
      //selected the
    },
    description() {
      this.selected = true;
    },
    additional() {
      this.selected = false;
    },
    displayPrice(event) {
      const size = "small";

      console.log(this.nails.nailsize[size][event.toLowerCase()]);

      if (event === "Short") {
        this.Price = this.nails.nailsize[size][event.toLowerCase()];
      } else if (event === "Medium") {
        this.Price = this.nails.nailsize[size][event.toLowerCase()];
      } else if (event === "Long") {
        this.Price = this.nails.nailsize[size][event.toLowerCase()];
      }
    },
    actionOverlay() {
      this.overlay = !this.overlay;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
      if (this.windowWidth >= 600) this.arrows = true;
      else this.arrows = false;
    },

    add() {
      if (this.quantity < 99) this.quantity += 1;
      else if (this.quantity >= 99) this.quantity = 1;
    },
    subtract() {
      if (this.quantity >= 2) this.quantity -= 1;
    },
  },
  components: {
    NavbarView,
  },
};
</script>
<style >
.inputPrice input[type="number"] {
  -moz-appearance: textfield;
}
.inputPrice input::-webkit-outer-spin-button,
.inputPrice input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.itemInfo {
  margin-left: 20px;
  border-bottom: 8px;
}
.itemInfo:hover {
  cursor: pointer;
}

.my-overlay >>> .v-overlay__content {
  width: 100vw;
  height: 100vh;
}
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

.v-btn .v-btn__content .v-icon {
  color: orange;
  font-size: 40px !important;
}
</style>