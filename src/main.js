import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import 'mdb-vue-ui-kit/css/mdb.min.css';
import "bootstrap/dist/css/bootstrap.css";


createApp(App).use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";