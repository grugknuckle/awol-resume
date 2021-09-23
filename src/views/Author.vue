<template>
  
  <v-container fluid>
    <v-layout wrap>
      <v-flex md4>
        <sidebar-container :dark="dark" />
      </v-flex>
      <v-flex md8>
        <content-container :dark="dark" />  <!-- class="fill-height" -->
      </v-flex>
      
    </v-layout>

    <v-layout>
      <v-flex md12>
        <timeline-primary :dark="dark" />
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import SidebarContainer from '@/components/Resume/sidebar/Container'
import ContentContainer from '@/components/Resume/content/Container'
import TimelinePrimary from '@/components/Resume/Timeline'

export default {
	name: 'authorContainer',
	components: {
		TimelinePrimary,
		ContentContainer,
		SidebarContainer
	},
	data() {
		return {
      dark: true,
		}
  }
}
</script>
