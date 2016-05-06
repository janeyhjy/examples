function registerComponent (component) {
  return function (resolve) {
    require(['../pages/' + component], resolve)
  }
}

module.exports = {
  '/page1': {
    component: registerComponent('page1')
      
  },
  '/page2': {
    component: registerComponent('page2')
  },
  '/page3': {
    component: registerComponent('page3'),
    subRoutes: {
      '/': {
        component: {
          template: '<p>empty sub routes</p>'
        }
        
      },
      '/page1': {
        component: registerComponent('page1')
      }
    }
  },
  '/user/:username': {
    component: {
      template: '<p>用户名是: {{$route.params.username}}</p>'
    }
  }
}
