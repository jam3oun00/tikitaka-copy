<template lang="pug">
  v-container(fluid v-if="!large")
    .d-flex.flex-wrap
      v-card.mr-2(flat tile v-for="(img, i, k) in images" :key="k" :style="`width:${size}px`")
        .img-content
          v-img(:src="img" :lazy-src="img" :aspect-ratio="as" :height="as?null:size" :width="size" gradient="15deg, rgba(255,255,255,0) 32%, rgba(0,0,0,0.56) 110%")
            template(#placeholder)
              v-row.fill-height.ma-0(align="center" justify="center")
                v-progress-circular(width="2" indeterminate color="grey lighten-5")
          v-btn.uncolored.mt-n2.mr-n2(v-if="deleteImageIcon" dark x-small absolute top right icon @click="$emit('delete-img', i)")
            v-icon mdi-close
  v-container(v-else)
    v-row
      v-col(v-for="(img, i, k) in images" :key="k" :cols="sizes.cols" :md="sizes.md")
        v-card(tile flat)
          v-img(:src="img" :lazy-src="img" :aspect-ratio="2/3" gradient="15deg, rgba(255,255,255,0) 63%, rgba(0,0,0,0.56) 108%")
          v-btn.uncolored.mt-n2.mr-n2(v-if="deleteImageIcon" dark x-small absolute top right icon @click="$emit('delete-img', i)")
              v-icon mdi-close

</template>

<script>
export default {
  props: {
    large: Boolean,
    sizes: {
      type: Object,
      default: () => {
        return {
          cols: '12',
          md: '4',
        }
      },
    },
    images: {
      type: Array,
      required: true,
    },
    deleteImageIcon: {
      type: Boolean,
      default: false,
    },
    as: {
      type: [Number, String],
      default: 4 / 5,
    },
    grid: {
      type: [Number, String],
      default: 3,
    },
    size: {
      type: [Number, String],
      default: 90,
    },
  },
}
</script>

<style lang="scss">
.img-content {
  position: relative;
  .close-btn {
    position: absolute;
    z-index: 999;
    top: -10px;
    left: -10px;
  }
}
</style>
