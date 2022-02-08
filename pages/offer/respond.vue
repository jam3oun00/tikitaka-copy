<template lang="pug">
v-container
  modal(v-model="dialog" width="500")
    t-tab(:co="0" v-model="tab")
      congrats-tab(static no-done-icon)
        template(#text): h3 La transaction est arrêtée. Ce n’est pas grave, ne reste pas sur une défaite et pars à la recherche de nouvelles pépites!!!
        template(#default)
          v-btn.main-form(block outlined color="primary" x-large @click="dialog = false") Rechercher de nouveau Maillot
            t-icon(icon="right")
    t-tab(:co="1" v-model="tab")
      congrats-tab(static text="Félicitation!!! \n Tu as mener jusqu’à son terme cette transaction!!! \n Bientôt tu recevras ta nouvelle pépite!! \n Ne t’arrêtes pas là et continue à vendre tes pépites ou à en chercher de nouvelles !!!")
        template(#default)
          div
            v-btn.main-form.mb-4(block outlined color="primary" x-large @click="dialog = false") Rechercher de nouveau Maillot
              t-icon(icon="right")
            v-btn.main-form.mb-4(block outlined color="primary" x-large @click="dialog = false") Mettre en vente de nouveau Maillot
              t-icon(icon="right")
            v-btn.main-form(block outlined color="primary" x-large @click="dialog = false") Revenir à mon compte
              t-icon(icon="right")
    t-tab(:co="2" v-model="tab")
      congrats-tab.pt-16(static text="La transaction est arrêtée. Ce n’est pas grave, Nous sommes convaincus que bientôt tu recevras de nouvelles offres!!!")
        template(#default)
          v-btn.main-form.mb-4(block outlined color="primary" x-large @click="dialog = false") Rechercher de nouveau Maillot
            t-icon(icon="right")
          v-btn.main-form(block outlined color="primary" x-large @click="dialog = false") Revenir à mon compte
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
        v-text-field(type="text" hide-details="auto" readonly label="Offre reçue" filled value="105 €")
    .shadow.fancy-form.mb-13
      v-list-item
        v-text-field(type="text" hide-details="auto" readonly label="Souhaitez vous faire une contre offre?" filled value="105 €")

  v-row.mx-auto(style="max-width: 66rem")
    v-col(cols="12" md="4")
      v-btn.main-form.boldy(block outlined color="primary" large @click="dialog=!dialog;tab=0") Refuser
        t-icon(icon="x")
    v-col(cols="12" md="4")
      v-btn.main-form.boldy(block outlined color="primary" large @click="dialog=!dialog;tab=1") Accepter
        t-icon(icon="check")
    v-col(cols="12" md="4")
      v-btn.main-form.boldy(block outlined color="primary" large @click="dialog=!dialog;tab=2") Négocier
        t-icon(icon="up")


</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      tab: 0
    }
  },
}
</script>

<style lang="scss" scoped></style>
