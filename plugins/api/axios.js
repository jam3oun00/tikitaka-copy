export default function ({ $axios, store, $auth }) {
  // if ($auth && process.browser) {
  //   let token
  //   try {
  //     token = $auth.strategies.cookie.token.get()
  //     token = token.split('Bearer').pop().trim()
  //   } catch (error) {
  //     token = -1
  //   }

  //   if ($store.state.auth.loggedIn) {
  //     if (document.cookie.indexOf('simple-jwt-login-token') == -1) {
  //       if (token && token !== -1) {
  //         document.cookie = `simple-jwt-login-token=${token}`
  //       } else {
  //         document.cookie = `simple-jwt-login-token=${-1}`
  //         $auth.logout()
  //       }
  //     }
  //   } else {
  //     document.cookie = `simple-jwt-login-token=${-1}`
  //   }
  // }
  //
  // // //
  //
  $axios.onRequest((config) => {
    // $axios.defaults.headers.common['Authorization'] = ''
    if (process.browser && config) {
      if (store.state.utiles.loading.active) {
        store.commit('utiles/loading/set', true)
      }
    }
  })

  $axios.onResponse((response) => {
    store.commit('utiles/loading/set', false)
    if (process.browser && response.data) {
      try {
        const msg = response.data.message
        if (msg) store.commit('utiles/alert/alertMe', { msg })
      } catch (error) {
        return false
      }
    }
  })

  $axios.onError((error) => {
    store.commit('utiles/loading/set', false)
    if (process.browser && error.response.data) {
      try {
        const msg = error.response.data.data.message
        if (msg) {
          store.commit('utiles/alert/alertMe', { msg })
          console.log("🌟", error.response.data.data)
          // msg ===""
        }
      } catch (error) {
        return false
      }
    }
  })
}
