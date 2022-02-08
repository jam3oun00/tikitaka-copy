export const actions = {
  images(_, file) {
    return new Promise((resolve, reject) => {
      let data = new FormData()
      Array.isArray(file)
        ? file.map((f) => (f ? data.append('files', f[0]) : null))
        : data.append('files', file)
      console.warn(file, data)
      this.$axios
        .get('/wp/wp/v2/media', data, {
          headers: {
            'content-disposition': 'attachment; filename="rect1397.png"',
            'content-type': 'image/png',
          },
        })
        .then(({ data }) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
