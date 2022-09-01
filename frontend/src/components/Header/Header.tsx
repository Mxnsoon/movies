import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";
import burger from '../../images/burgerMenu.svg';

type THeader = {
    windowWidth: number
    openMobilePopup: () => void
}

const Header: React.FC<THeader> = ({windowWidth, openMobilePopup}) => {

    return (
        <div className={s.header}>
            <div className={s.header__wrapper}>
                <Link className={s.header__imageLink} to="/"><img className={s.header__logo} src={logo}/></Link>
                {windowWidth < 1000 ?
                    <img alt="Бургер меню" onClick={openMobilePopup} className={s.header__burger} src={burger} />  :
                    <div className={s.header__buttonsContainer}>
                        <Link to="signup" className={s.header__registerButton}>Регистрация</Link>
                        <Link to="signin" className={s.header__loginButton}>Войти</Link>
                    </div>
                }
            </div>

        </div>
    );
};

export default Header;