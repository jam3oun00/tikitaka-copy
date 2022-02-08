<template lang="pug">
v-container
    h1.display-3.font-weight-bold.primary--text {{$t('search')}}

    //- Search
    v-form(@submit.prevent="goToResult").mt-12
      v-text-field.main-form.px-2.mb-3( style="max-width:500px",
        :class="{'fill-width': $vuetify.breakpoint.smAndDown}"
        hide-details="auto", v-model="search",
        :placeholder="$t('search')",
        filled dense )
        template(#prepend-inner): img.mt-n1.mr-1.mb-1(src="~/assets/img/icons/search-icon.svg")

    //- Recent research
    .mb-4
      | {{$t('recentResearch')}} 
      span.red--text.mx-5 Effacer
    v-row
      v-col(cols="12" md="3" v-for="i in 4" :key="4")
        v-list-item(two-line).shadow-3.radius-10.mx-lg-2.mx-xl-3
          v-list-item-avatar(size="60")
            v-img(src="https://avatarfiles.alphacoders.com/192/192909.jpg")
          v-list-item-content
            v-list-item-title.text-wrap: h4.primary--text France 98 Zidane
            v-list-item-subtitle 150 €

    base-carousel(height="200" radius gap="17" hide-container)

</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    goToResult() {
      this.$router.push({ path: '/search/result', query: { r: this.search } })
    },
  },
}
</script>

<style lang="scss" scoped></style>
