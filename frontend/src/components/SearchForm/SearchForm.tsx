import React from 'react';
import s from './SearchForm.module.scss';
import line from '../../images/buttonLine.svg';
import arrow from '../../images/buttonArrow.svg';


const SearchForm: React.FC = () => {
    return (
        <div className={s.searchForm}>
            <div className={s.searchForm__searchContainer}>
                <input placeholder="Фильм" className={s.searchForm__input} />
                <button className={s.searchForm__button}>
                    <img className={s.searchForm__imgLine} src={line} />
                    <img className={s.searchForm__imgArrow} src={arrow} />
                </button>
            </div>
            <div className={s.searchForm__toggleContainer}>
                <div className={s.searchForm__toggle}>
                    <div className={s.searchForm__toggleCircle} />
                </div>
                <p className={s.searchForm__toggleText}>Короткометражки</p>
            </div>
            <hr className={s.searchForm__line} />

        </div>
    );
};

export default SearchForm;