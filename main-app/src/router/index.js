import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/dashboard/index.vue'

const routes = [
  {
    meta: {
      title: 'Dashboard it is!'
    },
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router