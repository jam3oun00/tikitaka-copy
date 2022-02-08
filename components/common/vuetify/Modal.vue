<template lang="pug">
  v-dialog(persistent, v-model='dialog', :max-width='width' transition="scroll-y-transition")
    v-card.ma-0.pt-12.d-flex.align-center.justify-center(tile :min-height='height' height='100%')
      v-card-text
        v-btn(icon, absolute, top, left, @click='dialog = false'): v-icon mdi-close
        slot
</template>

<script>
export default {
  props: {
    value: Boolean,
    visible: Boolean,
    loading: Boolean,
    reasetAssetFormOnClose: Boolean,
    maxWidth: [Number, String],
    persistent: {
      type: Boolean,
      default: true,
    },
    title: String,
    width: {
      type: [Number, String],
      default: 430,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  watch: {
    dialog(v) {
      this.$emit('input', v)
    },
    value(v) {
      this.dialog = v
    },
  },
  beforeMount() {
    this.$nextTick(() => {
      this.dialog = this.value
    })
  },
}
</script>
