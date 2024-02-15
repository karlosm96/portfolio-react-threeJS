import React, { createContext, useState, useContext, useEffect} from 'react';

import '../styles/home.css';

import SideBar from "./SideBar";
import { Fragment } from "react";
import Scene from "./Scene.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";

const StateContext = createContext();

const StateProvider = ({ children })=> {
    const [contextState, setContextState] = useState({
        activationState: false, //change in the end to false
        projectName: '' // empty
    });

    return(
        <StateContext.Provider value={ {contextState, setContextState} }>
            {children}
        </StateContext.Provider>
    )
}   

export const useStateContext = () => useContext(StateContext);

export default function Home(){

    const [progress, setProgress] = useState(0);

    console.log(progress);
    // Simula la carga de recursos (puedes adaptarlo a tu lógica real)
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress < 100) {
                    return prevProgress + 10;
                }
                clearInterval(timer);
                return 100;
            });
        }, 400);
    }, []);

    return(
        <Fragment>
            <StateProvider>
                <Scene progress={progress} />
                <Projects />
                <Footer />
            </StateProvider>
        </Fragment>
    )
}