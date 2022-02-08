<template lang="pug">
  div
    //- main-tab => Lists && groups
    t-tab(:co="0" v-model="tab")
      //- list
      v-list.monocular-icons(nav dense)
        v-list-item-group(v-model="group" active-class="primary--text")
          v-list-item(@click="tab=1")
            v-list-item-icon: img(src="~/assets/img/icons/tag.png")
            v-list-item-title Mes ventes
            r-icon
          v-list-item(@click="tab=2")
            v-list-item-icon: img(src="~/assets/img/icons/rate.png")
            v-list-item-title Mes avis reçus
            r-icon
          v-list-item(@click="tab=4")
            v-list-item-icon: img(src="~/assets/img/icons/cloakroom.png")
            v-list-item-title Mon vestiaire
            r-icon
          v-list-item(@click="tab=4")
            v-list-item-icon: img(src="~/assets/img/icons/discount.png")
            v-list-item-title Réduction sur les lots
            r-icon
          v-list-item(@click="tab=5")
            v-list-item-icon: img(src="~/assets/img/icons/currency.png")
            v-list-item-title Versement de mes gains
            r-icon
          v-list-item(@click="tab=6")
            v-list-item-icon: img(src="~/assets/img/icons/dollar-tag.png")
            v-list-item-title Modifier une annonce
            r-icon
    //-
    t-tab(:co="1" v-model="tab"): my-sales(@close="tab=0")
    //-
    t-tab(:co="2" v-model="tab" t-btn)
    //-
    t-tab(:co="3" v-model="tab" t-btn)
    //-
    t-tab(:co="4" v-model="tab" t-btn)
    //-
    t-tab(:co="5" v-model="tab"): payment-method(@close="tab=0")
    //-
    t-tab(:co="6" v-model="tab" t-btn): ad
    //-
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

<style lang="scss" scoped></style>
