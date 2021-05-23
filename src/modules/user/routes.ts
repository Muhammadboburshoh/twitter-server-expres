import { Router } from 'express'

import model from "./model"
const router = Router()

router.post('/signin', async (req, res) => {

  const user = await model.signin(req.body)

  if (user) {
    res.status(200).send(user)
  } else {
    res.status(401).end()
  }

})

export default router
