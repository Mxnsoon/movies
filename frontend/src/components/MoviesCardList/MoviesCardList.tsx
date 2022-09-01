import React, {useEffect, useState} from 'react';
import s from './MoviesCardList.module.scss';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import Preloader from "../Preloader/Preloader";
import {loadMoreMovies} from "../../redux/moviesSlice";

type TMoviesCardList = {
    windowWidth: number
}

const MoviesCardList: React.FC<TMoviesCardList> = ({windowWidth}) => {
    const dispatch = useAppDispatch();
    const [moviesToLoad, setMoviesToLoad] = useState<number>(0)
    const status = useAppSelector((state) => state.moviesSlice.status)
    const {moviesToShow, searchedMovies, movies} = useAppSelector((state) => state.moviesSlice)

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

    return (
        <div className={s.moviesCardList}>
            {status === 'pending' ? <Preloader/> :
                searchedMovies.length === 0 && movies.length > 0 ?
                    <p className={s.moviesCardList__notFound}>Ничего не найдено</p> :
                    <div className={s.moviesCardList__grid}>
                        {
                            moviesToShow.map((movie) => <MoviesCard
                                key={movie.id}
                                name={movie.nameRU}
                                imageUrl={movie.image.url}
                                duration={movie.duration}
                            />)
                        }
                    </div>}
            {showButton() && <button onClick={() => dispatch(loadMoreMovies(moviesToLoad))}
                    className={s.moviesCardList__moreButton}>Ещё
            </button>}
        </div>
    );
};

export default MoviesCardList;