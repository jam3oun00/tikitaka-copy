<template lang="pug">
v-container
  v-dialog(persistent v-model="dialog" max-width="430"): v-card(tile min-height="500").d-flex.align-center.justify-center
    v-btn(icon absolute top left @click="dialog=false"): v-icon mdi-close
    v-card-text.pt-6: auth-form(@close="tab=1;dialog=false")

  h1.mb-3 Authentification
  t-tab(:co="0" v-model="tab")
    p
      | Maintenant, on doit authentifier ta pépite. Pour cela c'est très simple: Pour l'authentifier consiste à nous joindre des photos de ton maillot:
      br
      | Tu as simplement besoin de nous prendre en photo, le logo de la marque et du club: de l'extérieur et de l'intérieur du maillot!
      br
      | Ainsi que les étiquettes du maillot.
      br
      | Prend exemple sur les photos ci-dessoi

    v-row(no-gutters)
      v-col(v-for="i in 12" :key="i" cols="3" md="1")
        v-img(:src="`https://source.unsplash.com/random/200x200?sig=${i}`" :lazy-src="`https://source.unsplash.com/random/200x200?sig=${i}`" :aspect-ratio="2/3")

    v-card.shadow.radius-10.mx-auto.my-5.d-flex.align-center.justify-center(flat height="160" width="350")
      v-btn.shadow.radius-10.pa-8.white(@click="$refs.input.select()")
        t-icon.mr-3(name="add" size="25")
        | Ajouter des photos
    multiple-image(as="1.2" large v-model="photos" text="Photos" ref="input" :sizes="{cols:'6', md:'2'}")

    //-
    .text-center.mb-5.mb-9: v-btn.main-form(style="min-width:185px" outlined color="primary" large @click="$store.state.auth.loggedIn?tab=1:dialog=true")
      | Continuer
      t-icon(icon="right")

  t-tab(:co="1" v-model="tab")
    congrats-tab(static text="Félicitation!!\nTon article est en cours de validation par nos équipes. \nTu seras informés dés que cette étape sera\nValidée par mail et par message sur ton application et\ndés qu’il sera mis en ligne sur notre plateforme!")
      template(#default)
        div
          .text-center.my-5.mb-9: v-btn.main-form(style="min-width:185px" outlined color="primary" large nuxt to="/") Accueil
            t-icon(icon="right")

</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      tab: 0,
      photos: [],
      form: {
        photos: [],
        title: '',
        desc: '',
        type: '',
        price: 0,
        size: 3,
        rate: 3,
      },
    }
  },
}
</script>

<style lang="sass"></style>
