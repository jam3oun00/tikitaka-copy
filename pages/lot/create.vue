<template lang="pug">
v-container
  modal(v-model="modal")
    p {{$t('article')}}
    v-row
      v-col(cols="12" v-for="(item, index) in selected" :key="index")
        v-list-item(dense).shadow-3.radius-10.mx-lg-2.mx-xl-3
          v-list-item-avatar(size="60")
            v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9e5fC6ucIXILM7V4O6mNPo45IZutqV9mMQ&usqp=CAU")
          v-list-item-content
            v-list-item-title.text-wrap: h4.primary--text {{item.title}}
            v-list-item-subtitle {{$t('size')}} {{item.size}} €
            v-list-item-subtitle {{item.price}} €
    p.mt-10.mb-1 {{$t('total')}}
    h2.mb-4 {{total}} €
    p.caption {{$t('delevery_costs')}}

    v-btn.main-form.mt-4(block outlined color='primary' @click="modal = !modal") {{$t('buy')}}
      t-icon(icon='right' regular)

    v-btn.main-form.mt-4(block outlined color='primary' @click="modal = !modal") {{$t('make_offer')}}
      t-icon(icon='up' regular)

  v-dialog(v-model="modalView" max-width="55rem")
    v-card(tile)
      v-carousel(hide-delimiters :show-arrows="get(activeProduct,'images', []).length > 1")
        template(v-slot:prev="{ on, attrs }")
          v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-left
        template(v-slot:next="{ on, attrs }")
          v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-right
        v-carousel-item(v-for="(img, i) in activeProduct.images" :key="i" :src="get(img, 'src', '')" contain)


      //- .rounded-with-img
        img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9e5fC6ucIXILM7V4O6mNPo45IZutqV9mMQ&usqp=CAU")
  h3.text-center.mb-3 {{$t('cloakroom')}}
  .d-flex.justify-space-between.my-7
    p.font-weight-medium {{products.length}} {{$t('articles')}}
    v-icon.primary--text mdi-filter-outline

  //- grid system for products
  v-row(justify="space-between")
    v-col.d-flex.flex-column.justify-center.align-center(cols="12" md="4" v-for="(p, i, k) in products" :key="k")
      .product-img
        v-card.mx-auto(flat :img="getImg(p)")
          v-btn.white(icon v-if="isSelected(p)" absolute top right): v-icon mdi-check
          v-responsive(:aspect-ratio="4/5")
            v-btn(absolute top left small color="primary") {{$t('authenticated')}}
            v-btn(absolute bottom left small color="primary") {{$t('favorite')}}
            v-btn(absolute bottom right small color="primary" @click="activeProduct=p;modalView=true") {{$t('quickview')}}

        //- Coast, size...
        .font-weight-medium.primary--text.mt-4
          div {{p.title}}
          div {{$t('coast')}} {{p.Coast}} €
          div {{$t('size')}} {{p.size}}
          div {{$t('price')}} {{p.price}} €
          div {{$t('rate')}}
            v-chip.ml-2(small color="secondary") {{p.average_rating}}
        v-btn.main-form.mt-4(block outlined, color='primary' @click="goToPage(p)") {{isSelected(p) ? $t('remove') : $t('add')}}
          t-icon(icon='right', regular)


  v-expand-transition: v-row()
    v-col.d-flex.align-center.justify-center(cols="6" md="3" lg="2")
      h1 Prix {{total}} €
    v-col(cols="6" md="2" lg="1" v-for="(item, index) in selected" :key="index")
      v-img(:aspect-ratio="4/5" :src="getImg(item)")
  .d-flex.justify-center: v-btn.mx-auto.main-form.mb-8.mt-13(outlined, color='primary' @click="modal = !modal")
    .px-10
      | {{$t('continue')}}
    t-icon(icon='right', regular)
</template>

<script>
import { mapState } from 'vuex'
import { get } from 'lodash'

export default {
  fetch() {
    this.$store.dispatch('products/fetchProducts')
  },
  data() {
    return {
      get,
      modal: false,
      modalView: false,
      activeProduct: {},
    }
  },
  computed: {
    ...mapState({
      products: (state) => get(state, 'products.data', []),
      selected: (state) => get(state, 'products.selectedProducts', []),
    }),
    total() {
      let total = 0
      this.selected.map((v) => (total += +v.price))
      return total
    },
    isSelected() {
      return ({ id }) => (this.selected.find((d) => d.id === id) ? true : false)
    },
  },
  methods: {
    goToPage(p) {
      this.isSelected(p)
        ? this.$store.commit('products/selectProduct', { data: p })
        : this.$router.push(`/lot/product_details/${p.id}`)
    },
  },
}
</script>
