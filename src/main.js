import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
// Pinia
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// Material Design Icons
import "@mdi/font/css/materialdesignicons.css";

// i18n
import { createI18n } from "vue-i18n";
import es from "./locales/es.json";
import en from "./locales/en.json";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const pinia = createPinia();

const i18n = createI18n({
  legacy: false,
  locale: "es", // Default language
  fallbackLocale: "en",
  messages: {
    es,
    en,
  },
});

createApp(App).use(pinia).use(vuetify).use(i18n).mount("#app");
