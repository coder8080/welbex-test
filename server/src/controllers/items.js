const client = require('../helpers/dbClient.js')

module.exports.getItems = async (req, res) => {
  const { maxvalue: maxValue, maxid: maxId, sorttype: sortType } = req.query
  if (!['title', 'count', 'distance'].includes(sortType)) {
    res.status(401).json({ error: 'Не указан порядок сортировки' })
    return
  }
  let query
  if (!maxValue || !maxId) {
    query = `SELECT * FROM items ORDER BY ${sortType} ASC, id ASC LIMIT 10;`
  } else if (maxValue && maxId) {
    query = `SELECT * FROM items WHERE (${sortType}, id) > ('${maxValue}', ${maxId}) ORDER BY ${sortType} ASC, id ASC LIMIT 10;`
  } else {
    res.status(401).json({ error: 'Некорректные данные о последнем пункте' })
    return
  }
  try {
    const result = await client.query(query)
    res.status(200).json({ items: result.rows })
  } catch (error) {
    res.status(500).json({ error })
  }
}
