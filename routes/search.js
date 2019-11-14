const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

// 搜尋 Restaurant
router.get('/', (req, res) => {
  const keywordRegex = new RegExp(req.query.keyword, 'i')
  Restaurant.find(
    {
      $or: [
        { name: { $regex: keywordRegex, $options: "$i" } },
        { category: { $regex: keywordRegex } }
      ]
    },
    (err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', { restaurants, keyword: req.query.keyword })
    })
})

module.exports = router