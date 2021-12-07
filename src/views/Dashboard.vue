<template>
  <v-container fluid>
    <quotation :quoteId="quoteId" :showDialog="dialog" :editable="true"></quotation>

    <v-card>
      <v-data-table :headers="headers" :items="quotes" class="elevation-1">

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Famous Quotations</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="createQuote">
              New Quote
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn icon color="success" @click="editQuote(item.id)">
            <v-icon>{{ icons.edit }}</v-icon>
          </v-btn>
          <!-- <v-btn icon color="error" @click="deleteQuote(item.id)">
            <v-icon>{{ icons.delete }}</v-icon>
          </v-btn> -->
        </template>

        <template v-slot:item.rating="{ item }">
          <v-rating :value="item.rating" color="amber" dense half-increments readonly size="14"></v-rating>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import Quotation from './../components/Quotation'
import { mdiPencil, mdiTrashCan } from '@mdi/js'

export default {
  name: 'Dashboard',
  components: {
    Quotation
  },
  data() {
    return {
      quoteId: null,
      dialog: false,
      icons: {
        edit: mdiPencil,
        delete: mdiTrashCan
      },
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
        { text: 'Text', value: 'text' },
        // { text: 'Citation', value: 'citation' }, // string
        // { text: 'Source', value: 'source' },   // string
        // { text: 'Tags', value: 'tags' },     // [ string ]
        // { text: 'Likes', value: 'likes', sortable: true },    // number
        // { text: 'Dislikes', value: 'dislikes', sortable: true }, // number
        { text: 'Rating', value: 'rating', sortable: true },
        { text: '', value: 'actions', sortable: false },
      ]
    }
  },
  async beforeMount() {
    const filter = this.filter
    this.quotes = await this.fetchQuotes(filter)
  },
  methods: {
    editQuote(id) {
      this.quoteId = id
      this.dialog = true
    },
    async fetchQuotes() {
      try {
        const accesstoken  = await this.$auth.getTokenSilently()
        if (process.env.VUE_APP_MODE === 'development') {
          console.log(accesstoken)
        }
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
    },
    async createQuote() {
      this.quoteId = null
      alert('Execute createQuote()')
    },
    async readQuote(id) {
      try {
        this.quoteId = id
        const accesstoken  = await this.$auth.getTokenSilently()
        const request = {
          method: 'GET',
          baseURL: process.env.VUE_APP_API_HOST,
          url: `/api/v1/quotes/${id}`,
          headers: {
            'Authorization': `Bearer ${accesstoken}`,
            Accept: 'application/json'  
          }
        }
        const response = await this.$http(request)
        const quote = response.data.data
        return quote
      } catch (error) {
        console.log('An error occured while accessing quotations api.')
        console.error(error)
        return []
      }
    },
    async updateQuote(id) {
      alert('Execute updateQuote()')
      const quote = await this.readQuote(id)
      console.log(quote)
    },
    async deleteQuote(id) {
      this.quoteId = id
      alert(`Execute deleteQuote(${id})`)
    }
  }
}
</script>