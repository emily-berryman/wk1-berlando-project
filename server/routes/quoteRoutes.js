const express = require('express')

const db = require('../db/quoteDBFuncs')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFirstHalf()
    .then(results => {
      res.json({ fruits: results.map(quote => quote.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/', (req, res) => {
  db.getSecondHalf()
    .then(results => {
      res.json({ fruits: results.map(quote => quote.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
