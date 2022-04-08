<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <NavbarView />
        <v-row style="padding: 10px"><h1>Shopping Cart</h1></v-row>
        <v-row justify="space-around">
          <v-col
            style="background-color: pink"
            class="rounded-xl pa-4"
            cols="8"
          >
            <v-row style="border-bottom: 2px solid rgb(255, 255, 255)">
              <v-col cols="4"><h3>PRODUCT</h3></v-col>
              <v-col cols="2"><h3>PRICE</h3></v-col>
              <v-col cols="3"><h3>QUANTITY</h3></v-col>
              <v-col cols="2"><h3>SUBTOTAL</h3></v-col></v-row
            >
            <v-row
              align="left"
              justify="left"
              style="border-bottom: 2px solid rgb(255, 255, 255)"
              v-for="item in cart"
              :key="item.uniquekey"
            >
              <v-col class="picture" cols="2">
                <v-img
                  class="rounded-xl"
                  style="width: 150px; height: 150px; padding: 0px !important"
                  :src="item.thumbnail"
                ></v-img>
              </v-col>
              <v-col class="description" cols="2"
                ><v-row
                  ><h2>{{ item.name }}</h2>
                </v-row>
                <v-row>
                  <h5>
                    <strong>Length:</strong> {{ item.length }}
                    <strong>Size: </strong> {{ item.width }}
                  </h5></v-row
                ></v-col
              >

              <v-col cols="2" style="">
                <h2>{{ item.price }}</h2></v-col
              >
              <v-col class="quantity" cols="3" style="">
                <v-text-field
                  class="inputPrice"
                  type="number"
                  min="1"
                  max="99"
                  maxlength="2"
                  oninput="this.value=this.value.slice(0,this.maxLength||1);this.value=(this.value   < 1) ? '' : this.value; "
                  :rules="rules"
                  style="width: 50%; height: 100%"
                  v-model.number="item.quantity"
                  solo
                >
                  <v-icon
                    slot="append"
                    color="pink"
                    @click="updateQty(item.uniquekey, 'up')"
                  >
                    mdi-plus
                  </v-icon>
                  <v-icon
                    slot="prepend-inner"
                    color="pink"
                    @click="updateQty(item.uniquekey, 'down')"
                  >
                    mdi-minus
                  </v-icon>
                </v-text-field></v-col
              >
              <v-col class="subtotal" cols="2" style="">
                <h2>{{ (item.quantity * item.price).toFixed(2) }}</h2></v-col
              >
              <v-col cols="1">
                <v-icon slot="append" color="pink"> mdi-delete </v-icon></v-col
              >
            </v-row>
            <v-row style="padding-top: 100px">
              <v-col align-self="center" cols="2"
                ><v-text-field
                  class="text-coupon rounded-lg"
                  placeholder="Enter Coupon"
                  filled
                  dense
                  background-color="white"
                  color="black"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="2"
                ><v-btn
                  class="rounded-lg"
                  style="
                    color: white;
                    background: black;
                    width: auto;
                    height: auto;
                  "
                  >Apply Coupon</v-btn
                ></v-col
              >
              <v-col cols="2"
                ><v-btn
                  class="rounded-lg"
                  style="
                    color: white;
                    background: black;
                    width: auto;
                    height: auto;
                  "
                  @click="updateCart"
                  >UPDATE CART</v-btn
                ></v-col
              ></v-row
            >
          </v-col>

          <v-col cols="2" style="padding: 0px"
            ><div style="background-color: pink" class="rounded-xl pa-4">
              <v-row
                style="
                  padding: 10px;
                  border-bottom: 2px solid rgb(255, 255, 255);
                "
                ><h4>SUBTOTAL</h4>
                <v-spacer></v-spacer>
                <h4 :v-model="cartSubTotal">${{ cartSubTotal }}</h4></v-row
              >
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
                ><v-btn to="/checkout" style="background-color: black; color: white"
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
  name: "CartView",
  computed: mapGetters(["cart", "cartSubTotal"]),
  components: {
    NavbarView,
  },

  data() {
    return {
      headers: [
        {
          text: "PRODUCT",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "PRICE", value: "price" },
        { text: "QUANTITY", value: "protein" },
        { text: "SUBTOTAL", value: "iron" },
      ],
      rules: [(v) => v <= 99 || "Maximum order is 99 units"],
      cartItems: this.cart,
      radioGroup: "9.99",
      cartTotal: 0,
    };
  },
  methods: {
    updateCart() {
      console.log("UPDATE CART!!!!");
      this.$store.commit("updateCart");
    },
    updateQty(uniquekey, action) {
      this.$store.commit("updateQty", { uniquekey, action });
    },
  },
};
</script>
<style >
</style>