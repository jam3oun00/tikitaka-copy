<template lang="pug">
div
  expanded-navbar-title(:title="title" v-model="search")
  v-container
    //- grid system for products
    v-row(justify="space-between")
      v-col(cols="12" md="4" v-for="(product, i, k) in products" :key="k")
        .product-img
          v-card.mx-auto(flat img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9e5fC6ucIXILM7V4O6mNPo45IZutqV9mMQ&usqp=CAU")
            v-responsive(:aspect-ratio="4/5")
              v-btn(absolute top left small color="primary") Authentifié
              v-btn(absolute bottom left small color="primary") Favoris
              v-btn(absolute bottom right small color="primary" nuxt to="/offer-details/testID") Quickview

          //- Coast, size...
          .font-weight-medium.primary--text.mt-4
            div {{product.title}}
            div Coast {{product.Coast}} €
            div size {{product.size}}
            div price {{product.price}} €
            div rate
              v-chip.ml-2(small color="secondary") {{product.rate}}
                client-only: star-icon.ml-2(size="15")
</template>

<script>
import { upperFirst, lowerCase } from 'lodash'
export default {
  layout: "second",
  data() {
    return {
      upperFirst,
      lowerCase,
      search: '',

      // hard code
      products: [
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Parme 93/95 HOME',
          Coast: '80',
          size: 'M',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Borussia Dortmund 97/99 Home Jaune',
          Coast: '80',
          size: 'M',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Parme 93/95 HOME',
          Coast: '80',
          size: 'M',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
      ],
    }
  },
  computed: {
    title() {
      return 'Match Worn'
    },
  },
}
</script>

<style lang="sass" scoped>

</style>
