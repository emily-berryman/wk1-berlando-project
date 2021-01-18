exports.up = function (knex) {
  return knex.schema.createTable('second-half', table => {
    table.increments('id')
    table.string('quote', 5000)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('second-half')
}
