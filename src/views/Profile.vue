<template>

  <v-layout wrap>
    <v-flex md12>

      <v-card elevation="2" outlined shaped class="ma-3 pa-3">

        <v-row>
          <v-col cols="3">
            <v-avatar color="primary" size="56">
              <img :src="$auth.user.picture" alt="User's profile picture" />
            </v-avatar>
          </v-col>

          <v-col cols="9">
            <v-card-title>
              {{ $auth.user.name}}
            </v-card-title>
            <v-card-text>
              {{ $auth.user.email }}
            </v-card-text>
          </v-col>
        </v-row>
        
        <v-card-title>Identity Token</v-card-title>
        <v-divider></v-divider>

        <v-card-text dark>
          <v-row>
            <v-col cols="6">
              <code class="token rounded w-100" v-if="showIDToken">
                <span class="header">{{ idToken.header }}</span>
                <span>.</span>
                <span class="body">{{ idToken.body }}</span>
                <span>.</span>
                <span class="signature">{{ idToken.signature }}</span>
              </code>
            </v-col>

            <v-col cols="6">
              <highlightjs autodetect :code="JSON.stringify(user, null, 2)" class="rounded w-100 theme--dark" v-if="showIDToken"/>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" outlined @click="showIDToken = !showIDToken">
            {{ showIDToken ? 'Hide Token' : 'Show Token' }}
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card elevation="2" outlined shaped class="ma-3 pa-3" >
        <v-card-title>Access Token</v-card-title>
        <v-divider></v-divider>

        <v-card-text dark>
          <v-row>
            <v-col cols="6" >
              <code class="token rounded w-100" v-if="showAccessToken">
                <span class="header">{{ accessToken.header }}</span>
                <span>.</span>
                <span class="body">{{ accessToken.body }}</span>
                <span>.</span>
                <span class="signature">{{ accessToken.signature }}</span>
              </code>
            </v-col>

            <v-col cols="6">
              <highlightjs autodetect :code="JSON.stringify(accessTokenDecoded, null, 2)" class="rounded w-100 theme--dark" v-if="showAccessToken"/>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" outlined @click="showAccessToken = !showAccessToken">
            {{ showAccessToken ? 'Hide Token' : 'Show Token' }}
          </v-btn>
        </v-card-actions>
      </v-card>

  </v-flex>
</v-layout>
      
</template>

<script>

export default {
  name: 'Profile',
  metaInfo: {
    title: 'Profile',
  },
  data() {
    return {
      showIDToken: true,
      showAccessToken: true,
      idToken: '',
      user: {},
      accessToken: '',
      accessTokenDecoded: {}
    }
  },
  async beforeMount() {
    // get the raw id token
    const claims = await this.$auth.getIdTokenClaims()
    this.idToken = {
      header: claims.__raw.split('.')[0],
      body: claims.__raw.split('.')[1],
      signature: claims.__raw.split('.')[2]
    }
    // decode the id token
    this.user = this.$auth.user

    // get the raw access token
    const accesstoken  = await this.$auth.getTokenSilently()
    this.accessToken = {
      header: accesstoken.split('.')[0],
      body: accesstoken.split('.')[1],
      signature: accesstoken.split('.')[2]
    }
    // decode the access token
    this.accessTokenDecoded = parseJwt(accesstoken)
    
    function parseJwt(token) {
      const base64Payload = token.split('.')[1]
      const payload = Buffer.from(base64Payload, 'base64')
      return JSON.parse(payload.toString())
    }
  }
}
</script>

<style scoped>
  /* .theme--light.v-application code.hljs {
    background-color: #282a36;
    color: white;
  } */

  code.hljs {
    font-family: monospace, monospace;
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: white;
    background-color: #282a36;
  }

  code.token {
    font-family: monospace, monospace;
    display: block;
    overflow-wrap: break-word;
    padding: 0.5em;
    color: white;
    background: #282a36;
    /* background-color: var(--v-background-base); */
  }

  code.token > span.header {
    color: red;
  }
  code.token > span.body {
    color: green;
  }
  code.token > span.signature {
    color: steelblue;
  }
</style>