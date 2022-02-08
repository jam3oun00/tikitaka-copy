<template lang="pug">
  div
    div
      //- main-tab => Lists && groups
      t-tab(:co="0" v-model="tab")
        //- list
        v-list.monocular-icons(nav dense)
          //- Search
          v-text-field.main-form.px-2.mt-5.ml-2.mb-5(hide-details="auto" v-model="search" @input="deep([3, 1])" :placeholder="$t('search')" filled dense)
            template(#prepend-inner): img.mt-n1.mr-1.mb-1(src="~/assets/img/icons/search-icon.svg")

          //- list group
          v-list-item-group(v-model="group" active-class="primary--text")
            v-list-item(@click="t(1)")
              v-list-item-icon: img(src="~/assets/img/icons/tag.svg" height="30")
              v-list-item-title Mes achats
              r-icon
            v-list-item(@click="tab=2")
              v-list-item-icon: img(src="~/assets/img/icons/Star.svg" height="26")
              v-list-item-title Mes articles suivis
              r-icon
            v-list-item(@click="tab=3")
              v-list-item-icon: img(src="~/assets/img/icons/wallet.svg" height="23")
              v-list-item-title Mon espace vendeur
              r-icon
            v-list-item(@click="tab=4")
              v-list-item-icon: img(src="~/assets/img/icons/support.svg" height="28")
              v-list-item-title Centre d’aide
              r-icon
            v-list-item(@click="tab=5")
              v-list-item-icon: img(src="~/assets/img/icons/auction.svg" height="26")
              v-list-item-title Enchéres
              r-icon
            v-list-item(@click="tab=6")
              v-list-item-icon: img(src="~/assets/img/icons/pin.svg" height="33")
              v-list-item-title Suivre ma livraison
              r-icon

            //------------
            v-list-item.mt-16(@click="tab=7")
              v-list-item-icon: img(src="~/assets/img/icons/recruitment.svg" height="24")
              v-list-item-title Recrutement
              r-icon
            v-list-item(@click="tab=8")
              v-list-item-icon: img(src="~/assets/img/icons/rate.svg" height="26")
              v-list-item-title Avis
              r-icon
            v-list-item(@click="tab=9")
              v-list-item-icon: img(src="~/assets/img/icons/faq.svg" height="26")
              v-list-item-title Comment ça marche
              r-icon

            //------------
            v-list-item.mt-16(@click="tab=10")
              v-list-item-icon: img(src="~/assets/img/icons/privacy.svg" height="26")
              v-list-item-title Sécurité
              r-icon
            v-list-item(@click="tab=11")
              v-list-item-icon: img(src="~/assets/img/icons/shipping.svg" height="28")
              v-list-item-title Adresse de livraison
              r-icon
            v-list-item(@click="tab=12")
              v-list-item-icon: img(src="~/assets/img/icons/language.svg" height="26")
              v-list-item-title Langue
              v-spacer
              span {{$i18n.locale}}
              r-icon
            v-list-item(@click="tab=13")
              v-list-item-icon: img(src="~/assets/img/icons/pending-payment.svg" height="26")
              v-list-item-title Méthode de paiement
              r-icon

      t-tab(:co="1" v-model="tab"): my-purchase
      t-tab(:co="2" v-model="tab") 2
      t-tab(:co="3" v-model="tab" t-tab): seller-space
      t-tab(:co="4" v-model="tab") 4
      t-tab(:co="5" v-model="tab"): purchase
      t-tab(:co="6" v-model="tab")
      t-tab(:co="7" v-model="tab")
      t-tab(:co="8" v-model="tab")
      t-tab(:co="9" v-model="tab")
      t-tab(:co="10" v-model="tab")
      t-tab(:co="11" v-model="tab")
      t-tab(:co="12" v-model="tab"): language
      t-tab(:co="13" v-model="tab" t-btn): method-of-payment
</template>

<script>
export default {
  props: {
    value: [String, Number],
  },
  data() {
    return {
      search: '',
      tab: 0,
      group: [],
    }
  },
  watch: {
    tab(v) {
      this.$emit('input', v)
    },
    value(v) {
      this.tab = v
    },
  },
  beforeMount() {
    this.$nextTick(() => {
      this.tab = this.value
    })
  },
}
</script>

<style lang="sass" scoped></style>
