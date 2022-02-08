<template lang="pug">
div
  t-tab(:co="0" v-model="tab")
    .caption.mb-2 Adresse de livraison
    v-list-item.mx-n4(@click='tab = 1')
      v-list-item-title Cliquez ici pour ajouter une adresse de livraison/Facturation
      r-icon
    //- 
    //- 
    v-divider.mt-7
    .caption.mt-1 Sélection Une Méthode De Livraison
    //- 
    //- 
    v-radio-group(v-model="selected")
      v-radio.radio-between.mb-4(on-icon="mdi-checkbox-marked-circle-outline" off-icon="mdi-checkbox-blank-circle-outline")
        template(#label): div
          h3 Mondial relais
          .caption Frais: 2,95 €
      v-radio.radio-between.mb-4(on-icon="mdi-checkbox-marked-circle-outline" off-icon="mdi-checkbox-blank-circle-outline")
        template(#label): div
          h3 Chronopost
          .caption Frais 5,99 €
    //- 
    //- 
    v-divider.mt-2
    .caption.mt-1 Méthode de paiement
    //- 
    v-list-item.mt-4.mb-6.mx-n4(@click='tab = 3')
      v-list-item-title Cliquez ici pour ajouter un moyen de paiement
      r-icon
    //- 
    v-list-item.mx-n4.mt-5()
      v-list-item-avatar.shadow-3(size="60"): v-img(src="football/ZIDANE.jpg")
      v-list-item-content
        v-list-item-title.text-wrap
          h4.primary--text Maradona Boca Junior
        v-list-item-subtitle Taille M
        v-list-item-subtitle 150 €
      r-icon
    //- 
    v-row.mt-10(align="center")
      v-col(cols="6")
        v-list-item-title.text-wrap
          v-list-item-subtitle TOTAL
          h4.primary--text France 98 Zidane
          v-list-item-subtitle Livraison offerte
      v-col(cols="6")
        v-btn.main-form.regular(outlined, color='primary', @click='dialog = !dialog' :disabled="selected === undefined" large) Commander
          t-icon.mr-n1(icon='right')

  t-tab(:co="1" v-model="tab" full-page-tab)
    v-form.mx-auto.mt-16(style='max-width: 19rem')
      .fancy-form.shadow
        v-list-item: v-text-field(type='number' hide-details='auto' v-model='form.num' label='Numero De Voie Et Rue' filled)
        v-list-item: v-text-field(type='number' hide-details='auto' v-model='form.postalCode' label='Code Postale' filled)
        v-list-item: v-text-field(type='text' hide-details='auto' v-model='form.city' label='Ville' filled)

    .tab-bottom-btn
      v-btn.mb-4.wide-full(block outlined rounded x-large @click="tab = 2")
        | Ajouter une adresse de livraison
        v-icon(size="25") mdi-chevron-right

  t-tab(:co="2" v-model="tab" full-page-tab)
    congrats-tab(text="Adresse de livraison ajoutée" @close="tab = 0")

  t-tab(:co="3" v-model="tab" full-page-tab t-btn): payment-method-handler(add @close="tab=0" :back-btn="backBtn")
  
</template>

<script>
export default {
  props: {
    backBtn: String,
  },
  data() {
    return {
      tab: 0,
      selected: undefined,
      form: {
        num: 0,
        postalCode: 0,
        city: '',
      },
    }
  },
}
</script>

<style lang="scss">
.tab-bottom-btn {
  position: absolute;
  bottom: 0;
  width: calc(100% - 3rem);
}
.v-list-item__title,
.v-list-item__subtitle {
  white-space: normal !important;
  color: var(--v-primary-base) !important;
}
.caption {
  color: var(--v-primary-base) !important;
}
.v-divider:not(.v-divider--vertical) {
  border-width: 2px !important;
  border-top: transparent !important;
}
</style>
