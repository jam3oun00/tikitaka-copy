<template lang="pug">
v-container
  .text-center
    h2.primary--text Juventus 98/99 Rose Champions League
    h2.primary--text Cote 280 €
    h2.primary--text Note vendeur :
      v-chip.ml-2(small color="secondary") 4.9
        client-only: star-icon.ml-2(size="15")

  .mx-auto.mt-6: v-carousel(hide-delimiters)
    template(v-slot:prev="{ on, attrs }")
      v-btn(v-bind="attrs" v-on="on" icon): client-only: v-icon mdi-chevron-left
    template(v-slot:next="{ on, attrs }")
      v-btn(v-bind="attrs" v-on="on" icon): client-only: chevron-right-icon
    v-carousel-item(v-for="n in 3" :key="n" :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`")

  .text-center.primary--text
    | Taille M
    br
    | Excellent état
    br
    br
    | C’est un maillot mythique floqué « Maradona », un joueur de légende. Ce maillot est celui de la saison 96/97, dernière saison de Maradona dans le club de son coeur

  v-row.justify-space-around.mt-7
    v-col(cols="6" md="4"): v-btn.main-form(block outlined color="primary") faire offer
      client-only: arrow-narrow-up-icon
    v-col(cols="6" md="4"): v-btn.main-form(block outlined color="primary") acheter
      client-only: arrow-narrow-right-icon
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
