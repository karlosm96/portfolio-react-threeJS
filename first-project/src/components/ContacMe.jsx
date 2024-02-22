import { useState } from "react";
import { useStateContext } from "./Home";

export default function ContactMe(){
    const {contextState, setContextState} = useStateContext();
    const activationState = contextState['showContact']

    const [nameLenght, setNameLenght] = useState('');
    const [emailLenght, setEmailLenght] = useState('');  
    const [subjectLenght, setSubjectLenght] = useState('');
    const [messageLenght, setMessageLenght] = useState('');
    const maxLenght = 250;

    const charactersCount = (e, setFunction) =>{
        setFunction(e.target.value);
    }

    function closeProject(){
        setContextState({
            activationState: false,
            showContact: false,
            showProject: false,
            projectName: ''
        })
    }

    const isLenghtValid = (str) =>{
        return str.length > 0;
    }

    const isEmailValid = (str) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(str) && isLenghtValid(str)
    }

    function buttonValidation(e){
        const button = document.getElementById('button-email');
        if(isLenghtValid(nameLenght) && isEmailValid(emailLenght) && isLenghtValid(subjectLenght) && isLenghtValid(messageLenght)){
            button.classList.remove('desactivate');
            button.classList.add('activate'); 
            return true;
        } else{
            button.classList.remove('activate');
            button.classList.add('desactivate');
            return false;
        }
    }

    function sendMessage(e){
        e.preventDefault();
        if(buttonValidation()){
            console.log("right");
        } else{
            console.log("wrong");
        }
    }

    function displayContact(){

        return(
            <section id="section-contact">
                <div id="button-container-contact">
                    <button id="button-close-contact" onClick={ (e) =>{ closeProject(); } }><p id='button-p'></p></button>
                </div>
                <div id="contact-data-container">
                    <form>
                        <h1>Contact Me</h1>
                        <hr />
                        <div className="group-name-email" id="name-container">
                            <input id="user-name" type="text" placeholder="Name" maxLength={50} onChange={(e) =>{ charactersCount(e, setNameLenght) }}/>
                        </div>
                        <div className="group-name-email" id="email-container">
                            <input id="user-email" type="email" placeholder="Email" maxLength={50} onChange={(e) =>{ charactersCount(e, setEmailLenght) }}/>
                        </div>
                        <div id="subject-container">
                            <input id="user-subject" type="text" placeholder="Subject" maxLength={50} onChange={(e) =>{ charactersCount(e, setSubjectLenght) }}/>
                        </div>
                        <div id="message-container">
                            <textarea id="user-message" minLength="1" maxLength={maxLenght} placeholder="Message..." onChange={(e) =>{ charactersCount(e, setMessageLenght) }}/>
                            <label htmlFor="">{messageLenght.length}/{maxLenght}</label>
                        </div>

                        <button className="activate" id="button-email" 
                                onClick={ (e)=>{ sendMessage(e) }}
                                onPointerEnter={ (e)=>{ buttonValidation(e) }}
                                onPointerLeave={ (e)=>{ buttonValidation(e) }}>
                                    Send
                        </button>
                    </form>
                </div>
                <div id="contact-image-container">
                    <img id="img-contact" src="src/assets/img/contactMe.png" alt="" />
                </div>
            </section>
        )
    }

    return activationState ? displayContact() : null;
}