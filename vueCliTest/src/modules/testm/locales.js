var pages = [
  "hello",
]

var locates = {
  'en_us': {},
  'zh_cn': {}
}

// pages.forEach(function (page) {
//   Object.keys(locates).map(function (locate) {
//     locates[locate][page] = require('./pages/' + page + '/i18n/locate-' + locate)
//   })
// })

module.exports = locates
