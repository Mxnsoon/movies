import React from 'react';
import s from './AboutProject.module.scss';

const AboutProject = () => {
    return (
        <div className={s.aboutProject}>
            <h2 className={s.aboutProject__title}>О проекте</h2>
            <hr className={s.aboutProject__line} />

        </div>
    );
};

export default AboutProject;