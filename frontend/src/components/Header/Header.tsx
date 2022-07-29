import React from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__wrapper}>
                <a className={s.header__imageLink} href="/"><img className={s.header__logo} src={logo}/></a>
                <div className={s.header__buttonsContainer}>
                    <a href="#" className={s.header__registerButton}>Регистрация</a>
                    <button className={s.header__loginButton}><a className={s.header__loginLink} href="#">Войти</a></button>
                </div>
            </div>

        </div>
    );
};

export default Header;