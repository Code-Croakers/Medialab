import { Button, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

interface Props{
    id?: string,
    children?: string
}

export const ModalBtn = (props: Props):JSX.Element => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    let target: HTMLElement | null

    useEffect(() => {
        target = window.document.querySelector('#newSessionModal')
    }, []);

    const style={
        'background': '#F5C326',
        'color' : '#FFFFFF',
        '&:hover' : {
            'background': '#EBB60C'
        }
    }

    const openModal = (): void => {
        if(target !== null && target !== undefined){
            target.classList.remove('displayNone')
            target.classList.add('displayBlock')
        }    
    }

    const windowResizeHandler = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
      window.addEventListener("resize", windowResizeHandler, false);
    }, []);

    if(windowWidth <= 976){
        return (
            <Fab 
                sx={style} 
                aria-label='add' 
                size='small'
                onClick={() => openModal()}
            >
                <AddIcon />
            </Fab>
        )
    } else {
        return(
            <>
                <Button 
                sx={style} 
                variant='contained' 
                onClick={() => openModal()}
                >
                    {props.children}
                </Button>
            </>
        )
    }
}