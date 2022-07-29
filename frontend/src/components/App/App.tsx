import React from 'react';
import s from './App.module.scss'
import Header from "../Header/Header";
import MainNavigation from "../MainNavigation/MainNavigation";
import AboutProject from "../AboutProject/AboutProject";

const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <MainNavigation/>
            <AboutProject />
        </div>
    );
}

export default App;
