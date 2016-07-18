// fmt: such as 'yyyy-MM-dd hh:mm'
const dataFormat = (date, fmt) => {
  if (!(date instanceof Date)) {
    if (date.indexOf('-') >= 0) {
      date = date.split('-').join('/')
    }
    date = new Date(date)
  }
  const o = {
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
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

const urlFormat = (name, params, isPaid) => {
  const domain = window.location.protocol + '//' + window.location.host
  const hash = window.location.hash.substr(1).split('&')
  let paramsFormat = ''
  let locationUrl = ''
  let channelId = ''

  for (const key in params) {
    if (key === 'channelId') {
      channelId = params[key]
    } else {
      if (params[key]) {
        paramsFormat += key + '=' + params[key] + '&'
      }
    }
  }
  paramsFormat = paramsFormat.substring(0, paramsFormat.length - 1)

  if (isPaid) {
    const redirectUrl = encodeURIComponent(`${domain}/webapp/common/pay/micromall?${paramsFormat}`)
    locationUrl = `${domain}/api/mobile/pay?channelId=${channelId}&redirect=${redirectUrl}`
  } else {
    paramsFormat += '&channelId=' + channelId
    locationUrl = `${domain}/h5/micromall/index.html#!/${name}?${paramsFormat}`
  }
  return locationUrl
}
module.exports = {
  dateFormat: dataFormat,
  urlFormat: urlFormat
}
