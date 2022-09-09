import React from 'react';
import s from './AboutProject.module.scss';

const AboutProject = () => {
    return (
        <div id="aboutProject" className={s.aboutProject}>
            <h2 className={s.aboutProject__title}>О проекте</h2>
            <hr className={s.aboutProject__line}/>
            <div className={s.aboutProject__container}>
                <div className={s.aboutProject__textContainer}>
                    <div className={s.aboutProject__textTitle}>Дипломный проект включал 5 этапов</div>
                    <div className={s.aboutProject__textDescription}>Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </div>
                </div>
                <div className={s.aboutProject__textContainer}>
                    <div className={s.aboutProject__textTitle}>На выполнение диплома ушло 5 недель</div>
                    <div className={s.aboutProject__textDescription}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.
                    </div>
                </div>
            </div>
            <div className={s.aboutProject__progress}>
                <div className={s.aboutProject__backendContainer}>
                    <div className={s.aboutProject__backend}>1 неделя</div>
                    <p className={s.aboutProject__text}>Back-end</p>
                </div>
                <div className={s.aboutProject__frontendContainer}>
                    <div className={s.aboutProject__frontend}>4 недели</div>
                    <p className={s.aboutProject__text}>Front-end</p>
                </div>
            </div>

        </div>
    );
};

export default AboutProject;