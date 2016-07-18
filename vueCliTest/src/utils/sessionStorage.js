module.exports = {
  setItem: function (key, value) {
    const valueJson = JSON.stringify(value)
    window.sessionStorage.setItem(key, valueJson)
  },
  getItem: function (key) {
    const valueJson = window.sessionStorage.getItem(key)
    const value = JSON.parse(valueJson)
    return value
  },
  removeItem: function (key) {
    window.sessionStorage.removeItem(key)
  },
  updateItem: function (key, value) {
    const valueJson = JSON.stringify(value)
    window.sessionStorage.removeItem(key)
    window.sessionStorage.setItem(key, valueJson)
  }
}
