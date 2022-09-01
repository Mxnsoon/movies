import React from 'react';
import s from "../Register/Register.module.scss";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {registerSchema} from "../../vendor/validation";

type Inputs = {
    email: string
    password: string
}

const Login: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(registerSchema)
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div className={s.register}>
            <img src={logo} />
            <h2 className={s.register__title}>Рады видеть!</h2>
            <form className={s.register__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.register__inputContainer}>
                    <label className={s.register__label} htmlFor="email">E-mail</label>
                    <input type="text" className={s.register__input} defaultValue="" {...register("email")} />
                </div>
                <div className={s.register__inputContainer}>
                    <label className={s.register__label} htmlFor="password">Пароль</label>
                    <input type="password" className={s.register__input} defaultValue="" {...register("password")} />
                </div>
                <button type="submit" className={s.register__button}>Войти</button>
            </form>
            <p className={s.register__text}>Еще не зарегистрированы? <Link className={s.register__link} to="/signup">Регистрация</Link></p>
        </div>
    );
};

export default Login;