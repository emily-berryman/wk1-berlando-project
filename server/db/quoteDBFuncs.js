const connection = require('./connection')

function getFirstHalf (db = connection) {
  return db('first-half').select()
}

function getSecondHalf (db = connection) {
  return db('second-half').select()
}

module.exports = {
  getFirstHalf,
  getSecondHalf
}
