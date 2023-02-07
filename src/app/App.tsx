import React, {Suspense} from 'react';
import '../styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, MainPage} from "pages";
import {useTheme} from "app/provider/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classnames/classNames";


const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={"about"}>About page</Link>
            <Link to={"/"}>Home page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage/>} />
                    <Route path={"/"} element={<MainPage/>} />
                </Routes>
            </Suspense>
        </div>

    );
};

export default App;