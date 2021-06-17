<template>
	<div>
		<v-app-bar app clipped-left dense dark>

			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			
      <v-toolbar-title class="float-left">
				<v-img :src="logo" contain max-height="50"></v-img>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items></v-toolbar-items>
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
import { mdiAccount, mdiHome, mdiCogOutline, mdiMonitorDashboard, mdiLogoutVariant, mdiLoginVariant } from '@mdi/js'

export default {
	data: () => ({
		drawer: true,
		miniVariant: false,
		isLoggedin: false,
		logo: require('../assets/Grugknuckle-Logo-dark.svg')
	}),
	computed: {
		routes() {
			let routes = [
				{ title: 'About', icon: mdiAccount, to: '/', auth: false },
				{ title: 'Setttings', icon: mdiCogOutline , to: '/settings', auth: true },
				{ title: 'Dashboard', icon: mdiMonitorDashboard , to: '/dashboard', auth: true },
			]
			return this.isLoggedin ? routes : routes.filter(x => !x.auth)
		},
		signInOut() {
			return {
				icon: this.isLoggedin ? mdiLogoutVariant : mdiLoginVariant,
				title: this.isLoggedin ? 'Log Out' : 'Log In',
			}
		},
		// isLoggedin() {
		// 	return false
		// }
	},
	methods: {
		async authenticate() {
			if (this.isLoggedin) {
				console.log('should logout')
				// await this.$auth.logout()
			} else {
				console.log('should login')
				// await this.$auth.login()
			}
			this.isLoggedin = !this.isLoggedin
		}
	}
}
</script>