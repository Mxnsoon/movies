import React from 'react';
import s from './Register.module.scss';
import logo from '../../images/logo.png';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "../../vendor/validation";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";
import {signUp} from "../../redux/authSlice";

type Inputs = {
    name: string
    email: string
    password: string
}

const Register = () => {
    const dispatch = useAppDispatch()

    const submitHandler = (data: Inputs) => {
        dispatch(signUp(data))
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    const onSubmit: SubmitHandler<Inputs> = data => submitHandler(data);

    return (
        <div className={s.register}>
            <img className={s.register__logo} src={logo} />
            <h2 className={s.register__title}>Добро пожаловать!</h2>
            <form className={s.register__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.register__inputContainer}>
                    <label className={s.register__label} htmlFor="name">Имя</label>
                    <input type="text" className={s.register__input} {...register("name")} />
                </div>
                <div className={s.register__inputContainer}>
                    <label className={s.register__label} htmlFor="email">E-mail</label>
                    <input type="text" className={s.register__input} {...register("email")} />
                </div>
                <div className={s.register__inputContainer}>
                    <label className={s.register__label} htmlFor="password">Пароль</label>
                    <input type="password" className={s.register__input} {...register("password")} />
                </div>
                <button type="submit" className={s.register__button}>Зарегистрироваться</button>
            </form>
            <p className={s.register__text}>Уже зарегистрированы? <Link className={s.register__link} to="/signin">Войти</Link></p>
        </div>
    );
};

export default Register;