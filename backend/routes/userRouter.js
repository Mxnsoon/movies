const Router = require('express')
const router = new Router()
const { getUser, patchUser } = require('../controllers/userController')

router.get('/me', getUser)
router.patch('/me', patchUser)

module.exports = router