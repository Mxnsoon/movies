import React from 'react';
import s from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={s.profile}>
            <h2 className={s.profile__title}>Привет, Виталий!</h2>
            <div className={s.profile__infoBlock}>
                <div className={s.profile__infoRow}>
                    <p>Имя</p>
                    <p>Виталий</p>
                </div>
                <hr className={s.profile__line} />
                <div className={s.profile__infoRow}>
                    <p>E-mail</p>
                    <p>pochta@yandex.ru</p>
                </div>
            </div>
            <p className={s.profile__edit}>Редактировать</p>
            <p className={s.profile__logout}>Выйти из аккаунта</p>


        </div>
    );
};

export default Profile;