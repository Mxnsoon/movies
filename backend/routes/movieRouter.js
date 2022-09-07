const Router = require('express')
const router = new Router()
const { getMovies, addMovie, deleteMovie } = require('../controllers/movieController')

router.get('/', getMovies)
router.post('/', addMovie)
router.delete('/:movieId', deleteMovie)

module.exports = router