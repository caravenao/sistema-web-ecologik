import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import api from './setup/axios'

const pinia = createPinia()

const app = createApp(App)
  .use(router)
  .use(pinia)

app.config.globalProperties.$api = api

router.isReady().then(() => {
    app.mount('#app')
})

import 'bootstrap/dist/js/bootstrap.js'