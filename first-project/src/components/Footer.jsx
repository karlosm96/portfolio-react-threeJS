import { useStateContext } from "./Home";

export default function Footer( {activation, action} ){
    const {contextState, setContextState} = useStateContext();

    return(
        <>
            <footer id="footer" className="hidden" style={{opacity: contextState['activationState'] ? 0 : 1}}>
                <div id="scroll-footer">
                    <div id="flex-scroll-footer">
                        <div className='icon-scroll' />
                        <h4>Scroll to navigate</h4>
                    </div>
                </div>
            </footer>
        </>
    )
}