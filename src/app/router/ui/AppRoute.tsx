import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig";

export const AppRoute = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => {
                    console.log(element, path);
                    return <Route
                        key={path}
                        path={path}
                        element={element}/>
                })}
            </Routes>
        </Suspense>
    );
};
