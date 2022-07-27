const { randomString, randomNumber } = require('../helpers/random.js')

function getMonth() {
  const r = randomNumber(12).toString()
  return r.length > 1 ? r : '0' + r
}

function getDay() {
  const r = randomNumber(28).toString()
  return r.length > 1 ? r : '0' + r
}

const items = []
for (let i = 0; i < 10; i++) {
  items.push({
    date: `${randomNumber(9999)}-${getMonth()}-${getDay()}`,
    title: randomString(10),
    count: randomNumber(10),
    distance: randomNumber(100),
  })
}

module.exports.POSTGRES_USER = process.env.POSTGRES_USER
module.exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
module.exports.POSTGRES_HOST = process.env.POSTGRES_HOST
module.exports.POSTGRES_DATABASE = process.env.POSTGRES_DATABASE
module.exports.POSTGRES_PORT = process.env.POSTGRES_PORT
module.exports.items = items
