<template>
	<div>
		<v-app-bar app clipped-left dense dark>

			<v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
			
      <v-toolbar-title class="float-left">
				<v-img :src="logo" contain max-height="50"></v-img>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items>
				<v-avatar color="primary" v-if="$auth.isAuthenticated">
					<img :src="$auth.user.picture" :alt="$auth.user.name">
				</v-avatar>
				<v-avatar color="primary" size="48" v-else>
					<v-icon x-large>{{ avatar }}</v-icon>
				</v-avatar>
			</v-toolbar-items>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app floating :clipped="true" dark :mini-variant="miniVariant">
			<v-list dense nav>
				<v-list-item v-for="item in routes" :key="item.title" :to="item.to">
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item href="#" @click="authenticate()">
					<v-list-item-icon>
						<v-icon>{{ signInOut.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ signInOut.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
import {
	mdiAccount,
	mdiHome,
	mdiCogOutline,
	mdiMonitorDashboard,
	mdiLogoutVariant,
	mdiLoginVariant,
	mdiAccountCircle
} from '@mdi/js'

export default {
	data: () => ({
		drawer: false,
		miniVariant: false,
		logo: require('../assets/Grugknuckle-Logo-dark.svg')
	}),
	computed: {
		routes() {
			let routes = [
				{ title: 'About', icon: mdiAccount, to: '/', auth: false },
				{ title: 'Setttings', icon: mdiCogOutline , to: '/settings', auth: true },
				{ title: 'Dashboard', icon: mdiMonitorDashboard , to: '/dashboard', auth: true },
			]
			return this.$auth.isAuthenticated ? routes : routes.filter(x => !x.auth)
		},
		signInOut() {
			return {
				icon: this.$auth.isAuthenticated ? mdiLogoutVariant : mdiLoginVariant,
				title: this.$auth.isAuthenticated ? 'Log Out' : 'Log In',
			}
		},
		avatar() {
			return mdiAccountCircle
		}
	},
	methods: {
		toggleDrawer() {
			this.drawer = !this.drawer
		},
		// https://auth0.com/blog/complete-guide-to-vue-user-authentication/#Add-User-Authentication
		authenticate() {
			if (this.$auth.isAuthenticated) {
				// https://auth0.github.io/auth0-spa-js/interfaces/logoutoptions.html
				this.$auth.logout()
        this.$router.push({ path: '/' })
			} else {
				// https://auth0.github.io/auth0-spa-js/interfaces/redirectloginoptions.html
				this.$auth.loginWithRedirect()
			}
		}
	}
}
</script>