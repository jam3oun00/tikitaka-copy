<template lang="pug">
  div
    t-tab(:co="0" v-model="tab")
      v-form.mx-6
        .shadow-3.fancy-form
          v-list-item
            v-text-field(type="email" hide-details="auto" v-model="signInForm.email" label="Email" filled)
          v-list-item
            v-text-field(type="password" hide-details="auto" v-model="signInForm.password" label="Password" filled)
        .text-center.primary--text.mt-6.pointer(@click="tab=1") j'ai déjà un compte
        v-btn.main-form.mt-6(block outlined color="primary" @click="cls") S’inscrire
          t-icon(icon="right" regular)

    t-tab(:co="1" v-model="tab")
      v-form.mx-6
        .shadow-3.fancy-form
          v-list-item
            v-text-field(type="email" hide-details="auto" v-model="logInForm.email" label="EMAIL" filled)
          v-list-item
            v-text-field(type="text" hide-details="auto" v-model="logInForm.email" label="NOM D'UTILISATEUR" filled)
          v-list-item
            v-text-field(type="password" hide-details="auto" v-model="logInForm.password" label="LE MOT DE PASSE" filled)
        .text-center.primary--text.mt-6.pointer(@click="tab=0") je n'ai pas de compte
        v-btn.main-form.mt-6(block outlined color="primary" @click="cls") S’inscrire
          t-icon(icon="right" regular)
</template>

<script>
export default {
  
  data() {
    return {
      tab: 0,
      logInForm: {
        email: '',
        password: '',
      },
      signInForm: {
        email: '',
        password: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
