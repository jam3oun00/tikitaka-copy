<template lang="pug">
  div
    t-tab(:co="0" v-model="tab")
      v-btn(icon="icon" @click="cls")
        v-icon mdi-chevron-left
      h1.mt-3.mb-5 Mes ventes
      .d-flex.justify-space-around
        v-btn(rounded="rounded" outlined="outlined" @click="subTab = 0") En cours
        v-btn(rounded="rounded" outlined="outlined" @click="subTab = 1") Historique
      t-tab(:co="0" v-model="subTab")
        v-list.monocular-icons(nav="nav" dense="dense")
          v-list-item-group(v-model="group" active-class="primary--text")
            v-list-item.radius-10.mx-lg-2.mx-xl-3(two-line="two-line" v-for="n in 3" :key="n" @click="tab = 1")
              v-list-item-avatar.shadow-3(size="60")
                v-img(src="football/ZIDANE.jpg")
              v-list-item-content
                v-list-item-title.text-wrap
                  h4.primary--text France 98 Zidane
                v-list-item-subtitle 150 €
              r-icon
      t-tab(:co="1" v-model="subTab") Vide
    t-tab(:co="1" v-model="tab")
      v-btn(icon="icon" @click="tab = 0")
        v-icon mdi-chevron-left
      h1.mt-3.mb-5 Mes vestiaire
      v-list-item-group(v-model="group1" active-class="primary--text")
        v-list-item.radius-10.mx-lg-2.mx-xl-3(two-line="two-line" v-for="n in 1" :key="n")
          v-list-item-avatar.shadow-3(size="60")
            v-img(src="football/ZIDANE.jpg")
          v-list-item-content
            v-list-item-title.text-wrap
              h4.primary--text France 98 Zidane
            v-list-item-subtitle 150 €
          r-icon
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      subTab: 0,
      group: [],
      group1: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
