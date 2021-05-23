import { Router } from 'express'
import { sign, verify } from '../../jwt'

import model from "./model"
const router = Router()

router.get('/', async (req, res) => {

  console.log(req.headers)
  try {

    await verify(req.headers.access_token)

    res.send(await model.many())
  } catch (e) {
    console.log(e)
    res.statusMessage = e.message
    res.status(403).end()
  }
})

router.post('/signin', async (req, res) => {

  const user = await model.signin(req.body)

  if (user) {
    const accessToken = sign(user)

    res.status(201).send({user, accessToken})
  } else {
    res.status(401).end()
  }

})

export default router
