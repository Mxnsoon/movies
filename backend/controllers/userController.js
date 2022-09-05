const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')
const BadRequestError = require('../errors/BadRequestError')
const ConflictError = require('../errors/ConflictError')
const NotFoundError = require('../errors/NotFoundError')

const register = (req, res, next) => {
    const {name, email, password} = req.body;
    User.findOne({where: {email}})
        .then((data) => {
            if (data) {
                throw new ConflictError('Пользователь с таким email уже существует');
            }
            return bcrypt.hash(password, 5)
        })
        .then((hash) => User.create({
            name,
            email,
            password: hash,
        }))
        .then((user) => res.status(200).send({
            name: user.name,
            email: user.email
        }))
        .catch((err) => {
            next(err)
        })
}

const login = (req, res, next) => {
    const {email, password} = req.body;
    User.findOne({where: {email}})
        .then((data) => {
            if (!data) {
                throw new NotFoundError('Пользователь с таким email не найден')
            }
            const comparePassword = bcrypt.compareSync(password, data.password)
            if (!comparePassword) {
                throw new ConflictError('Указан неверный пароль')
            }
            const token = jwt.sign({id: data.id}, process.env.SECRET_KEY, {expiresIn: '24h'})
            res.send({token})
        })
        .catch((err) => {
            next(err)
        })
}

const getUser = (req, res, next) => {
    const userId = req.user.id;
    User.findByPk(userId)
        .then((user) => {
            if (!user) {
                throw new NotFoundError('Пользователь не найден')
            }
            return res.status(200).send({name: user.name, email: user.email})
        })
        .catch((err) => {
            next(err)
        })
}

const patchUser = (req, res, next) => {
    const {email, name} = req.body;
    const userId = req.user.id

    User.findOne({where: {email}})
        .then((data) => {
            if (data) {
                throw new ConflictError('Пользователь с таким email уже существует');
            }
            User.findByPk(userId)
                .then((user) => {
                    if (!user) {
                        throw new NotFoundError('Пользователь не найден')
                    }
                    user.update({email, name})
                        .then((data) => {
                            return res.status(200).send({name: data.name, email: data.email})
                        })
                })
        })
        .catch((err) => {
            next(err)
        })
}

module.exports = {
    getUser,
    register,
    login,
    patchUser
}