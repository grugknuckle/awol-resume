<template>
  <v-container fluid>  
    <quote></quote>

    <v-card>
      <v-data-table
        :headers="headers"
        :items="quotes"
        class="elevation-1"
      >
      </v-data-table>
    </v-card>
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
    return {
      quotes: [],
      filter: {
        text: undefined,
        author: undefined,
        citation: undefined,
        source: undefined,
        page: 1,
        limit: 100,
        populate: 'T',
        sort: 'author text'
      },
      headers: [
        { text: 'Author', value: 'author.fullName', sortable: true },   // Author / ObjectID
        { text: 'Text', value: 'text' }, // string
        // { text: 'Citation', value: 'citation' }, // string
        // { text: 'Source', value: 'source' },   // string
        // { text: 'Tags', value: 'tags' },     // [ string ]
        // { text: 'Likes', value: 'likes', sortable: true },    // number
        // { text: 'Dislikes', value: 'dislikes', sortable: true }, // number
        { text: 'Rating', value: 'rating', sortable: true },   // number
      ]
    }
  },
  async beforeMount() {
    const filter = this.filter
    this.quotes = await this.fetchQuotes(filter)
  },
  async mounted() {
    this.$emit('canvasResize', {})
  },
  methods: {
    async fetchQuotes() {
      try {
        const accesstoken  = await this.$auth.getTokenSilently()
        const request = {
          method: 'GET',
          baseURL: process.env.VUE_APP_API_HOST,
          url: '/api/v1/quotes?populate=T&limit=100',
          headers: {
            'Authorization': `Bearer ${accesstoken}`,
            Accept: 'application/json'  
          }
        }
        const response = await this.$http(request)
        const quotes = response.data.data.docs
        return quotes
      } catch (error) {
        console.log('An error occured while accessing quotations api.')
        console.error(error)
        return []
      }
    }
  }
}
</script>