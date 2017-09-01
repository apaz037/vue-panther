import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '@/components/hello';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Hello', component: Hello},
];

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  mode: 'history',
});
