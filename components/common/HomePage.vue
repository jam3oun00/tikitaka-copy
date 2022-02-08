<template lang="pug">
client-only: div
  v-dialog(v-model="modalView" max-width="55rem")
    v-card(tile)
      v-carousel(height="70vh" hide-delimiters :show-arrows="get(activeProduct,'images', []).length > 1")
        template(v-slot:prev="{ on, attrs }")
          v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-left
        template(v-slot:next="{ on, attrs }")
          v-btn.uncolored(v-bind="attrs" v-on="on" icon large color="white"): v-icon(large) mdi-chevron-right
        v-carousel-item(v-for="(img, i) in activeProduct.images" :key="i" :src="get(img, 'src', '')" contain)
  v-container
    v-row
      v-col.d-flex.align-center(cols="12" md="4")
        .display-2.font-weight-bold {{$t('home_title_1')}}
      v-col.d-flex.flex-column.align-end.justify-center(cols="12" md="4" v-for="(product, i, k) in recentFirst" :key="k")
        .product-img(:class="{'small-product-img': i === 0}")
          v-card.mx-auto(nuxt :to="`/offer/${product.id}`" flat :img="get(product, 'images[0].src', 'https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png')")
            v-responsive(:aspect-ratio="4/5")
              v-btn.quickview(absolute small top left color="primary") {{$t('authenticated')}}
              v-btn.quickview(absolute small bottom left color="primary") {{$t('favorite')}}
              v-btn.quickview(absolute small bottom right color="primary" @click.prevent="activeProduct=product;modalView=true") {{$t('quickview')}}
          .primary--text.mt-4.font-weight-medium
            nuxt-link(:to="`/offer/${product.id}`") {{product.title}}
            div Cote {{product.Coast}} €
            div
              | Note vendeur:
              v-chip.ml-2(small color="secondary") {{product.rate}}
    v-row.mt-16
      v-col.d-flex.flex-column.align-start.justify-center(cols="12" md="4" v-for="(product, i, k) in recentSecond" :key="k")
        .product-img(:class="{'small-product-img': i >= products.length - 1}")
          v-card.mx-auto(nuxt :to="`/offer/${product.id}`" flat :img="get(product, 'images[0].src', 'https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png')")
            v-responsive(:aspect-ratio="4/5")
              v-btn.quickview(absolute small top left color="primary") {{$t('authenticated')}}
              v-btn.quickview(absolute small bottom left color="primary") {{$t('favorite')}}
              v-btn.quickview(absolute small bottom right color="primary" @click.prevent="activeProduct=product;modalView=true") {{$t('quickview')}}
          .primary--text.mt-4.font-weight-medium
            nuxt-link(:to="`/offer/${product.id}`") {{product.title}}
            div Cote {{product.Coast}} €
            div
              | Note vendeur:
              v-chip.ml-2(small color="secondary") {{product.rate}}
      v-col.d-flex.align-center(cols="12" md="4")
        .display-2.font-weight-bold {{$t('home_title_2')}}
  v-img.mt-16(contain :src="require('~/assets/img/UI-Diagonal-Right.jpg')" position="center bottom")
    v-container
      v-row
        v-col(cols="12" md="6")
          img(src="~/assets/img/iphone-mokup.png" style="width: 100%")
        v-col.fill-height.d-flex.flex-column(cols="12" md="6")
          div
            h2.text-uppercase {{$t('mockup_section_title_1')}}
            h2 {{$t('mockup_section_title_2')}}
          .store-between
          v-card.transparent.text-right(flat tile)
            div
              img(src="~/assets/img/app-store-btn.png" height="81.7")
            div
              img(src="~/assets/img/play-store-btn.png" height="80")
  v-container
    t-tab(:co="0" v-model="tab")
      h2 {{$t('recruitment')}}
      .text-center.mt-4
        p.font-weight-medium.mx-auto(style="max-width: 27rem") {{$t('recruitment_p_1')}}
        img(src="~/assets/img/recrutement-icon-1.svg" height="100")
        p.font-weight-medium.mt-4.mb-6.mx-auto(style="max-width: 27rem") {{$t('recruitment_p_2')}}
        img(src="~/assets/img/recrutement-icon-2.svg" height="100")
        .d-flex.align-center.justify-center
          v-btn.main-form.mt-6(outlined x-large color="primary" @click="tab=1")
            .px-7 {{$t('start_my_recruitment')}}
            t-icon(icon="right")

    //-
    //-
    t-tab(:co="1" v-model="tab" back-btn)
      v-container.py-16.px-5.px-md-12.text-center
        .mx-auto(style="max-width:16rem")
          h3 {{$t('start_my_recruitment')}}
          img.my-7.mt-11(src="~/assets/img/recrutement-icon-1.svg" height="100")
          v-card.white.shadow.fancy-form.mt-5.rounded-lg
            v-list-item.justify-center {{$t('sharing_option')}}
            v-btn(absolute top left icon style="margin-top: -10px")
              svg(xmlns="http://www.w3.org/2000/svg" width="25.331" height="25.189" viewbox="0 0 25.331 25.189")
                g#share(transform="translate(0.75 1.061)")
                  path#Path_3406(data-name="Path 3406" d="M15,3h6V9" transform="translate(2.52 -3)" fill="none" stroke="#041e42" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5")
                  path#Path_3407(data-name="Path 3407" d="M21,3,11,13" transform="translate(2.52 -3)" fill="none" stroke="#041e42" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5")
                  path#Path_3408(data-name="Path 3408" d="M24.52,22.37v1.336a2.68,2.68,0,0,1-2.69,2.672H5.69A2.68,2.68,0,0,1,3,23.706V7.672A2.68,2.68,0,0,1,5.69,5H7.035" transform="translate(-3 -3)" fill="none" stroke="#041e42" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5")
        .mt-2.mt-md-16
        v-btn.main-form.mt-16.mx-auto(outlined x-large color="primary" @click="tab=2")
          .px-7 {{$t('i_sent_my_contract_proposals')}}
          t-icon(icon="right")


    t-tab(:co="2" v-model="tab" back-btn)
      v-container.py-16.px-5.px-md-12.text-center
        .mx-auto(style="max-width:19rem")
          h3 {{$t('signing_bonus')}}
          p {{$t('signing_bonus_p')}}
          img.my-7.mt-11(src="~/assets/img/recrutement-icon-2.svg" height="100")

        v-btn.main-form.mt-9.mx-auto(outlined x-large color="primary" @click="tab=0")
          .px-7 {{$t('contract_proposals_made')}}

    //-
    //-
    .text-center
      h2.mt-16.font-weight-medium {{$t('share_with_us')}}
      .d-flex.align-center.justify-center.mt-2
        svg.mr-5(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24")
          g#logo-instagram(transform="translate(-64 -64)")
            path#Path_6(data-name="Path 6" d="M81,66a5.015,5.015,0,0,1,5,5V81a5.015,5.015,0,0,1-5,5H71a5.015,5.015,0,0,1-5-5V71a5.015,5.015,0,0,1,5-5H81m0-2H71a7.021,7.021,0,0,0-7,7V81a7.021,7.021,0,0,0,7,7H81a7.021,7.021,0,0,0,7-7V71A7.021,7.021,0,0,0,81,64Z" fill="#041e42")
            path#Path_7(data-name="Path 7" d="M172.5,131a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,172.5,131Zm-6.5,1a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-2a6,6,0,1,0,6,6A6,6,0,0,0,166,130Z" transform="translate(-90 -60)" fill="#041e42")
        p.font-weight-medium.ma-0 {{$t('follow_us')}}


  base-carousel(height="200" gap="3" img-only :items="items" width="200")
  //-
  //-
  v-container
    v-divider.mt-8.mb-2
    h2 {{$t('how_it_works')}}
    .d-flex.justify-center.mt-8
      iframe.home-video(src="https://www.youtube.com/embed/VkXOACMn1YQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h2.text-center.my-9 {{$t('how_it_works_title')}}
    .font-weight-medium
      p.mb-2 Tiki-Taka est la première plateforme en temps réel pour vendre et acheter des maillots de foot.
      p.mb-2 Le principe est simple, le vendeur nous envoie une demande pour mettre en vente son maillot sur notre plate forme ainsi que le prix auquel il souhaite le vendre.
      p.mb-2 Il doit avec sa demande nous envoyer des photos clairs et lisibles de certaines parties du maillot qui ne trompent pas afin que nous authentifions son maillot.
      p.mb-2 Nous comptons aussi sur notre communauté de nombreux collectionneurs pour nous avertir si ils Pensent qu’une contrefaçon est passée entre les mailles du filet, ce qui nous permettra de l’expulser.
      p.mb-2 Une fois, le maillot authentifié, il apparait sur nos plateformes afin d’être proposer aux acheteurs.
      p.mb-2 L’acheteur peut l’acheter immédiatement au prix souhaité par le vendeur ou alors faire une offre.
      p.mb-2 Une fois que les deux parties sont tombés d’accord, la transaction s’effectue.
      p.mb-2 Le paiement se fait par séquestre et l’acheteur a une semaine, une fois le maillot reçu pour se rétracter. Une fois ce délai passé, nous procédons au paiement du vendeur.

    v-row.mt-16
      v-col.text-center(cols="12" md="6" lg="3")
        img(src="~/assets/img/passion.svg" style="height:7rem")
        h1 Passion
        p
          | Nous sommes de vrais mordus de football et de vrais passionnés de maillot!!
          br
          | Et notre communauté l’est tout autant, rejoins nous pour partager cette passion ensemble!

      v-divider.d-none.d-lg-block(class="grid-hr" vertical)

      v-col.text-center(cols="12" md="6" lg="3")
        img(src="~/assets/img/authenticité.svg" style="height:7rem")
        h1 Authenticité
        p Tout les produits sur Tiki-taka sont authentifié par nos soins!

      v-divider.d-none.d-lg-block(class="grid-hr" vertical)

      v-col.text-center(cols="12" md="6" lg="3")
        img(src="~/assets/img/tranquillité.svg" style="height:7rem")
        h1 Tranquillité
        p Plus d’inquiétude à avoir pour l’authenticité, la légitimité du vendeur. Nous sommes la pour t’assurer que tu vas recevoir un maillot authentique!

      v-divider.d-none.d-lg-block(class="grid-hr" vertical)

      v-col.text-center(cols="12" md="6" lg="3")
        img(src="~/assets/img/information.svg" style="height:7rem")
        h1 Information
        p Tu as accès en temps réel à la cote de chaque maillot pour acheter et vendre comme un vrai collectionneur!

  v-footer.primary.mt-7(dark)
    v-container
      v-row.mt-16
        v-col(cols="12" md="6" lg="3")
          h3.white--text Contact
          .grey--text.mt-7
            .my-3 Numéro:	+33685161607
            .my-3
              | Addresse:  143 rue Judaique,
              br
              | 33000 Bordeaux,
              br
              | France
            .my-3 Nous acceptons:
            .d-flex
              img(src="~/assets/img/mastercard_inverse.svg")
              span.mx-1
              img(src="~/assets/img/paypal_inverse.svg")
              span.mx-1
              img(src="~/assets/img/visa_inverse.svg")
              span.mx-1
              img(src="~/assets/img/amazon_inverse.svg")

            .d-flex.my-3
              v-btn(small class="primary" style="border:2px solid #093167!important;border-radius:4px!important")
                | France
                v-icon(right small) mdi-chevron-down
              span.mx-1
              v-btn(small class="primary" style="border:2px solid #093167!important;border-radius:4px!important")
                | Français
                v-icon(right small) mdi-chevron-down
              span.mx-1
              v-btn(small class="primary" style="border:2px solid #093167!important;border-radius:4px!important")
                | EUR
                v-icon(right small) mdi-chevron-down

        v-col(cols="12" md="6" lg="3")
          h3.white--text Aide
          .grey--text.mt-7
            .my-3 Information de livraison
            .my-3 Conditions d’achats
            .my-3 Centre d’aide

        v-col(cols="12" md="6" lg="3")
          h3.white--text Catégories populaires
          .grey--text.mt-7
            .my-3 Année 90
            .my-3 Fc Barcelone
            .my-3 Joueur de Légende
            .my-3 Nike
            .my-3 France

        v-col(cols="12" md="6" lg="3")
          h3.white--text Restons en contact
          mailchimp-subscribe(url='https://xxx.xxx.list-manage.com/subscribe/post-json' user-id='xxx' list-id='cc390bc9f2' @error="$notify('error')" @success="$notify($t('mail_success_msg'))")
            template(v-slot='{ subscribe, setEmail, error, success, loading }')
              form(@submit.prevent='subscribe')
                v-row.mt-7(no-gutters)
                  v-col(cols="8")
                    v-list-item.white
                      v-text-field(light hide-details="auto" v-model="email" placeholder="Ton adresse mail" type='email' filled @input='setEmail(email)')

                  v-col(cols="4")
                    v-btn.subscribe-btn.shadow-2.btn-card(color="white" light tile :loading="loading" type='submit') Souscrire

                  div(v-if='error && !success') {{ error }}

          .grey--text.mt-7
            div Reste informés de nos dernières offres, de nos nouveaux services et pleins de super surprises!!

    v-container(fluid)
      h3.white--text.text-center.mt-5(style="opacity: .6") Fait avec passion et amour du ballon rond à Bordeaux
      v-divider.mb-5.mt-2

    .d-flex.grey--text.mb-6.fill-width.mx-4
      div © {{ new Date().getFullYear() }}, Tiki-Taka soccer vintage shirt Website.
      v-spacer
      div Tout droit réservé



</template>

<script>
import { get } from 'lodash'
import { mapState } from 'vuex'
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  fetch() {
    this.$store.dispatch('products/getRecentProducts', { categoryId: '43' })
    this.$store.dispatch('products/getRecentProducts', { categoryId: '46' })
  },
  components: {
    MailchimpSubscribe,
  },
  data() {
    return {
      get,
      tab: 0,
      email: '',
      activeProduct: {},
      modalView: false,
      items: [
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
        { to: '/' },
      ],
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
      ],
    }
  },
  computed: {
    ...mapState({
      recentFirst: (state) => get(state, 'products.recentFirst', []),
      recentSecond: (state) => get(state, 'products.recentSecond', []),
    }),
  },
}
</script>

<style lang="scss">
.subscribe-btn {
  border-radius: 0 !important;
  height: 100% !important;
}
</style>

<style lang="scss" scoped>
.product-img {
  width: 80% !important;
}
.small-product-img {
  width: 60% !important;
}
.grid-hr {
  height: 8rem;
  transform: translateY(50%);
}
</style>
