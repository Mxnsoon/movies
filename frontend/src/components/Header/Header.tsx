import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";
import burger from '../../images/burgerMenu.svg';
import {useAppSelector} from "../../redux/store";

type THeader = {
    windowWidth: number
    openMobilePopup: () => void
}

const Header: React.FC<THeader> = ({windowWidth, openMobilePopup}) => {
    const loggedIn = useAppSelector((state) => state.authSlice.loggedIn)

    return (
        <div className={s.header}>
            <div className={s.header__wrapper}>
                <Link className={s.header__imageLink} to="/"><img className={s.header__logo} src={logo}/></Link>
                {windowWidth > 1000 && loggedIn &&
                    <>
                        <div className={s.header__linksContainer}>
                            <Link className={s.header__link} to="/movies">Фильмы</Link>
                            <Link className={s.header__link} to="/saved-movies">Сохранённые фильмы</Link>
                        </div>
                        <Link className={s.header__profileButton} to="/profile">Аккаунт</Link>
                    </>
                }
                {windowWidth < 1000 && loggedIn &&
                        <img onClick={openMobilePopup} className={s.header__burger} src={burger}/>
                }
                {!loggedIn &&
                    <div className={s.header__buttonsContainer}>
                        <Link className={s.header__registerButton} to="/signup">Регистрация</Link>
                        <Link className={s.header__loginButton} to="/signin">Войти</Link>
                    </div>
                }
            </div>

        </div>
    );
};

export default Header;