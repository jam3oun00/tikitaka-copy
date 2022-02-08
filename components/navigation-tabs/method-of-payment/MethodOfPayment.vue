<template lang="pug">
div
  t-tab(:co="0" v-model="tab")
    h2.mt-8.mb-12 Méthodes de paiement
    div
      .d-flex.justify-space-between.align-center.mb-7
        img(src="~/assets/img/utiles/visa.svg")
        h4 Visa ending **00
      .d-flex.justify-space-between.align-center.mb-7
        img(src="~/assets/img/utiles/master-card.svg")
        h4 Master Card ending **00
      .d-flex.justify-space-between.align-center.mb-7
        img(src="~/assets/img/utiles/paypal.svg")
        h4 Maradona123@email.com
      .d-flex.justify-space-between.align-center.mb-7
        h3 IPay
    .tab-bottom-sheet
      v-btn.main-form.mb-5(block outlined color="primary" x-large @click="tab=1") Ajouter un moyen de paiement
        t-icon(icon="right")
      v-btn.main-form(block outlined color="primary" x-large @click="tab=2") Supprimer un moyen de paiement
        t-icon(icon="right")
  t-tab(:co="1" v-model="tab" full-page-tab t-btn): payment-method-handler(add @close="tab=0")
  t-tab(:co="2" v-model="tab" full-page-tab t-btn): payment-method-handler(delete @close="tab=0")

</template>

<script>
  export default {
data() {
  return {
    tab: 0
  }
},
  }
</script>

<style lang="scss">
.tab-bottom-sheet{
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 15px 24px !important;
}
</style>
