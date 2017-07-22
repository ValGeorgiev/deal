let translate = function(text) {
  let locale = process.env.LOCALE

  if (!locale) {
    locale = 'bg_BG'
  }

  return require(`./${locale}`)[text]
}

module.exports = translate
