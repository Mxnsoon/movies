import React, {useEffect, useState} from 'react';
import s from './SearchForm.module.scss';
import line from '../../images/buttonLine.svg';
import arrow from '../../images/buttonArrow.svg';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {searchMovieSchema} from "../../vendor/validation";
import {useAppDispatch} from "../../redux/store";
import {getMovies, searchMovies, setMoviesToShow} from "../../redux/moviesSlice";

type Inputs = {
    movie: ""
}

type TSearchForm = {
    windowWidth: number
}


const SearchForm: React.FC<TSearchForm> = ({windowWidth}) => {
    const dispatch = useAppDispatch()
    const [initialMoviesCount, setInitialMoviesCount] = useState<number>(0)

    useEffect(() => {
        if (windowWidth > 1200) {
            setInitialMoviesCount(12)
        } else if (windowWidth > 760 && windowWidth < 1200) {
            setInitialMoviesCount(8)
        } else {
            setInitialMoviesCount(5)
        }
    }, [windowWidth])

    const submitHandler = async (data: string) => {
        await dispatch(getMovies())
        dispatch(searchMovies(data))
        dispatch(setMoviesToShow(initialMoviesCount))
    }

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
        resolver: yupResolver(searchMovieSchema),
        defaultValues: {
            movie: ""
        }
    })
    const onSubmit: SubmitHandler<Inputs> = data => submitHandler(data.movie);

    return (
        <div className={s.searchForm}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.searchForm__searchContainer}>
                <div>
                    <input {...register("movie")} placeholder="Фильм" className={s.searchForm__input}/>
                    {errors.movie && <p className={s.searchForm__error}>{errors.movie.message}</p>}
                </div>
                <button type="submit" className={s.searchForm__button}>
                    <img className={s.searchForm__imgLine} src={line}/>
                    <img className={s.searchForm__imgArrow} src={arrow}/>
                </button>
            </form>
            <div className={s.searchForm__toggleContainer}>
                <div className={s.searchForm__toggle}>
                    <div className={s.searchForm__toggleCircle}/>
                </div>
                <p className={s.searchForm__toggleText}>Короткометражки</p>
            </div>
            <hr className={s.searchForm__line}/>

        </div>
    );
};

export default SearchForm;