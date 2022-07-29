const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const movieRouter = require('./movieRouter')
const authRouter = require('./authRouter')
const auth = require('../middleware/auth');


router.use('/user', auth, userRouter)
router.use('/movie', auth, movieRouter)
router.use('/', authRouter)

module.exports = router