<template lang="pug">
div
  t-tab(:co="0" v-model="tab")
    v-btn(icon @click="cls"): v-icon mdi-chevron-left
    div
      h1 Méthode de versement de mes gains
      .subtitle-2.mt-3
        span.mr-5 Virement bancaire
        span FR537620
      .subtitle-2.mt-2.d-flex.align-center
        img.mr-8(height="28" src="utils/paypal.png")
        span Maradona123@email.com
    div(style="position:absolute;bottom:0;width:calc(100% - 3rem)")
      v-btn.mb-4.wide-full(block outlined rounded x-large @click="tab=1")
        | Ajouter un moyen de versement
        v-icon(size="25") mdi-chevron-right

      v-btn.mb-4.wide-full(block outlined rounded x-large)
        | Supprimer un moyen de versement
        v-icon(size="25") mdi-chevron-right
  //-
  t-tab(:co="1" v-model="tab" full-page-tab): choose-payment-method(@close="tab=0")

  //- t-tab(:co="2")

</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      group: [],
    }
  },
}
</script>


