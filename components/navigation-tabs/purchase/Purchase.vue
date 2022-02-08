<template lang="pug">
  div
    t-tab(:co="0" v-model="tab")
      h2.mt-4.mb-2 Enchères
      //- list
      v-list.monocular-icons(nav)
        v-list-item-group(v-model="group" active-class="primary--text")
          v-list-item(@click="tab=1")
            v-list-item-title Enchères reçues
            r-icon
          v-list-item(@click="tab=2")
            v-list-item-title Enchères envoyées
            r-icon
    t-tab(:co="1" v-model="tab" t-btn): auctions(received)
    t-tab(:co="2" v-model="tab" t-btn): auctions(sent)

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
