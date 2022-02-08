<template lang="pug">
div
  modal(v-model="modal")
    t-tab(:co="0" v-model="tab")
      .d-flex.mt-4.mx-4
        | Filter
        v-spacer
        .red--text Effacer
      //- list
      v-list.monocular-icons(nav dense)
        //- list group
        v-list-item-group(v-model="group" active-class="primary--text")
          v-list-item(@click="tab=1")
            v-list-item-title Etat
            r-icon
          v-list-item
            v-list-item-title Note vendeur
            r-icon
          v-list-item
            v-list-item-title Taille
            r-icon
          v-list-item
            v-list-item-title Fourchette prix
            r-icon
          v-list-item
            v-list-item-title Maillot floquer
            r-icon
          v-list-item
            v-list-item-title Marque
            r-icon
          v-list-item
            v-list-item-title Décennie
            r-icon
          v-list-item
            v-list-item-title Club
            r-icon
          v-list-item
            v-list-item-title Compétition
            r-icon
          v-list-item
            v-list-item-title Nation
            r-icon

    t-tab(:co="1" v-model="tab" full-page-tab t-btn @close="cls")
      v-radio-group(v-model="selected")
        v-radio.radio-between(v-for="(e,i,k) in checkboxes" :key="k" on-icon="mdi-checkbox-marked-circle-outline" off-icon="mdi-checkbox-blank-circle-outline")
          template(#label)
            p.my-3 {{e}}

      .tab-bottom-sheet
        .d-flex.justify-center: v-btn.main-form(outlined color="primary" large @click="tab=1" :disabled="isNaN(selected)")
          .px-3 Appliquer
          t-icon(icon="right")

  v-container
    .d-flex.mb-6.align-center.fill-width
      h1.text-capitalize {{$t('search')}}
      v-spacer
      v-icon(large @click="modal=true") mdi-filter-outline
    //- grid system for products
    t-product-cards(v-if="$route.query.r" :data="products")
    .text-center.mt-15(v-else)
      h3.text-center Aucune requête de recherche, s'il vous plaît allez chercher avec les bons mots-clés
</template>

<script>
import { get } from 'lodash'
import { mapState } from 'vuex'
export default {
  layout: 'second',
  fetch() {
    if (this.$route.query.r)
      this.$store.dispatch('products/searchProducts', this.$route.query.r)
  },
  data() {
    return {
      checkboxes: [
        'Neuf',
        'Excellent Etat',
        'Neuf',
        'Bon Etat',
        'Etat Normal',
        'Un peu abimé',
      ],
      valid: false,
      selected: undefined,
      search: '',
      modal: false,
      tab: 0,
      group: [],
    }
  },
  computed: {
    ...mapState({
      products: (state) => get(state, 'products.searchProducts', []),
    }),
  },
}
</script>

<style lang="sass" scoped></style>
