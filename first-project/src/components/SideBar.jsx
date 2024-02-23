import { useStateContext } from './Home.jsx'

export default function SideBar(){

    const {contextState, setContextState} = useStateContext();

    return (
        <aside id="aside-container">
            <ul>
                <li><a href="https://github.com/karlosm96" target={"_blank"} rel="noreferrer"><i className="fa fa-github" ></i></a></li>
                <li><a href="https://www.linkedin.com/in/carlos-mu%C3%B1oz-a83b05103/" target={"_blank"} rel="noreferrer"><i className="fa fa-linkedin" ></i></a></li>
                <li><i className="fa fa-envelope" onClick={ (e)=>{ setContextState({
                    activationState: false,
                    showContact: true,
                    showProject: false,
                    projectName: ""
                }) }} ></i></li>
            </ul>
        </aside>
    )
}