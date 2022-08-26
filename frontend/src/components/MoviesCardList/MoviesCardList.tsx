import React from 'react';
import s from './MoviesCardList.module.scss';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList: React.FC = () => {
    return (
        <div className={s.moviesCardList}>
            <div className={s.moviesCardList__grid}>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </div>
            <button className={s.moviesCardList__moreButton}>Ещё</button>
        </div>
    );
};

export default MoviesCardList;