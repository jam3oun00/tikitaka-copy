export const state = () => ({
  loader: false,
  active: true,
})

export const mutations = {
  set(state, payload) {
    state.loader = payload
  },
  activation(state, payload) {
    state.active = payload
  },
}
