import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router.js";
import { store } from "./store.js";
import './assets/css/tailwind.css';

    createApp(App)
      .use(store)
      .use(router)
      .mount('#app');
