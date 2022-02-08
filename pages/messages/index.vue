<template lang="pug">
v-container
  v-divider.mb-9(style="border-width:3px;border-top:transparent")
  .display-1.font-weight-bold Messages
  v-row(no-gutters).mt-7
    v-col(cols="12")
      v-list.pa-0.monocular-icons(nav)
        v-list-item-group(v-model="group" color="primary")
          template(v-for="(i,n,k) in 15")
            v-list-item.d-flex.px-0(:key="k" nuxt :to="`messages/${i}`")
              v-list-item-icon(style="min-width:50px!important"): profile-avatar(size="60" color="#7f8c9f" alt="Admin Tiki-Taka")
              v-row(no-gutters).d-flex.align-center
                v-col(cols="12" md="auto").mr-3: h1.primary--text.font-weight-regular Admin Tiki-Taka
                v-col(cols="12" md="auto").primary--text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              v-spacer
              .primary--text.text-right.caption(style="min-width:6rem")
                div {{$dayjs().format('h:mm A')}}
                v-chip.red-shadow.darkRed.font-weight-bold(label small dark) 5
            v-divider.mb-2(style="opacity:.65")
</template>

<script>
export default {
  layout: "nosidenav",
  data() {
    return {
      group: [],
    }
  },
}
</script>

