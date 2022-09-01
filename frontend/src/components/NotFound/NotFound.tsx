import React from 'react';
import s from './NotFound.module.scss';
import {Link} from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className={s.notFound}>
            <h2 className={s.notFound__code}>404</h2>
            <p className={s.notFound__text}>Страница не найдена</p>
            <Link className={s.notFound__link} to="/">Назад</Link>

        </div>
    );
};

export default NotFound;