import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Vuex from "vuex";
import storeState from "./store";
Vue.use(Vuex);
const store = new Vuex.Store(storeState);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App/>"
});
