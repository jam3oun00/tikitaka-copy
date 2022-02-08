<template lang="pug">
  div
    modal(v-model="modal")
      auth-form.mt-12(@close='submitAfterAuth')

    t-tab(:co="0" v-model="tab")
      v-container
        h1.mb-3 Ajouter photos
        p Pour rassurer les acheteurs sur l’authenticité de ton maillot, ainsi que nous permettre d’en attester auprès d’eux et pour voir le mettre en ligne, nous avons un cahier des charges très précis en termes de photos à joindre à ton annonce:
        p Pour valider l’authenticité du maillot; tu as simplement besoin de nous prendre en photo, le logo de la marque et du club; de l’extérieur et de l’intérieur du maillot, les coutures intérieures , ainsi que les étiquettes du maillot.
        p Prend exemple sur les photos ci-dessous:

      base-carousel.mb-6(no-title homepage)
      v-container
        p Afin que ton annonce soit attractive nous te conseillons fortement de prendre des photos aussi propres qu’un contrôle de Zidane en extension:
        p Pour cela voilà quelques exemples que tu peux reproduire très facilement chez toi:
      v-container
        v-row
          v-col(v-for="i in 3" :key="i" cols="12" md="4")
            v-img(:src="`https://source.unsplash.com/random/200x200?sig=${i}`" :lazy-src="`https://source.unsplash.com/random/200x200?sig=${i}`" :aspect-ratio="2/3")

      v-btn.my-5.main-form.mt-3.wide(outlined @click="$refs.input.select()") Télécharger mes photos
        v-icon.primary.white--text mdi-chevron-right

      multiple-image(large v-model="photos" text="Photos" ref="input")

      //-
      v-container
        v-form.mx-6
          div.shadow.fancy-form.mt-7
            v-list-item
              v-text-field.centered-input(type="text" hide-details="auto" v-model="form.title" placeholder="Ex: FC Barcelone 99/00 N°10 Rivaldo" label="Titre" filled)

          div.shadow.fancy-form.mt-5
            v-list-item
              v-textarea.centered-input(hide-details="auto" v-model="form.desc" filled placeholder="Ex: Jamais porté…" label="Description" auto-grow)

          div.shadow.fancy-form.mt-5
            v-list-item
              v-text-field.centered-input(type="text" hide-details="auto" v-model="form.type" label="Type" filled)


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

          div.shadow.fancy-form.mt-5
            v-list-item
              v-text-field.centered-input(type="number" hide-details="auto" v-model="form.price" placeholder="***" label="Prix" filled style="max-width:400px")

          .text-center.mt-10
            v-btn.main-form.mx-auto(outlined @click="submit") Continuer
              v-icon.primary.white--text mdi-chevron-right

    t-tab(:co="1" v-model="tab")
      v-container
        h1.mb-3 Authentification
        .text-center
          h3.my-16
            | Félicitation!!!
            br
            | Ton article est en cours de validation par nos équipes. Tu seras informés dés que cette étape sera

            br
            | Validée par mail et par message sur ton application et dés qu’il sera mis en ligne sur notre plateforme!
          v-btn.main-form.mb-8(outlined color="primary" large nuxt to="/seller")
            .mx-4 Accueil
            t-icon(icon="right")

</template>

<script>
export default {
  data() {
    return {
      modal: false,
      tab: 0,
      photos: [],
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
  methods: {
    submit() {
      this.$store.state.auth.loggedIn
        ? this.$store
            .dispatch('products/addProduct', {
              data: this.form,
              imgs: this.photos,
            })
            .then(() => (this.tab = 1))
        : (this.modal = !this.modal)
    },
    submitAfterAuth() {
      this.modal = !this.modal
      this.$store
        .dispatch('products/addProduct', {
          data: this.form,
          imgs: this.photos,
        })
        .then(() => (this.tab = 1))
    },
  },
}
</script>
