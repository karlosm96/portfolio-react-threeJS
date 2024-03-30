import React, { createContext, useState, useContext, useEffect} from 'react';

import { Fragment } from "react";
import Scene from "./Scene.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
import ContactMe from './ContacMe.jsx';
import SideBar from './SideBar.jsx';

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
    const [firstVisit, setFirstVisit] = useState(false);
    
    // Simulates data loading
    useEffect(() => {
        const visitedBefore = localStorage.getItem('visitedBefore');

        const time = visitedBefore ? 800 : 2000;

        const timer = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress < 100) {
                    return prevProgress + 10;
                }
                clearInterval(timer);
                return 100;
            });
        }, time);

        if(!visitedBefore){
            localStorage.setItem('visitedBefore', true);
            setFirstVisit(true);
        }

        return () => clearInterval(timer);
    }, []);

    return(
        <Fragment>
            <StateProvider>
                <SideBar />
                <Scene progress={progress} />
                <Projects />
                <ContactMe />
                <Footer />
            </StateProvider>
        </Fragment>
    )
}