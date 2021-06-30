import { createRouter, createWebHistory } from 'vue-router'
import { store } from './store.js'

// layouts //
import ApplicationContainer from './application/layouts/ApplicationContainer.vue'
import AuthenticationContainer from './authentication/layouts/AuthenticationContainer.vue'

// application pages //
import Dashboard from './application/views/Dashboard.vue'

// authentication pages //
import LoginPage from './authentication/views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'ApplicationContainer',
    meta: { requiresAuth: true },
    component: ApplicationContainer,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        
        
      }
    ]
  },
  {
    path: '/auth',
    name: 'AuthenticationContainer',
    component: AuthenticationContainer,
    redirect: '/auth/login',
    children: [
      {
        path: '/auth/login',
        name: 'LoginPage',
        component: LoginPage
      }
    ]
  }
]

const router = createRouter({ history: createWebHistory(), routes })
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['authentication/loggedIn']) {
      next()
      return
    }
    next('/auth/login')
  } else {
    next()
  }
})

export default router