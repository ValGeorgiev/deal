let translate = function(text) {
  let locale = ''
  let href = window.location.href

  if (!!href && href.includes('lang=')) {
    let langIndex = href.lastIndexOf('lang=')
    locale = href.slice(langIndex + 5, langIndex + 7)
  }

  if (!locale) {
    locale = 'bg'
  }

  return require(`./${locale}`)[text]
}

window.__t__ = translate
module.exports = translate
