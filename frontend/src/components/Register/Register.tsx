import React from 'react';
import s from './Register.module.scss';
import logo from '../../images/logo.png';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "../../vendor/validation";

type Inputs = {
    name: string
    email: string
    password: string
}

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(registerSchema)
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div className={s.register}>
            <img src={logo} />
            <h2 className={s.register__title}>Добро пожаловать!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.register__inputContainer}>
                    <label htmlFor="name">Имя</label>
                    <input defaultValue="" {...register("name")} />
                    <hr />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input defaultValue="" {...register("email")} />
                    <hr />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input defaultValue="" {...register("password")} />
                    <hr />
                </div>
            </form>
        </div>
    );
};

export default Register;