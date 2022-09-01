import React from 'react';
import s from './MobileMenu.module.scss';
import close from '../../images/close.svg'
import {Link} from "react-router-dom";

type TMobileMenu = {
    closePopup: () => void
    isOpened: boolean
}

const MobileMenu: React.FC<TMobileMenu> = ({closePopup, isOpened}) => {
    return (
        <div className={isOpened ? `${s.mobileMenu} ${s.mobileMenu_visible}` : s.mobileMenu}>
            <div className={s.mobileMenu__content}>
                <img onClick={closePopup} src={close} className={s.mobileMenu__close}/>
                <ul className={s.mobileMenu__list}>
                    <li><Link className={s.mobileMenu__listElement} to="/">Главная</Link></li>
                    <li><Link className={s.mobileMenu__listElement} to="/movies">Фильмы</Link></li>
                    <li><Link className={s.mobileMenu__listElement} to="/saved-movies">Сохранённые фильмы</Link></li>
                </ul>
                <Link className={s.mobileMenu__profileLink} to="/profile">Аккаунт</Link>

            </div>
        </div>
    );
};

export default MobileMenu;