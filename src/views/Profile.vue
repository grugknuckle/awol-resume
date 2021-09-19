<template>
  <v-row>
    <v-col cols="5">

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
        
        <v-card-title>Order History</v-card-title>
        <v-divider></v-divider>


        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" outlined @click="showJSON = !showJSON">
            {{ showJSON ? 'Hide JSON' : 'Show JSON' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="7" v-if="showJSON">
      <v-card elevation="2" outlined shaped class="ma-3 pa-3">
        <v-card-title>Identity Token</v-card-title>
        <pre>
          <code>
            {{ JSON.stringify($auth.user, null, 2).trim() }}
          </code>
        </pre>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: 'Profile',
  metaInfo: {
    title: 'Profile',
  },
  data() {
    return {
      showJSON: true,
      user: {},
      headers: [
        {
          text: 'Timestamp', align: 'start', sortable: true, value: 'date'
        }, // date
        {
          text: 'Item', value: 'item'
        }, // pizza
        {
          text: '', value: 'price'
        }  // price
      ],

    }
  },
  beforeMount() {
    this.user = this.$auth.user
  }
}
</script>