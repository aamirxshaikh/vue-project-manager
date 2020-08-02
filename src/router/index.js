import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Team from '../views/Team.vue'
import Projects from '../views/Projects.vue'
import Announcements from '../views/Announcements.vue'
import About from '../views/About.vue'
import Terms from '../views/Terms.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/team',
    name: 'Team',
    component: Team
  },

  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  
  {
    path: '/announcements',
    name: 'Announcements',
    component: Announcements
  },

  {
    path: '/about-us',
    name: 'About',
    component: About
  },

  {
    path: '/terms-and-conditions',
    name: 'Terms',
    component: Terms
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
