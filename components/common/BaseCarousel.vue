<template lang="pug">
client-only
  div(:id="id")
    .draggable-carousel(:style="hideContainer ? `margin: auto -${gap/2}px` : ``" :class="{'px-0' : hideContainer}")
      .carousel
        .carousel--wrap.mx-auto
          .carousel--item(v-for="(n,i,k) in content" :key="k" :style="`width:${width}px;height:${height}px;padding:${gap/2}px`" @click="go(n.to)" v-if="homepage")
            figure(:class="{ radius }")
              img.carousel--item--img(:src="getAssetImg(i+1)")
            .title(v-if="!noTitle")
              .display-1.text-uppercase.font-weight-medium
              v-img.mx-auto.my-5(contain :src="getAssetImg(`icon_${i+1}`)" width="95")
              .font-weight-bold.text-uppercase(style="font-size:1.65rem") {{n.title}}
              p(style="white-space:pre-line") {{n.text}}
          .carousel--item(v-else :style="`width:${width}px;height:${height}px;padding:${gap/2}px`")
            figure(:class="{ radius }")
              img.carousel--item--img(src="https://source.unsplash.com/random/200x200?sig=1")
              v-btn.uncolored(rounded absolute bottom left color="primary" dark v-if="!imgOnly") Type
                v-icon(size="28").rounded-circle.primary--text.white.mr-n3.ml-3 mdi-chevron-right
        //- .carousel--progress
          .carousel--progress-bar
</template>

