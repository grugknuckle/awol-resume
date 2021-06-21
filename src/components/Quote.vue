<template>
  <v-card class="ma-5">
    <v-row>
      <v-col cols="4">
        <v-img :src="quote.author.imageURL" height="250" class="ma-2"></v-img>
      </v-col>

      <v-col cols="8">
        <blockquote class="blockquote">
          &#8220;{{ quote.text }}&#8221;
          <footer>
            <small>
              <em>&mdash;{{ quote.author.fullName }}</em>
            </small>
          </footer>
        </blockquote>

        <v-rating :value="quote.rating" color="amber" dense half-increments readonly size="14"></v-rating>

      </v-col>
    </v-row>

    
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      quote: {
        id: '0',
        text: 'First, solve the problem. Then, write the code.',
        author: {
          fullName: 'John Johnson',
          imageURL: 'https://picsum.photos/1920/1080?random&greyscale&blur=2'
        },
        rating: 2.5,
      }
    }
  },
  async beforeMount() {
    try {
      const accesstoken  = await this.$auth.getTokenSilently()
      console.log(accesstoken)
      const request = {
        method: 'GET',
        baseURL: 'https://api-quotations.herokuapp.com',
        url: '/api/v1/quotes?populate=T&limit=100',
        headers: { 'Authorization': `Bearer ${accesstoken}` }
      }
      const quotes = await axios(request).then(response => response.data.data.docs)

      let idx = Math.floor(Math.random() * quotes.length)
      
      console.log(quotes[idx])
      
      this.quote = quotes[idx]
    } catch (error) {
      console.log('An error occured while accessing quotations api.')
      console.error(error)
    }
  }
}
</script>