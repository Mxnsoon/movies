import React from 'react';
import s from './Techs.module.scss';

const Techs = () => {
    return (
        <div id="techs" className={s.techs}>
            <div className={s.techs__wrapper}>
                <h2 className={s.techs__title}>Технологии</h2>
                <hr className={s.techs__line}/>
                <h3 className={s.techs__containerTitle}>7 технологий</h3>
                <p className={s.techs__description}>На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.</p>
                <ul className={s.techs__techsContainer}>
                    <li className={s.techs__techItem}>HTML</li>
                    <li className={s.techs__techItem}>CSS</li>
                    <li className={s.techs__techItem}>TS</li>
                    <li className={s.techs__techItem}>React</li>
                    <li className={s.techs__techItem}>Git</li>
                    <li className={s.techs__techItem}>Express.js</li>
                    <li className={s.techs__techItem}>PostgreSQL</li>
                </ul>
            </div>
        </div>
    );
};

export default Techs;