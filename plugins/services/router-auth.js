import Cookies from 'js-cookie'
import { isEmpty } from 'lodash'
export default ({ store }) => {
  if (process.browser) {
    const token = Cookies.get('simple-jwt-login-token')
    if (!token) {
      store.commit('auth/setUser', {})
      store.commit('auth/triggerAuth', false)
    }
    if (isEmpty(store.state.auth.user)) {
      store.commit('auth/setUser', {})
      store.commit('auth/triggerAuth', false)
      token ? store.dispatch('auth/getUser') : null
    }
    console.log(
      '👍',
      Cookies.get('simple-jwt-login-token'),
      store.state.auth.user,
      isEmpty(store.state.auth.user)
    )
  }
}
