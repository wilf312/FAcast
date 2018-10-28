import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Content from '@/components/Content'
import config from '@/assets/config.yml'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/:id',
      name: 'Content',
      component: Content
    }
  ]
})

router.afterEach((to, _) => {
  gtag('config', config.googleAnalytics, {
    page_path: to.path
  })
})

export default router
