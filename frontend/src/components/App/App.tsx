import React from 'react';
import {Route, Routes} from 'react-router-dom';
import s from './App.module.scss'
import Main from "../../layout/Main";
import Movies from "../../layout/Movies";
import SavedMovies from "../../layout/SavedMovies";
import ProfilePage from "../../layout/ProfilePage";
import RegisterPage from "../../layout/RegisterPage";

const App: React.FC = () => {
    return (
        <div className={s.app}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="movies" element={<Movies/>}/>
                <Route path="saved-movies" element={<SavedMovies />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="signup" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

export default App;
