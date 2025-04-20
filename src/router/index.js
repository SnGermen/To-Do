import { createRouter, createWebHistory } from 'vue-router'
import Important from '@/views/Important.vue'
import Tasks from '@/views/Tasks.vue'
import Day from '@/views/Day.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks,
    },
    {
      path: '/day',
      name: 'Day',
      component: Day, // home
    },
    {
      path: '/important',
      name: 'Important',
      component: Important,
    },


  ],
})

export default router
