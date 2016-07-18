const init = (vue, jsApiList, readyCallback) => {
  const wx = window.wx
  let WeixinJSBridge = null
  if (window.WeixinJSBridge) {
    WeixinJSBridge = window.WeixinJSBridge
  }
  if (!WeixinJSBridge) {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', function () {
        if (window.WeixinJSBridge) {
          WeixinJSBridge = window.WeixinJSBridge
        }
      }, false)
    }
  }

  if (wx && vue) fetchWechatConfig(wx, vue, jsApiList, readyCallback)
}

const fetchWechatConfig = (wx, vue, jsApiList, readyCallback) => {
  const resource = vue.$resource('mobile/wechat-sign-package')
  resource.get().then((resp) => {
    const options = resp.data
    jsApiList = jsApiList || [
      'hideOptionMenu',
      'showMenuItems'
    ]
    wx.config({
      appId: options.appId,
      timestamp: options.timestamp,
      nonceStr: options.nonceStr,
      signature: options.signature,
      jsApiList: jsApiList
    })

    wx.ready(() => {
      if (readyCallback && typeof (readyCallback) === 'function') {
        // readyCallback(wx)
      } else {
        // wx.hideOptionMenu()
      }
    })
  })
}

module.exports = {
  init: init
}
