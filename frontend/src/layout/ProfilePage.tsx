import React from 'react';
import Profile from "../components/Profile/Profile";
import Header from "../components/Header/Header";

const ProfilePage: React.FC = () => {
    return (
        <>
            <Header/>
            <Profile />
        </>
    );
};

export default ProfilePage;