import { useState } from "react";
import { useStateContext } from "./Home";
import axios from "axios";

export default function ContactMe(){
    const {contextState, setContextState} = useStateContext();
    const activationState = contextState['showContact']
    const [loadingScreen, setLoadingScreen] = useState(false);
    const [responseEmail, setResponseEmail] = useState(false); // handles response status display
    const [responseStatus, setResponseStatus] = useState(false); // handles response status image

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');  
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const maxLenght = 250;

    const charactersCount = (e, setFunction) =>{
        setFunction(e.target.value);
    }

    // Restart comtext values
    function closeContactMe(){
        setContextState({
            activationState: false,
            showContact: false, //Close contactMe
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

    const clearInputValues = (arrTagsId) =>{
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        arrTagsId.forEach(element => {
            document.getElementById(element).value = "";
        });
    }

    function buttonValidation(e){
        const button = document.getElementById('button-email');
        if(isLenghtValid(name) && isEmailValid(email) && isLenghtValid(subject) && isLenghtValid(message)){
            button.classList.remove('desactivate');
            button.classList.add('activate'); 
            return true;
        } else{
            button.classList.remove('activate');
            button.classList.add('desactivate');
            return false;
        }
    }

    const sendMessage = (e) =>{
        e.preventDefault();
        if(buttonValidation()){
            setLoadingScreen(true);
            const { data } = axios.post(`https://midulceonline-backend-service.onrender.com/api/v1/contactUs/send`, {
                name,
                email,
                subject,
                message
            }).then((res) => {
                if (res.status === 200){
                    setTimeout(() =>{
                        setResponseEmail(false);
                        clearInputValues(['user-name', 'user-email', 'user-subject', 'user-message']);
                    },2000);

                    // display checkmark --> status 200
                    setLoadingScreen(false);
                    setResponseStatus(!responseStatus);
                    setResponseEmail(!responseEmail);
                } 
            }).catch( (err) =>{
                setTimeout(() =>{
                    setResponseEmail(false);
                    clearInputValues(['user-name', 'user-email', 'user-subject', 'user-message']);
                },4000);
                
                // display 'X' mark --> states other than 200
                setLoadingScreen(false);
                setResponseStatus(false);
                setResponseEmail(!responseEmail);
                console.log(err)
            })
        }
    }

    function displayContact(){

        return(
            <section id="section-contact">
                <div id="button-container-contact">
                    <button id="button-close-contact" onClick={ (e) =>{ closeContactMe(); } }><p id='button-p'></p></button>
                </div>
                <div id="contact-data-container">
                    <form>
                        <h1>Contact Me</h1>
                        <hr />
                        <div className="group-name-email" id="name-container">
                            <input id="user-name" type="text" placeholder="Name" maxLength={50} onChange={(e) =>{ charactersCount(e, setName) }}/>
                        </div>
                        <div className="group-name-email" id="email-container">
                            <input id="user-email" type="email" placeholder="Email" maxLength={50} onChange={(e) =>{ charactersCount(e, setEmail) }}/>
                        </div>
                        <div id="subject-container">
                            <input id="user-subject" type="text" placeholder="Subject" maxLength={50} onChange={(e) =>{ charactersCount(e, setSubject) }}/>
                        </div>
                        <div id="message-container">
                            <textarea id="user-message" minLength="1" maxLength={maxLenght} placeholder="Message..." onChange={(e) =>{ charactersCount(e, setMessage) }}/>
                            <label htmlFor="">{message.length}/{maxLenght}</label>
                        </div>

                        {loadingScreen ? <Spinner /> 
                        : responseEmail ? <></> : <button className="activate" id="button-email" 
                            onClick={ (e)=>{ sendMessage(e) }}
                            onPointerEnter={ (e)=>{ buttonValidation(e) }}
                            onPointerLeave={ (e)=>{ buttonValidation(e) }}>
                                Send
                          </button>
                        }
                        {responseEmail ? <ResultImage response={responseStatus} /> :null}  
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

function ResultImage({response}){
    console.log(response);
    return(
        <div id="response-image-container" style={{backgroundColor: response ? 'rgba(12, 255, 251, 0.8)' : 'rgb(247, 99, 99)'}}>
            {response ? <span className="response-image">&#10003;</span> : <span className="response-image">&#10005;</span>}
        </div>
    )
 
}

function Spinner(){
    return (
        <div className="sending-container">
            <div className="sending-animation">
                <div className="balls"></div>
                <div className="balls"></div>
                <div className="balls"></div>
                <div className="balls"></div>
                <div className="balls"></div>
                <span className="sending-text">Sending...</span>
            </div>
        </div>
    )
}