import React, { createContext, useState, useContext } from 'react';

import '../styles/home.css';

import SideBar from "./SideBar";
import { Fragment } from "react";
import Scene from "./Scene.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";

const StateContext = createContext();

const StateProvider = ({ children })=> {
    const [state, setState] = useState({
        activateState: false,
        projectName: ''
    });

    console.log(state);

    return(
        <StateContext.Provider value={ {state, setState} }>
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