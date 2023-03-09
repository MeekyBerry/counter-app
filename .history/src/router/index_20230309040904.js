import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../components/counter.vue'
// import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'NotFound',
  //   component: NotFound
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;