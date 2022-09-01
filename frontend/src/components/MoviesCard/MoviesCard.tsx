import React from 'react';
import s from './MoviesCard.module.scss';
import save from '../../images/movieSave.svg';

type TMoviesCard = {
    name: string
    imageUrl: string
    duration: number
}

const MoviesCard: React.FC<TMoviesCard> = ({name, imageUrl, duration}) => {
    const hours = Math.floor(duration / 60)
    const minutes = hours ? duration % (hours * 60) : duration

    return (
        <div className={s.moviesCard}>
            <div className={s.moviesCard__header}>
                <div className={s.moviesCard__infoContainer}>
                    <p className={s.moviesCard__title}>{name}</p>
                    <p className={s.moviesCard__time}>{hours}ч {minutes}м</p>
                </div>
                <div>
                    <img src={save} />
                </div>
            </div>
            <div>
                <img className={s.moviesCard__image} src={`https://api.nomoreparties.co/${imageUrl}`} />
            </div>

        </div>
    );
};

export default MoviesCard;