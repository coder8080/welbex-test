const express = require('express')
const { PORT } = require('./config')
const itemsRoute = require('./routes/items')
require('./helpers/dbMigrator')

const port = PORT || 3000
const app = express()

app.use(express.json())
app.use('/api/items', itemsRoute)

app.listen(port, () => console.log('server started successfully'))
