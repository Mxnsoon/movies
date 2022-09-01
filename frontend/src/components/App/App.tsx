import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import s from './App.module.scss'
import Main from "../../layout/Main";
import Movies from "../../layout/Movies";
import SavedMovies from "../../layout/SavedMovies";
import ProfilePage from "../../layout/ProfilePage";
import RegisterPage from "../../layout/RegisterPage";
import LoginPage from "../../layout/LoginPage";
import NotFoundPage from "../../layout/NotFoundPage";
import MobileMenu from "../MobileMenu/MobileMenu";

const App: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    const [isMobilePopupOpened, setIsMobilePopupOpened] = useState<boolean>(false)

    const changeWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    const openMobilePopup = () => {
        setIsMobilePopupOpened(true)
    }

    const closeAllPopups = () => {
        setIsMobilePopupOpened(false)
    }

    useEffect(() => {
        window.addEventListener('resize', changeWindowWidth)
        return () => {
            window.removeEventListener('resize', changeWindowWidth)
        }
    })

    return (
        <div className={s.app}>
            <Routes>
                <Route path="/" element={<Main windowWidth={windowWidth}
                                               openMobilePopup={openMobilePopup}/>}/>
                <Route path="movies" element={<Movies
                    windowWidth={windowWidth}
                    openMobilePopup={openMobilePopup}
                />}/>
                <Route path="saved-movies" element={<SavedMovies windowWidth={windowWidth}
                                                                 openMobilePopup={openMobilePopup}
                />}/>
                <Route path="profile" element={<ProfilePage windowWidth={windowWidth}
                                                            openMobilePopup={openMobilePopup}/>}/>
                <Route path="signup" element={<RegisterPage/>}/>
                <Route path="signin" element={<LoginPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <MobileMenu isOpened={isMobilePopupOpened} closePopup={closeAllPopups}/>
        </div>
    );
}

export default App;
