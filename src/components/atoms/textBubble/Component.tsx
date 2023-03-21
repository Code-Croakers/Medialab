import { Paper, Typography, TextField } from "@mui/material"

interface Props{
    children: string
    sender: 'app' | 'user'
}

export const TextBubble = (props: Props):JSX.Element => {
    const stylePaper = {
        'display': 'flex',
        'justify-content': props.sender === 'app' ? 'flex-start' : 'flex-end',
        'textAlign': 'left',
        'height': 'fit-content',
        'width': 'fit-content',
        'maxWidth': '50%',
        'padding': '16px',
        'margin': '0',
        'background': props.sender === 'app' ? '#F3F1F1' : '#D2EAFD',
        'borderRadius' : props.sender === 'app' ? '24px 24px 24px 0' : '24px 24px 0 24px'
    }

    const styleP = {
        'fontSize': '16px',
        'padding' : '0',
        'margin' : '0'
    }
    return(
        <>
            <Paper sx={stylePaper}>
                <Typography sx={styleP}>
                    {props.children}
                </Typography>
            </Paper>
        </>
    )
}
