<template>
	<v-app id="app" dark>
		<navigation></navigation>
		
		<video-background :src="video.src" :poster="video.poster"></video-background>
			
		<v-fade-transition mode="out-in" duration type="animation">
			<v-main>
				
				<v-container fluid>
					<github-ribbon :url="github"/>
					
					<v-layout align-center justify-center>
						<v-flex md10 sm12>
							<v-parallax :src="parallax" height="100%" class="my-2">
        						<router-view></router-view>
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
import VideoBackground from '@/components/VideoBackground'
import GithubRibbon from '@/components/GithubRibbon'

export default {
	name: 'app',
	components: {
		Navigation,
		VideoBackground,
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
			video: {
				src: 'matrix-rain-fade-in-out.mp4',
				poster: ''
			}
		}
	}
}
</script>
