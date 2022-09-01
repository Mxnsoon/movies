import React from 'react';
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

type TMovies = {
    windowWidth: number
    openMobilePopup: () => void
}

const Movies: React.FC<TMovies> = ({windowWidth, openMobilePopup}) => {
    return (
        <>
            <Header windowWidth={windowWidth} openMobilePopup={openMobilePopup} />
            <SearchForm windowWidth={windowWidth} />
            <MoviesCardList windowWidth={windowWidth} />
            <Footer/>

        </>
    );
};

export default Movies;