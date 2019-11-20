const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const sortConditions = require('../public/javascripts/sortConditions')

// 排序 Restaurant
router.get('/:sortCondition/:sortName/:sortOrder/:sortOrderName', (req, res) => {
  if (req.params.sortOrder === '1') {
    if (req.params.sortCondition === 'name') {
      Restaurant.find({})
        .sort({ name: 1 })
        .exec((err, restaurants) => {
          if (err) return console.error(err)
          return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
        })
    }

    else if (req.params.sortCondition === 'category') {
      Restaurant.find({})
        .sort({ category: 1 })
        .exec((err, restaurants) => {
          if (err) return console.error(err)
          return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
        })
    }

    else if (req.params.sortCondition === 'location') {
      Restaurant.find({})
        .sort({ location: 1 })
        .exec((err, restaurants) => {
          if (err) return console.error(err)
          return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
        })
    }

    else if (req.params.sortCondition === 'rating') {
      Restaurant.find({})
        .sort({ rating: 1 })
        .exec((err, restaurants) => {
          if (err) return console.error(err)
          return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
        })
    }
  }

  else if (req.params.sortOrder === '-1') {
    if (req.params.sortCondition === 'name') {
      Restaurant.find({})
        .sort({ name: -1 })
        .exec((err, restaurants) => {
          if (err) return console.error(err)
          return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
        })
    }

    else if (req.params.sortCondition === 'category') {
      Restaurant.find({})
        .sort({ category: -1 })
        .exec((err, restaurants) => {
          if (err) return console.error(err)
          return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
        })
    }

    else if (req.params.sortCondition === 'location') {
      Restaurant.find({})
        .sort({ location: -1 })
        .exec((err, restaurants) => {
          if (err) return console.error(err)
          return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
        })
    }

    else if (req.params.sortCondition === 'rating') {
      Restaurant.find({})
        .sort({ rating: -1 })
        .exec((err, restaurants) => {
          if (err) return console.error(err)
          return res.render('index', { restaurants, sortConditions, sortCondition: req.params.sortCondition, sortName: req.params.sortName, sortOrder: req.params.sortOrder, sortOrderName: req.params.sortOrderName })
        })
    }
  }


})


module.exports = router