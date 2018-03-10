const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var calculate = require('./calculate.js');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/calculate', calculate.calculate)
  /*.get('/getRate', (req, res) => res.render('pages/index'))*/
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
