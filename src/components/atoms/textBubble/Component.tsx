import { Typography } from "@mui/material"
import styles from './style.module.css'
import clsx from 'clsx';

interface Props{
    children: string
    sender: 'app' | 'user'
}

export const TextBubble = (props: Props):JSX.Element => {
    const style = {
        'fontSize': '16px',
        'padding' : '0',
        'margin' : '0'
    }

    const getBubbleStyle = () => {
        if(props.sender === 'user'){ 
            return styles['bubble-user']
        } else {
            return styles['bubble-app']
        }
    }
    
    return(
        <>
            <div className={clsx(styles['text-bubble'], getBubbleStyle())}>
                <Typography sx={style}>
                    {props.children}
                </Typography>
            </div>
        </>
    )
}
