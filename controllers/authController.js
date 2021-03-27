const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')


exports.signup = async(req,res,next) =>{
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
      'mysecret',
      { expiresIn: '5 days'},
      (err, token) =>{
        if (err) throw err
        res.cookie('token', token)
        res.redirect('/recipes')
      }
    )

  } catch (error) {
    console.log(error.message)
  }

}