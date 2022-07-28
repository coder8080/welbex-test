const client = require('../helpers/dbClient.js')

const optionToOperator = (option) => {
  switch (option) {
    case 'equals':
      return '='
    case 'contains':
      return 'LIKE'
    case 'greater':
      return '>'
    case 'less':
      return '<'
  }
}

module.exports.getItems = async (req, res) => {
  const {
    page,
    sorttype: sortType,
    filterfield: filterField,
    filteroption: filterOption,
    filtervalue: filterValue,
  } = req.query
  let baseQuery = `${
    filterValue
      ? `WHERE ${filterField} ${optionToOperator(filterOption)} ${
          filterOption === 'contains'
            ? `'%${filterValue}%'`
            : typeof filterValue === 'number'
            ? `${filterValue}`
            : `'${filterValue}'`
        }`
      : ''
  }`
  let query = `SELECT * FROM items ${baseQuery} ORDER BY ${sortType} ASC LIMIT 10 OFFSET ${
    (Number(page) - 1) * 10
  };`
  let countQuery = `SELECT COUNT(*) FROM items ${baseQuery}`
  try {
    const items = await client.query(query)
    const count = await client.query(countQuery)
    res.status(200).json({
      items: items.rows,
      totalPages: Math.ceil(count.rows[0].count / 10),
    })
  } catch (error) {
    res.status(500).json({ error })
  }
}
