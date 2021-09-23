<template>
  <video playsinline autoplay muted loop :poster="poster" id="bgvid">
    <source :src="src" type="video/mp4">
  </video>

</template>

<script>

export default {
  name: 'VideoBackground',
  props: {
    poster: { type: String, default: '' },
    src: { type: String, default: 'matrix-rain.mp4' }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>