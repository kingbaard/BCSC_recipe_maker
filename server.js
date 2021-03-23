const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser'),
connectDB = require('./config/db')

const app = express()

// sets view engine to ejs
app.set('view engine', 'ejs')

// Serves static assets from public folder
app.use(express.static(__dirname + 'public'));

// Allows app to parse json data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })) 

//Register routes
app.use('/recipes', require('./routes/recipe'))

// index route for possible future login
app.get('/', (req,res) =>{
  res.send('index')
})

// Server listens on port 5000
const PORT = process.env.PORT || 5000

connectDB().then(() =>{
  app.listen(PORT, () =>{
    console.log(`Server started on: http://localhost:${PORT}`.bold.green)
  })
})
