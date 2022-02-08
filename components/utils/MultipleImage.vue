<template lang="pug">
  section#mulipleImages
    v-file-input(:multiple="!noMultiple" accept="image/jpeg, image/jpg, image/png" v-model="photos" ref="file_input" v-show="false")
    //- Images preview
    images-view(:large="large" :as="as" :images="images" :sizes="sizes" delete-image-icon @delete-img="(idx) => deleteImage(idx)")
</template>

<script>
export default {
  props: {
    sizes: {
      type: Object,
      default: () => {
        return {
          cols: '12',
          md: '4',
        }
      },
    },
    as: [Number, String],
    value: {
      type: Array,
    },
    large: Boolean,
    noMultiple: Boolean,
  },
  computed: {
    images() {
      try {
        return this.photos.map((f) => this.previewImage(f))
      } catch (error) {
        return []
      }
    },
    photos: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', [...v])
      },
    },
  },
  methods: {
    select() {
      this.$refs.file_input.$refs.input.click()
    },
    deleteImage(idx) {
      const files = this.photos.filter((_, i) => i !== idx)
      this.$emit('input', files)
    },
    previewImage(img) {
      return URL.createObjectURL(img)
    },
  },
}
</script>

<style lang="scss" scoped></style>
