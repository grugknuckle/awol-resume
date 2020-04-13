<template>
	<div>
		<v-app-bar app clipped-left dense dark>

			<!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
			
      <v-toolbar-title>
				<v-img :src="logo" contain max-height="30"></v-img>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items></v-toolbar-items>
		</v-app-bar>

		<!-- <v-navigation-drawer v-model="drawer" app floating clipped dark mini-variant>
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
		</v-navigation-drawer> -->
	</div>
</template>

<script>
export default {
	data: () => ({
		drawer: true,
		routes: [
			{ title: 'Home', icon: 'mdi-home', to: '/' }
		],
		logo: require('../assets/logo-2.png')
	}),
	methods: {}
}
</script>