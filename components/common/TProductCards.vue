<template lang="pug">
  div
    v-dialog(v-model="modalView" max-width="55rem")
      v-card(tile)
        v-carousel(height="70vh" hide-delimiters :show-arrows="get(activeProduct,'images', []).length > 1")
          template(v-slot:prev="{ on, attrs }")
            v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-left
          template(v-slot:next="{ on, attrs }")
            v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-right
          v-carousel-item(v-for="(img, i) in activeProduct.images" :key="i" :src="get(img, 'src', '')" contain)
          
    v-row
      v-col(cols="12" md="4" v-for="(p, i, k) in data" :key="k" class="d-flex flex-column align-center")
        .product-img
          v-card.mx-auto(nuxt :to="`/offer/${p.id}`" flat :img="get(p, 'images[0].src', 'https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png')")
            v-responsive(:aspect-ratio="4/5")
              v-btn.quickview(absolute small top left color="primary") Authentifié
              v-btn.quickview(absolute small bottom left color="primary") Favoris
              v-btn.quickview(absolute small bottom right color="primary" @click.prevent="activeProduct=p;modalView=true") Quickview
          .primary--text.mt-4.font-weight-medium
            nuxt-link(:to="`/offer/${p.id}`") {{p.name}}
            div Cote {{p.price}} €
            div
              | Note vendeur: 
              v-chip.ml-2(small color="secondary") {{p.average_rating}}
</template>

<script>
import { get } from 'lodash'

export default {
  props: {
    data: Array,
  },
  data() {
    return {
      get,
      modalView: false,
      activeProduct: '',
    }
  },
}
</script>
