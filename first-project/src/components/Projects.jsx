import { useStateContext } from './Home';
import projectsInfo from '../assets/projectData/projects_info.json';

export default function Projects(props){

    const {contextState, setContextState} = useStateContext();
    const activactionState = contextState['showProject'];
    const projectInfo = activactionState ? projectsInfo[contextState['projectName']] : null;

    function closeProject(){
        // Restart context variables
        setContextState({
            activationState: false,
            showContact: false,
            showProject: false,
            projectName: ""
          })
    }

    function displayProject(){
        return(
            <section id="section-projects">
                <div id="button-container-projects">
                    <button id="button-close-projects" onClick={ (e) =>{ closeProject(); } }><p id='button-p'></p></button>
                </div>
                {projectInfo['video'] != null 
                    ? <video id="project-video" src={`src/assets/videos/${projectInfo['video']}`} controls></video>
                    : <img id="project-img" src={`src/assets/img/${projectInfo['img']}`}></img> 
                }
                <div id="description-container">
                    <h1 id="project-name">{projectInfo['name']}</h1>
                    <h4 id="project-url"><a id="link-project" href={projectInfo['url']} target={"_blank"} rel="noreferrer"><i className="fa-solid fa-link" style={{color: "#ffffff"}}></i></a></h4>
                    <p id="project-description">{projectInfo['about']}</p>
                </div>
                <div id="project-technologies">
                    {projectInfo['skills'].map((element, index) => {
                    return(
                        <img key={index} className="skill-tech" src={`src/assets/img/${element}`} alt="" /> 
                      )
                    })}
                </div>
            </section>
        )
    }

    return activactionState ? displayProject() : null;
}