// Создание подключения к базе

const { Client } = require('pg')
const config = require('../config')
const postgresConfig = {
  user: config.POSTGRES_USER,
  host: config.POSTGRES_HOST,
  database: config.POSTGRES_DATABASE,
  password: config.POSTGRES_PASSWORD,
  port: config.POSTGRES_PORT,
}
const client = new Client(postgresConfig)
client.connect()

module.exports = client
