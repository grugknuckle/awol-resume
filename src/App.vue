<template>
	<v-app id="app" dark>
		<navigation></navigation>
		
		<matrix-rain ref="matrix" :fontSize="10" :background="true" :interval="100"></matrix-rain>

		<v-fade-transition mode="out-in" duration type="animation">
			<v-content>		
        <router-view @canvasResize="resizeCanvas"></router-view>
			</v-content>
		</v-fade-transition>
		
		<v-footer app>
			<span></span>
		</v-footer>
	</v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import MatrixRain from '@/components/MatrixRain'

export default {
	name: 'app',
	components: {
		Navigation,
		MatrixRain
	},
	metaInfo: {
		title: 'Home',
		titleTemplate: 'Aaron Wolbach | %s'
	},
	data() {
		return {}
	},
	methods: {
		resizeCanvas(data) {
			this.$refs.matrix.reset()
		}
	}
}
</script>
