import * as jwt  from 'jsonwebtoken'

const SECRET = 'jigi-jigi'

const sign = payload => jwt.sign(payload, SECRET, {
  expiresIn: '24h'
})

const verify = accessToken => jwt.verify(accessToken, SECRET)

export {
  sign, verify
}