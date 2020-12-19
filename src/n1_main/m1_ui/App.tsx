import React from 'react';
import styles from './App.module.scss';
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";

export const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Main/>
        </div>
    );
}

