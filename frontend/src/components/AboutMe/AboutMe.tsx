import React from 'react';
import s from './AboutMe.module.scss';
import student from '../../images/myPhoto.jpg';
import arrow from '../../images/arrow.png';

const AboutMe = () => {
    return (
        <div id="aboutMe" className={s.aboutMe}>
            <h2 className={s.aboutMe__title}>Студент</h2>
            <hr className={s.aboutMe__line}/>
            <div className={s.aboutMe__aboutMeContainer}>
                <div>
                    <h3 className={s.aboutMe__name}>Сергей</h3>
                    <p className={s.aboutMe__job}>Фронтенд-разработчик, 27 лет</p>
                    <p className={s.aboutMe__description}>Я родился и живу в Воронеже.
                        Я люблю слушать музыку, а ещё увлекаюсь бегом и плаванием. С апреля 2020 года я решил для себя, что мне нравится программирование, и тогда же я принял решение свзять свою жизнь с Frontend разработкой.
                        С октября 2021 года работаю в Ассоциации "Галерея Чижова" Frontend разработчиком.</p>
                    <div className={s.aboutMe__linksContainer}>
                        <a className={s.aboutMe__link} href="#">Facebook</a>
                        <a className={s.aboutMe__link} href="https://github.com/Mxnsoon">Github</a>
                    </div>
                </div>
                <img className={s.aboutMe__photo} alt="фото студента" src={student}/>
            </div>
            <p className={s.aboutMe__portfolio}>Портфолио</p>
            <div className={s.aboutMe__myAppsContainer}>
                <div className={s.aboutMe__app}><p className={s.aboutMe__appText}>Статичный сайт</p><a href="https://github.com/Mxnsoon/how-to-learn"><img
                    src={arrow}/></a></div>
                <hr className={s.aboutMe__myAppsLine}/>
                <div className={s.aboutMe__app}><p className={s.aboutMe__appText}>Адаптивный сайт</p><a href="https://mxnsoon.github.io/russian-travel/"><img
                    src={arrow}/></a></div>
                <hr className={s.aboutMe__myAppsLine}/>
                <div className={s.aboutMe__app}><p className={s.aboutMe__appText}>Одностраничное приложение</p><a href="https://mxnsoon.github.io/mesto-react/"><img
                    src={arrow}/></a></div>
            </div>

        </div>
    );
};

export default AboutMe;