import React from 'react';
import s from './MoviesCard.module.scss';
import save from '../../images/movieSave.svg';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {deleteMovie, Movie, SavedMovie, saveMovie} from "../../redux/moviesSlice";
import {useLocation} from "react-router-dom";
import saved from '../../images/movieSaved.svg'

type TMoviesCard = {
    movie: Movie | SavedMovie
}

const MoviesCard: React.FC<TMoviesCard> = ({movie}) => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const savedMovies = useAppSelector((state) => state.moviesSlice.savedMovies)
    const hours = Math.floor(movie.duration / 60)
    const minutes = hours ? movie.duration % (hours * 60) : movie.duration

    const savedMoviesIds = savedMovies.map(m => m.movieId)

    //type guard
    const isTypeSavedMovie = (movie: Movie | SavedMovie): movie is SavedMovie => {
        return (movie as SavedMovie).movieId !== undefined
    }

    const isMovieSaved = () => {
        if (location.pathname === '/saved-movies') {
            return true
        } else {
            return !!savedMoviesIds.includes(movie.id);
        }
    }

    const generateImageSrc = () => {
        if (location.pathname === '/movies' && !isTypeSavedMovie(movie)) {
            return `https://api.nomoreparties.co/${movie.image.url}`
        } else if (isTypeSavedMovie(movie)) {
            return movie.image
        }
    }

    const deleteMovieHandler = () => {
        if (location.pathname === '/saved-movies' && isTypeSavedMovie(movie)) {
            dispatch(deleteMovie(movie.movieId))
        } else if (!isTypeSavedMovie(movie)) {
            dispatch(deleteMovie(movie.id))
        }
    }

    const clickHandler = () => {
        isMovieSaved() ? deleteMovieHandler() : dispatch(saveMovie(movie))
    }

    return (
        <div className={s.moviesCard}>
            <div className={s.moviesCard__header}>
                <div className={s.moviesCard__infoContainer}>
                    <p className={s.moviesCard__title}>{movie.nameRU}</p>
                    <p className={s.moviesCard__time}>{hours}ч {minutes}м</p>
                </div>
                <div>
                    <img onClick={clickHandler} className={s.moviesCard__like} src={isMovieSaved() ? saved : save} />
                </div>
            </div>
            <div>
                <img className={s.moviesCard__image} src={generateImageSrc()} />
            </div>
        </div>
    );
};

export default MoviesCard;