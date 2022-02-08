<template lang="pug">
  div
    modal(v-model="modal")
      auth-form.mt-12(@close='modal=!modal' v-model="auth")
    v-container
      v-row
        v-col.d-flex.justify-center(cols="12" md="3" v-if="!$store.state.auth.loggedIn")
          div.text-center.mr-3.d-inline-flex.flex-column.align-center.justify-center
            img.mb-2(src="~/assets/img/icons/profile.png" height="41")
            v-btn.shadow.pl-3.main-form.uncolored.mb-1(rounded color="primary" outlined large style="width:100%" @click="modal=!modal;auth=2") S’inscrire
              v-icon(size="28").rounded-circle.primary.white--text.ml-1 mdi-chevron-right
            v-btn.shadow.pl-3.main-form.uncolored(rounded color="primary" outlined large style="width:100%" @click="modal=!modal;auth=0") Se Connecter
              v-icon(size="28").rounded-circle.primary.white--text.ml-1 mdi-chevron-right
        v-col
          .display-3.text-center.mb-4.primary--text.font-weight-bold.mx-auto(:class="{'display-1':$vuetify.breakpoint.smAndDown}" style="max-width: 74rem")
            | {{$t('homePageTitle')}}
    base-carousel(homepage is-seller)
    home-page

</template>

<script>
export default {
  layout: 'seller',
  data() {
    return {
      modal: false,
      auth: 0,
    }
  },
}
</script>
