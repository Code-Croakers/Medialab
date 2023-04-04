import { ReactComponent as SendIcon } from '../../../images/send_icon.svg';
import Fab from '@mui/material/Fab';
import { useEffect } from 'react';
import './style.css'

export const SubmitBtn = (): JSX.Element => {
    let inputField: HTMLInputElement | null;
    let chatBox: HTMLElement | null;

    useEffect(() => {
        inputField = window.document.querySelector('#inputField');
        chatBox = window.document.querySelector('#chatBox');
    }, []);

    const getResponseBubble = ():void => {
        let responseBubble = document.createElement("div");
        responseBubble.classList.add('text-bubble');
        responseBubble.classList.add('bubble-app');
        
        responseBubble.innerHTML = `
            <p>Aan de hand van je huidige activiteiten heb ik de 
            volgende thema's bedacht waar je over kan schrijven!</p>
            <ol>
                <li>Hoe was jou vakantie ervaring en waar moeten anderen rekening mee houden wanneer zij ook op wintersport willen?</li>
                <li>Dingen die je hebt geleerd van connecties die je hebt gemaakt tijdens je vakantie</li>
                <li>Inspireer anderen om nieuwe dingen op te pakken, want jij hebt ook leren snowboarden door vallen en opstaan</li>
            </ol>
            `
        chatBox?.appendChild(responseBubble);
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }

    const handleSubmit = () => {
        if (inputField !== null && inputField.value.trim() !== "") {
            console.log(chatBox);
            let chatBubble = document.createElement("div");
            chatBubble.classList.add('text-bubble');
            chatBubble.classList.add('bubble-user');

            let bubbleContent = document.createElement("p");
            bubbleContent.textContent = inputField.value;
            inputField.value = "";
            chatBubble.appendChild(bubbleContent);
            chatBox?.appendChild(chatBubble);
            window.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: "smooth",
            });
            setTimeout( () => {
                getResponseBubble();
            }, 2000)
        }
        else if (inputField !== null && inputField?.value.trim() === "") {
            inputField.value = "";
        }

    }

    const style = {
        'display': 'flex',
        'flexFlow': 'row nowrap',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': '40px',
        'width': '40px',
        'minWidth': '40px',
        'background': '#F5C326',
        '&:hover': {
            'background': '#EBB60C'
        }
    }

    return (
        <>
            <Fab onClick={() => handleSubmit()} sx={style} aria-label='Send message'>
                <SendIcon />
            </Fab>
        </>
    )
}