import { useEffect } from "react";
import SideBar from "./SideBar";
import '../styles/home.css';
import { Fragment } from "react";
import Scene from "./Scene";

export default function Home(){

    return(
        <Fragment>
            <Scene />
            <About />
        </Fragment>
    )
}

function About(){
    return(
        <div className="about-container">
            <div className="section-title">
                <h2>Resumen</h2>
            </div>

            <div className="row justify-content-center resume-data-container">
                <div className="col-lg-7">
                    <h3 className="resume-title">Datos de Contacto</h3>
                    <div className="resume-item-contact">
                        <ul>
                            <li className="no-style contact-li"><i className="fa-solid fa-person"></i><h4 className="contact-name">Carlos Luddwing Muñoz V.</h4></li>
                            <li className="no-style contact-li"><i className="fa-solid fa-location-dot"></i>Argentina, Ciudad Autonoma de Buenos Aires</li>
                            <li className="no-style contact-li"><i className="fa-regular fa-envelope"></i>Email: karlos_m96@hotmail.com</li>
                        </ul>
                    </div>

                    <h3 className="resume-title">Educacion</h3>
                    <div className="resume-item">
                        <img src="../src/assets/img/UBA.jpg" className="uni-img" />
                        <ul>
                            <li className="no-style">
                                <h4>UTN - Instituto Nacional Superior del Profesorado Técnico, AR</h4>
                                <h5>2022-Actual</h5>
                            </li>
                            <li className="no-style">
                                <p className="resume-p"><em>Programación, Técnico en informática aplicada</em></p>  
                            </li>
                            <li className="no-style"><p>Ciudad Autónoma de Buenos Aires</p></li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <img src="../src/assets/img/UTN.jpg" className="uni-img" />
                        <ul>
                            <li className="no-style">
                                <h4>Universidad de Buenos Aires, AR</h4>
                                <h5>2019-Graduado</h5>
                            </li>
                            <li className="no-style">
                                <p className="resume-p"><em>Psicologia, Licenciatura en Psicologia</em></p>
                            </li>
                            <li className="no-style"><p>Ciudad Autónoma de Buenos Aires</p></li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <img src="../src/assets/img/Oracle.png" className="uni-img" />
                        <ul>
                            <li className="no-style">
                                <h4>Oracle One Alura</h4>
                                <h5>01/2024-Actual</h5>
                            </li>
                            <li className="no-style"><p className="resume-p title"><em>Programacion, Desarrollador Web</em></p></li>
                            <li className="no-style"><p>Tecnologias: Java-Spring-Boot</p></li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <img src="../src/assets/img/UIS.png" className="uni-img" />
                        <ul>
                            <li className="no-style">
                                <img src="" alt="" />
                                <h4>Ministerio de Tecnologías de la información y Comunicaciones, COL</h4>
                                <h5>04/22-11/22</h5>
                            </li>
                            <li className="no-style"><p><em>Programación, Desarrollo de aplicación WEB</em></p></li>
                            <li className="no-style"><p className="resume-p">Tecnologias: Stack MERN, Java-SpringBoot</p></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5">
                    <h3 className="resume-title">Experiencia laboral</h3>
                    <div className="resume-item">
                        <ul>
                            <li className="no-style">
                                <h4>Programador</h4>
                                <h5>2023/03 - Actual</h5></li>
                            <li className="no-style"><p><em>Laboratorio de la Conciencia, ARG</em></p></li>
                            <li className="no-style">
                                <ul>
                                    <li>Programacion de experimentos</li>
                                    <li>Correccion de seccion metodologica</li>
                                </ul>
                            </li>
                        </ul> 
                    </div>

                    <h3 className="resume-title">Idiomas</h3>
                    <div className="resume-item">
                        <ul>
                            <li>Ingles Avanzado</li>
                            <li>Español Nativo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}