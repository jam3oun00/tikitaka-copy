<template lang="pug">
v-card.transparent.mb-md-11.mx-3(flat style="margin-top:-4.3rem;z-index:3")
  //- Search
  v-text-field.main-form.px-2.mb-3.mt-13.pt-5.pt-md-0.mt-md-0(
    hide-details="auto", v-model="search",
    :placeholder="$t('search')",
    filled, dense)
    template(#prepend-inner): img.mt-n1.mr-1.mb-1(src="~/assets/img/icons/search-icon.svg")

  //- Title
  .display-1.text-center.mt-md-2.mt-3.mt-md-7.primary--text.font-weight-medium {{title}}
</template>

<script>
export default {
  props: {
    value: String,
    title: String,
  },
  computed: {
    search: {
      get: function () {
        return this.value
      },
      set: function (v) {
        this.$emit('input', v)
      },
    },
  },
}
</script>

<style lang="sass" scoped></style>
