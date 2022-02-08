<template lang="pug">
div
  //- component(:is="FullPageTab?'v-fade-transition':'v-expand-transition'")
  div(v-if="FullPageTab"): v-fade-transition: div(v-show="tab===co" :class="{'full-page-tab pt-15 px-6':FullPageTab}")
    v-scroll-y-transition: v-btn(icon v-if="FullPageTab||backBtn" @click="tab=tab?tab-1:0" absolute top left): v-icon(size="33") mdi-chevron-left
    v-scroll-y-transition: v-btn(icon v-if="backBtn" @click="tab=0"): v-icon(size="33") mdi-chevron-left
    v-scroll-y-transition: div.t-btn(v-if="tBtn"): v-btn(icon @click="close"): v-icon(size="33") mdi-chevron-left
    slot
  div(v-else): v-expand-transition: div(v-show="tab===co" :class="{'full-page-tab pt-15 px-6':FullPageTab}")
    v-scroll-y-transition: v-btn(icon v-if="FullPageTab||backBtn" @click="tab=tab?tab-1:0" absolute top left): v-icon(size="33") mdi-chevron-left
    v-scroll-y-transition: v-btn(icon v-if="backBtn" @click="tab=0"): v-icon(size="33") mdi-chevron-left
    v-scroll-y-transition: div.t-btn(v-if="tBtn"): v-btn(icon @click="close"): v-icon(size="33") mdi-chevron-left
    slot
</template>

<script>
export default {
  props: {
    co: [Boolean, Number],
    FullPageTab: Boolean,
    backBtn: Boolean,
    tBtn: Boolean,
    steps: Boolean,
    value: [String, Number],
  },
  data() {
    return {
      tab: 0,
    }
  },
  computed: {
    tabChange() {
      return this.$store.state.utiles.tabChange
    },
  },
  watch: {
    tabChange() {
      this.tab = 0
    },
    tab(v) {
      this.$emit('input', v)
    },
    value(v) {
      this.tab = v
    },
  },
  beforeMount() {
    this.$nextTick(() => {
      this.tab = this.value
    })
  },
  methods: {
    close() {
      this.tab = this.steps ? this.tab - 1 : 0
      this.cls()
    },
  },
  mounted () {
    this.change++
  },
}
</script>

<style lang="scss">
.full-page-tab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;
  overflow: auto;
}
.t-btn {
  padding: 0 1rem;
  margin: 1rem 0;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
}
</style>
