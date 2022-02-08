<template lang="pug">
  div
    //- first tab
    t-tab(:co="0" v-model="tab")
      h2.mt-8.mb-7 Enchères {{received?'reçues':'envoyées'}}
      .d-flex.justify-end.mb-7
        a.mr-15(@click="subTab = 0") En cours
        a.mr-11(@click="subTab = 1") Historique

      t-tab(:co="0" v-model="subTab")
        v-list.monocular-icons(nav="nav" dense="dense")
          v-list-item-group(v-model="group" active-class="primary--text")
            v-list-item.radius-10.mx-lg-2.mx-xl-3(two-line="two-line" v-for="n in 1" :key="n" @click="tab=1")
              v-list-item-avatar.shadow-3(size="60")
                v-img(src="football/ZIDANE.jpg")
              v-list-item-content
                v-list-item-title.text-wrap
                  h4.primary--text France 98 Zidane
                v-list-item-subtitle 150 €
              r-icon

      t-tab(:co="1" v-model="subTab") Vide

    //- auction-page
    t-tab(:co="1" v-model="tab" full-page-tab): auction-page(:sent="sent" :received="received")
</template>

<script>
export default {
  props: {
    received: Boolean,
    sent: Boolean,
  },
  data() {
    return {
      tab: 0,
      subTab: 0,
      group: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
