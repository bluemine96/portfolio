import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    name:'个站',
    component: () => import('@/views/portfolio/Index.vue'),
    meta: {
      title: '个站'
    }
  },
  {
    path:'/design',
    name:'设计列表',
    component: () => import('@/views/portfolio/DesignList.vue'),
    meta: {
      title: '设计列表'
    }
  },
  {
    path:'/machine',
    name:'智慧机房',
    component: () => import('@/views/machineRoom/Index.vue'),
    meta: {
      title: '智慧机房'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
