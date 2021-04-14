const express = require('express')
require('dotenv').config()
router = require("./routes/index")
const cookieParser = require('cookie-parser')
const  connectFlash = require("connect-flash")
const expressSession = require('express-session')

connectDB = require('./config/db')

const app = express()

// sets view engine to ejs
app.set('view engine', 'ejs')

// Serves static assets from public folder
app.use(express.static('public'));

// for parsing httpOnly cookies
app.use(cookieParser())

// Allows app to parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: false })) 

app.use(
  expressSession({
    secret: "secret_passcode",
    cookie: {
      maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
  })
);
app.use(connectFlash())
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
//Register routes
app.use('/recipes', require('./routes/recipe'))
app.use('/auth', require('./routes/auth'))

// index route for possible future login
// app.get('/', (req,res) =>{
//   res.render('index')
// })

//Connecting Flash message support

app.use("/", router)
// Server listens on port 5000
const PORT = process.env.PORT || 5000

connectDB().then(() =>{
  app.listen(PORT, () =>{
    console.log(`Server started on: http://localhost:${PORT}`.bold.green)
  })
})
