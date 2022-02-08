<template lang="pug">
div.fill-height.pb-15.px-6.d-flex.flex-column.align-center.justify-center(:class="{'full-page-tab':!static}")
  .pb-7.mx-6.text-center(v-if="text"): h3.text-pre-wrap {{text}}
  .pb-7.mx-6.text-center(v-else): slot(name="text")
  .mt-4(v-if="!noDoneIcon")
    img(src="~/assets/img/icons/done.png" height="130")
  div.fill-width.my-8: slot(name="default")
  div(:style="`${middleButton ? '' : 'position:absolute;bottom:0'};width:calc(100% - 3rem)`" v-if="!$slots.default || floatBtn || btnText")
    v-btn.main-form.mb-4.wide-full(block outlined rounded x-large @click="cls")
      | {{btnText || 'Retour à mon compte'}}
      t-icon(icon="right")


</template>

<script>
export default {
  props: {
    static: Boolean,
    middleButton: Boolean,
    noDoneIcon: Boolean,
    floatBtn: Boolean,
    text: String,
    btnText: [Number, String],
    value: [String, Number],
  },
}
</script>

<style lang="scss" scoped></style>
