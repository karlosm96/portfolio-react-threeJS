import React, { createContext, useState, useContext } from 'react';

import '../styles/home.css';

import SideBar from "./SideBar";
import { Fragment } from "react";
import Scene from "./Scene.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";

const StateContext = createContext();

const StateProvider = ({ children })=> {
    const [contextState, setContextState] = useState({
        activationState: true, //change in the end to false
        projectName: 'gameOfLife' // empty
    });

    return(
        <StateContext.Provider value={ {contextState, setContextState} }>
            {children}
        </StateContext.Provider>
    )
}   

export const useStateContext = () => useContext(StateContext);

export default function Home(){

    return(
        <Fragment>
            <StateProvider>
                <Scene />
                <Projects />
                <Footer />
            </StateProvider>
        </Fragment>
    )
}