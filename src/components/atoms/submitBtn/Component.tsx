import { ReactComponent as SendIcon } from '../../../images/send_icon.svg';
import Fab from '@mui/material/Fab';
import { useEffect, useState } from 'react';
import { TextBubble } from '../../atoms/textBubble/Component'
import './style.css'

export const SubmitBtn = ():JSX.Element => {
    let inputField: HTMLInputElement | null;
    let chatBox: HTMLElement | null;
    const [inputValue, setInputValue] =  (useState<string>(""));

    useEffect(() => {
        inputField = window.document.querySelector('#inputField');
        chatBox = window.document.querySelector('#chatBox');
    }, []);

    const handleSubmit = () => {
        if (inputField !== null && inputField.value.trim() !== ""){
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
            }
            else if(inputField !== null && inputField?.value.trim() === ""){
                inputField.value = "";
            }
    }

    const style={
        'display': 'flex',
        'flexFlow': 'row nowrap',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': '40px',
        'width': '40px',
        'background': '#F5C326',
        '&:hover' : {
            'background': '#EBB60C'
        }
    }

    return(
        <>
            <Fab onClick={() => handleSubmit()} sx={style} aria-label='Send message'>
                <SendIcon />
            </Fab>
        </>
    )
}