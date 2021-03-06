import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

import AboutPage from '@/views/AboutPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import HomePage from '@/views/HomePage.vue'
import PortfolioPage from '@/views/PortfolioPage.vue'
import CaseStudyPage from '@/views/CaseStudyPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: {
        index: 0
      }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: PortfolioPage,
      meta: {
        index: 1
      }
    },
    {
      path: '/portfolio/:slug',
      name: 'Case Study',
      component: CaseStudyPage
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
      meta: {
        index: 2
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage,
      meta: {
        index: 2
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from) => {
  store.commit('setMenuOpen', false)
})

export default router
