import React from 'react';
import Profile from "../components/Profile/Profile";
import Header from "../components/Header/Header";

type TProfilePage = {
    windowWidth: number
    openMobilePopup: () => void
}

const ProfilePage: React.FC<TProfilePage> = ({windowWidth, openMobilePopup}) => {
    return (
        <>
            <Header openMobilePopup={openMobilePopup} windowWidth={windowWidth}/>
            <Profile />
        </>
    );
};

export default ProfilePage;