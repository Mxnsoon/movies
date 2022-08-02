import React from 'react';
import s from './AboutMe.module.scss';
import student from '../../images/student.png';
import arrow from '../../images/arrow.png';

const AboutMe = () => {
    return (
        <div className={s.aboutMe}>
            <h2 className={s.aboutMe__title}>О проекте</h2>
            <hr className={s.aboutMe__line}/>
            <div className={s.aboutMe__aboutMeContainer}>
                <div>
                    <h3 className={s.aboutMe__name}>Виталий</h3>
                    <p className={s.aboutMe__job}>Фронтенд-разработчик, 30 лет</p>
                    <p className={s.aboutMe__description}>Я родился и живу в Саратове, закончил факультет экономики СГУ.
                        У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
                        в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className={s.aboutMe__linksContainer}>
                        <a className={s.aboutMe__link} href="#">Facebook</a>
                        <a className={s.aboutMe__link} href="#">Github</a>
                    </div>
                </div>
                <img alt="фото студента" src={student}/>
            </div>
            <p className={s.aboutMe__portfolio}>Портфолио</p>
            <div className={s.aboutMe__myAppsContainer}>
                <div className={s.aboutMe__app}><p className={s.aboutMe__appText}>Статичный сайт</p><a href="#"><img
                    src={arrow}/></a></div>
                <hr className={s.aboutMe__myAppsLine}/>
                <div className={s.aboutMe__app}><p className={s.aboutMe__appText}>Адаптивный сайт</p><a href="#"><img
                    src={arrow}/></a></div>
                <hr className={s.aboutMe__myAppsLine}/>
                <div className={s.aboutMe__app}><p className={s.aboutMe__appText}>Одностраничное приложение</p><a href="#"><img
                    src={arrow}/></a></div>
            </div>

        </div>
    );
};

export default AboutMe;