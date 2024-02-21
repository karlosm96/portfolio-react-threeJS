import React, { createContext, useState, useContext, useEffect} from 'react';

import { Fragment } from "react";
import Scene from "./Scene.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
import ContactMe from './ContacMe.jsx';

const StateContext = createContext();

const StateProvider = ({ children })=> {
    const [contextState, setContextState] = useState({
        activationState: false,
        showContact: false,
        showProject: false,
        projectName: ''
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
    
    // Simulates data loading
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress < 100) {
                    return prevProgress + 10;
                }
                clearInterval(timer);
                return 100;
            });
        }, 800);
    }, []);

    return(
        <Fragment>
            <StateProvider>
                <Scene progress={progress} />
                <Projects />
                <Footer />
                <ContactMe />
            </StateProvider>
        </Fragment>
    )
}