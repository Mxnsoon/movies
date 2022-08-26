import React from 'react';
import MainNavigation from "../components/MainNavigation/MainNavigation";
import AboutProject from "../components/AboutProject/AboutProject";
import Techs from "../components/Techs/Techs";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main: React.FC = () => {
    return (
        <>
            <Header/>
            <MainNavigation/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Footer/>
        </>
    );
};

export default Main;