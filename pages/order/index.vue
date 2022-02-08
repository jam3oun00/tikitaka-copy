<template lang="pug">
v-container
  modal(v-model="dialog")
    t-tab(:co='0', v-model='tab'): auth-form.mt-12(@close='tab = 1')
    t-tab(:co='1', v-model='tab'): purchase-summary


  .text-center
    h2.primary--text Maradona Boca Junior
    h2.primary--text Cote 280 €
    h2.primary--text Note vendeur :
      v-chip.ml-2(small, color='secondary')
        | 4.9
        v-icon.mx-1(size='17') mdi-star

  .text-center.mt-6
    v-card.my-0.transparent.mx-auto(max-width='300' tile flat)
      v-img(:aspect-ratio='3 / 4' src='https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A228MPA3176PT17X17Y31D1012799780FS3907/views/1,width=378,height=378,appearanceId=228,backgroundColor=F2F2F2,modelId=1543,crop=list/day-without-soccer-2-mens-t-shirt.jpg' gradient="-17deg, rgb(0 0 0 / 0%) 83%, rgb(0 0 0 / 32%)")
      v-btn.quickview(color="primary" absolute bottom large) Quickview
      v-btn.mt-n2.ml-n2(color="primary" absolute top left large icon): img(src='~/assets/img/icons/open-in-new-tab.svg' height="27")
    v-btn.main-form.my-8(outlined, color='primary') Je pense que c’est une contre façon, je fais appel à la VAR
      t-icon(icon='right', regular)
  .text-center.primary--text
    h3(style="letter-spacing: 1.5px") discription:
    | Taille M
    br
    | Excellent état
    br
    br
    | C’est un maillot mythique floqué « Maradona », un joueur de légende. Ce maillot est celui de la saison 96/97, dernière saison de Maradona dans le club de son coeur

  v-row.justify-space-around.mt-7
    v-col.d-flex.justify-center(cols='6', md='4'): v-btn.main-form(style='width: 13rem' outlined color='primary' nuxt to="/offer/create") faire offer
      t-icon(icon='up' regular)
    v-col.d-flex.justify-center(cols='6', md='4'): v-btn.main-form(style='width: 13rem' outlined color='primary' @click="openDialog") acheter
      t-icon(icon='right' regular)




    v-container
      h3.text-center.mb-3 Vestiaire Du Vendeur
      p.mx-auto.text-center.font-weight-medium(style="max-width: 26rem") 
        | Achète en lot et économise sur les frais de port Une seul règle, tu dois choisir des maillots de la même catégorie
        br
        br
        | Ce vendeur accorde une remise automatique pouvant aller de 10% à 25% suivant le nombre de maillot dans le lot
      .d-flex.justify-space-between.my-7
        p.font-weight-medium 5 articles
        v-icon.primary--text mdi-filter-outline
      
      h2.text-center.my-12 Son Vestiaire Hall Of Fame, Match ISSUE Et Match Worn

      //- grid system for products
      v-row(justify="space-between")
        v-col.d-flex.justify-center(cols="12" md="4" v-for="(product, i, k) in products" :key="k")
          .product-img
            v-card.mx-auto(flat img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9e5fC6ucIXILM7V4O6mNPo45IZutqV9mMQ&usqp=CAU")
              v-responsive(:aspect-ratio="4/5")
                v-btn(absolute top left small color="primary") Authentifié
                v-btn(absolute bottom left small color="primary") Favoris
                v-btn(absolute bottom right small color="primary" nuxt to="/offer-details/testID") Quickview

            //- Coast, size...
            .font-weight-medium.primary--text.mt-4
              div {{product.title}}
              div Coast {{product.Coast}} €
              div size {{product.size}}
              div price {{product.price}} €
              div rate
                v-chip.ml-2(small color="secondary") {{product.rate}}
      
      .d-flex.justify-center: v-btn.mx-auto.main-form.mb-8.mt-13(outlined, color='primary') Choisir un lot
        t-icon(icon='right', regular)
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogOffer: false,
      tab: 0,
      products: [
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Parme 93/95 HOME',
          Coast: '80',
          size: 'M',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Borussia Dortmund 97/99 Home Jaune',
          Coast: '80',
          size: 'M',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Parme 93/95 HOME',
          Coast: '80',
          size: 'M',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
        {
          title: 'Juventus 98/99 Rose Champions League',
          Coast: '80',
          size: 'S',
          price: '90',
          rate: '4.9',
        },
      ],
    }
  },
  watch: {
    dialog(v) {
      this.$auth.loggedIn ? (this.tab = 1) : (this.tab = 0)
    },
  },
  methods: {
    openDialog() {
      this.$auth.loggedIn ? (this.tab = 1) : (this.tab = 0)
      this.dialog = true
    },
  },
}
</script>

<style lang="scss" scoped>
.quickview {
  right: 50%;
  transform: translateX(50%);
}
</style>
