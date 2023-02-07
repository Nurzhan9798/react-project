import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "app/provider/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classnames/classNames";
import {AppRoute} from "app/router";


const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={"about"}>About page</Link>
            <Link to={"/"}>Home page</Link>
            <AppRoute />
        </div>

    );
};

export default App;