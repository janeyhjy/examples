function registerComponent (component) {
  return function (resolve) {
    require(['./pages/' + component + '/' + component], resolve)
  }
}

module.exports = {
  '/': {
    name: 'hello',
    component: registerComponent('hello')
  },
}
