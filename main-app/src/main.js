import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import store from './store'

// import svgIcon fr
import '@heroicons/vue'

createApp(App).use(router).use(store).mount('#app')
