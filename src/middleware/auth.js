import jwt from 'jsonwebtoken'

module.exports = (req, res, next) => {
  // autorización por el header
  const authHeader = req.get('Authorization')

  if (!authHeader) {
    return res.status(401).json({ status: 401, message: 'Not authenticated, no JWT' })
  }

  // obtener el token y verificarlo
  const token = authHeader.split(' ')[1]
  let checkToken
  try {
    checkToken = jwt.verify(token, 'LLAVESECRETA')
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'Not authenticated' })
  }

  // Si es un token valido, pero hay algun error
  if (!checkToken) {
    return res.status(401).json({ status: 401, message: 'Not authenticated' })
  }

  next()
}
