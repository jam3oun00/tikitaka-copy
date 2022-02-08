<template lang="pug">
  v-app
    client-only
      t-loader
      v-snackbar(transition="scroll-y-transition" bottom center v-model="alert" light)
        .primary--text.font-weight-medium {{ alertMsg }}
        template(#action="{ attrs }"): v-btn(small icon v-bind="attrs" @click="alert = false"): v-icon(small) mdi-close
      slot(name="navbar")
      base-nav(v-if="!$slots.navbar")
      v-main
        .pt-4
          slot
</template>

<script>
export default {
  data() {
    return {
      switcher: false,
    }
  },
  async mounted() {
    const darTheme = localStorage.getItem('dark_theme')
    if (darTheme) {
      if (darTheme === 'true') {
        this.$vuetify.theme.dark = await true
        this.switcher = await true
      } else {
        this.$vuetify.theme.dark = await false
        this.switcher = await false
      }
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    alertMsg: {
      get: function () {
        return this.$store.state.utiles.alert.msg
      },
      set: function (v) {
        this.$store.commit('utiles/alert/alertMe', v)
      },
    },
    alert: {
      get: function () {
        return this.$store.state.utiles.alert.isEnabled
      },
      set: function (v) {
        this.$store.commit('utiles/alert/handelAlert', v)
      },
    },
  },
}
</script>

<style lang="sass" scoped></style>
