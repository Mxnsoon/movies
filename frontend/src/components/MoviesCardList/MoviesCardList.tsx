import React, {useEffect, useState} from 'react';
import s from './MoviesCardList.module.scss';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import Preloader from "../Preloader/Preloader";
import {getSavedMovies, loadMoreMovies, Movie, SavedMovie} from "../../redux/moviesSlice";
import {useLocation} from "react-router-dom";
import savedMovies from "../../layout/SavedMovies";

type TMoviesCardList = {
    windowWidth: number
}

const MoviesCardList: React.FC<TMoviesCardList> = ({windowWidth}) => {
    const dispatch = useAppDispatch();
    const location = useLocation()
    const [moviesToLoad, setMoviesToLoad] = useState<number>(0)
    const status = useAppSelector((state) => state.moviesSlice.status)
    const {moviesToShow, searchedMovies, movies, savedMovies} = useAppSelector((state) => state.moviesSlice)
    const [moviesToRender, setMoviesToRender] = useState<Movie[] | SavedMovie[]>([])

    useEffect(() => {
        if (windowWidth > 1200) {
            setMoviesToLoad(3)
        } else if (windowWidth > 760 && windowWidth < 1200) {
            setMoviesToLoad(2)
        } else {
            setMoviesToLoad(2)
        }
    }, [windowWidth])

    useEffect(() => {
        if (location.pathname === '/movies') {
            setMoviesToRender(moviesToShow)
        }
    }, [location.pathname, moviesToShow.length])

    useEffect(() => {
        if (location.pathname === '/saved-movies') {
            getSavedMoviesHandler()
        }
    }, [savedMovies.length])

    const getSavedMoviesHandler = async () => {
        await dispatch(getSavedMovies())
        setMoviesToRender(savedMovies)
    }

    const showButton = moviesToShow.length !== searchedMovies.length;

    return (
        <div className={s.moviesCardList}>
            {status === 'pending' ? <Preloader/> :
                searchedMovies.length === 0 && movies.length > 0 ?
                    <p className={s.moviesCardList__notFound}>Ничего не найдено</p> :
                    <div className={s.moviesCardList__grid}>
                        {
                            moviesToRender.map((movie) => <MoviesCard
                                key={movie.id}
                                movie={movie}
                            />)
                        }
                    </div>}
            {showButton && <button onClick={() => dispatch(loadMoreMovies(moviesToLoad))}
                                   className={s.moviesCardList__moreButton}>Ещё
            </button>}
        </div>
    );
};

export default MoviesCardList;