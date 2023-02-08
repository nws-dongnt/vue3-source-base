// import { createApp } from "vue";
// import { createPinia } from "pinia";

// import App from "./App.vue";
// import router from "./router";

// import "./assets/main.css";

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);

// app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import "@/assets/styles/tailwind.scss";
import translations from "@/lang/all_translations";
import { createPinia } from "pinia";

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: translations,
});

createApp(App)
  .use(router)
  // .component("font-awesome-icon", FontAwesomeIcon)
  .use(createPinia())
  .use(i18n)
  .provide("i18n_instance", i18n)
  .mount("#app");
