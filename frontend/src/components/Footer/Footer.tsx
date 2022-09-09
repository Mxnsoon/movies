import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.footer}>
            <p className={s.footer__text}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className={s.footer__line} />
            <div className={s.footer__container}>
                <p className={`${s.footer__link} ${s.footer__year}`}>© 2022</p>
                <div className={s.footer__linksContainer}>
                    <a className={s.footer__link} href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                    <a className={s.footer__link} href="https://github.com/Mxnsoon">Github</a>
                    <a className={s.footer__link} href="#">Facebook</a>
                </div>
            </div>

        </div>
    );
};

export default Footer;