const express = require('express')

const { getFirstHalf, getSecondHalf } = require('../db/quoteDBFuncs')

const router = express.Router()

// READ -- GET LIST OF BOOKS
router.get('/first', (req, res) => {
  getFirstHalf()
      .then(quoteData => {
          res.json(quoteData)
          console.log(quoteData)

          //res.json means stringify the response & put it in JSON format so we can then deal with it this way
      })
      .catch(err => {
          console.log('catch', err)
          res.status(500).json({ message: 'Something broke' })
      })
})

router.get('/second', (req, res) => {
  getSecondHalf()
      .then(quoteData => {
          res.json(quoteData)
          console.log(quoteData)
      })
      .catch(err => {
          console.log('catch', err)
          res.status(500).json({ message: 'Something broke' })
      })
})


module.exports = router
