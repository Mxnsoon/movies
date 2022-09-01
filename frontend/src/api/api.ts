import axios from "axios";

const myApi = 'http://localhost:5000/api/'

export const moviesApi = {
    getMovies() {
        return axios.get('https://api.nomoreparties.co/beatfilm-movies')
    }
}

export const authApi = {
    signUp(data: any) {
        return axios.post(`${myApi}signup`, data)
    },
    signIn(data: any) {
        return axios.post(`${myApi}signin`, data)
    }
}