const config = require('../config')
const client = require('./dbClient.js')

client.query('select * from items;', (err, res) => {
  if (err) throw err
  if (res.rowCount === 0) {
    let query = 'INSERT INTO items (date, title, count, distance)\nVALUES'
    for (let [i, item] of Object.entries(config.items)) {
      query += `\n\t('${item.date}', '${item.title}', ${item.count}, ${
        item.distance
      })${Number(i) === config.items.length - 1 ? ';' : ','}`
    }
    client.query(query, (err) => {
      if (err) throw err
      console.log('migration success')
    })
  } else {
    console.log('migration is not necessary')
  }
})
