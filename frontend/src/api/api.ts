import axios from "axios";
import {Movie} from "../redux/moviesSlice";

const myApi = 'https://movies-backend.onrender.com/api/'

export const moviesApi = {
    getMovies() {
        return axios.get('https://api.nomoreparties.co/beatfilm-movies')
    },
    getSavedMovies(token: string) {
        return axios.get(`${myApi}movie`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    saveMovie(token: string, movie: Movie) {
        const {
            country,
            director,
            duration,
            year,
            description,
            trailerLink,
            nameRU,
            nameEN,
        } = movie

        return axios.post(`${myApi}movie`, {
            country,
            director,
            duration,
            year,
            description,
            trailerLink,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            nameRU,
            nameEN,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    deleteMovie(id: any, token: any) {
        return axios.delete(`${myApi}movie/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}

export const authApi = {
    signUp(data: any) {
        return axios.post(`${myApi}signup`, data)
    },
    signIn(data: any) {
        return axios.post(`${myApi}signin`, data)
    },
    getUserInfo(token: string) {
        return axios.get(`${myApi}user/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    patchUserInfo(token: string, data: any) {
        return axios.patch(`${myApi}user/me`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}