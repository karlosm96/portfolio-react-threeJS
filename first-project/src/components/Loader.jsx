import { Html } from '@react-three/drei';

export default function Loader(props){

    return(
        <Html  
        fullscreen={true}
        style={{background:"linear-gradient(180deg, rgba(48,48,91,0.9220938375350141) 0%, rgba(0,0,0,0.9215335792520133) 100%)", backgoundSize:"cover", display: "flex", justifyContent: "center", alignItems:"center"}}>
            <div id="loader-div">
                <div id="bar-div">
                    <div id="progress" style={{width: `${props.progress}%`}}><p id="progress-p">{props.progress}%</p></div>
                </div>
            </div>
        </Html>
    )
}