import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import Projects from '../components/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { transition: 'slide-left' }
  },
  {
    path: "/contact",
    name: 'contact',
    component: Contact
  },
  {
    path: "/projects",
    name: 'projects',
    component: Projects
  }

  //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
