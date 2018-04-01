import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import About from './components/about.vue'
import Blog from './components/blog.vue'
import Work from './components/work.vue'

const routes = [
  {
    path: '/',
    component: About
  },
  {
    path : '/blog',
    component: Blog
  },
  {
    path : '/work',
    component: Work
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})