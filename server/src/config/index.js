const { randomString, randomNumber } = require('../helpers/random.js')

const items = []
for (let i = 0; i < 100; i++) {
  items.push({
    date: `${randomNumber(9999).toString().padStart(4, '0')}-${randomNumber(12)
      .toString()
      .padStart(2, '0')}-${randomNumber(28).toString().padStart(2, '0')}`,
    title: randomString(10),
    count: randomNumber(10),
    distance: randomNumber(100),
  })
}

module.exports.PORT = process.env.PORT
module.exports.POSTGRES_USER = process.env.POSTGRES_USER
module.exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
module.exports.POSTGRES_HOST = process.env.POSTGRES_HOST
module.exports.POSTGRES_DATABASE = process.env.POSTGRES_DATABASE
module.exports.POSTGRES_PORT = process.env.POSTGRES_PORT
module.exports.items = items
