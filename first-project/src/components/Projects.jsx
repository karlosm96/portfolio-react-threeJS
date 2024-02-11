import { useStateContext } from './Home';
import projectsInfo from '../assets/projectData/projects_info.json';
import { useEffect } from 'react';

export default function Projects(props){

    const {contextState, setContextState} = useStateContext();
    const activactionState = contextState['activationState'];
    const projectInfo = activactionState ? projectsInfo[contextState['projectName']] : null;

    function displayProject(){
        return(
            <section id="section-projects" className="">
                <video id="project-video"></video>
                <div id="description-container">
                    <h1 id="project-name">{projectInfo['name']}</h1>
                    <p id="project-description">{projectInfo['about']}</p>
                </div>
                <div id="project-technologies">
                    {projectInfo['skills'].map((element, index) => {
                    return(
                        <img key={index} className="skill-tech" src={element} alt="" /> 
                      )
                    })}
                </div>
            </section>
        )
        
    }

    // change the return
    return(
        <>
            {activactionState ? displayProject() : null} 
        </>
    )
}