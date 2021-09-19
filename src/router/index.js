import Vue from 'vue'
import Router from 'vue-router'
import { authenticationGuard } from "@/auth/authenticationGuard";
import Meta from 'vue-meta'

import Author from '@/views/Author.vue'
import Settings from '@/views/Settings.vue'
import Dashboard from '@/views/Dashboard.vue'
import Profile from '@/views/Profile.vue'

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
		{ path: '/settings', name: 'Settings', component: Settings, beforeEnter: authenticationGuard },
		{ path: '/dashboard', name: 'Dashboard', component: Dashboard, beforeEnter: authenticationGuard },
		{ path: '/profile', name: 'User Profile', component: Profile, beforeEnter: authenticationGuard },
  ]
})

// router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
