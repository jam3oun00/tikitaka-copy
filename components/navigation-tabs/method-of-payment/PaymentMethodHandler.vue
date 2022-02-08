<template lang="pug">
div
  t-tab(:co="0" v-model="tab" full-page-tab t-btn @close="cls")
    .fill-height.d-flex.align-center
      v-radio-group(v-model="selected")
        v-radio.radio-between(v-for="(e,i,k) in checkboxes" :key="k" on-icon="mdi-checkbox-marked-circle-outline" off-icon="mdi-checkbox-blank-circle-outline")
          template(#label): div
            h3(v-if="e==='i-pay'") IPay
            img(v-else :src="require(`~/assets/img/utiles/${e}.svg`)")

    .tab-bottom-sheet
      v-btn.main-form(block outlined color="primary" x-large @click="tab=1" :disabled="isNaN(selected)") {{add?'Ajouter un moyen de paiement':'Supprimer un moyen de paiement'}}
        t-icon(icon="right")

  t-tab(:co="1" v-model="tab" full-page-tab t-btn)
    template(v-if="add")
      v-checkbox.radio-between.mb-4(on-icon="mdi-checkbox-marked-circle-outline" off-icon="mdi-checkbox-blank-circle-outline" :input-value="true")
        template(#label): div
          h3(v-if="selected === 0") IPay
          img(v-else :src="method")


      v-btn.main-form(block outlined color="primary" x-large) Scanner Carte
      p.text-center.my-13 ou
      v-form.mx-auto(style="max-width:21rem")
        v-row
          v-col(cols="12")
            .shadow.fancy-form.radius-10
              v-list-item
                v-text-field(type="number" hide-details="auto" label="Numero De Carte" filled value="************************" @input="borders(24, 'cardNumber')" v-model="form.cardNumber")
          v-col(cols="12")
            .shadow.fancy-form.radius-10
              v-list-item
                v-text-field(type="text" hide-details="auto" label="Nom Sur La Carte" filled value="Paul Doe" v-model="form.name")
          v-col(cols="3")
            .shadow.fancy-form.radius-10
              v-list-item.px-0
                v-text-field(type="number" hide-details="auto" label="MM" filled value="**" @input="borders(2, 'mm')" v-model="form.mm")
          v-col(cols="4")
            .shadow.fancy-form.radius-10
              v-list-item
                v-text-field(type="number" hide-details="auto" label="Année" filled value="****" @input="borders(4, 'year')" v-model="form.year")
          v-col(cols="5")
            .shadow.fancy-form.radius-10
              v-list-item
                v-text-field(type="number" hide-details="auto" label="CVV" filled value="***" @input="borders(3, 'cvv')" v-model="form.cvv")

        v-checkbox.mt-10(label="Sauvegarder mes données bancaires", v-model="form.saveData"
          on-icon="mdi-checkbox-marked-circle-outline",
          off-icon="mdi-checkbox-blank-circle-outline",
          hide-details)

      .tab-bottom-sheet
        v-btn.main-form(block outlined color="primary" x-large @click="tab=2" :disabled="isNaN(selected)") Suivant

    template(v-else)
      v-card.rounded-lg.shadow.primary(dark height="231")
        div(style="position:absolute;bottom:1rem;right:1.2rem")
          h3.white--text(v-if="(Array.isArray(selected) && selected[0] === 'i-pay') || (selected === 'i-pay')") IPay
          img(v-else :src="method")
        div(style="position:absolute;bottom:1rem;left:3rem")
          v-subheader.px-0 Numero De Carte
          div **** **** **** **** 5349
          div **/**
          div Mr Paul Doe
      .tab-bottom-sheet
        v-btn.main-form(block outlined color="primary" x-large @click="tab=2") Supprimer ce moyen de paiement
          t-icon(icon="right")

  t-tab(:co="2" v-model="tab" full-page-tab t-btn steps)
    v-card.rounded-lg.shadow.primary(dark height="231")
      div(style="position:absolute;bottom:1rem;right:1.2rem")
        h3.white--text(v-if="(Array.isArray(selected) && selected[0] === 'i-pay') || (selected === 'i-pay')") IPay
        img(v-else :src="method")
      div(style="position:absolute;bottom:1rem;left:3rem")
        v-subheader.px-0 Numero De Carte
        div **** **** **** **** 5349
        div **/**
        div Mr Paul Doe
    .rounded-div.mt-13 {{add?'Moyen de paiement Ajouté':'Moyen de paiement supprimé'}}
    .tab-bottom-sheet.px-4
      v-btn.main-form(block outlined color="primary" x-large @click="$store.commit('utiles/closeAllTabs')") {{ backBtn || 'Revenir à mon compte' }}
        t-icon(icon="right")
</template>

<script>
import { isEmpty, get } from 'lodash'
export default {
  props: {
    delete: Boolean,
    backBtn: String,
    add: Boolean,
  },
  data() {
    return {
      isEmpty,
      get,
      tab: 0,
      checkboxes: ['visa', 'master-card', 'paypal', 'i-pay'],
      valid: false,
      selected: undefined,
      form: {
        saveData: false,
        cardNumber: '',
        name: '',
        mm: '',
        year: '',
        cvv: '',
      },
    }
  },
  computed: {
    method() {
      try {
        return require(`~/assets/img/utiles/${
          this.checkboxes[this.selected]
        }.svg`)
      } catch (error) {
        return require('~/assets/img/utiles/visa.svg')
      }
    },
  },
}
</script>

<style lang="scss">
.v-input--radio-group,
.v-input--selection-controls {
  position: static !important;
  width: 100% !important;
  right: 0 !important;
  transform: none !important;
}
.radio-between {
  .v-input--selection-controls__input {
    margin: 0 !important;
  }
  justify-content: space-between !important;
  direction: rtl;
  label {
    justify-content: flex-end !important;
  }
}
</style>
