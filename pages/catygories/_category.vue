<template lang="pug">
div
  expanded-navbar-title(:title="title.name" v-model="search")
  v-container
    t-product-cards(:data="products")
</template>

<script>
import { upperFirst, lowerCase, get } from 'lodash'
import { mapState } from 'vuex'
export default {
  layout: 'second',
  fetch() {
    this.$store.dispatch('products/fetchCategory', this.title.id)
  },
  data() {
    return {
      upperFirst,
      lowerCase,
      get,
      search: '',
    }
  },
  computed: {
    ...mapState({
      products: (state) => get(state, 'products.catrgory', []),
    }),
    title() {
      let title = {}
      switch (this.$route.params.category) {
        case 'hall-of-fame':
          title = { id: '43', name: 'Hall of fame' }
          break
        case 'match-issue':
          title = { id: '44', name: 'Match issue' }
          break
        case 'match-worn':
          title = { id: '45', name: 'Match worn' }
          break
        case 'retro-soccer-shirt':
          title = { id: '46', name: 'Retro soccer shirt' }
          break
        default:
          this.$route.params.category
            ? this.$nuxt.error({
                statusCode: 404,
                message: this.$t('pageNotFound'),
              })
            : ''
      }
      return title
    },
  },
}
</script>

<style lang="sass" scoped></style>
