import { ReactComponent as SendIcon } from '../../../images/send_icon.svg';
import Fab from '@mui/material/Fab';

export const SubmitBtn = ():JSX.Element => {
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
            <Fab sx={style} aria-label='Send message'>
                <SendIcon />
            </Fab>
        </>
    )
}