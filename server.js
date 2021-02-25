const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser'),
  controller = require('./controller');

const app = express()
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Admin:admin@cluster0.jcv2w.mongodb.net/bcsc?retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }  // These are settings for the Mongoose connection.
);
// sets view engine to ejs
app.set('view engine', 'ejs')

// Serves static assets from public folder
app.use(express.static(__dirname + 'public'));

// Allows app to parse json data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })) 

// Basic index route
// app.get('/', (req, res) =>{
//   res.render('index', {name: 'BCSC'})
// })

app.get('/', controller.showRecipes)
app.get('/g')
// app.post('/calculate', controller.showResult)
// app.get('/calculate', controller.reportResults)   

// Server listens on port 5000
const PORT = process.env.PORT || 5000
const HOST = process.env.HOST

app.listen(PORT, () =>{
  console.log(`Server started on: http://${HOST}:${PORT}`)
})