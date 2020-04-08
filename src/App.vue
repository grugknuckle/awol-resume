<template>
	<v-app id="app">
		<navigation></navigation>

		<v-fade-transition mode="out-in" duration type="animation">
			<v-content :style="{ backgroundImage: `url('${background}')`, backgroundSize: '100%,contain', backgroundRepeat: 'repeat-y' }">
        <!-- <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="2"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="repulse"
          :clickEffect="true"
          clickMode="push"
        >
        </vue-particles> -->
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
// particles ... https://vue-particles.netlify.com/
export default {
	name: 'app',
	components: { Navigation },
	metaInfo: {
		title: 'Home',
		titleTemplate: 'Aaron Wolbach | %s'
	},
	data() {
		return {
			background: require('./assets/dark-background-2.jpg')
		}
	},
	methods: {}
}
</script>
