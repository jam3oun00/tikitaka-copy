<template lang="pug">
  main-layout
    template(#navbar): base-nav(:bar-img="$route.params.product?true:false" is-seller)
    nuxt
</template>

<script>
export default {}
</script>

<style lang="sass" scoped></style>
