import React from 'react';
import s from './MoviesCard.module.scss';
import save from '../../images/movieSave.svg';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {deleteMovie, getSavedMovies, Movie, SavedMovie, saveMovie} from "../../redux/moviesSlice";
import {useLocation} from "react-router-dom";
import saved from '../../images/movieSaved.svg'

type TMoviesCard = {
    movie: Movie | SavedMovie
    deleteMovie: (arg: number) => void
}

const MoviesCard: React.FC<TMoviesCard> = ({movie, deleteMovie}) => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const savedMovies = useAppSelector((state) => state.moviesSlice.savedMovies)
    const hours = Math.floor(movie.duration / 60)
    const minutes = hours ? movie.duration % (hours * 60) : movie.duration

    const saveMovieHandler = async (movie: Movie) => {
        const token = localStorage.getItem('token')
        await dispatch(saveMovie({token, movie}))
        dispatch(getSavedMovies(token))
    }

    const movieIsSaved = () => {
        if (location.pathname === '/movies') {
            return savedMovies.map(s => s.movieId).includes(movie.id)
        } else {
            return savedMovies.map(s => s.movieId).includes(movie.movieId)
        }
    }

    return (
        <div className={s.moviesCard}>
            <div className={s.moviesCard__header}>
                <div className={s.moviesCard__infoContainer}>
                    <p className={s.moviesCard__title}>{movie.nameRU}</p>
                    <p className={s.moviesCard__time}>{hours}ч {minutes}м</p>
                </div>
                <div>
                    <img className={s.moviesCard__like} onClick={() => movieIsSaved() ? deleteMovie(movie.id) : saveMovieHandler(movie)} src={movieIsSaved() ? saved : save} />
                </div>
            </div>
            <div>
                <img className={s.moviesCard__image} src={location.pathname === '/movies' ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image} />
            </div>
        </div>
    );
};

export default MoviesCard;