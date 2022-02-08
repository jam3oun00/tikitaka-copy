<template lang="pug">
v-container
  modal(v-model="dialog")
    congrats-tab.pt-16(text="Félicitation!! \n Ta nouvelle offre a été transmise \n au vendeur, \n Tu seras notifié dés que \n le vendeur auras répondu à ton offre!")
        template(#default)
          v-btn.main-form(block outlined color="primary" x-large @click="dialog = false") Revenir à l’Accueil
            t-icon(icon="right")
  .text-center
    h2.primary--text Maradona Boca Junior
    h2.primary--text Cote 280 €
  .text-center.mt-6
    v-card.my-0.transparent.mx-auto(max-width='300' tile flat)
      v-img(:aspect-ratio='3 / 4' src='https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A228MPA3176PT17X17Y31D1012799780FS3907/views/1,width=378,height=378,appearanceId=228,backgroundColor=F2F2F2,modelId=1543,crop=list/day-without-soccer-2-mens-t-shirt.jpg')

  v-form.mx-auto.text-center(style="max-width:300px")
    .shadow.fancy-form.mt-15.mb-13
      v-list-item
        v-text-field(type="text" hide-details="auto" readonly label="Faire offre" filled value="105 €")
    v-btn.main-form(style='width: 13rem' outlined color='primary' @click="dialog = true") faire offer
      t-icon(icon='up' regular)

</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
