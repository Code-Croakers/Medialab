import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Fab from '@mui/material/Fab';


export const SubmitBtn = ():JSX.Element => {
    const style={
        'background': '#F5C326',
        'width': 38,
        'height': 38,
        '&:hover' : {
            'background': '#EBB60C'
        }
    }

    return(
        <>
            <Fab sx={style} color='primary' aria-label='Send message'>
                <SendRoundedIcon />
            </Fab>
        </>
    )
}