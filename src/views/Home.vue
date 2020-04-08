<template>
  <v-container fluid>
    <github-ribbon :url="github"/>
    
    <v-layout align-center justify-center>
      <v-flex md10 sm12>

        <v-layout wrap>
          <v-flex md4>
            <sidebar-container class="fill-height" />
          </v-flex>
          <v-flex md8>
            <content-container class="fill-height" />
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex md12>
            <timeline-primary />
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import SidebarContainer from '@/components/Resume/sidebar/Container'
import ContentContainer from '@/components/Resume/content/Container'
import TimelinePrimary from '@/components/Resume/Timeline'
import GithubRibbon from '@/components/Resume/GithubRibbon'

export default {
	name: 'authorContainer',
	components: {
		GithubRibbon,
		TimelinePrimary,
		ContentContainer,
		SidebarContainer
	},
	data() {
		return {
			github: 'https://github.com/grugknuckle'
		}
	}
}
</script>
