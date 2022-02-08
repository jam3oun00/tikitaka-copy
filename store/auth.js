import Cookies from 'js-cookie'

export const state = () => ({
  user: {},
  loggedIn: false,
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload ? { ...payload } : {}
  },
  triggerAuth(state, payload) {
    state.loggedIn = payload ? true : false
  },
}

export const actions = {
  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      if (!Cookies.get('simple-jwt-login-token')) {
        this.$axios
          .get('/wp/wp/v2/users/me')
          .then(({ data }) => {
            commit('setUser', data)
            commit('triggerAuth', true)
            resolve(data)
          })
          .catch((err) => {
            commit('setUser', {})
            commit('triggerAuth', false)
            reject(err)
          })
      } else {
        console.log('💎')
      }
    })
  },
  login({ dispatch }, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/wp/jwt/auth', data)
        .then(({ data }) => {
          Cookies.set('simple-jwt-login-token', data.data.jwt)
          dispatch('getUser')
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  register({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/wp/jwt/users/', payload)
        .then(({ data }) => {
          dispatch('login', {
            email: payload.email,
            password: payload.password,
            AUTH_KEY: 'tikitaka-vendor',
          }).then(() => resolve(data))
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
