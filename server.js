const express = require('express')
require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
  res.render('index', {name: 'BCSC'})
})


const PORT = process.env.PORT || 5000
const HOST = process.env.HOST

app.listen(PORT, () =>{
  console.log(`Server started on: http://${HOST}:${PORT}`)
})