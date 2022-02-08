export const state = () => {}

export const mutations = {}

export const actions = {
  login(context, data) {
    return new Promise((resolve, reject) => {
      this.$auth
        .loginWith('cookie', {
          data: data,
        })
        .then(({ data }) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('jwt/users/', data)
        .then(({ data }) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
