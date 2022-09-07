const {Movie} = require('../models/models')
const NotFoundError = require('../errors/NotFoundError')
const ForbiddenError = require('../errors/NotFoundError')

const getMovies = (req, res, next) => {
    const userId = req.user.id
    Movie.findAll({where: {userId}})
        .then((movies) => res.status(200).send(movies))
        .catch(next)
}

const addMovie = (req, res, next) => {
    const {
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        image,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
    } = req.body;
    Movie.create({
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        image,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        userId: req.user.id
    }).then((movie) => res.status(200).send(movie))
        .catch(next)
}

const deleteMovie = (req, res, next) => {
    const {movieId} = req.params
    Movie.findOne({where: {movieId}})
        .catch(() => {
            throw new NotFoundError('Нет фильма с таким id')
        })
        .then((movie) => {
            if (!movie) {
                throw new NotFoundError('Нет фильма с таким id')
            }
            if (+req.user.id === +movie.userId) {
                movie.destroy()
                    .then(() => {
                        res.status(201).send({message: "Фильм успешно удален", movieId})
                    })
                    .catch(next)
            } else {
                throw new ForbiddenError('Вы не можете удалять фильмы других пользователей')
            }
        })
        .catch(next)
}

module.exports = {
    getMovies,
    addMovie,
    deleteMovie
}

