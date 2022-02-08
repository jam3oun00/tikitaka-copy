import Cookies from 'js-cookie'
import { some } from 'lodash'
export const state = () => ({
  data: [],
  catrgory: [],
  selectedProducts: [],
  singleProduct: {},
  recentFirst: [],
  recentSecond: [],
  searchProducts: [],
})

export const mutations = {
  selectProduct(state, { data }) {
    if (!some({ ...state.selectedProducts }, { ...data })) {
      state.selectedProducts.push(data)
    } else {
      state.selectedProducts = state.selectedProducts.filter(
        (e) => e.id !== data.id
      )
    }
  },
  setProducts(state, payload) {
    state.data = payload
  },
  setCatrgory(state, category) {
    state.catrgory = category
  },
  setSingleProduct(state, product) {
    state.singleProduct = product
  },
  setRecentProducts(state, { c, p }) {
    if (c === '43') state.recentFirst = p
    if (c === '46') state.recentSecond = p
  },
  setSearchProducts(state, product) {
    state.searchProducts = product
  },
}

export const actions = {
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      const tc = Cookies.get('simple-jwt-login-token')
      Cookies.remove('simple-jwt-login-token')

      this.$axios
        .get('wp/wc/store/products')
        .then(({ data }) => {
          commit('setProducts', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => Cookies.set('simple-jwt-login-token', tc))
    })
  },
  fetchCategory({ commit }, category) {
    return new Promise((resolve, reject) => {
      const tc = Cookies.get('simple-jwt-login-token')
      Cookies.remove('simple-jwt-login-token')

      this.$axios
        .get(`wp/wc/store/products?category=${category}`)
        .then(({ data }) => {
          commit('setCatrgory', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => Cookies.set('simple-jwt-login-token', tc))
    })
  },
  fetchSingleProduct({ commit }, id) {
    return new Promise((resolve, reject) => {
      const tc = Cookies.get('simple-jwt-login-token')
      Cookies.remove('simple-jwt-login-token')

      this.$axios
        .get(`wp/wc/store/products/${id}`)
        .then(({ data }) => {
          commit('setSingleProduct', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => Cookies.set('simple-jwt-login-token', tc))
    })
  },
  getRecentProducts({ commit }, { categoryId, limit }) {
    return new Promise((resolve, reject) => {
      const tc = Cookies.get('simple-jwt-login-token')
      Cookies.remove('simple-jwt-login-token')

      this.$axios
        .get(
          `wp/wc/store/products?per_page=${limit || 2}&category=${categoryId}`
        )
        .then(({ data }) => {
          commit('setRecentProducts', { c: categoryId, p: data })
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => Cookies.set('simple-jwt-login-token', tc))
    })
  },
  searchProducts({ commit }, key) {
    return new Promise((resolve, reject) => {
      const tc = Cookies.get('simple-jwt-login-token')
      Cookies.remove('simple-jwt-login-token')

      this.$axios
        .get(`wp/wc/store/products?search=${key}`)
        .then(({ data }) => {
          commit('setSearchProducts', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => Cookies.set('simple-jwt-login-token', tc))
    })
  },
  addProduct({ commit, dispatch }, { data, imgs }) {
    return new Promise((resolve, reject) => {
      dispatch('utiles/uploadMedia/images', imgs, { root: true }).then((d) => {
        let images = []
        d.map((v) => (v ? images.push({ src: v.source_url }) : ''))
        console.warn('⚡', {
          name: data.titre,
          type: data.type,
          description: data.desc,
          regular_price: data.price,
          images,
        })
        this.$axios
          .post('wp/wc/v3/products', {
            name: data.titre,
            type: data.type,
            description: data.desc,
            regular_price: data.price,
            images,
          })
          .then(({ data }) => {
            commit('setSearchProducts', data)
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    })
  },
}
