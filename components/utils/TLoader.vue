<template lang="pug">
  v-fade-transition
    .mp-loader.d-flex.align-center.justify-center(v-if="loader")
      v-progress-circular(indeterminate color="white" width="2" size="50")
</template>

<script>
export default {
  computed: {
    loader: {
      get: function () {
        return this.$store.state.utiles.loading.loader
      },
      set: function (v) {
        this.$store.commit('utiles/loading/set', v)
      },
    },
  },
  watch: {
    loader(v) {
      v
        ? document.documentElement.classList.add('overflow-y-hidden')
        : document.documentElement.classList.remove('overflow-y-hidden')
    },
  },
}
</script>

<style lang="scss">
.mp-loader {
  background: rgba(black, 0.8) !important;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2147483647;
}
</style>
