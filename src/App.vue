<template>
	<v-app id="app" dark>
		<navigation></navigation>
		
		<matrix-rain ref="matrix" :fontSize="10" :background="true" :interval="100"></matrix-rain>

		<v-fade-transition mode="out-in" duration type="animation">
			<v-main>
				
				<v-container fluid>
					<github-ribbon :url="github"/>
					
					<v-layout align-center justify-center>
						<v-flex md10 sm12>
							<v-parallax :src="parallax" height="100%" class="my-2">
        				<router-view @canvasResize="resizeCanvas"></router-view>
							</v-parallax>
						</v-flex>
					</v-layout>

				</v-container>

			</v-main>
		</v-fade-transition>
		
		<v-footer app>
			<span></span>
		</v-footer>
	</v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import MatrixRain from '@/components/MatrixRain'
import GithubRibbon from '@/components/Resume/GithubRibbon'

export default {
	name: 'app',
	components: {
		Navigation,
		MatrixRain,
		GithubRibbon
	},
	metaInfo: {
		title: 'Home',
		titleTemplate: 'Aaron Wolbach | %s'
	},
	data() {
		return {
			github: 'https://github.com/grugknuckle',
			parallax: require('./assets/img/light-background.jpg'),
		}
	},
	methods: {
		resizeCanvas(data) {
			this.$refs.matrix.reset()
		}
	}
}
</script>
