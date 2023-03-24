import { Button, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

interface Props{
    children?: string
}

export const PrimaryBtn = (props: Props):JSX.Element => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    
    const style={
        'background': '#F5C326',
        'color' : '#FFFFFF',
        '&:hover' : {
            'background': '#EBB60C'
        }
    }

    const startNewSession = (): void => {
        window.location.reload()
    }

    const windowResizeHandler = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
      window.addEventListener("resize", windowResizeHandler, false);
    }, []);

    if(windowWidth <= 976){
        return (
            <Fab sx={style} aria-label='add' size='small'>
                <AddIcon />
            </Fab>
        )
    } else {
        return(
            <>
                <Button 
                sx={style} 
                variant='contained' 
                onClick={() => startNewSession()}
                >
                    {props.children}
                </Button>
            </>
        )
    }
}