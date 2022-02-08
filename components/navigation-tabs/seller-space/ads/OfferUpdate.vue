<template lang="pug">
v-container.text-center
  multiple-image(v-model="form.photos" text="Photos" ref="input")
  v-btn.shadow.radius-10.pa-8.white(@click="$refs.input.select()")
    t-icon.mr-3(name="add" size="25")
    | Ajouter des photos


  v-form.mx-6
    div.shadow.fancy-form.mt-7
      v-list-item
        v-text-field(type="text" hide-details="auto" v-model="form.title" label="Titre" filled)

    div.shadow.fancy-form.mt-5
      v-list-item
        v-textarea(hide-details="auto" v-model="form.desc" filled label="Description" auto-grow)

    div.shadow.fancy-form.mt-5
      v-list-item
        v-text-field(type="text" hide-details="auto" v-model="form.type" label="Type" filled)

    div.shadow.fancy-form.mt-5
      v-list-item
        v-text-field(type="number" hide-details="auto" v-model="form.price" label="Prix" filled)

    h2.mt-8.text-center.primary--text Taille
    v-chip-group(v-model="form.size" active-class="outlined-v-chip" mandatory)
      v-row(no-gutters)
        v-col(v-for="(size,i,k) in ['XS','S','M','L','XL']" :key="k"): v-chip.py-4.rounded-lx.transparent-chip.justify-center(:value="size" style="width:100%")
          | {{ size }}

    h2.mt-8.text-center.primary--text Etat
    v-chip-group(v-model="form.rate" active-class="outlined-v-chip" mandatory)
      v-row(no-gutters)
        v-col(v-for="(rate,i,k) in ['Bon','tres Bon','Excellent','Neuf']" :key="k"): v-chip.py-4.rounded-lx.transparent-chip.justify-center(:value="rate" style="width:100%")
          | {{ rate }}

    v-btn.main-form.mt-3(large outlined style="width:80%" @click="$emit('submit')") Continuer
      v-icon.primary.white--text mdi-chevron-right
</template>

<script>
export default {
  data() {
    return {
      form: {
        photos: [],
        title: '',
        desc: '',
        type: '',
        price: 0,
        size: 3,
        rate: 3,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
