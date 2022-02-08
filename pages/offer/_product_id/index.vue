<template lang="pug">
v-container
  modal(v-model="dialog")
    t-tab(:co='0', v-model='tab'): auth-form.mt-12(@close='tab = 1')
    t-tab(:co='1', v-model='tab'): purchase-summary(back-btn="Poursuivre ma commande")

  modal(v-model="negotiate" width="800")
    t-tab(:co="0" v-model="negotiateTab")
      h2.text-center.mx-auto(style="max-width:44rem")
        | Nous authentifions tout les maillots sur notre marketplace après comme une mauvaise passe, une mauvaise relance, un contrôle raté ou l’erreur est humaine.
        br
        br
        | Notre communauté des amoureux du ballon rond et des maillots de foot authentiques est notre VAR
        br
        | Donc si tu penses qu’une contrefaçon a percer notre défense et marquer un but hors jeu.
        br
        br
        | Alors n’hésites pas à nous le signaler à l’oreillette  que l’on puisse annuler le but et lui mettre un carton rouge pour l’expulser:
        br
        br
        | Explique nous les indices qui t’ont amener à penser que c’est un faux:

      v-card.my-7.shadow.radius-10.mx-auto
        v-textarea.fill-width.elevation-0(solo auto-grow rows="5" hide-details="auto" style="position: initial")

      h2.text-center.mx-auto.my-16(style="max-width:44rem")
        | Tu peux ajouter, si tu le souhaites, des photos de vrais maillots de ta collection pour illustrer la différence avec celui mis en vente:
      v-card(min-height="200" max-width="400").my-7.shadow.radius-10.mx-auto.d-flex.align-center.justify-center.white
        v-btn.shadow.radius-10.pa-8.white(@click="$refs.input.select()")
          t-icon.mr-3(name="add" size="25")
          | Ajouter des photos

      multiple-image(as="1.2" large v-model="form.photos" text="Photos" ref="input" :sizes="{cols:'6', md:'2'}")


      .d-flex.justify-center.my-8: v-btn.main-form.mt-3.mx-auto(large outlined @click="negotiateTab = 1")
        | Envoyer le formulaire
        t-icon(icon="right" regular)

    t-tab(:co="1" v-model="negotiateTab")
      congrats-tab.pt-16.overflow-hidden
        template(#text)
          h2.text-center.mx-auto(style="max-width:44rem")
            | Merci d’avoir partager toute ces infos, nous allons étudier ça plus attentivement et prendrons une décision
            br
            | En conséquence!
            br
            br
            | Tu peux continuer à chercher des pépites pour ta collection sur Tiki-Taka!

        template(#default)
          .d-flex.justify-center: v-btn.main-form.mx-auto(outlined color="primary" x-large @click="negotiate=!negotiate")
            .px-7 Continuer
            t-icon(icon="right")

  v-dialog(v-model="modalView" max-width="55rem")
    v-card(tile)
      v-carousel(hide-delimiters :show-arrows="get(singleProduct,'images', []).length > 1")
        template(v-slot:prev="{ on, attrs }")
          v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-left
        template(v-slot:next="{ on, attrs }")
          v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-right
        v-carousel-item(v-for="(img, i) in singleProduct.images" :key="i" :src="get(img, 'src', '')" contain)

  .text-center
    h2.primary--text {{singleProduct.name}}
    h2.primary--text Cote {{singleProduct.Coast}} €
    h2.primary--text Note vendeur :
      v-chip.ml-2(small, color='secondary')
        | {{singleProduct.average_rating}}
        v-icon.mx-1(size='17') mdi-star

  .text-center.mt-6
    v-card.my-0.transparent.mx-auto(max-width='300' tile flat)
      v-img(:aspect-ratio='3 / 4' :src="getImg(singleProduct)" gradient="-17deg, rgb(0 0 0 / 0%) 83%, rgb(0 0 0 / 32%)")
      v-btn.quickview(color="primary" absolute bottom large @click="modalView=!modalView") Quickview
      v-btn.mt-n2.ml-n2(color="primary" absolute top left large icon): img(src='~/assets/img/icons/open-in-new-tab.svg' height="27")
    v-btn.main-form.my-8(outlined, color='primary' @click="negotiate=!negotiate") Je pense que c’est une contre façon, je fais appel à la VAR
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
    v-col.d-flex.justify-center(cols='6', md='4'): v-btn.main-form(style='width: 13rem' outlined color='primary' nuxt to="/offer/bid") faire offre
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
            v-card.mx-auto(flat :img="get(product, 'images[0].src', 'https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png')")
              v-responsive(:aspect-ratio="4/5")
                v-btn(absolute top left small color="primary") Authentifié
                v-btn(absolute bottom left small color="primary") Favoris
                v-btn(absolute bottom right small color="primary" nuxt to="/offer/details/testID") Quickview

            //- Coast, size...
            .font-weight-medium.primary--text.mt-4
              div {{product.title}}
              div Coast {{product.Coast}} €
              div size {{product.size}}
              div price {{product.price}} €
              div rate
                v-chip.ml-2(small color="secondary") | {{product.average_rating}}

      .d-flex.justify-center
        v-btn.mx-auto.main-form.mb-8.mt-13(outlined, color='primary' nuxt to="/lot/create")
          .px-8
            | Choisir un lot
          t-icon(icon='right', regular)
</template>

<script>
import { mapState } from 'vuex'
import { get } from 'lodash'
export default {
  fetch() {
    this.$store.dispatch('products/fetchProducts')
    if (this.$route.params.product_id) {
      this.$store.dispatch(
        'products/fetchSingleProduct',
        this.$route.params.product_id
      )
    }
  },
  data() {
    return {
      get,
      tab: 0,
      negotiate: false,
      modalView: false,
      dialog: false,
      dialogOffer: false,
      negotiateTab: 0,
      form: {
        photos: [],
      },
    }
  },
  watch: {
    dialog(v) {
      this.$store.state.auth.loggedIn ? (this.tab = 1) : (this.tab = 0)
    },
  },
  computed: {
    ...mapState({
      products: (state) => get(state, 'products.data', []),
      singleProduct: (state) => get(state, 'products.singleProduct', {}),
    }),
  },
  methods: {
    openDialog() {
      this.$store.state.auth.loggedIn ? (this.tab = 1) : (this.tab = 0)
      this.dialog = true
    },
  },
  // created() {
  //   this.$route.params.product_id
  //     ? null
  //     : this.$nuxt.error({
  //         statusCode: 404,
  //         message: this.$t('pageNotFound'),
  //       })
  // },
}
</script>

<style lang="scss" scoped>
.quickview {
  right: 50%;
  transform: translateX(50%);
}
</style>
