<template>
  <v-app>
    <NavbarView />
    <v-main>
      <v-container fluid>
        <v-row justify="space-around">
          <v-col
            style="
              padding-top: 20px !important;
              padding-right: 50px !important;
              padding-bottom: 20px !important;
              padding-left: 50px !important;
              background-color: pink;
            "
            class="rounded-xl pa-4"
            cols="7"
          >
            <v-row>
              <v-col cols="6"><h3>Billing Details</h3></v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-text-field outlined placeholder="First Name"></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  outlined
                  maxlength="1"
                  placeholder="MI"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field outlined placeholder="Last Name"> </v-text-field>
              </v-col>
              <v-col cols="2">
                <v-select
                  placeholder="suffix"
                  outlined
                  :items="suffix"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  placeholder="Street Address"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  outlined
                  placeholder="APT, suite, unit, etc. (optional) "
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field outlined placeholder="Town/City"></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-select
                  outlined
                  :items="states"
                  placeholder="State"
                ></v-select>
              </v-col>
              <v-col cols="2">
                <v-text-field outlined maxlength="5" placeholder="Zip">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field outlined placeholder="Email"> </v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  outlined
                  placeholder="Phone Number"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-checkbox label="Ship to Another Address?"></v-checkbox>
            <v-checkbox label="Create Account?"></v-checkbox>
            <v-row style="padding: 10px" justify="end"
              ><v-btn
                style="color: white; background-color: black"
                class="rounded-lg"
                >Next</v-btn
              ></v-row
            >
          </v-col>
          <v-col cols="4" style="padding: 0px"
            ><div style="background-color: pink; padding:40px !important;" class="rounded-xl pa-4">
              <v-row style="padding: 10px"><h3>Cart Summary</h3> </v-row>

              <v-row style="padding: 10px"><h3>Items</h3> </v-row>

              <v-row align="left" justify="space-between" >
                <v-col cols="12">
                  <v-list
                    style="background-color: transparent; overflow-x: hidden; padding-left: 10px; padding-right: 10px"
                    class="overflow-y-auto"
                    height="128"
                  >
                    <template v-for="item in cart">
                      <v-list-tile
                        :key="item.uniquekey"
                      >
                        <v-list-tile-content >
                          <v-row style="padding-top:10px" justify="space-around">
                            <v-col style="padding:0px;" cols="3">  <v-img height="90%" :src="item.thumbnail"></v-img></v-col>
                            <v-col cols="5"
                              ><v-row
                                ><h4>{{ item.name }}</h4></v-row
                              >
                              <v-row>
                                <h6>
                                  <strong>Size: </strong>{{ item.width }}
                                  <strong>Length: {{ item.length }} </strong>
                                </h6></v-row
                              ></v-col
                            >
                            <v-col style="text-align: end" cols="2">
                              <v-row><h5>SUBTOTAL</h5></v-row>
                              <v-row>
                                {{
                                  (item.price * item.quantity).toFixed(2)
                                }}</v-row
                              >
                              
                            </v-col>
                          </v-row>
                          
                        </v-list-tile-content>
                      </v-list-tile>
                    </template>
                  </v-list>
                </v-col>
              </v-row>
 <v-row style="padding: 10px"><h4>Shipping</h4> </v-row>
              <v-radio-group v-model="radioGroup">
                <v-row style="padding: 10px">
                  <v-radio value="9.99" label="USPS 2-DAY "> </v-radio>
                  <v-spacer></v-spacer>
                  <h4>${{ 9.99 }}</h4></v-row
                >
                <v-row
                  style="
                    padding: 10px;
                    border-bottom: 2px solid rgb(255, 255, 255);
                  "
                >
                  <v-radio value="49.99" label="USPS EXPRESS "></v-radio>
                  <v-spacer></v-spacer>
                  <h4>${{ 49.99 }}</h4>
                </v-row>
              </v-radio-group>
              
              <v-row style="padding: 10px"
                ><h4>Total</h4>

                <v-spacer></v-spacer>
                <h4 :v-model="cartTotal">
                  {{ (Number(cartSubTotal) + Number(radioGroup)).toFixed(2) }}
                </h4></v-row
              >
              <v-row style="padding: 10px" justify="center"
                ><v-btn
                  to="/checkout"
                  style="background-color: black; color: white"
                  >CHECKOUT</v-btn
                ></v-row
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavbarView from "../components/Navbar.vue";
import { mapGetters } from "vuex";
export default {
  name: "MyAccount",
  computed: mapGetters(["cart"]),
  data() {
    return {
      suffix: [
        "Jr",
        "Sr",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VII",
        "IX",
        "X",
      ],
      states: [
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
      ],
    };
  },
  components: {
    NavbarView,
  },
};
</script>