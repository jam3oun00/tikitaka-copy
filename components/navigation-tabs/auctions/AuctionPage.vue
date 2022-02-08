<template lang="pug">
  div
    //- first tab
    t-tab(:co="0" v-model="tab")
      h3.font-weight-regular.text-center France 98 Zidane
      h3.text-center Cote 150 €

      v-img.ma-10.mt-13(src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/03b9aa88-40f3-41b8-aef4-08fce19f292b/fc-barcelona-2020-21-stadium-home-football-shirt-R8CgsH.jpg",
            aspect-ratio="1")

      v-form.mx-6(v-if="sent")
        .shadow.fancy-form.mt-5
          v-list-item
            v-text-field(type="text" hide-details="auto" readonly label="Votre offre d’origine" filled value="105 €")
        .shadow.fancy-form.mt-5
          v-list-item
            v-text-field(type="text" hide-details="auto" readonly label="Contre offre du vendeur" filled value="125 €")
        .shadow.fancy-form.mt-5
          v-list-item
            v-text-field(type="text" hide-details="auto" readonly label="Nouvelle offre" filled value="115 €")

      v-form.mx-6(v-else-if="received")
        .shadow.fancy-form.mt-5
          v-list-item
            v-text-field(type="text" hide-details="auto" readonly label="Offre reçue" filled value="105 €")
        .shadow.fancy-form.mt-5
          v-list-item
            v-text-field(type="text" hide-details="auto" readonly label="Souhaitez vous faire une contre offre?" filled value="125 €")

      .px-6
        v-btn.main-form.boldy.mt-4.mb-2(block outlined color="primary" large @click="tab=1") Refuser
          t-icon(icon="x")
        v-btn.main-form.boldy.mb-2(block outlined color="primary" large @click="tab=2") Accepter
          t-icon(icon="check")
        v-btn.main-form.boldy.mb-2(block outlined color="primary" large @click="tab=3") Faire Contre Offre
          t-icon(icon="up")


    t-tab(:co="1" v-model="tab" t-btn)
      congrats-tab(no-done-icon)
        template(#text): h3 La transaction est arrêtée. Ce n’est pas grave, ne reste pas sur une défaite et pars à la recherche de nouvelles pépites!!!
        template(#default)
          v-btn.main-form(block outlined color="primary" x-large @click="close") Rechercher de nouveau Maillot
            t-icon(icon="right")

    t-tab(:co="2" v-model="tab" t-btn)
      congrats-tab(text="Félicitation!!! \n Tu as mener jusqu’à son terme cette transaction!!! \n Bientôt tu recevras ta nouvelle pépite!! \n Ne t’arrêtes pas là et continue à vendre tes pépites ou à en chercher de nouvelles !!!")
        template(#default)
          div
            v-btn.main-form.mb-8(block outlined color="primary" x-large @click="close") Rechercher de nouveau Maillot
              t-icon(icon="right")
            v-btn.main-form(block outlined color="primary" x-large @click="close") Mettre en vente de nouveau Maillot
              t-icon(icon="right")

    t-tab(:co="3" v-model="tab" t-btn)
      congrats-tab(text="Félicitation!! \n Ta nouvelle offre a été transmise \n au vendeur, \n Tu seras notifié dés que \n le vendeur auras répondu à ton offre!")
        template(#default)
          v-btn.main-form(block outlined color="primary" x-large @click="close") Revenir à l’Accueil
            t-icon(icon="right")


</template>

<script>
export default {
  props: {
    received: Boolean,
    sent: Boolean,
  },
  data() {
    return {
      tab: 0,
    }
  },
  methods: {
    close() {
      this.$store.commit('utiles/setNavigationdrawer', false)
      this.$store.commit('utiles/closeAllTabs')
    },
  },
}
</script>

<style lang="scss" scoped></style>
