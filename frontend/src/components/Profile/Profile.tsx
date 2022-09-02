import React, {useState} from 'react';
import s from './Profile.module.scss';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {changeInfo, logout} from "../../redux/authSlice";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {editProfileSchema, loginSchema} from "../../vendor/validation";

type Inputs = {
    name: string
    email: string
}

const Profile = () => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const dispatch = useAppDispatch();
    const {name, email} = useAppSelector((state) => state.authSlice)
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/')
    }

    const saveInfoHandler = (data: Inputs) => {
        const token = localStorage.getItem('token')
        dispatch(changeInfo({token, data}))
        setEditMode(false)
    }


    const {register, handleSubmit, watch, formState: {errors, isSubmitting}} = useForm<Inputs>({
        resolver: yupResolver(editProfileSchema),
        defaultValues: {
            name: name,
            email: email
        }
    });
    const onSubmit: SubmitHandler<Inputs> = data => saveInfoHandler(data);

    return (
        <div className={s.profile}>
            <h2 className={s.profile__title}>Привет, {name}!</h2>
            {!editMode ? <>
                <div className={s.profile__infoBlock}>
                    <div className={s.profile__infoRow}>
                        <p>Имя</p>
                        <p>{name}</p>
                    </div>

                    <hr className={s.profile__line}/>
                    <div className={s.profile__infoRow}>
                        <p>E-mail</p>
                        <p>{email}</p>
                    </div>

                </div>
                <p onClick={() => setEditMode(true)} className={s.profile__edit}>Редактировать</p>
                <p onClick={logoutHandler} className={s.profile__logout}>Выйти из аккаунта</p>
            </> :
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className={s.profile__infoBlock}>
                        <div className={s.profile__infoRow}>
                            <p>Имя</p>
                            <input className={s.profile__input} type="text" {...register("name")} />
                        </div>
                        {errors.name && <p className={s.register__error}>{errors.name.message}</p>}
                        <hr className={s.profile__line}/>
                        <div className={s.profile__infoRow}>
                            <p>E-mail</p>
                            <input className={s.profile__input} type="text" {...register("email")} />
                        </div>
                        {errors.email && <p className={s.register__error}>{errors.email.message}</p>}
                        <button className={s.profile__save} disabled={isSubmitting} type="submit">Сохранить</button>
                    </form>
                </>
            }
        </div>
    );
};

export default Profile;