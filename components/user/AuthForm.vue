<template lang="pug">
div
  t-tab(:co='0', v-model='tab')
    v-form.mx-auto(style='max-width: 19rem' @submit.prevent="login")
      .fancy-form.shadow
        v-list-item
          v-list-item-icon: img(src='~/assets/img/icons/mail-icon.svg')
          v-text-field(
            type='email',
            hide-details='auto',
            v-model='signInForm.email',
            label='EMAIL',
            filled
          )
        v-list-item
          v-list-item-icon: img(src='~/assets/img/icons/profile.svg')
          v-text-field(
            type='password',
            hide-details='auto',
            v-model='signInForm.password',
            label='Mot De Passe',
            filled
          )
      .text-center.mt-9: a(@click='tab = 3') Mot de passe oublié?
      .text-center.mt-1: a(@click='tab = 2') Je souhaite créer un nouveau compte
      .px-7.mt-9: v-btn.main-form(
        style='min-width: 185px',
        type="submit"
        block,
        outlined,
        color='primary',
        large,
      ) Connexion
        t-icon(icon='right')
  t-tab(:co='1', v-model='tab')
    congrats-tab(
      text='Félicitation!! \n Tu as bien intégrer le club!! \n Bienvenue chez le FC Tiki-taka!!'
    )
      template(#default)
        .text-center: v-btn.main-form(
          outlined,
          color='primary',
          x-large,
          @click='cls(); tab = 0'
        ) Continuer
          t-icon(icon='right')

  t-tab(:co='2', v-model='tab')
    v-form.mx-auto(style='max-width: 19rem' @submit.prevent="register")
      .fancy-form.shadow
        v-list-item
          v-list-item-icon.px-4.pl-3: img.mt-1(
            src='~/assets/img/icons/mail-icon.svg'
          )
          v-text-field(
            type='email',
            hide-details='auto',
            v-model='registerForm.email',
            label='EMAIL',
            filled
          )
        v-list-item
          v-list-item-icon.px-4.pl-3: img(src='~/assets/img/icons/profile.svg')
          v-text-field(
            type='text',
            hide-details='auto',
            v-model='registerForm.name',
            label='NOM D’UTILISATEUR',
            filled
          )
        v-list-item
          v-list-item-icon.px-4.pl-3: img(src='~/assets/img/icons/lock-icon.svg')
          v-text-field(
            type='password',
            hide-details='auto',
            :rules='passRules',
            v-model='registerForm.password',
            label='MOT DE PASSE',
            filled
          )
        v-list-item
          v-list-item-icon.px-4.pl-3: img.mt-n1(
            src='~/assets/img/icons/lock-icon.svg'
          )
          v-text-field(
            type='password',
            hide-details='auto',
            :rules='confirmPassRules',
            v-model='registerForm.confirm_password',
            label='CONFIRMEZ LE MOT DE PASSE',
            filled
          )
      .text-center.mt-9: a(@click='tab = 0') J’ai déjà un compte
      .px-7.mt-9: v-btn.main-form(
        type="submit"
        style='min-width: 185px',
        block,
        outlined,
        color='primary',
        large,
      ) S’inscrire
        t-icon(icon='right')

  t-tab(:co='3', v-model='tab' full-page-tab)
    h3(style='max-width: 19rem').mb-16.mx-auto Entrer l’adresse email que vous avez utiliser pour créer votre compter et nous vous enverrons un lien afin de réinitialiser votre mot de passe

    v-form.mx-auto(style='max-width: 19rem')
      .fancy-form.shadow
        v-list-item
          v-list-item-icon: img(src='~/assets/img/icons/mail-icon.svg')
          v-text-field(
            type='email',
            hide-details='auto',
            v-model='signInForm.email',
            label='EMAIL',
            filled
          )

    .px-7.mt-9: v-btn.main-form(
      style='min-width: 185px',
      block,
      outlined,
      color='primary',
      large,
      @click='tab = 4'
    ) Envoyer un Email
      t-icon(icon='right')

  t-tab(:co='4', v-model='tab')
    congrats-tab
      template(#text)
        v-list-item
          v-list-item-icon: img(src='~/assets/img/icons/mail-icon.svg')
          p.ma-0 Email de réinitialisation envoyer
      template(#default)
        .text-center: v-btn.main-form(
          outlined,
          color='primary',
          x-large,
          @click='cls(); tab = 0'
        ) Revenir à Se Connecter
          t-icon(icon='right')
</template>

<script>
export default {
  props: {
    value: Number,
  },
  data() {
    return {
      tab: 0,
      confirmPassRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (!!v && v === this.registerForm.password) || 'Password not match',
      ],
      passRules: [(v) => !!v || 'Password is required'],
      registerForm: {
        email: '',
        name: '',
        password: '',
        confirm_password: '',
      },
      signInForm: {
        email: '',
        name: '',
      },
    }
  },
  watch: {
    tab(v) {
      this.$emit('input', +v)
      this.registerForm = {
        email: '',
        name: '',
        password: '',
        confirm_password: '',
      }
      this.signInForm = {
        email: '',
        password: '',
      }
    },
    value(v) {
      this.tab = +v
    },
  },
  methods: {
    login() {
      this.$store
        .dispatch('auth/login', {
          ...this.signInForm,
          AUTH_KEY: 'tikitaka-vendor',
        })
        .then(() => this.cls())
    },
    register() {
      let data = this.registerForm
      delete data.confirm_password

      this.$store
        .dispatch('auth/register', {
          ...data,
          AUTH_KEY: 'tikitaka-vendor',
        })
        .then(() => this.cls())
    },
  },
  beforeMount() {
    this.$nextTick(() => {
      this.value === undefined ? null : (this.tab = this.value)
    })
  },
}
</script>

<style lang="scss" scoped></style>
