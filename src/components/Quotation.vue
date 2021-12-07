<template>
  <v-dialog v-model="showDialog" persistent max-width="75%">

    <v-card>
      <v-card>
        <v-card-title>
          <span class="text-h5">Author</span>
        </v-card-title>
        <v-card-text>
            <v-row>
              <v-col cols="5">
                <v-img :src="author.imageURL" max-height="25em" max-width="20em" height="auto" width="auto" class="ma-2"></v-img>
                <v-text-field label="Image URL" hint="https://www.example.com/identifier" persistent-hint v-model="author.imageURL"></v-text-field>
              </v-col>

              <v-col cols="7">
                <v-row>
                  <v-col cols="4">
                    <v-text-field label="First" hint="Ulysses" v-model="author.firstName"></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field label="Middle" hint="Hiram" v-model="author.middleName"></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field label="Last" hint="Grant" v-model="author.lastName"></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <date-picker :date.sync="author.born" label="born"></date-picker>
                  </v-col>
                  <v-col cols="6">
                    <date-picker :date.sync="author.died" :readOnly="false" label="died"></date-picker>
                  </v-col>
                </v-row>
                <!--
                profession
                bio
                reference -->
                
              </v-col>
            </v-row>
          <!-- </v-container> -->
        </v-card-text>
      </v-card>

      <v-card>
        <v-card-title>
          <span class="text-h5">Quotation</span>
        </v-card-title>
        <v-card-text>
          <v-textarea outlined rows="6" name="Text" :value="text" label="Quotation"></v-textarea>
          <v-text-field label="Tags" hint="#morality, #conflict" persistent-hint v-model="tags"></v-text-field>
          <v-text-field label="Citation" hint="title, publisher, date" persistent-hint v-model="citation"></v-text-field>
          <v-text-field label="Source" hint="https://www.example.com/identifier" persistent-hint v-model="source"></v-text-field>
        </v-card-text>
      </v-card>

      <v-rating :value="rating" color="amber" dense half-increments size="24"></v-rating>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="deleteQuote()">Delete</v-btn>
        <v-btn color="secondary" text @click="showDialog = false">Cancel</v-btn>
        <v-btn color="info" text @click="updateQuote()">Save</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
import DatePicker from './DatePicker'
import moment from 'moment'

const isoDateString = 'YYYY-MM-DD'
export default {
  components: { DatePicker },
  name: 'Quotation',
  data() {
    return {
      text: 'My favorite thought about Abraham Lincoln is he believed in two things: loving one another and working together to make this world better.',
      author: {
        id: '60b9532bc5faa768fc3b9c01',
        firstName: 'Mario',
        middleName: '',
        lastName: 'Cuomo',
        imageURL: 'https://images.findagrave.com/photos/2015/0/140758090_1420161412.jpg',
        bio: 'New York Governor. His parents owned a store when he grew up in Queens, and he attended St. John\'s Preparatory School. He played professional baseball in the Pittsburgh Pirates organization, but had to quit after an injury. He completed his bachelor\'s degree at St. John’s University in 1953 and graduated from St. John\'s University Law School in 1956. He practiced law in Brooklyn and was an Adjunct Professor at St. John\'s Law School. Cuomo came to prominence in the late 1960s while representing New York City residents whose neighborhoods were threatened by real estate development, which led to his unsuccessful candidacy for the 1974 Democratic Lieutenant Governor’s nomination. Hugh Carey, who won the 1974 Governor\'s race, appointed Cuomo as Secretary of State in 1975. He ran unsuccessfully for New York City Mayor in 1977, but won the Lieutenant Governorship in 1978. He won the 1982 Governor’s election, and he served three terms. Cuomo became nationally known as a result of his 1984 Democratic National Convention keynote speech, and was considered a likely candidate for President in 1988 and 1992, though he did not run. He was defeated for reelection in 1994, after which he practiced law and authored several books.',
        born: '1932-06-15',
        died: '2015-01-01',
        profession: 'Governor of New York',
        reference: 'https://www.findagrave.com/memorial/140758090/mario-cuomo',
        createdAt: '2021-06-03',
        updatedAt: '2021-06-15',
      },
      citation: '\"Mario Cuomo Quotes.\" BrainyQuote.com. BrainyMedia Inc, 2021. 27 February 2021. https://www.brainyquote.com/quotes/mario_cuomo_703735',
      source: 'https://www.brainyquote.com/quotes/mario_cuomo_703735',
      tags: '',
      rating: 2.5,
      createdAt: '2021-06-15',
      updatedAt: '2021-06-15'
    }
  },
  props: {
    quoteId: { type: String, default: null },
    showDialog: { type: Boolean, default: false },
    editable: { type: Boolean, default: true }
  },
  computed: {
    id() { return this.quoteId }
  },
  watch: {
    quoteId() {
      this.populate()
    }
  },
  async beforeMount() {
    this.populate()
  },
  methods: {
    async populate() {
      if (this.quoteId) {
        const quote = await this.getQuoteById(this.quoteId)
        if (process.env.VUE_APP_MODE === 'development') {
          console.log(quote)
        }
        
        this.text = quote.text
        this.author = {
          id: quote.author._id,
          fullName: quote.author.fullName,
          firstName: quote.author.firstName,
          middleName: quote.author.middleName,
          lastName: quote.author.lastName,
          imageURL: quote.author.imageURL,
          bio: quote.author.bio,
          born: moment(quote.author.born).format(isoDateString),
          died: moment(quote.author.died).format(isoDateString),
          profession: quote.author.profession,
          reference: quote.author.reference,
          createdAt: moment(quote.author.createdAt).format(isoDateString),
          updatedAt: moment(quote.author.updatedAt).format(isoDateString),
        }
        this.citation = quote.citation
        this.source = quote.source
        this.tags = quote.tags.map(tag => `#${tag}`).join(', ')
        this.rating = quote.rating
        this.createdAt = moment(quote.createdAt).format(isoDateString)
        this.updatedAt = moment(quote.updatedAt).format(isoDateString)
      }
    },
    async getQuoteById(id) {
      try {
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
        return {}
      }
    },
    async deleteQuote() {
      alert(`Execute: deleteQuote(${this.id})`)
    },
    async updateQuote() {
      const accesstoken  = await this.$auth.getTokenSilently()
      const request = {
        method: 'PUT',
        baseURL: process.env.VUE_APP_API_HOST,
        url: `/api/v1/quotes/${this.id}`,
        headers: {
          'Authorization': `Bearer ${accesstoken}`,
          Accept: 'application/json'  
        },
        data: {
          text: this.text,
          author: this.author.id,
          citation: this.citation,
          source: this.source,
          tags: this.tags.split(',').map(tag => tag.toLowerCase().trim().replace('#', '')),
          rating: this.rating
        }
      }
      const response = await this.$http(request)
      console.log(response.data)
      await this.populate()
    },
    async createQuote() {
      alert(`Execute: createQuote(${this.id})`)
    }
  }
}
</script>