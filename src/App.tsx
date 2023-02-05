import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classnames/classNames";


const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={"about"}>About page</Link>
            <Link to={"/"}>Home page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>} />
                    <Route path={"/"} element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
        </div>

    );
};

export default App;