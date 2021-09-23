<template>
	<v-app id="app" dark>
		<navigation></navigation>
		
		<!-- <matrix-rain ref="matrix" :fontSize="10" :background="true" :interval="100"></matrix-rain> -->
		<video-background></video-background>

		<v-fade-transition mode="out-in" duration type="animation">
			<v-main>		
        <router-view></router-view>
			</v-main>
		</v-fade-transition>
		
		<v-footer app>
			<span></span>
		</v-footer>
	</v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
// import MatrixRain from '@/components/MatrixRain'
import VideoBackground from '@/components/VideoBackground'

export default {
	name: 'app',
	components: {
		Navigation,
		// MatrixRain,
		VideoBackground
	},
	metaInfo: {
		title: 'Home',
		titleTemplate: 'Aaron Wolbach | %s'
	},
	data() {
		return {}
	}
}
</script>
