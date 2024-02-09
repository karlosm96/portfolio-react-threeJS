import { useStateContext } from './Home';
import projectsInfo from '../assets/projectData/projects_info.json';
import { useEffect } from 'react';

export default function Projects(props){

    const {contextState, setContextState} = useStateContext();
    const activactionState = contextState['activationState'];
    const projectInfo = activactionState ? projectsInfo[contextState['projectName']] : null;

    function displayProject(){
        //const sceneComponent = document.getElementById('section-canvas').style.opacity = 0.5;

        return(
            <section id="section-projects" className="">
                <video id="project-video"></video>
                <div id="description-container">
                    <h1 id="project-name">{projectInfo['name']}</h1>
                    <h5 id="project-url">{projectInfo['url']}</h5>
                    <p id="project-description">{projectInfo['about']}</p>
                </div>
                <div id="project-technologies"></div>
            </section>
        )
        
    }

    // change the return
    return(
        <>
            {activactionState ? displayProject() : displayProject()} 
        </>
    )
}