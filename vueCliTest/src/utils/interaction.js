// 滚动条在Y轴上的滚动距离
const getScrollTop = () => {
  let scrollTop = 0
  let bodyScrollTop = 0
  let documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
  return scrollTop
}

// 文档的总高度
const getScrollHeight = () => {
  let scrollHeight = 0
  let bodyScrollHeight = 0
  let documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
  return scrollHeight
}

// 浏览器视口的高度
const getWindowHeight = () => {
  let windowHeight = 0
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

const debounce = (func, wait, immediate) => {
  let args, context, later, result, timeout, timestamp
  timeout = args = context = timestamp = result = undefined
  later = () => {
    let last = new Date().getTime() - timestamp
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) {
          context = args = null
        }
      }
    }
  }
  return function () {
    context = this
    args = arguments
    timestamp = new Date().getTime()
    const callNow = immediate && !timeout
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}

const loadMore = (callback, wait = 100) => {
  window.onscroll = debounce(() => {
    if (getScrollHeight() - getScrollTop() - getWindowHeight() <= 2) {
      callback()
    }
  }, wait)
}

const checkTel = (tel) => {
  const telRegs = ['^0?1[0-9]{10}$', '^09[0-9]{8}$', '^\\d{8}$', '^853[0-9]{8}$']
  if (tel) {
    for (const reg of telRegs) {
      if (new RegExp(reg).test(tel)) {
        return true
      }
    }
  }
  return false
}

const setDocumentTitle = (title) => {
  document.title = title
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.setAttribute('src', '/favicon.png')
  iframe.addEventListener('load', () => {
    window.setTimeout(() => {
      iframe.removeEventListener('load')
      document.body.removeChild(iframe)
    }, 0)
  })
  document.body.appendChild(iframe)
}

// Usage dateFormat(new Date(), 'yyyy年MM月dd日'), it's will be return a string like '2016年05月17日'.
const dateFormat = (date, fmt) => {
  const properties = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let key in properties) {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? properties[key] : ('00' + properties[key]).substr(('' + properties[key]).length))
    }
  }
  return fmt
}

const isEmail = (email) => {
  const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/
  return reg.test(email)
}

// param of style is a string. for example, it should be like 'color: red; top: 10rem;'
const showToast = (message, time, style) => {
  const DEFAULT_TIME = 2000
  const $body = document.getElementsByTagName('body')[0]
  const $toastDom = document.getElementsByClassName('toast')

  if ($toastDom.length > 0) {
    $toastDom[0].getElementsByClassName('text-wrapper')[0].textContent = message
  } else {
    // format toast html
    const $toast = document.createElement('div')
    const $text = document.createElement('div')
    $toast.setAttribute('class', 'toast')
    $text.setAttribute('class', 'text-wrapper')
    $text.textContent = message
    $toast.appendChild($text)
    if (style) $toast.style.cssText = style
    $body.appendChild($toast)

    setTimeout(() => {
      $body.removeChild($toastDom[0])
    }, time || DEFAULT_TIME)
  }
}

// param of date is a sting like '2016-06-01 15:07:10', it's will be return a string like '2016.06.01 15:07'
const stringDateformat = (date, showHour) => {
  const dateSplit = date.replace(/-/g, '.').split(' ')
  if (showHour) {
    return `${dateSplit[0]} ${dateSplit[1].substring(0, 5)}`
  } else {
    return dateSplit[0]
  }
}

const formatCouponValidateTime = (coupon, msg) => {
  // coupon type of immediate need to display hours time
  const isImmediate = coupon.timeType === 'immediate'
  const startDate = stringDateformat(coupon.startTime, false)
  const endDate = stringDateformat(coupon.endTime, isImmediate)
  return isImmediate ? `${msg} ${endDate}` : `${msg} ${startDate} - ${endDate}`
}

module.exports = {
  debounce: debounce,
  loadMore: loadMore,
  checkTel: checkTel,
  setDocumentTitle: setDocumentTitle,
  dateFormat: dateFormat,
  isEmail: isEmail,
  showToast: showToast,
  stringDateformat: stringDateformat,
  formatCouponValidateTime: formatCouponValidateTime
}
