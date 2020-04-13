import Vue from 'vue'
import Router from 'vue-router'
import Author from '@/views/Author.vue'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta, {
	keyName: 'metaInfo',
	attribute: 'data-vue-meta',
	ssrAttribute: 'data-vue-meta-server-rendered',
	tagIDKeyName: 'vmid',
	refreshOnceOnNavigation: true
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'author', component: Author },
    // { path: '/', name: 'Author', component: Author },
		// { path: '/settings', name: 'Settings', component: Settings },
		// { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  ]
})

// router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
