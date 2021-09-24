<template>
  <video playsinline autoplay muted loop :poster="poster" class="bgvid">
    <source :src="src" type="video/mp4">
  </video>
</template>

<script>

export default {
  name: 'VideoBackground',
  props: {
    poster: { type: String, default: '' },
    src: { type: String, default: 'matrix-rain-fade-in-out.mp4' }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
  .bgvid {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
  }
</style>