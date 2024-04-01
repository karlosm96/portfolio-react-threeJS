import React, { useState, useEffect } from 'react';
import { useStateContext } from './Home';
import projectsInfo from '../assets/projectData/projects_info.json';

export default function Projects(props) {
    const { contextState, setContextState } = useStateContext();
    const activationState = contextState['showProject'];
    const projectInfo = activationState ? projectsInfo[contextState['projectName']] : null;
    const [projectVideo, setProjectVideo] = useState(null);
    const [projectImg, setProjectImg] = useState(null);

    useEffect(() => {
        if (projectInfo) {
            import(`./assets/videos/${projectInfo['video']}`)
                .then(module => setProjectVideo(module.default))
                .catch(error => console.error('Error loading video:', error));
            import(`./assets/img/${projectInfo['img']}`)
                .then(module => setProjectImg(module.default))
                .catch(error => console.error('Error loading image:', error));
        }
    }, [projectInfo]);

    function closeProject() {
        // Reiniciar variables de contexto
        setContextState({
            ...contextState,
            showProject: false,
            projectName: ""
        });
    }

    function displayProject() {
        return (
            <section id="section-projects">
                <div id="button-container-projects">
                    <button id="button-close-projects" onClick={(e) => closeProject()}>
                        <p id='button-p'></p>
                    </button>
                </div>
                {projectInfo && projectInfo['video'] !== null ?
                    <video id="project-video" src={projectVideo} controls></video> :
                    <img id="project-img" src={projectImg} alt={projectInfo['name']}></img>
                }
                <div id="description-container">
                    <h1 id="project-name">{projectInfo && projectInfo['name']}</h1>
                    <h4 id="project-url"><a id="link-project" href={projectInfo && projectInfo['url']} target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-link" style={{ color: "#ffffff" }}></i>
                    </a></h4>
                    <p id="project-description">{projectInfo && projectInfo['about']}</p>
                </div>
                <div id="project-technologies">
                    {projectInfo && projectInfo['skills'].map((element, index) => {
                        const skillImg = `../assets/img/${element}`;
                        return (
                            <img key={index} className="skill-tech" src={skillImg} alt={element} />
                        );
                    })}
                </div>
            </section>
        );
    }

    return activationState ? displayProject() : null;
}