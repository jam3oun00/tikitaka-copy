export default ({ app, store }, inject) => {
  inject('notify', (msg) => {
    store.commit('utiles/alert/alertMe', { msg })
  })
}