<script>
export default {
  props: {
    imgOnly: Boolean,
    radius: Boolean,
    isSeller: Boolean,
    noTitle: Boolean,
    items: Array,
    homepage: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: 370,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
    gap: {
      type: [Number, String],
      default: 60,
    },
    hideContainer: Boolean,
  },
  data() {
    return {
      id: '',
      dragging: false,
    }
  },
  computed: {
    content() {
      const dummy = [
        {
          title: 'hall of fame',
          text: this.isSeller
            ? 'Je souhaite vendre mon maillot 100 € et plus'
            : 'Maillot de 100€ et plus',
          to: this.isSeller ? '/offer-upload' : '/catygories/hall-of-fame',
        },
        {
          title: 'retro soccer shirt',
          text: this.isSeller
            ? 'Je souhaite vendre mon maillot moins de 100 €'
            : 'Maillot  jusqu’à 99 €',
          to: this.isSeller
            ? '/offer-upload'
            : '/catygories/retro-soccer-shirt',
        },
        {
          title: 'match issue',
          text: this.isSeller
            ? 'Vendre un maillot  préparé pour être porter en match'
            : 'Maillot préparé pour être porter en match',
          to: this.isSeller ? '/offer-upload' : '/catygories/match-issue',
        },
        {
          title: 'match worn',
          text: this.isSeller
            ? 'Vendre un maillot porté en match'
            : 'Maillot porté en match',
          to: this.isSeller ? '/offer-upload' : '/catygories/match-worn',
        },
      ]
      return this.items || dummy
    },
  },
  methods: {
    getAssetImg(name) {
      try {
        return require(`~/static/utils/model_${name}.png`)
      } catch (error) {
        return null
      }
    },
    go(link) {
      if (link) {
        console.warn(link)
        document.querySelector('.carousel').classList.contains('dragging')
          ? null
          : this.$router.push(link)
      }
    },
  },
  mounted() {
    this.id = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10)
    this.$nextTick(() => {
      const id = this.id
      const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1
      const clamp = (val, min, max) => Math.max(min, Math.min(val, max))

      class DragScroll {
        constructor(obj) {
          this.$el = document.querySelector(`#${id} ${obj.el}`)
          this.$wrap = this.$el.querySelector(`#${id} ${obj.wrap}`)
          this.$items = this.$el.querySelectorAll(`#${id} ${obj.item}`)
          this.$bar = this.$el.querySelector(`#${id} ${obj.bar}`)
          this.init()
        }

        init() {
          this.progress = 0
          this.speed = 0
          this.oldX = 0
          this.x = 0
          this.playrate = 0
          //
          this.bindings()
          this.events()
          this.calculate()
          this.raf()
        }

        bindings() {
          ;[
            'events',
            'calculate',
            'raf',
            'handleWheel',
            'move',
            'raf',
            'handleTouchStart',
            'handleTouchMove',
            'handleTouchEnd',
          ].forEach((i) => {
            this[i] = this[i].bind(this)
          })
        }

        calculate() {
          this.progress = 0
          this.wrapWidth = this.$items[0].clientWidth * this.$items.length
          this.$wrap.style.width = `${this.wrapWidth}px`
          this.maxScroll = this.wrapWidth - this.$el.clientWidth
        }

        handleWheel(e) {
          this.progress += e.deltaY
          this.move()
        }

        handleTouchStart(e) {
          e.preventDefault()
          this.dragging = true
          this.startX = e.clientX || e.touches[0].clientX
        }

        handleTouchMove(e) {
          if (!this.dragging) {
            return false
          }
          this.$el.classList.add('dragging')
          let x = 0
          try {
            x = e.clientX || e.touches[0].clientX
          } catch (error) {
            x = 0
          }
          this.progress += (this.startX - x) * 2.5
          this.startX = x
          this.move()
        }

        handleTouchEnd() {
          this.dragging = false
          setTimeout(() => this.$el.classList.remove('dragging'), 400)
        }

        move() {
          this.progress = clamp(this.progress, 0, this.maxScroll)
        }

        events() {
          const resize = () =>
            (this.maxScroll = this.wrapWidth - this.$el.clientWidth)
          document.addEventListener('DOMContentLoaded', resize)
          window.addEventListener('resize', resize)
          // #
          this.$el.addEventListener('touchstart', this.handleTouchStart)
          this.$el.addEventListener('touchmove', this.handleTouchMove)
          this.$el.addEventListener('touchend', this.handleTouchEnd)
          //
          this.$el.addEventListener('mousedown', this.handleTouchStart)
          this.$el.addEventListener('mousemove', this.handleTouchMove)
          this.$el.addEventListener('mouseup', this.handleTouchEnd)
          this.$el.addEventListener('mouseleave', this.handleTouchEnd)
        }

        raf() {
          // #
          this.x = lerp(this.x, this.progress, 0.1)
          this.playrate = this.x / this.maxScroll
          //
          try {
            this.$wrap.style.transform = `translateX(${-this.x}px)`
            this.$bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`
          } catch (error) {}
          //
          this.speed = Math.min(100, this.oldX - this.x)
          this.oldX = this.x
          //
          this.scale = lerp(this.scale, this.speed, 0.1)
          this.$items.forEach((i) => {
            i.style.transform = `scale(${1 - Math.abs(this.speed) * 0.002})`
            i.querySelector(
              `#${id} .carousel--item--img`
            ).style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`
          })
        }
      }

      //
      // Instances //
      //
      const scroll = new DragScroll({
        el: '.carousel',
        wrap: '.carousel--wrap',
        item: '.carousel--item',
        bar: '.carousel--progress-bar',
      })

      //
      // One raf to rule em all //
      //
      const raf = () => {
        requestAnimationFrame(raf)
        scroll.raf()
      }
      raf()
    })
  },
}
</script>

<style lang="sass" scoped>
.radius
  overflow: hidden
  border-radius: 20px

.draggable-carousel
  position: relative
  padding: 20px
  overflow: hidden
  max-width: 100vw
  .carousel
    width: 100%
    cursor: grab

    @media only screen and (min-width: 1904px)
      transform: scale(1.241)
      margin: 60px auto


    &.dragging
      cursor: grabbing

    &--wrap
      white-space: nowrap

    &--item
      display: inline-block
      width: 370px
      user-select: none
      background-size: cover
      background-position: center center
      height: 500px

      figure
        position: relative
        z-index: 1
        display: block
        height: 100%
        padding-bottom: 56.25%
        overflow: hidden
        &::after
          position: absolute
          content: ""
          height: 100%
          width: 100%
          top: 0
          right: 0
          bottom: 0
          left: 0
          z-index: 2
          background-color: rgba(white, .4)
        .v-btn
          z-index: 3
        .carousel--item--img
          position: absolute
          z-index: 1
          height: 100% !important
          width: 100%
          object-fit: cover
          vertical-align: middle
          transform-origin: center

      .title
        transform: translateY(30%)
        position: absolute
        z-index: 1
        text-align: center
        width: calc(100% - 61px)
        bottom: 41%
        color: var(--v-primary-base)

    &--progress
      position: absolute
      z-index: 2
      pointer-events: none
      bottom: 15px
      width: 20vw
      left: 50px
      height: 2px
      background: rgba(black, 0.2)

      &-bar
        position: absolute
        z-index: 1
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(black, 0.8)
        transform: scaleX(0)
        transform-origin: 0% 0%
</style>
