import { useState } from 'react';
import loaderImg from '../assets/img/brain.png';

export default function Loader(props){
    const [ enterRoom, setEnterRoom ] = useState(false);
    const [ click, setClick] = useState(false);

    return(
        <div 
        style={{display:"flex", position: "absolute", width: "100dvw", height: "100dvh", zIndex: 999, 
        background:"linear-gradient(180deg, rgba(48,48,91,0.9220938375350141) 0%, rgba(0,0,0,0.9215335792520133) 100%)",
        backgroundColor:"black", display: "flex", justifyContent: "center", alignItems:"center"}}
        className={ enterRoom ? 'courtainEffect' : '' }>
            <div id="loader-div">
                <div id="progress-div" className={props.progress!= 100 ? '' : 'fadeOut'}> 
                    <img id="loader-img" src={loaderImg} alt="" />
                    <div id="bar-div">
                        <div id="progress" style={{width: `${props.progress}%`}} />
                        <p id="progress-p">{props.progress}%</p>
                    </div>
                </div>
                <button id="button-loader" className={props.progress!= 100 ? "" : "fadeIn" + (click ? "fadeOut" : "")}
                onClick={ (e)=>{ setEnterRoom(!enterRoom); setClick(!click); props.start(true)}}>
                    <h1>Enter</h1>
                </button>
            </div>
        </div>
    )
}