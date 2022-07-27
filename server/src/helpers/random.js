module.exports.randomString = function (length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length
  for (var i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  return result
}

module.exports.randomNumber = function (max) {
  return Math.floor(Math.random() * max) + 1
}
