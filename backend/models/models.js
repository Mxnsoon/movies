const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Movie = sequelize.define('movie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    country: {type: DataTypes.STRING},
    director: {type: DataTypes.STRING},
    duration: {type: DataTypes.INTEGER},
    year: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING(50000)},
    image: {type: DataTypes.STRING},
    trailerLink: {type: DataTypes.STRING},
    thumbnail: {type: DataTypes.STRING},
    movieId: {type: DataTypes.INTEGER, unique: true},
    nameRU: {type: DataTypes.STRING},
    nameEN: {type: DataTypes.STRING}
})

User.hasMany(Movie)
Movie.belongsTo(User)

module.exports = {
    User,
    Movie
}