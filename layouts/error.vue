<template lang="pug">
  v-app.d-flex.align-center.justify-center
    div
      h1(v-if="error.statusCode === 404")
        | {{ pageNotFound }}
      h1(v-else="")
        | {{ otherError }}
      nuxt-link(to="/")  {{ $t('homePage') }} 
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: this.$t('pageNotFound'),
      otherError: this.$t('otherError'),
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
