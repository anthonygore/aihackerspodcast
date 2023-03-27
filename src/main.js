import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { VueReCaptcha } from 'vue-recaptcha-v3'

const app = createApp(App)
app
  .use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY })
  .mount('#app')
