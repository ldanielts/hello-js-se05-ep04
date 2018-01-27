const knex = require("knex")({
    client: 'sqlite3',
    connection: {
      filename: "./db/db.db"
    }
  })

  module.exports = {knex};