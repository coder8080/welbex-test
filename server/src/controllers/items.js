const client = require('../helpers/dbClient.js')

module.exports.getItems = async (req, res) => {
  const { page, sorttype: sortType } = req.query
  try {
    const result = await client.query(
      `SELECT * FROM items ORDER BY ${sortType} ASC LIMIT 10 OFFSET ${
        (Number(page) - 1) * 10
      };`
    )
    res.status(200).json({ items: result.rows })
  } catch (error) {
    res.status(500).json({ error })
  }
}
