<template>
  <canvas ref="canvas" v-bind:style="styleObject"></canvas>
</template>

<script>

export default {
  name: 'MatrixRain',
  props: {
    fontSize: { type: Number, default: 10 },
    background: { type: Boolean, default: true },
    interval: { type: Number, default: 100 }
  },
  data() {
    return {
      charset: 'ABCDEFGHIJKLMNOPQRSTUVXYZ!@#$%^&*?1234567890ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ',
      droplets: [],
      height: document.body.scrollHeight,
      width: window.innerWidth,
      pages: Math.ceil(document.body.scrollHeight / window.innerHeight),
      styleObject: {
        width: '100%',
        height: '100%',
        position: "absolute",
        // zIndex: -1,
        top: 0,
        left: 0
      }
    }
  },
  computed: {
    canvas() {
      return this.$refs.canvas
    },
    context() {
      return this.$refs.canvas.getContext('2d')
    },
    letters() {
      return this.charset.split('')
    }
  },
  mounted() {
    this.reset()
    this.startRaining()
    window.addEventListener("resize", this.resize)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize)
  },
  methods: {
    reset() {
      this.resize()
      this.initDrops()
    },
    resize() {
      const body = document.body
      const html = document.documentElement

      this.height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
      this.width = this.canvas.clientWidth
      this.pages = Math.ceil(this.height / window.innerHeight)

      this.canvas.width = this.width
      this.canvas.height = this.height
    },
    initDrops() {
      const columns = this.width / this.fontSize
      const pageHeight = this.canvas.clientHeight / this.fontSize
      this.droplets = []
      for (let i = 0; i < columns; i++) {
        const x = i * this.fontSize
        for (let j = 0; j < this.pages + 1; j++) {
          const y = (Math.floor(Math.random() * pageHeight)) * this.fontSize
          this.droplets.push({ x, y })
        }
      }
    },
    startRaining() {
      setInterval(this.draw, this.interval)
    },
    draw() {
      const fontSize = this.fontSize
      this.context.fillStyle = 'rgba(0, 0, 0, .1)'
      this.context.fillRect(0, 0, this.width, this.height)
      for (let droplet of this.droplets) {

        let character = this.letters[Math.floor(Math.random() * this.letters.length)]
        this.context.fillStyle = '#0f0'
        
        this.context.fillText(character, droplet.x, droplet.y)
        droplet.y += fontSize

        // restart the droplet from the top
        if (droplet.y > this.height && Math.random() > .9) {
          droplet.y = 0
        }
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #000;
}
canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>