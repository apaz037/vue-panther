import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: layoutComponent
    },
    {
      path: '/:id',
      component: cryptoComponent
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x:0, y:0 }
  }
})
