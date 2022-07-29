const Router = require('express')
const router = new Router()
const {register, login} = require('../controllers/userController');

router.post('/signup', register)
router.post('/signin', login )

module.exports = router