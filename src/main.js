import './assets/main.css'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // Импортируем Vuex

const app = createApp(App);

app.use(store); // Подключаем Vuex
app.use(router); // Подключаем роутер

app.mount("#app"); // Монтируем приложениe