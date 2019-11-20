const sortConditions = {
  sortInfos: [
    { name: '名稱', condition: 'name' },
    { name: '類別', condition: 'category' },
    { name: '地區', condition: 'location' },
    { name: '評分', condition: 'rating' }
  ],
  sortOrders: [
    { orderName: '遞增', order: 1 },
    { orderName: '遞減', order: -1 }
  ]
}

module.exports = sortConditions