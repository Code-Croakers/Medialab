import { ReactComponent as SendIcon } from '../../../images/send_icon.svg';
import Fab from '@mui/material/Fab';
import { useEffect, useState } from 'react';

export const SubmitBtn = ():JSX.Element => {
    let inputField: HTMLInputElement | null;
    const [inputValue, setInputValue] =  (useState<string>(""));

    useEffect(() => {
        inputField = window.document.querySelector('#inputField');
    }, []);

    const handleSubmit = () => {
        if (inputField !== null) {
            console.log(inputField.value);
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