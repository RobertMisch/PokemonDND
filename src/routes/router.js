import { createRouter, createWebHistory } from 'vue-router'
import LandingHome from '../views/LandingHome.vue'
const routes = [
  {
    path: '/',
    name: 'LandingHome',
    component: LandingHome
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/PokedexLanding.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router