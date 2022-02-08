export const state = () => ({
  tabChange: 0,
  navigationdrawer: false
})

export const mutations = {
  closeAllTabs(state) {
    state.tabChange++
  },
  setNavigationdrawer(state, payload) {
    state.navigationdrawer = payload
  }
}
