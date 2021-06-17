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
      drops: [],
      styleObject: {
        width: '100%',
        height: '100%'
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
    height() {
      const body = document.body
      const html = document.documentElement

      var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
      return height
    },
    width() {
      return window.innerWidth
    },
    pages() {
      return Math.ceil(this.height / window.innerHeight)
    },
    letters() {
      return this.charset.split('')
    }
  },
  created() {
    // set the canvas styles
    if (this.background) {
      this.styleObject = Object.assign(this.styleObject, {
        position: "absolute",
        // zIndex: -1,
        top: 0,
        left: 0
      })
    }
  },
  beforeMount() {
    
  },
  mounted() {
    this.initDrops()
    this.startRaining()
    this.resize = this.resize.bind(this)
    this.resize()
    window.addEventListener("resize", this.resize)
    console.log({
      pages: this.pages,
      height: this.height,
      windowHeight: window.innerHeight
    })
  },
  updated() {
    this.resize()
    this.initDrops()
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize)
  },
  methods: {
    resize() {
      const width = this.canvas.clientWidth
      const height = this.canvas.clientHeight
      this.canvas.width = width
      this.canvas.height = height
      // this.drops = []
      // this.initDrops()
      // this.$emit("canvasResize", { width, height })
    },
    initDrops() {
      const columns = this.width / this.fontSize
      const pageHeight = this.canvas.clientHeight
      this.drops = []
      for (let i = 0; i < this.pages * columns; i++) {
        this.drops[i] = Math.floor(Math.random() * pageHeight)
      }
    },
    startRaining() {
      setInterval(this.draw, this.interval)
    },
    draw() {
      const fontSize = this.fontSize
      this.context.fillStyle = 'rgba(0, 0, 0, .1)'
      this.context.fillRect(0, 0, this.width, this.height)
      for (let i = 0; i < this.drops.length; i++) {

        let character = this.letters[Math.floor(Math.random() * this.letters.length)]
        this.context.fillStyle = '#0f0'
        this.context.fillText(character, i * fontSize, this.drops[i] * fontSize)
        this.drops[i]++

        // restart the drop from the top
        if (this.drops[i] * fontSize > this.height && Math.random() > .95) {
          this.drops[i] = 0
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