const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const sortConditions = require('../public/javascripts/sortConditions')

// Restaurant 首頁
router.get('/', (req, res) => {
  Restaurant.find((err, restaurants) => {
    if (err) return console.error(err)
    return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
  })
})

module.exports = router