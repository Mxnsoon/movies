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

type TInitialState = {
    movies: Movie[]
    searchedMovies: Movie[],
    moviesToShow: Movie[]
    status: string,
}

const initialState: TInitialState = {
    movies: [],
    searchedMovies: [],
    moviesToShow: [],
    status: '',
}

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
    const response = await moviesApi.getMovies()
    return response.data
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        searchMovies: (state, action:PayloadAction<string>) => {
            state.searchedMovies = state.movies.filter(s => s.nameRU.toLowerCase().includes(action.payload.toLowerCase()))
        },
        setMoviesToShow: (state, action) => {
            state.moviesToShow = state.searchedMovies.slice(0, action.payload)
        },
        loadMoreMovies: (state, action) => {
            state.moviesToShow = state.searchedMovies.slice(0, state.moviesToShow.length + action.payload)
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
        })
    }
})

export const {searchMovies, setMoviesToShow, loadMoreMovies} = moviesSlice.actions

export default moviesSlice.reducer