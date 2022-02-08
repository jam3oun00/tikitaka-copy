<template lang="pug">
client-only: div
  v-navigation-drawer.pt-12.px-6(color="wall" v-model="drawer" fixed app width="420" mobile-breakpoint="9999999999" v-if="!noSidebar")
    template(#prepend v-if="activeTab===0")
      v-scroll-y-transition
        v-btn(icon v-if="tab !== 0" @click="tab=0" absolute top left)
          v-icon(size="33") mdi-chevron-left
      v-list-item(two-line)
        v-list-item-avatar(size="100")
          img(src="https://avatarfiles.alphacoders.com/192/192909.jpg")
        div
          .font-30 Jane Smith
          v-list-item-subtitle.primary--text.ml-3 email@email.com
          v-btn.main-form.mt-3(small color="primary" outlined) Modifier le profil
    base-navigation-tabs(v-if="activeTab===0" v-model="tab" ref="navigation_tabs")

    template(#append v-if="activeTab===0&&tab===0")
      div(v-if="!$store.state.auth.loggedIn")
        v-row.pa-2.align-center.justify-center
          v-col
            v-btn.main-form(style="width:100%" outlined color="primary" @click="activeFormTab=2;activeTab=1") S’inscrire
          v-col
            v-btn.main-form(style="width:100%" outlined color="primary" @click="activeFormTab=0;activeTab=1") Se connecter

      v-row.pa-2.align-center.justify-center(v-else): v-btn.main-form.mb-3(outlined color="primary" block @click="logOut") Se déconnecter


    t-tab(:co="1" v-model="activeTab" full-page-tab)
      .text-center
        img.my-6(src="~/assets/img/icons/profile.png" height="45")
      auth-form(@close="closeAuthForm" v-model="activeFormTab")

  v-card.transparent(tile)
    v-app-bar.wall(absolute="absolute" flat app :class="{barImg}" :height="barImg?185:135" :src="barImg ? require(`~/assets/img/football/field.jpg`) : ''")
      template(#img="{ props }")
        v-img(v-bind="props" gradient="0deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6)")
      template(v-if="!noSidebar")
        v-spacer
        span(style="width: 69px;")
          v-btn(icon color="primary" @click="drawer=!drawer")
            img(src="~/assets/img/icons/menu-icon.svg")
      v-spacer
      span.mr-2.text-center(style="width: 170px;" v-if="!$vuetify.breakpoint.smAndDown")
        v-btn(icon color="primary")
          img(src="~/assets/img/icons/facebook_icon.svg" height="20")
        v-btn(icon color="primary")
          img(src="~/assets/img/icons/instagram_icon.svg" height="20")
      v-spacer
      template(v-if="!$vuetify.breakpoint.smAndDown")
        router-link.mx-2.pa-4.font-weight-medium.text-capitalize(:to="route.to" v-for="(route, i, k) in mainRoutes.slice(0, 2)" :key="k") {{route.name}}
      v-toolbar-title.mx-4.overflow-visible
        nuxt-link.text--text(to="/")
          img.ml-n7.ml-md-0(style="height: 100px;" src="~/assets/img/logo.png")
      template(v-if="!$vuetify.breakpoint.smAndDown")
        router-link.mx-2.pa-4.font-weight-medium.text-capitalize(:to="route.to" v-for="(route, i, k) in mainRoutes.slice(2, 5)" :key="k") {{route.name}}
      v-spacer
      v-select.primary(:value="$i18n.locale" :items="$i18n.locales" dark @change="onChange" item-value="code" item-text="name" filled hide-details="hide-details" dense style="max-width: 160px;" v-if="!$vuetify.breakpoint.smAndDown")
      v-spacer
      span.ml-2(v-if="!$vuetify.breakpoint.smAndDown")
        v-btn.no-back(icon nuxt to="/cart" color="primary")
          v-badge(color="darkRed" content="2" bottom left dark)
            img(height="22" src="~/assets/img/icons/cart.png")
        v-btn.no-back(icon nuxt to="/messages" color="primary")
          v-badge(color="darkRed" content="4" bottom left dark)
            img(height="22" src="~/assets/img/icons/messages.png")
        v-btn.no-back(icon nuxt to="/notifications" color="primary")
          v-badge(color="darkRed" content="32" bottom left dark)
            img(height="24" src="~/assets/img/icons/notifications.png")
      v-spacer
</template>

<script>
import Cookies from 'js-cookie'

export default {
  props: {
    barImg: Boolean,
    isSeller: Boolean,
    noSidebar: Boolean,
  },
  data() {
    return {
      activeFormTab: 0,
      tab: 0,
      activeTab: 0,
      mainRoutes: [
        {
          name: 'accueil',
          to: '/',
          icon: '',
        },
        {
          name: 'recherche',
          to: '/search',
          icon: '',
        },
        {
          name: 'compte',
          to: '/',
          icon: '',
        },
        {
          name: this.isSeller ? 'Acheter' : 'vendre',
          to: this.isSeller ? '/' : '/seller',
          icon: '',
        },
      ],
    }
  },
  computed: {
    drawer: {
      get: function () {
        return this.$store.state.utiles.navigationdrawer
      },
      set: function (v) {
        this.$store.commit('utiles/setNavigationdrawer', v)
      },
    },
  },
  methods: {
    closeAuthForm() {
      this.activeTab = 0
      this.$store.dispatch('products/getRecentProducts', { categoryId: '43' })
      this.$store.dispatch('products/getRecentProducts', { categoryId: '46' })
    },
    onChange(locale) {
      if (locale) {
        const language = locale.toLocaleLowerCase()
        this.$i18n.setLocale(language)
      }
    },
    logOut() {
      this.$store.commit('auth/setUser', {})
      this.$store.commit('auth/triggerAuth', false)
      Cookies.remove('simple-jwt-login-token')
    },
  },
}
</script>
<style lang="sass">
.monocular-icons
  .v-list-item__icon
    width: 28px !important

.pointer
  cursor: pointer !important

.v-toolbar.v-app-bar.barImg
  .v-toolbar__content
    padding-bottom: 4.2rem
</style>
