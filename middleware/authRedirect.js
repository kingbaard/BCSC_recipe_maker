const guest = (req, res, next) =>{
  let token = req.cookies['token']

  if (token){
    // res.redirect('/')
    res.send('guests only')
  }else{
    next()
  }
}

module.exports = guest