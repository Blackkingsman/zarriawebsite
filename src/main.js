import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAqfsKaa8t6yYdgOAxNWzqpY4wQbZBtXzY",
  authDomain: "zarriaswebsite.firebaseapp.com",
  projectId: "zarriaswebsite",
  storageBucket: "zarriaswebsite.appspot.com",
  messagingSenderId: "466798059489",
  appId: "1:466798059489:web:bfc297fea6dfae56457ca0",
  measurementId: "G-S85XFF62RZ"
};

initializeApp(firebaseConfig);


new Vue({
  router,
  vuetify,
  data () {
    return {
      db: getFirestore()
    }
  },
  render: h => h(App)
}).$mount('#app')
