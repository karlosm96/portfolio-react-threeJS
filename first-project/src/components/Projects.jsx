import { useStateContext } from './Home';
import projectsInfo from '../assets/projectData/projects_info.json';

export default function Projects(props){

    const {contextState, setContextState} = useStateContext();
    const activactionState = contextState['showProject'];
    const projectInfo = activactionState ? projectsInfo[contextState['projectName']] : null;
    const projectVideo = import(`./assets/videos/${projectInfo['video']}`);
    const projectImg = import(`./assets/img/${projectInfo['img']}`);

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
                    ? <video id="project-video" src={projectVideo} controls></video>
                    : <img id="project-img" src={projectImg}></img> 
                }
                <div id="description-container">
                    <h1 id="project-name">{projectInfo['name']}</h1>
                    <h4 id="project-url"><a id="link-project" href={projectInfo['url']} target={"_blank"} rel="noreferrer"><i className="fa-solid fa-link" style={{color: "#ffffff"}}></i></a></h4>
                    <p id="project-description">{projectInfo['about']}</p>
                </div>
                <div id="project-technologies">
                    {projectInfo['skills'].map((element, index) => {
                    const skillImg = import(`../assets/img/${element}`);
                    return(
                        <img key={index} className="skill-tech" src={skillImg} alt="" /> 
                      )
                    })}
                </div>
            </section>
        )
    }

    return activactionState ? displayProject() : null;
}