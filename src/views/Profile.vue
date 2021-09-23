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

                <highlightjs autodetect :code="JSON.stringify($auth.user, null, 2)" class="rounded w-100" />

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" outlined @click="showToken = !showToken">
                    {{ showToken ? 'Hide Token' : 'Show Token' }}
                  </v-btn>
                </v-card-actions>
              </v-card>

              <v-card elevation="2" outlined shaped class="ma-3 pa-3" v-if="showToken">
                <v-card-title>Access Token</v-card-title>
                <highlightjs autodetect :code="JSON.stringify(accessToken, null, 2)" class="rounded w-100" />
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
      showToken: true,
      user: {},
      accessToken: {}
    }
  },
  async beforeMount() {
    this.user = this.$auth.user
    const accesstoken  = await this.$auth.getTokenSilently()
    this.accessToken = parseJwt(accesstoken)
        
    function parseJwt(token) {
      const base64Payload = token.split('.')[1]
      const payload = Buffer.from(base64Payload, 'base64')
      return JSON.parse(payload.toString())
    }
  }
}
</script>