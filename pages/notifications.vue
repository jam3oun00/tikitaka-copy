<template lang="pug">
v-container
  v-divider.mb-9
  .display-1.font-weight-bold Notifications
  v-row.mt-7
    v-col(cols="12")
      v-list.monocular-icons(nav)
        v-list-item-group(v-model="group" color="primary")
          template(v-for="(i,n,k) in 15")
            v-list-item.d-flex.px-4(:key="k")
              v-list-item-icon(style="width:5rem!important"): img(src="~/assets/img/icons/box.png" height="40")
              v-row(no-gutters).d-flex
                v-col(cols="12" md="auto").font-weight-bold.mr-3.primary--text Admin Tiki-Taka,  ta commande 12334
                v-col(cols="12" md="auto").primary--text à bien été expédiée.
              v-spacer
              .primary--text.text-right.caption(style="min-width:6rem")
                div {{$dayjs().format('h:mm A')}}
                v-chip.red-shadow.darkRed.pa-0(small style="height:1.2rem;width:1.2rem")
            v-divider.mb-2(style="opacity:.65")
</template>

<script>
export default {
  layout: 'nosidenav',
  data() {
    return {
      group: [],
    }
  },
}
</script>
