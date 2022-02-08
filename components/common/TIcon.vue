<template lang="pug">
  img.icon-img(:src="require(`~/assets/img/icons/${name||icon+'-mark-icon'}.${svg||icon?'svg':'png'}`)" :height="regular?23:size")
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    svg: Boolean,
    regular: Boolean,
    size: [String, Number],
  },
}
</script>

<style lang="scss" scoped></style>
