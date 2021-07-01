import { createApp } from 'vue';
import VueGapi from 'vue-gapi'
import App from "./App.vue";
import router from "./router.js";
import { store } from "./store.js";
import './assets/css/tailwind.css';

createApp(App)
  .use(store)
  .use(router)
  .use(VueGapi, {
    clientId: '',
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  })
  .mount('#app');
