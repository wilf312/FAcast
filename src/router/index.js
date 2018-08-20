import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/:id',
      component: Content
    }
  ]
})
