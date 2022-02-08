<template lang="pug">
  div
    h1.mb-5.primary--text Choisir une annonce de mon Vestiaire à modifier
    t-tab(:co="0" v-model="tab")
      //- list
      v-list.monocular-icons(nav dense)
        v-list-item-group(v-model="group" active-class="primary--text")
            v-list-item(two-line @click="tab=1").radius-10.mx-lg-2.mx-xl-3
              v-list-item-avatar.shadow-3(size="60")
                v-img(src="football/ZIDANE.jpg")
              v-list-item-content
                v-list-item-title.text-wrap: h4.primary--text France 98 Zidane
                v-list-item-subtitle 150 €
              r-icon

    t-tab(:co="1" v-model="tab"): offer-update(@submit="tab=2")
    t-tab(:co="2" v-model="tab" full-page-tab)
      congrats-tab(@close="$emit('close');tab=0" middle-button no-done-icon btnText="Retour à mon compte")
        template(#default)
          h3.mx-3.text-center.mb-4
            | Votre demande de modification d'annonce a bien été prise en compte. nous allons l'étudier : S'il est approuvé, il sera automatiquement modifié. Sinon. vous serez averti par email.
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
