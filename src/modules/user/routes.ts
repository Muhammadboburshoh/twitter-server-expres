import { Router } from 'express'

const router = Router()

router.get('/signin', (req, res) => {

  res.send("LOGIN")
})

export default router
