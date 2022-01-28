// import Vue from 'vue'
import { createApp } from "vue";
// import BootstrapVue from 'bootstrap-vue'
// import IconsPlugin from 'bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import 'mdb-vue-ui-kit/css/mdb.min.css'; 

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)  
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";