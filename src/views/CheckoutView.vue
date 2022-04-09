<template>
  <v-app>
    <NavbarView />
    
    <v-main>
      <v-container fluid>
        <v-row @submit.prevent="submit" justify="space-around">
          <v-form v-model="valid" lazy-validation ref="billing">
            <v-col
              style="
                padding-top: 20px !important;
                padding-right: 50px !important;
                padding-bottom: 20px !important;
                padding-left: 50px !important;
                background-color: pink;
              "
              class="rounded-xl"
              cols="10"
              > <div  v-if="formComplete"><Card /> </div><div v-bind="formComplete" v-if="!formComplete">
                <v-row>
                  <v-col cols="6"><h3>Billing Details</h3></v-col>
                </v-row>

                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="firstName"
                      required
                      outlined
                      @keydown.space.prevent
                      :rules="nameRules"
                      label="First Name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="2">
                    <v-text-field
                      v-model="middleInitial"
                      outlined
                      :rules="middleInitalRules"
                      maxlength="1"
                      label="MI"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      :rules="nameRules"
                      required
                      v-model="lastName"
                      @keydown.space.prevent
                      outlined
                      label="Last Name"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="2">
                    <v-select
                    v-model="suffixselected"
                      label="suffix"
                      outlined
                      :items="suffix"
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <v-text-field
                    v-model="address1"
                      :rules="addressRules"
                      label="Address Line"
                      placeholder="Address"
                      outlined
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                        v-model="address2"
                      :rules="addressRules2"
                      outlined
                      label="Address Line 2"
                      placeholder="APT, suite, unit, etc. (optional) "
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      :rules="cityRules"
                      required
                      outlined
                      v-model="city"
                      label="Town/City"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-select
                      :rules="[(v) => !!v || 'Item is required']"
                      outlined
                      v-model="selectedState"
                      :items="states"
                      label="State"
                    ></v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                    v-model="zipcode"
                      :rules="zipcodeRules"
                      outlined
                      maxlength="5"
                      label="Zip"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field :rules="emailRules" v-model="email" outlined label="Email">
                    </v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="phoneNumber"
                      :rules="phoneNumberRules"
                      @keydown.space.prevent
                      maxlength="14"
                      @input="acceptNumber"
                      outlined
                      label="Phone Number"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-checkbox
                  v-model="selected"
                  value="Another Address"
                  label="Ship to Another Address?"
                ></v-checkbox>
                <v-col
                  v-model="selected"
                  v-if="selected.find((str) => str === 'Another Address')"
                >
                  <v-row>
                    <h3>Shipping Details</h3>
                  </v-row>
                  <v-form ref="shippingdetails">
                    <v-row>
                      <v-col cols="4">
                        <v-text-field
                          required
                          outlined
                          @keydown.space.prevent
                          :rules="nameRules"
                          label="First Name"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-text-field
                          outlined
                          :rules="middleInitalRules"
                          maxlength="1"
                          label="MI"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          :rules="nameRules"
                          required
                          @keydown.space.prevent
                          outlined
                          label="Last Name"
                        >
                        </v-text-field>
                      </v-col>

                      <v-col cols="2">
                        <v-select
                          label="suffix"
                          outlined
                          :items="suffix"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          :rules="addressRules"
                          label="Address Line"
                          placeholder="Address"
                          outlined
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          :rules="addressRules"
                          outlined
                          label="Address Line 2"
                          placeholder="APT, suite, unit, etc. (optional) "
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          :rules="addressRules"
                          required
                          outlined
                          label="Town/City"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-select
                          outlined
                          :rules="[(v) => !!v || 'Item is required']"
                          :items="states"
                          label="State"
                        ></v-select>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field
                          :rules="zipcodeRules"
                          outlined
                          maxlength="5"
                          label="Zip"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-col>
                <v-checkbox
                  v-model="selected"
                  value="Create Account"
                  label="Create Account?"
                ></v-checkbox>
                <v-col
                  v-model="selected"
                  v-if="selected.find((str) => str === 'Create Account')"
                >
                  <v-form>
                    <v-row
                      ><v-col cols="12">
                        <v-text-field outlined maxlength="5" label="Username">
                        </v-text-field> </v-col
                    ></v-row>
                    <v-row
                      ><v-col cols="12">
                        <v-text-field outlined maxlength="5" label="Password">
                        </v-text-field> </v-col
                    ></v-row>
                  </v-form>
                </v-col>
                {{valid}}
                <v-row style="padding: 10px" justify="end">
                  <v-btn
                    :disabled="!valid"
                    @click="validate"
                    style="color: white; background-color: black"
                    class="rounded-lg"
                    >Next</v-btn
                  ></v-row
                >
              </div>
            </v-col>
          </v-form>

          <v-col cols="4" style="padding: 0px"
            ><div
              style="background-color: pink; padding: 40px !important"
              class="rounded-xl pa-4"
            >
              <v-row style="padding: 10px"><h3>Cart Summary</h3> </v-row>

              <v-row style="padding: 10px"><h3>Items</h3> </v-row>

              <v-row align="left" justify="space-between">
                <v-col cols="12">
                  <v-list
                    style="
                      background-color: transparent;
                      overflow-x: hidden;
                      padding-left: 10px;
                      padding-right: 10px;
                    "
                    class="overflow-y-auto"
                    height="128"
                  >
                    <template v-for="item in cart">
                      <v-list-tile :key="item.uniquekey">
                        <v-list-tile-content>
                          <v-row
                            style="padding-top: 10px"
                            justify="space-around"
                          >
                            <v-col style="padding: 0px" cols="3">
                              <v-img
                                class="rounded-lg"
                                height="90%"
                                :src="item.thumbnail"
                              ></v-img
                            ></v-col>
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
import Card from "../components/card.vue"
export default {
  name: "MyAccount",
  computed: mapGetters(["cart","getBillingInfo"]),
  methods: {
    validate() {
        // validate info in billing details form
      this.$refs.billing.validate();
      // check valid inputs from user
      if(this.valid){
          //save the data to vuex store as Billing details
          let billinginfo = {}
          billinginfo["FirstName"] = this.firstName
          billinginfo["MiddleInitial"] = this.middleInitial
          billinginfo["LastName"] = this.lastName
          billinginfo["Suffix"] = this.suffixselected
          billinginfo ["AddressLine1"] = this.address1
          billinginfo["AddressLine2"] =  this.address2
          billinginfo["City"] = this.city 
          billinginfo["State"] = this.selectedState
          billinginfo["ZipCode"] = this.zipcode
          billinginfo["Email"] = this.email
          billinginfo["PhoneNumber"] = this.phoneNumber
        this.$store.commit('setBillingInfo', billinginfo)
        console.log(this.getBillingInfo)
        this.formComplete =true;
      }
    },
    acceptNumber() {
      var x = this.phoneNumber
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phoneNumber = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
  },
  data() {
    return {
      suffix: [
        "",
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
      formComplete: false,
      valid: true,
      radioGroup: 9.99,
      firstName: "",
      lastName: "",
      selectedState: '' ,

      middleInital: "",
      middleInitalRules: [
        (v) => {
          const pattern = /[^a-zA-Z-]/gm;
          return !pattern.test(v) || "Please don't use Special Characters";
        },
      ],
      suffixselected: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => {
          const pattern = /[^a-zA-Z-]/gm;
          return !pattern.test(v) || "Please don't use Special Characters";
        },
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneNumber: "",
      phoneNumberRules: [
        (v) => !!v || "Phone number is required",
        (v) => v.length >= 14 || "Phone number needs to be 10 digits",
        (v) => {
          const pattern = /[^0-9-()\s]/gm;
          return !pattern.test(v) || "Phone Number should consist of numbers";
        },
      ],
      address1: "",
      address2: "",
      addressRules: [
        (v) => !!v || "Address is required",
        (v) => {
          const pattern = /[^a-zA-Z0-9-\s]/gm;
          return !pattern.test(v) || "Please don't use Special Characters";
        },
      ],
      addressRules2: [
        (v) => {
          const pattern = /[^a-zA-Z0-9-\s]/gm;
          return !pattern.test(v) || "Please don't use Special Characters";
        },
      ],
      city: '',
      cityRules: [
        (v) => !!v || "City/Town is required",
        (v) => {
          const pattern = /[^a-zA-Z0-9-\s]/gm;
          return !pattern.test(v) || "Please don't use Special Characters";
        },
      ],
      zipcode: "",
      zipcodeRules: [
        (v) => !!v || "Zip is required",
        (v) => {
          const pattern = /[^0-9-]/gm;
          return !pattern.test(v) || "Zip must contain all numbers";
        },
      ],
      selected: [],
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
    Card
  },
};
</script>