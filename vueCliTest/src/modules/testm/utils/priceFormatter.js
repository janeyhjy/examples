import Vue from 'vue'

Vue.filter('priceFormatter', function (value) {
  if (value === Math.floor(value)) {
    return value
  }
  return value.toFixed(2)
})
