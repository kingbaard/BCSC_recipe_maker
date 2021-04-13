const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')


exports.register = async(req,res,next) =>{
  const {email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user){
      return res.status(400).json({ errors: [{msg: 'user already exists'}]})
    }

    user = new User({
      email,
      password,
    })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save()

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5 days'},
      (err, token) =>{
        if (err) throw err
        res.cookie('token', token, {maxAge: 432000000, httpOnly: true})
        // res.redirect('/recipes')
        res.send('signed in')
      }
    )

  } catch (error) {
    console.log(error.message)
  }

}

exports.signin = async(req,res,next) =>{
  const {email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (!user){
      return res.status(400).json({ errors: [{msg: 'user doesnt exist'}]})
    }

    let passwordCheck = await bcrypt.compare(password, user.password)

    if (passwordCheck){
      const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload,
       process.env.JWT_SECRET,
      { expiresIn: '5 days'},
      (err, token) =>{
        if (err) throw err
        res.cookie('token', token, {maxAge: 432000000, httpOnly: true})
        // res.redirect('/recipes')
        res.send('user signed in')
      }
    )
    }

  } catch (error) {
    console.log(error.message)
  }
}

exports.signout = (req,res) =>{
  res.clearCookie('token')
  // res.redirect('/')
  res.send('user signed out')
}