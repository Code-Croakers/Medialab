import { Paper, Typography } from "@mui/material"

interface Props{
    children: string
    sender?: 'app' | 'user'
}

export const TextBubble = (props: Props):JSX.Element => {
    const stylePaper = {
        
        'height': 'fit-content',
        'padding': '24px',
        'width': '50%'
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
