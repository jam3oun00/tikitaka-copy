<template lang="pug">
v-container
  v-dialog(v-model="modalView" max-width="55rem")
    v-card(tile)
      v-carousel(hide-delimiters :show-arrows="get(singleProduct,'images', []).length > 1")
        template(v-slot:prev="{ on, attrs }")
          v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-left
        template(v-slot:next="{ on, attrs }")
          v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-right
        v-carousel-item(v-for="(img, i) in singleProduct.images" :key="i" :src="get(img, 'src', '')" contain)

  .text-center
    h2.primary--text {{singleProduct.name}}
    h2.primary--text {{$t('coast')}} {{singleProduct.Coast}} €
    h2.primary--text {{$t('rate')}} :
      v-chip.ml-2(small, color='secondary')
        | {{singleProduct.average_rating}}
        v-icon.mx-1(size='17') mdi-star

  .text-center.mt-6
    v-card.my-0.transparent.mx-auto(max-width='300' tile flat)
      v-img(:aspect-ratio='3 / 4' :src="getImg(singleProduct)" gradient="-17deg, rgb(0 0 0 / 0%) 83%, rgb(0 0 0 / 32%)")
      v-btn.quickview(color="primary" absolute bottom large @click="modalView=!modalView") {{$t('quickview')}}
      v-btn.mt-n2.ml-n2(color="primary" absolute top left large icon): img(src='~/assets/img/icons/open-in-new-tab.svg' height="27")
  .text-center.primary--text.mt-5
    h3(style="letter-spacing: 1.5px") {{$t('description')}}:
    | {{$t('size')}} M
    br
    | {{$t('excellent_condition')}}
    br
    br
    | {{$t('product_description_1')}}

    .d-flex.justify-center.mt-5
      v-btn.main-form(style='width: 13rem' outlined color='primary' @click="select") {{$t('add')}}
        t-icon(icon='right' regular)

</template>

<script>
import { mapState } from 'vuex'
import { get } from 'lodash'
export default {
  fetch() {
    if (this.$route.params.product_id) {
      this.$store.dispatch(
        'products/fetchSingleProduct',
        this.$route.params.product_id
      )
    }
  },
  data() {
    return {
      get,
      tab: 0,
      negotiate: false,
      modalView: false,
      dialogOffer: false,
      negotiateTab: 0,
      form: {
        photos: [],
      },
    }
  },
  computed: {
    ...mapState({
      singleProduct: (state) => get(state, 'products.singleProduct', {}),
    }),
  },
  methods: {
    select() {
      this.$store.commit('products/selectProduct', { data: this.singleProduct })
      console.log(this.$store.state.products.selectedProducts)
      this.$router.push('/lot/create')
    },
  },
}
</script>

<style lang="scss" scoped>
.quickview {
  right: 50%;
  transform: translateX(50%);
}
</style>
