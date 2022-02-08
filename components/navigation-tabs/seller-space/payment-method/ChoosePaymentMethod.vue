<template lang="pug">
div
  t-tab(:co="0" v-model="tab")
    h1 Méthode de versement de mes gains
    v-radio-group.mt-3(v-model="selected")
        v-radio.radio-between(v-for="(e,i,k) in checkboxes" :key="k" on-icon="mdi-checkbox-marked-circle-outline" off-icon="mdi-checkbox-blank-circle-outline")
          template(#label): div
            template(v-if="i===0"): span.mr-5.primary--text Virement bancaire
            template(v-if="i===1"): img.mr-8(height="28" src="utils/paypal.png")

    div(style="position:absolute;bottom:0;width:calc(100% - 3rem)")
      v-btn.mb-4.wide-full(block outlined rounded x-large :disabled="isNaN(selected)" @click="tab=1")
        | Ajouter un moyen de versement
        v-icon(size="25") mdi-chevron-right

  t-tab(:co="1" v-model="tab" full-page-tab)
    h1 Méthode de versement de mes gains
    v-form.mx-6.mt-5
      v-list-item.shadow-3.fancy-form.mb-4
        v-list-item-icon
        v-text-field(type="email" hide-details="auto" label="Titulaire Du Compte" filled)

      v-list-item.shadow-3.fancy-form.mb-4
        v-list-item-icon
        v-text-field(type="email" hide-details="auto" label="Iban" filled)

      v-list-item.shadow-3.fancy-form.mb-4
        v-list-item-icon
        v-text-field(type="email" hide-details="auto" label="Bic" filled)

      v-checkbox.mt-16(color="primary" v-model="saveData" label="Sauvegarder mes données bancaires")

    div(style="position:absolute;bottom:0;width:calc(100% - 3rem)")
      v-btn.mb-4.wide-full(block outlined rounded x-large @click="tab=2")
        | Suivant
        v-icon(size="25") mdi-chevron-right

  t-tab(:co="2" v-model="tab" full-page-tab)
    congrats-tab(@close="$emit('close');tab=0" float-btn)
      template(#default): p.text-center.mt-13 Moyen de versement Ajouté
</template>

<script>
import { isEmpty } from 'lodash'
export default {
  data() {
    return {
      isEmpty,
      radioGroup: '',
      saveData: false,
      tab: 0,
      valid: false,
      group: [],
      selected: undefined,
      checkboxes: ['bancaire', 'paypal'],
    }
  },
}
</script>

<style lang="scss" scoped></style>
