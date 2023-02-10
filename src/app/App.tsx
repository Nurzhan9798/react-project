import React from 'react';
import './styles/index.scss'
import {useTheme} from "app/provider/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classnames/classNames";
import {AppRoute} from "app/router";
import {Navbar} from "widgets/Navbar";
import {Button} from "shared/ui/Button/Button";


const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />

            <AppRoute />
        </div>

    );
};

export default App;