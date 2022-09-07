import React, {useEffect, useState} from 'react';
import s from './SearchForm.module.scss';
import line from '../../images/buttonLine.svg';
import arrow from '../../images/buttonArrow.svg';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {searchMovieSchema} from "../../vendor/validation";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    getMovies,
    searchMovies,
    setMoviesToShow,
    turnShortMoviesFilterOff,
    turnShortMoviesFilterOn
} from "../../redux/moviesSlice";

type Inputs = {
    movie: ""
}

type TSearchForm = {
    windowWidth: number
}


const SearchForm: React.FC<TSearchForm> = ({windowWidth}) => {
    const dispatch = useAppDispatch()
    const movies = useAppSelector((state) => state.moviesSlice.movies)
    const [initialMoviesCount, setInitialMoviesCount] = useState<number>(0)
    const shortMoviesFilterOn = useAppSelector((state) => state.moviesSlice.shortMoviesFilter)

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
        if (movies.length === 0) {
            await dispatch(getMovies())
            dispatch(searchMovies(data))
            dispatch(setMoviesToShow(initialMoviesCount))
        } else {
            dispatch(searchMovies(data))
            dispatch(setMoviesToShow(initialMoviesCount))
        }
    }

    const turnOnFilterHandler = () => {
        dispatch(turnShortMoviesFilterOn())
        dispatch(setMoviesToShow(initialMoviesCount))
    }

    const turnOffFilterHandler = (data: string) => {
        dispatch(turnShortMoviesFilterOff(data))
        dispatch(setMoviesToShow(initialMoviesCount))
    }

    const toggleClickHandler = () => {
        const values = getValues()
        shortMoviesFilterOn ? turnOffFilterHandler(values.movie) : turnOnFilterHandler()
    }

    const {register, handleSubmit, watch, getValues, formState: {errors}} = useForm<Inputs>({
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
                <div onClick={toggleClickHandler}
                     className={shortMoviesFilterOn ? s.searchForm__toggle : s.searchForm__toggleOff}>
                    <div className={shortMoviesFilterOn ? s.searchForm__toggleCircle : s.searchForm__toggleCircleOff}/>
                </div>
                <p className={s.searchForm__toggleText}>Короткометражки</p>
            </div>
            <hr className={s.searchForm__line}/>
        </div>
    );
};

export default SearchForm;