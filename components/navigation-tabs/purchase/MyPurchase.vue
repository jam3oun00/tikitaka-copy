<template lang="pug">
  div
    .d-flex.justify-space-around
      v-btn(rounded outlined @click="tab = 0") En cours
      v-btn(rounded outlined @click="tab = 1") Historique
    t-tab(:co="0" v-model="tab")
      v-list.monocular-icons(nav="nav" dense="dense")
        v-list-item-group(v-model="group" active-class="primary--text")
          v-list-item.radius-10.mx-lg-2.mx-xl-3(two-line="two-line" v-for="n in 4" :key="n")
            v-list-item-avatar.shadow-3(size="60")
              v-img(src="football/ZIDANE.jpg")
            v-list-item-content
              v-list-item-title.text-wrap
                h4.primary--text France 98 Zidane
              v-list-item-subtitle 150 €
            r-icon
    t-tab(:co="1" v-model="tab") Vide
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      group: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
