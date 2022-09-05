import React, {useEffect, useState} from 'react';
import s from './MoviesCardList.module.scss';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import Preloader from "../Preloader/Preloader";
import {deleteMovie, getSavedMovies, loadMoreMovies, Movie, saveMovie} from "../../redux/moviesSlice";
import {useLocation} from "react-router-dom";

type TMoviesCardList = {
    windowWidth: number
}

const MoviesCardList: React.FC<TMoviesCardList> = ({windowWidth}) => {
    const dispatch = useAppDispatch();
    const location = useLocation()
    const [moviesToLoad, setMoviesToLoad] = useState<number>(0)
    const status = useAppSelector((state) => state.moviesSlice.status)
    const {moviesToShow, searchedMovies, movies, savedMovies} = useAppSelector((state) => state.moviesSlice)

    useEffect(() => {
        if (windowWidth > 1200) {
            setMoviesToLoad(3)
        } else if (windowWidth > 760 && windowWidth < 1200) {
            setMoviesToLoad(2)
        } else {
            setMoviesToLoad(2)
        }
    }, [windowWidth])

    const showButton = () => {
        return moviesToShow.length !== searchedMovies.length;
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        dispatch(getSavedMovies(token))
        console.log(savedMovies)
    }, [savedMovies.length])

    const deleteMovieHandler = async (movieId: any) => {
        const token = localStorage.getItem('token')
        await dispatch(deleteMovie({movieId, token}))
        dispatch(getSavedMovies(token))
    }

    return (
        <div className={s.moviesCardList}>
            {status === 'pending' ? <Preloader/> :
                searchedMovies.length === 0 && movies.length > 0 ?
                    <p className={s.moviesCardList__notFound}>Ничего не найдено</p> :
                    <div className={s.moviesCardList__grid}>
                        {location.pathname === '/movies' ?
                            moviesToShow.map((movie) => <MoviesCard
                                key={movie.id}
                                movie={movie}
                                deleteMovie={deleteMovieHandler}
                            />) :
                            savedMovies.map((movie) => <MoviesCard movie={movie} deleteMovie={deleteMovieHandler} key={movie.id} />)
                        }
                    </div>}
            {showButton() && <button onClick={() => dispatch(loadMoreMovies(moviesToLoad))}
                    className={s.moviesCardList__moreButton}>Ещё
            </button>}
        </div>
    );
};

export default MoviesCardList;