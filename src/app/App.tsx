import React from 'react';
import './styles/index.scss'
import {useTheme} from "app/provider/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classnames/classNames";
import {AppRoute} from "app/router";
import {Navbar} from "widgets/Navbar";


const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Toggle theme</button>

            <AppRoute />
        </div>

    );
};

export default App;