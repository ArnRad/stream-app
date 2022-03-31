import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Stream from '../components/Stream.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(Router)
Vue.use(VueYouTubeEmbed, { global: true, componentId: 'youtube-media' })

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/stream',
      name: 'stream',
      component: Stream
    }
  ]
})
