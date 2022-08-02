import React from 'react';
import s from './App.module.scss'
import Header from "../Header/Header";
import MainNavigation from "../MainNavigation/MainNavigation";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <MainNavigation/>
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </div>
    );
}

export default App;
