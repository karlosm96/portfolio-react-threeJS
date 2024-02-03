import { useEffect } from "react"

export default function Footer( {activation, action} ){

    return(
        <>
            <footer id="footer" className="hidden">
                <div className='icon-scroll' />
                <h4>Scroll to navigate</h4>
            </footer>
        </>
    )
}