import SideBar from "./SideBar";
import '../styles/home.css';
import { Fragment } from "react";
import Scene from "./Scene.jsx";
import Footer from "./Footer.jsx";

export default function Home(){

    return(
        <Fragment>
            <Scene />
            <Footer />
        </Fragment>
    )
}