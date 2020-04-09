<template>
	<v-app id="app" dark>
		<navigation></navigation>
		
		<particles-bg type="cobweb" :canvas="{backgroundColor:'#888'}" :bg="true"/>
		<!-- <particles-bg type="cobweb" :canvas="{backgroundColor:'#81D4FA'}" :bg="true"/> -->
		<v-fade-transition mode="out-in" duration type="animation">
			<v-content>		
        <router-view></router-view>
			</v-content>
		</v-fade-transition>
		
		<v-footer app>
			<span></span>
		</v-footer>
	</v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import { ParticlesBg } from "particles-bg-vue"	// https://dev.to/lindelof/a-vue-js-particle-background-component-that-makes-your-page-sparkle-33pe

export default {
	name: 'app',
	components: {
		Navigation,
		ParticlesBg
	},
	metaInfo: {
		title: 'Home',
		titleTemplate: 'Aaron Wolbach | %s'
	},
	data() {
		return {
			background: require('./assets/dark-background-2.jpg'),
		}
	},
	methods: {}
}
</script>

<style>
 .canvas {
	 z-index: auto !important;
 }
</style>