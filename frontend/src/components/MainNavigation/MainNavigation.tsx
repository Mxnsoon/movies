import React from 'react';
import s from './MainNavigation.module.scss';

const MainNavigation = () => {
    return (
        <div className={s.mainNavigation}>
            <h1 className={s.mainNavigation__title}>Учебный проект студента факультета Веб-разработки.</h1>
            <nav>
                <ul className={s.mainNavigation__container}>
                    <li><a className={s.mainNavigation__link} href="#aboutProject">О проекте</a></li>
                    <li><a className={s.mainNavigation__link} href="#techs">Технологии</a></li>
                    <li><a className={s.mainNavigation__link} href="#aboutMe">Студент</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default MainNavigation;