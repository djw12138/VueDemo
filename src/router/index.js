import Vue from 'vue'
import Router from 'vue-router'
import EchartsDemo1 from '@/components/echarts/demo1'
import EchartsDemo2 from '@/components/echarts/demo2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/echarts/demo1',
      name: 'EchartsDemo1',
      component: EchartsDemo1
    },
    {
      path: '/echarts/demo2',
      name: 'EchartsDemo2',
      component: EchartsDemo2
    }
  ]
})
