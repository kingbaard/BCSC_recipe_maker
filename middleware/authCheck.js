const jwt = require('jsonwebtoken')


const auth = (req, res, next) =>{
  let token = req.cookies['token']

  if (!token){
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) =>{
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    })
  } catch (error) {
    console.error('somthing went wrong')
    res.status(500).json({ msg: 'Server Error' })
  }
}

module.exports = auth