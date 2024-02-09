export default function Footer( {activation, action} ){

    return(
        <>
            <footer id="footer" className="hidden">
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

/**
 * <div id="click-footer" className="hidden">
                    <div id="flex-click-footer">
                        <div id="click-animation">
                            <div id="parent">
                                <div id="first-child">
                                    <div id="second-child">
                                        <div id="transparent-child"></div>
                                    </div>
                                </div>
                            </div>
                            <img id="click-id" src="../src/assets/img/pointer_hand.png" alt="" />
                        </div>
                        <h4>Click to interact and Scroll</h4>
                    </div>
                </div>
 */