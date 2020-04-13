<template>
  <div class="text-md-center">
    <v-avatar color="grey lighten-4" size="120">
      <img :src="image" alt="Aaron Wolbach" />
    </v-avatar>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  data() {
    return {
      image: require('./../../../assets/img/avatar.jpg')
    }
  }
}
</script>
