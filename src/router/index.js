import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from '../stores/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: () => import('../views/RegisterPage.vue'),
    },
    {
      path: '/about-us',
      name: 'AboutUsPage',
      component: () => import('../views/AboutUsPage.vue'),
    },
    {
      path: '/profile',
      name: 'AccountPage',
      component: () => import('../views/AccountPage.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/notices',
      name: 'NoticesPage',
      component: () => import('../views/NoticesPage.vue'),
    },
    {
      path: '/notices/:uniqUrlTitle',
      name: 'NoticeDetailPage',
      component: () => import('../views/NoticeDetailPage.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/store',
      name: 'StorePage',
      component: () => import('../views/StorePage.vue'),
    },
    {
      path: '/store/:uniqUrlName',
      name: 'StoreDetailPage',
      component: () => import('../views/ProductDetailPage.vue'),
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: () => import('../views/CartPage.vue'),
    }
  ]
})

function getRouteRequiresAuth(currentRoute){
  const router = currentRoute.matched.slice().reverse().find(r =>
    Object.prototype.hasOwnProperty.call(r, 'meta') &&
      Object.prototype.hasOwnProperty.call(r.meta, 'requiresAuth')
  )
  return router?.meta?.requiresAuth
}
router.beforeEach(async (to, from, next) => {
  const sessionStore = useSessionStore()
  const requiresAuth = getRouteRequiresAuth(to)
  console.log(sessionStore.isLogged)
  if(requiresAuth && !sessionStore.isLogged){
    return next('/login')
  }
  return next()
})

export default router
