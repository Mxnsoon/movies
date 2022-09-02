import React from 'react';
import s from "../Register/Register.module.scss";
import logo from "../../images/logo.png";
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {loginSchema} from "../../vendor/validation";
import {useAppDispatch} from "../../redux/store";
import {getInfo, signIn} from "../../redux/authSlice";

type Inputs = {
    email: string
    password: string
}

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const submitHandler = async (data: Inputs) => {
        await dispatch(signIn(data))
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(getInfo(token))
            navigate('/movies')
        }
    }

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<Inputs>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit: SubmitHandler<Inputs> = data => submitHandler(data);

    return (
        <div className={s.register}>
            <img src={logo} />
            <h2 className={s.register__title}>Рады видеть!</h2>
            <form className={s.register__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.register__inputContainer}>
                    <label className={s.register__label} htmlFor="email">E-mail</label>
                    <input type="text" className={s.register__input} {...register("email")} />
                    {errors.email && <p className={s.register__error}>{errors.email.message}</p>}
                </div>
                <div className={s.register__inputContainer}>
                    <label className={s.register__label} htmlFor="password">Пароль</label>
                    <input type="password" className={s.register__input} {...register("password")} />
                    {errors.password && <p className={s.register__error}>{errors.password.message}</p>}
                </div>
                <button disabled={isSubmitting} type="submit" className={s.register__button}>Войти</button>
            </form>
            <p className={s.register__text}>Еще не зарегистрированы? <Link className={s.register__link} to="/signup">Регистрация</Link></p>
        </div>
    );
};

export default Login;