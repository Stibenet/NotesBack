import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
 /* {
    path: '/',
    name: 'Home',
    component: Home
  },*/
  {
    path: '',
    name: 'Home',
    component: () => import('../components/NotesList.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/ProfileInfo.vue'),
      },
      {
        path: 'edit',
        component: () => import('../components/EditProfile.vue'),
      },
      {
        path: 'message',
        component: () => import('../components/Message.vue'),
      },

    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
