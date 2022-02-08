<template lang="pug">
v-container
    v-divider.mb-9(style="border-width:3px;border-top:transparent")
    div.mb-8
      .d-flex
        div.primary--text
          | Admin Tiki-Taka
          .caption Actif
        v-spacer
        profile-avatar.shadow-2(size="40" alt="Admin Tiki-Taka")

      v-list: v-list-item.radius-10.mx-lg-2.mx-xl-3.shadow-3(two-line="two-line")
        v-list-item-avatar.shadow-3(size="60")
          v-img(src="../football/ZIDANE.jpg")
        v-list-item-content
          v-list-item-title.text-wrap
            h4.primary--text France 98 Zidane
          v-list-item-subtitle.primary--text Commmande: UH2983948935B
          v-list-item-subtitle 150 €
        r-icon
    v-row.fill-height
      v-col(cols="12").mb-16
        div.mb-6(v-for="(msg, i) in messages" :key="i")
          .caption.mx-8 {{msg.date}}
          .message
            p.ma-0 {{msg.text}}

      v-col(cols="12")
        form.px-8.py-6.white(@submit.prevent="send" id="msg-box")
          v-textarea.new-form#chat-message-textarea(v-model="msg" filled placeholder="Tape ton message…" auto-grow background-color="#faf1f2" rows="1" dense hide-details="auto" autofocus)
            //- v-text-field.new-form(v-model="msg" color="#faf1f2" placeholder="Tape ton message…" hide-details="auto" filled dense)
            template(#prepend-inner): img.mr-3(src="~/assets/img/icons/add.png" height="26" style="opacity:.65")
            template(#append): v-btn.mt-n1(icon type="submit"): img(src="~/assets/img/icons/upload.png" height="26")





</template>

<script>
export default {
  layout: "nosidenav",
  data() {
    return {
      msg: '',
      messages: [
        {
          text: `Cher client, votre commande a bien été expédiée.
              Vous trouverez ci-dessous votre numéro de suivi BHL.

              UH2983948935B

              Votre maillot devrait arriver sous 3-5 jours.

              Si vous avez des questions, n’hésitez pas à nous contacter et nous vous répondrons au plus vite

              Merci d’avoir choisi Tiki-taka!! `,
          date: 'Lundi, 9:20 AM',
        },
      ],
    }
  },
  methods: {
    send() {
      if (this.msg) {
        this.messages.push({
          text: this.msg,
          date: this.$dayjs().format('dddd, h:mm A'),
        })
        this.msg = ''
        var scrollingElement = document.scrollingElement || document.body
        scrollingElement.scrollTop = 900
      }
    },
  },
}
</script>

<style lang="sass">
.message
  position: relative
  background-color: #faf1f2
  padding: 1rem
  border-radius: 10px
  max-width: 555px
  p
    white-space: pre-line
  &::after
    content: ""
    position: absolute
    height: 2.5rem
    width: 2rem
    background-color: #faf1f2
    left: -1.1rem
    bottom: 0
    clip-path: polygon(100% 0%, 0 100%, 100% 100%)

#msg-box
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  .v-text-field > .v-input__control > .v-input__slot:before
    border: none !important

  .v-text-field.v-input--is-focused > .v-input__control > .v-input__slot:after
    display: none !important

  .v-text-field--filled > .v-input__control > .v-input__slot
    background-color: #faf1f2 !important
  .v-text-field--filled
    border-radius: 5px !important

  #chat-message-textarea
    max-height: 115px
    overflow-y: auto
</style>
