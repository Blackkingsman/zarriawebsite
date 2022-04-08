import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cart: [
    ],
    cartSubTotal: 0,
  },
  mutations: {

    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    updateQty(state, { uniquekey, action }) {
      console.log(uniquekey)
      if (action.toLowerCase() === 'up')
        state.cart.find(x => x.uniquekey === uniquekey).quantity !== 99 ? state.cart.find(x => x.uniquekey === uniquekey).quantity++ : 99;
      else
        state.cart.find(x => x.uniquekey === uniquekey).quantity !== 1 ? state.cart.find(x => x.uniquekey === uniquekey).quantity-- : 1;

      state.cartSubTotal = 0;
      state.cart.forEach(item => {
        state.cartSubTotal += item.price * item.quantity
      })

    },
    updateCart(state) {
      state.cartSubTotal = 0;
      state.cart.forEach(item => {
        state.cartSubTotal += item.price * item.quantity
      })
    },
    addToCart(state, item) {
      // check to see if item is already in cart if so then update quantity
      if (typeof state.cart.find(x => x.uniquekey === item.uniquekey) ==='undefined'){
        //item is not in cart so push the item to cart
      state.cart.push(item)
      } else {
        //update the quantity by adding the amount from user
        state.cart.find(x => x.uniquekey === item.uniquekey).quantity+= item.quantity
      }
      state.cart.forEach(item => {
        state.cartSubTotal += item.price * item.quantity
      })
    }
  },
  getters: {
    cart(state) {
      console.log(state.cart)
      return state.cart
    },
    cartSubTotal(state) {
      console.log(state.cartSubTotal.toFixed(2))
      return state.cartSubTotal.toFixed(2)
    }
  },
  actions: {

  }

})

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state));
});
export default store