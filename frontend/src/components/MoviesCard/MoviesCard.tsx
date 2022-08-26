import React from 'react';
import s from './MoviesCard.module.scss';
import save from '../../images/movieSave.svg';
import movie1 from '../../images/movie1.png';

const MoviesCard: React.FC = () => {
    return (
        <div className={s.moviesCard}>
            <div className={s.moviesCard__header}>
                <div className={s.moviesCard__infoContainer}>
                    <p className={s.moviesCard__title}>33 слова о дизайне</p>
                    <p className={s.moviesCard__time}>1ч 47м</p>
                </div>
                <div>
                    <img src={save} />
                </div>
            </div>
            <div>
                <img src={movie1} />
            </div>

        </div>
    );
};

export default MoviesCard;