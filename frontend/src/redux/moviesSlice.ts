import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesApi} from "../api/api";

export type Movie = {
    id: number
    nameRU: string
    nameEN: string
    director: string
    country: string
    year: string
    duration: number
    description: string
    trailerLink: string
    created_at: string
    updated_at: string
    image: MovieImage
}

export type MovieImage = {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: MovieImageFormats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: null
    created_at: string
    updated_at: string
}

type MovieImageFormats = {
    thumbnail: MovieImageFormatsThumbnail
    small: MoviesImageFormatsSmall
}

type MovieImageFormatsThumbnail = {
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: null
    url: string
}

type MoviesImageFormatsSmall = {
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: null
    url: string
}

export type SavedMovie = {
    country: string
    createdAt: string
    description: string
    director: string
    duration: number
    id: number
    image: string
    movieId: number
    nameEN: string
    nameRU: string
    thumbnail: string
    trailerLink: string
    updatedAt: string
    userId: number
    year: string
}

type TInitialState = {
    movies: Movie[]
    searchedMovies: Movie[],
    moviesToShow: Movie[]
    status: string,
    savedMovies: SavedMovie[]
    shortMoviesFilter: boolean
}

const initialState: TInitialState = {
    movies: [],
    searchedMovies: [],
    moviesToShow: [],
    status: '',
    savedMovies: [],
    shortMoviesFilter: false
}

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
    const response = await moviesApi.getMovies()
    return response.data
})

export const saveMovie = createAsyncThunk<any, any>('movies/saveMovie', async (data) => {
    const token = localStorage.getItem('token')
    if (token) {
        const response = await moviesApi.saveMovie(token, data)
        return response.data
    }
})

export const getSavedMovies = createAsyncThunk('movies/getSavedMovies', async () => {
    const token = localStorage.getItem('token')
    if (token) {
        const response = await moviesApi.getSavedMovies(token)
        return response.data
    }
})

export const deleteMovie = createAsyncThunk<any, any>('movies/deleteMovie', async (movieId) => {
    const token = localStorage.getItem('token')
    if (token) {
        const response = await moviesApi.deleteMovie(movieId, token)
        return response.data
    }
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        searchMovies: (state, action: PayloadAction<string>) => {
            if (!state.shortMoviesFilter) {
                state.searchedMovies = state.movies.filter(s => s.nameRU.toLowerCase().includes(action.payload.toLowerCase()))
            } else {
                state.searchedMovies = state.movies.filter(s => s.nameRU.toLowerCase().includes(action.payload.toLowerCase())).filter(s => s.duration < 40)
            }
        },
        setMoviesToShow: (state, action) => {
            state.moviesToShow = state.searchedMovies.slice(0, action.payload)
        },
        loadMoreMovies: (state, action) => {
            state.moviesToShow = state.searchedMovies.slice(0, state.moviesToShow.length + action.payload)
        },
        turnShortMoviesFilterOn: (state) => {
            state.shortMoviesFilter = true
            if (state.searchedMovies.length !== 0) {
                state.searchedMovies = state.searchedMovies.filter(s => s.duration < 40)
            }
        },
        turnShortMoviesFilterOff: (state, action) => {
            state.shortMoviesFilter = false
            if (state.movies) {
                state.searchedMovies = state.movies.filter(s => s.nameRU.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(getMovies.pending, (state) => {
            state.movies = []
            state.status = 'pending'
        })
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload
            state.status = 'fulfilled'
            console.log('api call')
        })
        builder.addCase(getSavedMovies.fulfilled, (state, action) => {
            state.savedMovies = action.payload
            state.status = 'fulfilled'
        })
        builder.addCase(saveMovie.fulfilled, (state, action) => {
            state.savedMovies = [...state.savedMovies, action.payload]
            console.log(state.savedMovies, action.payload)
        })
        builder.addCase(deleteMovie.fulfilled, (state, action) => {
            state.savedMovies = state.savedMovies.filter(movie => movie.movieId != action.payload.movieId)
        })
    }
})

export const {
    searchMovies,
    setMoviesToShow,
    loadMoreMovies,
    turnShortMoviesFilterOff,
    turnShortMoviesFilterOn
} = moviesSlice.actions

export default moviesSlice.reducer