import { createRouter, createWebHashHistory } from 'vue-router'
import EventList from '../views/EventList.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "eventDetails" */ '../views/EventDetails.vue'
      ),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
