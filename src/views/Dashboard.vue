<template>
  <v-container fluid>  
    <v-layout align-center justify-center>
      
      <v-flex md10 sm12>
        <quote></quote>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import Quote from './../components/Quote'

export default {
  name: 'Dashboard',
  components: {
    Quote
  },
  data() {
    return {}
  },
  async mounted() {
    this.$emit('canvasResize', {})
  }
}
</script>