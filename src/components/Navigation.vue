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

			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
import { mdiAccount, mdiHome } from '@mdi/js'

export default {
	data: () => ({
		drawer: true,
		miniVariant: false,
		routes: [
			{ title: 'Author', icon: mdiAccount, to: '/' },
			{ title: 'Home', icon: mdiHome, to: '/' }
		],
		logo: require('../assets/Grugknuckle-Logo-dark.svg')
	}),
	methods: {}
}
</script>