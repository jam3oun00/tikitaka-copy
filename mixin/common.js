export default {
  data() {
    return {
      change: 0,
    }
  },
  computed: {
    getImg() {
      return (v) => {
        try {
          return v.images[0].src
        } catch (error) {
          return null
        }
      }
    },
  },
  methods: {
    log(v) {
      console.log(v)
    },
    warn(v) {
      console.warn(v)
    },
    cls() {
      this.$emit('close')
    },
    t(v) {
      console.warn('v')
      this.tab ? (this.tab = +v) : null
    },
  },
}
