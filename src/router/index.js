import { createRouter, createWebHistory } from 'vue-router'
import Important from '@/views/Important.vue'
import Tasks from '@/views/Tasks.vue'
import Day from '@/views/Day.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Day',
      component: Day, // home
    },
    {
      path: '/important',
      name: 'Important',
      component: Important,
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks,
    },

  ],
})

export default router
