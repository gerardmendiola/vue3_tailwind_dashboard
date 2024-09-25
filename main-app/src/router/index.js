import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/dashboard/index.vue'
import AboutUs from '../pages/about-us/index.vue'
import Profile from '../pages/profile/index.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: AboutUs
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
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