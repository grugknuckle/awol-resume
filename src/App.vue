<template>
	<v-app id="app" dark>
		<navigation></navigation>
		
		<particles-bg :type="type" 
									:canvas="canvas"
									:num="num"
									:bg="true"
		/>

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
				type: 'cobweb',
				canvas: { backgroundColor: '#B4B4B4', zIndex: 'auto' },	// '#888' '#365CCA'
				num: 500,
				// color: [ '#000' ],
				zIndex: 'auto'
		}
	}
}
</script>
