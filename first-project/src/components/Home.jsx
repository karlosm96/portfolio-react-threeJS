import SideBar from "./SideBar";
import '../styles/home.css';
import { Fragment } from "react";
import Scene from "./Scene";
import Footer from "./Footer";

export default function Home(){

    
    
    return(
        <Fragment>
            <Scene />
            <Footer />
        </Fragment>
    )
}

/**
 * gsap.to(document.getElementById("root"),{
        onClick: () =>{
          console.log("buen dia");
        }
      },
      5.5
    )
 */