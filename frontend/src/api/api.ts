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